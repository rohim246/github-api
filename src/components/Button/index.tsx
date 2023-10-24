import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Button = ({ users, isLoading, type }: Props) => {
  const Loading = () => {
    return (
      <div className="flex justify-center">
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full gap-2 border-b-2 pb-3">
      <button
        type={type}
        className="flex justify-center items-center gap-3 p-1 bg-green-700 rounded-lg text-white hover:bg-green-600"
      >
        Search
        {isLoading ? <Loading /> : <MagnifyingGlassIcon className="w-5 h-5" />}
      </button>
      {users && (
        <p className="text-sm font-extralight py-2">
          Showing users for <span className="font-bold">{`"${users}"`}</span>
        </p>
      )}
    </div>
  );
};

interface Props {
  users?: string;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

export default Button;
