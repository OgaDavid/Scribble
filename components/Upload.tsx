"use client";

import { ImagePlus } from "lucide-react";
import { useEffect, useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { Button } from "./ui/Button";

interface UploadProps {
  setImageUrl: (url: string) => void;  
}

const Upload: React.FC<UploadProps> = ({ setImageUrl }) => {
  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  const onUpload = (event: any) => {
    setImageUrl(event.info.secure_url);
  };

  // if (!isMounted) {
  //   return null;
  // }

  return (
    <div className="w-80 md:w-96 h-52 border border-dashed rounded-lg flex items-center justify-center">
      <CldUploadWidget onUpload={onUpload} uploadPreset="tknz4ps6">
        {({ open }) => {
          const onClick = () => {
            open();
          };

          return (
            <Button variant="outline" onClick={onClick}>
              <ImagePlus className="h-4 w-4 mr-2" />
              Upload an Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default Upload;
