"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { User } from "@/types/User";
import { DetailData } from "@/types/DetailData";

const UserItem = ({ user }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [detailData, setDetailData] = useState<DetailData[]>([]);

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${user?.login}/repos`
    );
    const data = await response.json();
    setDetailData(data);
  };

  const toggle = useCallback(() => {
    setIsOpen((state) => !state);
  }, [setIsOpen]);

  const handleOnClick = useCallback(() => {
    setIsActive((state) => !state);
  }, [setIsActive]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center border-2 rounded-lg hover:bg-green-100 p-2">
        <div className="inline-flex items-center space-x-3">
          <Image
            alt="profile"
            width={40}
            height={40}
            src={user?.avatar_url}
            className="rounded-full"
          />
          <span>{user?.login}</span>
        </div>
        <button
          onClick={toggle}
          className="hover:bg-green-600 rounded-full hover:text-white p-3"
        >
          {isOpen ? (
            <ChevronUpIcon className="w-4 h-4" />
          ) : (
            <ChevronDownIcon className="w-4 h4" />
          )}
        </button>
      </div>
      {isOpen &&
        detailData?.map((items, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center border-2 shadow-lg rounded-lg p-3 my-2"
            >
              <div className="flex justify-between border-b-2 py-1 my-1">
                <p className="font-bold">{items.name}</p>
                <div className="flex space-x-2">
                  <p className="font-bold">{items.watchers}</p>
                  <button onClick={handleOnClick} className="mb-1">
                    <StarIcon
                      className={`${
                        isActive && "text-yellow-400 w-6 h-6"
                      }w-6 h-6 hover:text-yellow-400`}
                    />
                  </button>
                </div>
              </div>
              <div className="flex">
                <span className="text-sm break-normal">
                  {items.description}
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

interface Props {
  user: User;
}
export default UserItem;
