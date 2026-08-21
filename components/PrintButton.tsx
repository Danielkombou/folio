"use client";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      type="button"
      className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/80 print:hidden"
    >
      Print / Save PDF 🖨️
    </button>
  );
}
