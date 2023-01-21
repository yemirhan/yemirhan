import { type NextPage } from "next";

const Home: NextPage = () => {
  return <div className="flex flex-col w-full h-auto bg-black/95 text-white">
    <div className="flex flex-col w-full h-screen items-center justify-center ">
      <div className="flex flex-col uppercase font-mono group text-white transition-all">
        <div className="flex flex-row justify-between">
          <h1 className="text-7xl tracking-widest text-white hover:text-white group-hover:text-white/30 transition-all ">EMİRHAN</h1>
          <h1 className="text-7xl tracking-widest text-white hover:text-white group-hover:text-white/30 transition-all ">ŞAHİN</h1>
        </div>
        <h1 className="text-7xl tracking-widest text-white hover:text-white group-hover:text-white/30 transition-all">Full Stack dev </h1>
        <div className="flex flex-row justify-between">
          <h1 className="text-7xl tracking-widest text-white hover:text-white group-hover:text-white/30  transition-all ">Dev</h1>
          <h1 className="text-7xl tracking-widest text-white hover:text-white group-hover:text-white/30 transition-all ">{"Blog>"}</h1>
        </div>
        <h1 className="text-7xl tracking-widest text-white hover:text-white group-hover:text-white/30 transition-all">@TWITTER</h1>
        <h1 className="text-7xl tracking-widest text-white hover:text-white group-hover:text-white/30 transition-all">GH/YEMIRHAN</h1>
      </div>

    </div>
    <div className="container mx-auto max-w-7xl"> 
      <h1>something</h1>
    
    </div>
  </div>
};

export default Home;