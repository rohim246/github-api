import Image from "next/image";

const BlankPage = () => {
  return (
    <div className="flex flex-col justify-center items-center border-2 rounded-lg p-5">
      <Image alt="logo" src={"/logo.svg"} width={200} height={200} color="" />
      <span className="text-lg font-semibold pt-2">Search GitHub User</span>
    </div>
  );
};

export default BlankPage;
