"use client";

import { CopyButton } from "./CopyButton";

type CodeBlockProps = {
  code: string;
  language?: string;
};

export function CodeBlock({ code, language = "typescript" }: CodeBlockProps) {
  return (
    <div className="group relative">
      <div className="absolute right-3 top-3 z-10">
        <CopyButton text={code} label="Copy code" />
      </div>
      <pre className="overflow-x-auto rounded-2xl bg-[#202124] p-5 pr-28 text-[13px] leading-6 text-[#e8eaed] dark:bg-[#0e0e0e]">
        <code className="font-mono" data-language={language}>
          {code}
        </code>
      </pre>
    </div>
  );
}
