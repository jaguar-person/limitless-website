import React from "react";
import Button from "../../../../components/button";
import { useIsMobile } from "../../../../utils/hooks/useIsMobile";

interface ITicketsDetailChatAdd {
  onMessage: () => void;
}

const TicketsDetailChatAdd: React.FC<ITicketsDetailChatAdd> = ({
  onMessage,
}) => {
  const isMobile = useIsMobile();

  if (isMobile)
    return (
      <div onClick={onMessage}>
        <Button name="Reply" bgColor="gems" rightIcon="reply" width="full" />
      </div>
    );
  else
    return (
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2.5">
          <p className="text-base font-semibold text-white">Reply to ticket</p>
          <textarea
            className="card-container p-5 text-secondary focus:outline-none resize-none"
            rows={5}
            placeholder="Write a response for this ticket."
          />
        </div>
        <div className="flex gap-2.5 self-end">
          <Button
            name="Attach"
            rightIcon="attach"
            bgColor="secondary-background"
            color="secondary"
          />
          <Button name="Send" bgColor="gems" />
        </div>
      </div>
    );
};

export default TicketsDetailChatAdd;
