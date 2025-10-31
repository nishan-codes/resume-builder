import { PDFDownloadLink, ResumeDocument } from "@/components/pdf";
import { Button } from "@/components/ui/button";
import { resume } from "@/lib/constants/resume";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Button variant="link">
        <Link href="/resume">Preview</Link>
      </Button>
      <div className="bg-blue-500 p-2 m-2 rounded-full w-fit hover:bg-blue-500/90">
        <PDFDownloadLink
          className="text-white"
          document={<ResumeDocument resume={resume} />}
        >
          Download Resume
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default page;
