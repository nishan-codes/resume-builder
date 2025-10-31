"use client";
import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import { Button } from "../ui/button";
import { Font } from "@react-pdf/renderer";

// Dynamically import and initialize pdfjs only on the client side
const initializePdfjs = async () => {
  if (typeof window !== "undefined") {
    const { pdfjs } = await import("react-pdf");
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
  }
};

initializePdfjs();

Font.register({
  family: "Ubuntu",
  fonts: [
    {
      fontStyle: "normal",
      fontWeight: 400,
      src: "https://fonts.gstatic.com/s/ubuntu/v21/4iCs6KVjbNBYlgo6eA.ttf",
    },
    {
      fontStyle: "italic",
      fontWeight: 400,
      src: "https://fonts.gstatic.com/s/ubuntu/v21/4iCu6KVjbNBYlgoKeg7z.ttf",
    },
    {
      fontStyle: "normal",
      fontWeight: 700,
      src: "https://fonts.gstatic.com/s/ubuntu/v21/4iCv6KVjbNBYlgoCxCvTtw.ttf",
    },
  ],
});

export { ResumeDocument } from "./resume/document";

export const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((m) => m.PDFViewer),
  {
    ssr: false,
    loading: () => <>Loading...</>,
  }
);

export const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((m) => m.PDFDownloadLink),
  {
    ssr: false,
    loading: () => (
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading...
      </Button>
    ),
  }
);
