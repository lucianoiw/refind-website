"use client";

import React, { memo, useCallback, useMemo, useRef } from "react";

import { ArrowUpIcon, GlobeIcon } from "lucide-react";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { IModelProps, models } from "@/features/chats";
import { useFormWithZod } from "@/lib/hooks/use-form-with-zod";
import { cn } from "@/utils";
import { z } from "zod";

const chatSchema = z.object({
  text: z.string().nonempty("O texto é obrigatório"),
  model: z.string().min(1, "O modelo é obrigatório"),
  webSearch: z.boolean().optional(),
});

export const ChatForm = memo(() => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const form = useFormWithZod({
    schema: chatSchema,
    mode: "onSubmit",
    defaultValues: {
      text: "",
      model: "openai/gpt-5.1",
      webSearch: false,
    },
    onSubmit: async () => {
      // Form submission logic would go here
    },
  });

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        form.onSubmit();
      }
    },
    [form]
  );

  const selectedModel = useMemo(
    () => models.find((m) => m.id === form.watch("model")),
    [form]
  );

  return (
    <Form {...form}>
      <form onSubmit={form.onSubmit} className="space-y-4 p-2">
        <div
          className={cn(
            "flex nodrag nowheel select-text cursor-text flex-col space-y-3 w-full rounded transition duration-300"
          )}
        >
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Pergunte alguma coisa..."
                    {...field}
                    ref={(e) => {
                      field.ref(e);
                      textareaRef.current = e;
                    }}
                    onKeyDown={handleKeyDown}
                    className="placeholder:text-gray-400 text-sm bg-transparent outline-none resize-none ring-0! min-h-5 max-h-24"
                    onMouseDown={(e) => e.stopPropagation()}
                    onClick={(e) => e.stopPropagation()}
                    onDoubleClick={(e) => e.stopPropagation()}
                    readOnly
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <Select
                value={selectedModel?.id}
                onValueChange={(model) => form.setValue("model", model)}
              >
                <SelectTrigger className="w-min max-w-[145] h-8!">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Mais inteligentes</SelectLabel>
                    {models
                      .filter((m) => m.group === "smart")
                      .map((model) => (
                        <SelectItem key={model.id} value={model.id}>
                          <ModelItem {...model} />
                        </SelectItem>
                      ))}
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Mais econômicos</SelectLabel>
                    {models
                      .filter((m) => m.group === "cheap")
                      .map((model) => (
                        <SelectItem key={model.id} value={model.id}>
                          <ModelItem {...model} />
                        </SelectItem>
                      ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Toggle
                onClick={() =>
                  form.setValue("webSearch", !form.watch("webSearch"))
                }
                aria-label="Buscar na Internet"
                size="sm"
                variant="outline"
                pressed={!!form.watch("webSearch")}
                className={cn(
                  "cursor-pointer text-xs text-neutral-500 data-[state=on]:border-indigo-500 dark:data-[state=on]:border-indigo-400 data-[state=on]:text-indigo-500 dark:data-[state=on]:text-indigo-400 data-[state=on]:bg-indigo-50 dark:data-[state=on]:bg-indigo-500/15 transition-all"
                )}
              >
                <GlobeIcon />
                Internet
              </Toggle>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className={cn(
                  "cursor-pointer size-6 flex items-center justify-center rounded-full bg-indigo-500 text-white transition",
                  "disabled:bg-neutral-300 disabled:opacity-50 disabled:cursor-not-allowed"
                )}
                disabled={
                  (form.watch("text")?.length || 0) === 0 ||
                  !form.watch("model")
                }
              >
                <ArrowUpIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
});

ChatForm.displayName = "ChatForm";

const ModelItem = (model: IModelProps) => {
  return (
    <div className="flex items-center gap-1.5 min-w-0">
      <div
        className={cn(
          "flex items-center justify-center rounded-full size-4 shrink-0 [&_svg]:fill-white [&_svg]:size-2.5",
          model.color
        )}
      >
        {model.icon}
      </div>

      <span className="text-xs truncate">{model.name}</span>

      {model.new && (
        <span className="bg-foreground/10 rounded-full px-1.5 flex items-center text-[0.55rem] group-data-[slot=select-trigger]:hidden">
          Novo
        </span>
      )}
    </div>
  );
};
