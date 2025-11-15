import { Footer } from "@/components/footer";
import { NavbarSimple } from "@/components/navbar-simple";
import { Separator } from "@/components/ui/separator";
import { MarkdownText } from "@/components/markdown-text";
import { CookiePreferences } from "@/components/cookie-preferences";
import { readFileSync } from "fs";
import { join } from "path";

const PrivacyPage = () => {
  const markdownContent = readFileSync(
    join(process.cwd(), "src/content/privacy.md"),
    "utf-8"
  );

  return (
    <div className="">
      <div className="flex flex-col">
        <NavbarSimple />

        <div className="grid-wrapper py-10 lg:py-24">
          <div className="grid-span-inner">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8 p-4 border rounded-lg bg-muted/30">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold mb-1">
                      Gerenciar Preferências de Cookies
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Você pode alterar suas preferências de cookies a qualquer
                      momento
                    </p>
                  </div>
                  <CookiePreferences />
                </div>
              </div>

              <div className="prose prose-slate dark:prose-invert prose-headings:font-light prose-h1:text-4xl prose-h1:lg:text-6xl prose-h1:mb-8 prose-h2:text-2xl prose-h2:font-medium prose-h2:mb-4 prose-h2:mt-8 prose-p:text-muted-foreground prose-p:mb-4">
                <MarkdownText content={markdownContent} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-foreground/4" />
      <Footer />
    </div>
  );
};

export default PrivacyPage;
