
interface IBackgroundPage {
  children: React.ReactNode;
}

export function BackgroundPage({children}: IBackgroundPage) {
  return (
    <div className="relative bg-[#0d0d0d] w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute bottom-70 right-0 w-[800px] h-[800px] pointer-events-none bg-[radial-gradient(theme(color-primary),_#0000,_transparent_99%)]"></div>
      <div className="absolute top-20 left-80 w-[239px] h-[225px] opacity-10 pointer-events-none bg-[radial-gradient(circle,_white_2px,_transparent_2px)] bg-[length:10px_10px]"></div>
      <div className="absolute top-52 -left-[415px] w-[674px] h-[674px] opacity-70 pointer-events-none bg-[radial-gradient(theme(color-primary),_#0000,_transparent_99%)]"></div>
      {children}
    </div>
  )
}
