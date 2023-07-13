import React from "react";
import Image from "next/image";

interface ISearchBar {
  icon: string;
  placeholder: string;
}

const SearchBar: React.FC<ISearchBar> = ({ icon, placeholder }) => (
  <div className="relative w-full">
    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
      <button
        type="submit"
        className="p-1 focus:outline-none focus:shadow-outline"
      >
        <Image
          src={require(`../../images/${icon}.svg`)}
          width={22}
          height={22}
          alt="search"
        />
      </button>
    </span>
    <input
      type="search"
      className="py-3 text-sm text-secondary bg-secondary-background-accent rounded-md pl-10 focus:outline-none w-full"
      placeholder={placeholder}
      autoComplete="off"
    />
  </div>
);

export default SearchBar;
