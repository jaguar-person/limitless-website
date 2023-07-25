import React, { useState } from "react";
import Image from "next/image";
import RightIcon from "../../../images/arrow-right.svg";
import SearchBar from "../../../components/search-bar";
import DropDown from "../../../components/dropdown";
import CloseIcon from "../../../images/mobile-close.svg";
import Button from "../../../components/button";

interface IDropDownWithTitle {
  title: string;
  children: React.ReactNode;
}

export const DropDownWithTitle: React.FC<IDropDownWithTitle> = ({
  title,
  children,
}) => (
  <div className="flex flex-col gap-4">
    <p className="text-secondary font-bold uppercase leading-3">{title}</p>
    {children}
  </div>
);

const FiltersModal: React.FC = () => {
  const [isShow, setShow] = useState(false);
  return (
    <div className={"relative " + (isShow ? "z-40" : "z-20")}>
      <div className="border border-secondary-background-accent rounded-[4px] w-fit">
        <Button
          name="Filters"
          color="secondary"
          bgColor="secondary-background"
          rightIcon="filter"
          onClick={() => {
            setShow(true);
          }}
        />
      </div>
      {isShow && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-background">
          <div className="py-6 px-4 flex flex-col gap-7">
            <div className="flex justify-between">
              <p className="text-gems text-3xl font-bold">Filters</p>
              <div onClick={() => [setShow(false)]}>
                <Image src={CloseIcon} width={32} height={32} alt="menu" />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <SearchBar icon="search_2" placeholder="Search" />
              <DropDownWithTitle title="wipe range">
                <DropDown
                  title="Lifetime"
                  bgColor="secondary-background"
                  width="full"
                />
              </DropDownWithTitle>
              <div className="flex gap-3">
                <div className="w-1/2">
                  <DropDownWithTitle title="sort by">
                    <DropDown
                      title="Kills"
                      bgColor="secondary-background"
                      width="full"
                    />
                  </DropDownWithTitle>
                </div>
                <div className="w-1/2">
                  <DropDownWithTitle title="order">
                    <DropDown
                      title="Desc"
                      bgColor="secondary-background"
                      width="full"
                    />
                  </DropDownWithTitle>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FiltersModal;
