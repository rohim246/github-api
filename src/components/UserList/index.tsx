import { SearchRes } from "@/types/SearchRes";
import UserItem from "../UserItem";

const UserList = ({ result }: Props) => {
  return (
    <div className="flex flex-col gap-3 py-3">
      {result?.users.map((user, index) => (
        <UserItem key={index} user={user} />
      ))}
    </div>
  );
};

interface Props {
  result: SearchRes;
}

export default UserList;
