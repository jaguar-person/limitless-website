import React from "react";
import Image from "next/image";
import FileUploadIcon from "../../images/upload.svg";

const FileUpload: React.FC = () => (
  <label className="w-full flex flex-col gap-1 justify-center items-center py-8 rounded-lg border-2 border-gems border-dashed cursor-pointer">
    <Image src={FileUploadIcon} width={67} height={48} alt="upload" />
    <span className="text-base text-white">Select a file to upload</span>
    <span className="text-xs text-secondary">Select a file to upload</span>
    <input type="file" className="hidden" />
  </label>
);

export default FileUpload;
