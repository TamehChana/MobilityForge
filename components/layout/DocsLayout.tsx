"use client";

import { useState } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import { cn } from "@/lib/utils";

type DocsLayoutProps = {
  children: React.ReactNode;
};

export function DocsLayout({ children }: DocsLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950">
      <a
        href="#doc-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>
      <Navbar
        onMenuToggle={() => setSidebarOpen((open) => !open)}
        menuOpen={sidebarOpen}
      />
      <div className="mx-auto flex w-full max-w-[90rem] flex-1">
        {sidebarOpen && (
          <button
            type="button"
            className="fixed inset-0 z-30 bg-slate-900/40 lg:hidden"
            aria-label="Close menu"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <Sidebar
          className={cn(
            "fixed inset-y-0 left-0 z-40 mt-14 w-72 transition-transform duration-200 ease-out lg:relative lg:z-0 lg:mt-0 lg:translate-x-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full",
          )}
          onNavigate={() => setSidebarOpen(false)}
        />
        <div className="flex min-w-0 flex-1 flex-col">
          <main
            id="doc-content"
            className="flex-1 px-4 py-8 sm:px-8 lg:px-10 lg:py-10"
          >
            <div className="mx-auto max-w-4xl rounded-xl border border-slate-200 bg-white px-6 py-8 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:px-8 sm:py-10">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
