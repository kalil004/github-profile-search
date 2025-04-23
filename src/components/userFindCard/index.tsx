import { FormEvent, useState } from "react"
import { apiClient } from "../../api/apiClient";
import { IUserFoundCard, UserFoundCard } from "../userFoundCard";
import { UserNotFoundMessage } from "../userNotFoundMessage";
import { FaGithub } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";


export function UserFindCard() {
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState<IUserFoundCard>();
  const [errorMessage, setErrorMessage] = useState(false);

  const fetchData = async () => {
      try {
        const response = await apiClient.get(userName);
        const { avatar_url, bio, name } = await response.data;
        
        setUserData({
          username: name,
          img: avatar_url,
          description: bio,
        })

        setErrorMessage(errorMessage);
      } catch (error) {
        void error;
        setErrorMessage(true);       
      }
    };

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData();
  }

  return (
    <div className="w-[1156px] z-10 h-[700px] 2md:h-[537px] flex flex-col justify-start items-center bg-black">
      <div className="h-[250px] items-center justify-evenly flex flex-col">
        <div className="w-96 h-20 flex justify-around items-center">
          <FaGithub className="w-16 h-16 text-white" />
          <h1 className="text-5xl text-white font-semibold">Perfil <span className="font-bold">Github</span></h1>
        </div>
        <form onSubmit={handleSubmit} className="w-[340px] 2md:w-[503px] h-16 rounded-[10px] border-[#DDDDD] flex bg-white items-center justify-around">
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-[80%] 2md:w-[85%] p-4  outline-none"
            placeholder="Digite um usuário do Github" type="text"
          />
          <button className="w-[62px] h-[62px] bg-primary rounded-[10px] flex items-center justify-center cursor-pointer">
            <HiMagnifyingGlass className="w-7 h-7 text-white" />
          </button>
        </form>
      </div>
      {userData && !errorMessage && <UserFoundCard img={userData.img} description={userData.description} username={userData.username} />}
      
      {errorMessage && <UserNotFoundMessage />}
      
    </div>
  )
}
