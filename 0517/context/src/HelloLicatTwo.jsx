import { useContext } from "react";
import { UserInfo } from './context'
//const UserInfo = createContext({ name: "gary", id: "garyIsFree" });
const HelloLicatTwo = () => {
    const { name, id } = useContext(UserInfo);
    return (
      <div>
        <h2>{name}</h2>
        <strong>{id}</strong>
      </div>
    );
  };

export default HelloLicatTwo