import React, { useState, ChangeEvent, useEffect } from "react";
import TicketsAddTitle from "../TicketsAddTitle";
import FileUpload from "../../../../components/file-upload";

interface ITicketAddDescription {
  onCurrentStep: () => void;
  onDisabled: () => void;
}

const TicketAddDescription: React.FC<ITicketAddDescription> = ({
  onCurrentStep,
  onDisabled,
}) => {
  const [data, setData] = useState({
    description: "",
    file: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (data.description !== "" && data.file !== "") {
      onDisabled();
    }
  });

  return (
    <div className="relative flex flex-col gap-4 md:gap-7">
      <TicketsAddTitle onCurrentStep={onCurrentStep} title="Report a Player" />
      <textarea
        className="w-full text-sm text-secondary min-h-[250px] bg-secondary-background border border-secondary-background-accent rounded-lg p-4 focus:outline-none resize-none"
        placeholder="Please enter a brief summary of why you are creating this ticket."
        name="description"
        value={data.description}
        onChange={handleChange}
      />
      <FileUpload value={data.file} onChange={handleChange} />
    </div>
  );
};

export default TicketAddDescription;
