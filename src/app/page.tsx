"use client";
import { useState } from "react";
import Button from "@/components/Button";
import Search from "@/components/Search";
import UserList from "@/components/UserList";
import BlankPage from "@/components/BlankPage";
import { User } from "@/types/User";
import { SearchRes } from "@/types/SearchRes";

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [onSearch, setOnSearch] = useState("");
  const [result, setResult] = useState<SearchRes | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (onSearch) {
      setIsLoading(true);
      fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/search/users?q=${onSearch}&per_page=5`
      )
        .then((res) => res.json())
        .then((data) => {
          const users: User[] = data.items;
          const searchRes: SearchRes = {
            search: onSearch,
            users: users,
          };
          setResult(searchRes);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const onClear = () => {
    setOnSearch("");
  };

  return (
    <>
      <section className="flex flex-col gap-2 max-w-sm">
        <form onSubmit={onSubmit}>
          <Search
            value={onSearch}
            onchange={(e) => setOnSearch(e.target.value)}
            onClear={onClear}
          />
          <Button users={onSearch} type="submit" isLoading={isLoading} />
        </form>
        {result ? <UserList result={result} /> : <BlankPage />}
      </section>
    </>
  );
};

export default Page;
