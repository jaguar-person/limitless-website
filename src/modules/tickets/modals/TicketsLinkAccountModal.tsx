import React, { useState } from "react";
import Image from "next/image";
import ModalLinkImage from "../../../images/link-modal.svg";
import Button from "../../../components/button";
import Modal from "../../../components/modal";
import { useIsMobile } from "../../../utils/hooks/useIsMobile";
import { AccountActionTypes } from "../../../utils/enums";

interface ITicketsLinkAccountModal {
  action: AccountActionTypes;
}

const TicketsLinkAccountModal: React.FC<ITicketsLinkAccountModal> = ({
  action,
}) => {
  const [isShow, setShow] = useState(false);
  const isMobile = useIsMobile();

  const handleClose = () => {
    setShow(false);
  };
  return (
    <div>
      <Button
        name={
          action === AccountActionTypes.BOOST ? "Boost" : action + " Account"
        }
        bgColor={action === AccountActionTypes.UNLINK ? "danger" : "points"}
        rightIcon="site"
        width="full"
        onClick={() => {
          setShow(true);
        }}
      />
      {isShow && (
        <Modal onClose={handleClose}>
          <div className="flex flex-col gap-5 items-center z-50">
            <Image src={ModalLinkImage} width={243} height={54} alt="link" />
            <p className="text-secondary-in-box text-sm text-center md:max-w-[380px] md:mx-10">
              Are you sure you want to unlink your Discord account from
              Limitless?
            </p>
            <Button
              name="Keep it linked"
              color="background"
              bgColor="points"
              width="full"
              size="lg"
              onClick={() => {
                setShow(false);
              }}
            />
            <Button
              name="Unlink"
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

export default TicketsLinkAccountModal;
