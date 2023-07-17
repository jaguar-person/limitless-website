import React from "react";
import Button from "../../../../components/button";

const TicketsDetailChatAdd: React.FC = () => (
  <div className="flex flex-col gap-5">
    <div className="flex flex-col gap-2.5">
      <p className="text-base font-semibold text-white">Reply to ticket</p>
      <textarea
        className="card-container p-5 text-secondary focus:outline-none resize-none"
        rows={5}
        defaultValue="Write a response for this ticket."
      />
    </div>
    <div className="flex gap-2.5 self-end">
      <Button name="Attach" rightIcon="attach" bgColor="secondary-background" />
      <Button name="Send" bgColor="gems" />
    </div>
  </div>
);

export default TicketsDetailChatAdd;
