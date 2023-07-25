import React from "react";
import FileUpload from "../../../../components/file-upload";
import Button from "../../../../components/button";
import { useRouter } from "next/router";
import { ROUTING_PATH } from "../../../../utils/constants";

interface ITicketsDetailChatAddMessage {
  onMessage: () => void;
}

const TicketsDetailChatAddMessage: React.FC<ITicketsDetailChatAddMessage> = ({
  onMessage,
}) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4">
      <textarea
        className="w-full text-sm text-secondary min-h-[250px] bg-secondary-background border border-secondary-background-accent rounded-lg p-4 focus:outline-none resize-none"
        placeholder="Please type your message here..."
      />
      <FileUpload />
      <div className="flex gap-2.5">
        <div onClick={onMessage} className="w-1/2">
          <Button
            bgColor="background"
            color="danger"
            name="Cancel"
            width="full"
          />
        </div>
        <div
          className="w-1/2"
          onClick={() => {
            router.push(ROUTING_PATH.TICKETS);
          }}
        >
          <Button bgColor="gems" name="Send" width="full" />
        </div>
      </div>
    </div>
  );
};

export default TicketsDetailChatAddMessage;
