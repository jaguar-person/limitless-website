import React, { useState } from "react";
import Button from "../../../components/button";
import Modal from "../../../components/modal";
import { useIsMobile } from "../../../utils/hooks/useIsMobile";

const TicketsCloseTicketModal: React.FC = () => {
  const [isShow, setShow] = useState(false);
  const isMobile = useIsMobile();

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div>
      <Button
        name="Close Ticket"
        bgColor="danger"
        onClick={() => {
          setShow(true);
        }}
      />
      {isShow && (
        <Modal onClose={handleClose}>
          <div className="flex flex-col gap-5 text-center z-50">
            <p className="text-white font-extrabold text-3xl tracking-tight">
              Close Ticket
            </p>
            <p className="text-secondary-in-box px-4 md:px-10">
              Are you sure you want to close your ticket?
            </p>
            <Button
              name="Keep it opened"
              color="background"
              bgColor="points"
              width="full"
              size="lg"
              onClick={() => {
                setShow(false);
              }}
            />
            <Button
              name="Close"
              color={isMobile ? "danger" : "secondary-in-box"}
              bgColor="secondary-background"
              size="base"
              width="full"
              onClick={() => {
                setShow(false);
              }}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default TicketsCloseTicketModal;
