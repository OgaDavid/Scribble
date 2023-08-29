"use client";

import { UploadButton } from "@uploadthing/react";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import { UploadFileResponse } from "uploadthing/client";
interface UploadProps {
  setImageUrl: (url: UploadFileResponse[]) => void;
}

const Upload: React.FC<UploadProps> = ({ setImageUrl }) => {

  return (
    <div className="w-80 md:w-96 h-52 border border-dashed rounded-lg flex items-center justify-center">
      <UploadButton<OurFileRouter>
        appearance={{
          button:
            "bg-transparent px-5 ut-ready:border-red-600 ut-ready:text-red-600 ut-uploading:cursor-not-allowed ut-uploading:text-muted-foreground text-foreground text-sm border border-muted-foreground",
        }}
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          if (res) {
            setImageUrl(res);
          }
          console.log("Files: ", res);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
};

export default Upload;
