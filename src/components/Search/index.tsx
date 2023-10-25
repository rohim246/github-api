"use client";
import { XCircleIcon } from "@heroicons/react/24/solid";

const Search = ({ value, onchange, onClear }: Props) => {
  return (
    <div className="relative mb-2">
      <input
        value={value}
        onChange={onchange}
        placeholder="Search User..."
        className="border border-zinc-300 rounded-md p-1 w-full focus:outline-green-500"
      />
      {value && (
        <button onClick={onClear} className="absolute top-1 end-2">
          <XCircleIcon className="w-6 h-6 text-slate-200 hover:text-slate-400" />
        </button>
      )}
    </div>
  );
};

interface Props {
  value?: string;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export default Search;
