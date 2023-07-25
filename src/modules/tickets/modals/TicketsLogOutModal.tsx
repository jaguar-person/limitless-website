import React, { useState } from "react";
import Button from "../../../components/button";
import Modal from "../../../components/modal";
import { useIsMobile } from "../../../utils/hooks/useIsMobile";

const TicketsLogOutModal: React.FC = () => {
  const [isShow, setShow] = useState(false);
  const isMobile = useIsMobile();
  return (
    <div>
      <Button
        name="Log Out"
        bgColor="danger"
        onClick={() => {
          setShow(true);
        }}
        width="full"
      />
      {isShow && (
        <Modal>
          <div className="flex flex-col gap-5 items-center z-50">
            <p className="text-white text-3xl font-extrabold tracking-tight">
              Log Out
            </p>
            <p className="text-secondary-in-box text-sm md:text-base text-center md:max-w-[380px] md:mx-10">
              Are you sure you want to disconnect your Steam account from
              Limitless?
            </p>
            <Button
              name="Keep me connected"
              color="background"
              bgColor="points"
              width="full"
              size="lg"
              onClick={() => {
                setShow(false);
              }}
            />
            <Button
              name="Disconnect"
              color={isMobile ? "danger" : "secondary-in-box"}
              bgColor="secondary-background"
              size="base"
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

export default TicketsLogOutModal;
