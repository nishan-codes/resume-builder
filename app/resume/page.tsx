"use client";

import { Suspense } from "react";
import { PDFViewer, ResumeDocument } from "@/components/pdf";
import { resume } from "@/lib/constants/resume";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading PDF viewer...</div>}>
        <PDFViewer className="min-h-screen w-full">
          <ResumeDocument resume={resume} />
        </PDFViewer>
    </Suspense>
  );
}
