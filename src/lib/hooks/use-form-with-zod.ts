/* eslint-disable @typescript-eslint/no-explicit-any */

import { toNestErrors, validateFieldsNatively } from "@hookform/resolvers";
import { useEffect, useRef } from "react";
import {
  useForm,
  UseFormReturn,
  type FieldValues,
  type UseFormProps,
} from "react-hook-form";
import { z, ZodError } from "zod";

type HookFormParams<TFieldValues extends FieldValues, TContext> = UseFormProps<
  TFieldValues,
  TContext
>;

type UseFormOptions<TSchema extends z.ZodObject<any>> = Omit<
  HookFormParams<z.infer<TSchema>, any>,
  "onSubmit"
> & {
  schema: TSchema;
  defaultValues?: z.infer<TSchema>;
  onSubmit?: (values: z.infer<TSchema>) => void;
};

const parseErrorSchema = (zodError: ZodError<any>) => {
  const errors: Record<string, any> = {};
  for (const error of zodError.issues) {
    const { code, message, path } = error;
    const _path = path.join(".");

    if (!errors[_path]) {
      errors[_path] = { message, type: code };
    }
  }
  return errors;
};

const customZodResolver =
  <TSchema extends z.ZodObject<any>>(schema: TSchema) =>
  async (values: any, _context: any, options: any): Promise<any> => {
    try {
      const data = await schema.parseAsync(values);

      if (options.shouldUseNativeValidation) {
        validateFieldsNatively({}, options);
      }

      return {
        errors: {},
        values: data,
      };
    } catch (error: any) {
      if (error instanceof ZodError) {
        return {
          values: {},
          errors: toNestErrors(parseErrorSchema(error), options),
        };
      }

      throw error;
    }
  };

export type FormWithZodReturn<TSchema extends z.ZodObject<any>> = UseFormReturn<
  z.infer<TSchema>
> & {
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
};

export function useFormWithZod<TSchema extends z.ZodObject<any>>({
  schema,
  defaultValues,
  onSubmit,
  mode,
  ...rest
}: UseFormOptions<TSchema>): FormWithZodReturn<TSchema> {
  const form = useForm<z.infer<TSchema>>({
    resolver: customZodResolver(schema),
    defaultValues,
    mode,
    ...rest,
  });

  const prevDefaultValuesRef = useRef(defaultValues);

  useEffect(() => {
    if (mode === "onChange") {
      let timeoutId: NodeJS.Timeout;

      // eslint-disable-next-line react-hooks/incompatible-library
      const subscription = form.watch(() => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          form.handleSubmit(onSubmit || (() => {}))();
        }, 2000);
      });

      return () => {
        subscription.unsubscribe();
        clearTimeout(timeoutId);
      };
    }
  }, [mode, form, onSubmit]);

  useEffect(() => {
    const isDefaultValuesDifferent =
      JSON.stringify(prevDefaultValuesRef.current) !==
      JSON.stringify(defaultValues);

    if (defaultValues && isDefaultValuesDifferent) {
      prevDefaultValuesRef.current = defaultValues;
      form.reset(defaultValues);
    }
  }, [defaultValues, form]);

  return {
    ...form,
    onSubmit: async (e?: React.BaseSyntheticEvent) => {
      try {
        await form.handleSubmit(onSubmit || (() => {}), () => {
          // Validation errors are handled by form state
        })(e);
      } catch (error) {
        console.error("Form submission error:", error);
      }
    },
  };
}
