export interface IUserFoundCard {
  img: string;
  username: string;
  description: string;
}

export function UserFoundCard({ username, description, img }: IUserFoundCard) {
  return (
    <div className="w-[340px] 2md:w-[804px] 2md:h-64 h-[600px] flex flex-col 2md:flex-row justify-evenly items-center bg-[#D9D9D9] rounded-3xl">
      <img className="w-48 2md:w-56 2md:h-56 h-48 border-2 border-primary rounded-full" src={img} alt={`Foto de perfil de ${username}`} />
      <div className="w-72 2md:w-[448px] h-56 2md:h-32 flex flex-col justify-evenly 2md:justify-between text-center 2md:text-start">
        <h2 className="text-xl font-bold text-primary">{username}</h2>
        <p className="min-h-20 text-[15px] font-light">{ description }</p>
      </div>
    </div>
  )
}
