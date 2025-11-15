import { readFileSync } from "fs";
import { join } from "path";

import { Footer } from "@/components/footer";
import { MarkdownText } from "@/components/markdown-text";
import { NavbarSimple } from "@/components/navbar-simple";
import { Separator } from "@/components/ui/separator";
import { FakeDoor } from "@/components/fake-door";
import { Button } from "@/components/ui/button";

const ComparisonPage = () => {
  const markdownContent = readFileSync(
    join(process.cwd(), "src/content/comparison.md"),
    "utf-8"
  );

  return (
    <div className="">
      <div className="flex flex-col">
        <NavbarSimple />

        <div className="grid-wrapper py-10 lg:py-24">
          <div className="grid-span-inner">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-slate dark:prose-invert prose-headings:font-light prose-h1:text-3xl prose-h1:lg:text-5xl prose-h1:mb-8 prose-h2:text-2xl prose-h2:font-medium prose-h2:mb-4 prose-h2:mt-8 prose-p:text-muted-foreground prose-p:mb-4 leading-relaxed">
                <MarkdownText content={markdownContent} />
              </div>

              <FakeDoor source="comparison">
                <Button>Use grátis por 7 dias</Button>
              </FakeDoor>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-foreground/4" />
      <Footer />
    </div>
  );
};

export default ComparisonPage;
