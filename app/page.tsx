import Image from "next/image";


export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-pink-200 p-5 space-x-10">
      <div className="flex-1 w-1/3 h-5/6 items-center justify-center bg-orange-400 ml-10 space-y-10">
        <div className="text-4xl font-bold pt-10 pb-9 ml-5">
          Wearter
        </div>
        <div className="items-center justify-between flex w-96 h-28 border-solid border-2 border-b-8 border-black rounded-2xl ml-5 mb-4">
          <div className="w-40 pl-5 items-center justify-center">
            <div className="text-xl font-extrabold">Casius</div>
            <div className="font-extrabold text-xs"> Mars, 12AM</div>
          </div>
          <div className="w-60 h-full items-center justify-center flex pt-6">
            <div className="w-24 h-20 ">구름그림</div>
            <div className="w-28 h-20 text-3xl font-extrabold">85℃</div>
          </div>
        </div>
        <div className="items-center justify-between flex w-96 h-28 border-solid border-2 border-b-8 border-black rounded-2xl ml-5 mb-4 bg-yellow-400">
          <div className="w-40 pl-5 items-center justify-center">
            <div className="text-xl font-extrabold">Dlacria</div>
            <div className="font-extrabold text-xs"> Mars, 12AM</div>
          </div>
          <div className="w-60 h-full items-center justify-center flex pt-6">
            <div className="w-24 h-20 ">구름그림</div>
            <div className="w-28 h-20 text-3xl font-extrabold">85℃</div>
          </div>
        </div>
        <div className="items-center justify-between flex w-96 h-28 border-solid border-2 border-b-8 border-black rounded-2xl ml-5 mb-4 bg-teal-600">
          <div className="w-40 pl-5 items-center justify-center">
            <div className="text-xl font-extrabold">NEW YORK</div>
            <div className="font-extrabold text-xs"> USA, 12AM</div>
          </div>
          <div className="w-60 h-full items-center justify-center flex pt-6">
            <div className="w-24 h-20 ">맑음</div>
            <div className="w-28 h-20 text-3xl font-extrabold">85℃</div>
          </div>
        </div>
        <div className="items-center justify-between flex w-96 h-28 border-solid border-2 border-b-8 border-black rounded-2xl ml-5 mb-4 bg-orange-600 ">
          <div className="w-40 pl-5 items-center justify-center">
            <div className="text-xl font-extrabold text-slate-200">Zomato</div>
            <div className="font-extrabold text-xs text-slate-200"> Mars, 12AM</div>
          </div>
          <div className="w-60 h-full items-center justify-center flex pt-6">
            <div className="w-24 h-20 text-slate-200">눈내림</div>
            <div className="w-28 h-20 text-3xl font-extrabold text-slate-200">20℃</div>
          </div>
        </div>
        <div className="grid place-items-center rounded-full border-solid border-2 border-b-8 border-black w-16 h-16 content-center items-center m-auto ">
          <div className=" font-normal text-5xl">
           +
          </div>
        </div>
      </div>


      <div className="flex-1 bg-slate-100 h-5/6 items-center justify-center">
    <div className="grid place-items-center rounded-full border-solid border-2 border-b-4 border-black w-12 h-12 content-center items-center mt-8 ml-6">
          <div className="font-normal text-3xl">
           X
          </div>
        </div>
        <div className="flex-col flex items-center justify-center mt-3 mb-5">
          <div className="text-xl font-extrabold">SIMPLE TAG</div>
          <div className="text-4xl font-extrabold">Work with the best</div>
          <div className="text-4xl font-extrabold">designers</div>
        </div>
        <div className="flex flex-wrap h-2/3 items-center justify-center ml-5 mr-5">
          <div className="rounded-lg w-40 h-56 border-2 border-black bg-yellow-400 mr-5">box</div>
          <div className="rounded-lg w-40 h-56 border-2 border-black bg-cyan-600">box</div>
          <div className="rounded-lg w-40 h-56 border-2 border-black bg-pink-400 mr-5 -mt-16">box</div>
          <div className="rounded-lg w-40 h-56 border-2 border-black bg-orange-600 -mt-16">box</div>
        </div>
        <div className="flex rounded-lg bg-blue-700 text-2xl font-bold text-slate-100 items-center justify-center w-11/12 h-16 ml-5">Let's get it done</div>
      </div>



      <div className="flex-1 flex flex-col h-5/6 items-center justify-center bg-yellow-500">
        <div className="flex h-32 w-11/12 items-center justify-center relative">
          <div className="grid place-items-center rounded-full border-solid border-2 border-b-4 bg-slate-100 border-black w-14 h-14 absolute left-4"> Icon </div>
          <div className="font-extrabold text-4xl">Friends</div>
        </div>

        <div className="flex rounded-xl font-light text-xl border-solid border-2 border-b-8 border-black w-10/12 h-14 items-center pl-2 mb-8 bg-slate-100"> Search with love ... </div>

        <div className="flex flex-col w-10/12 h-4/6 relative space-y-7">
          <div className="flex rounded-xl border-solid border-2 border-black items-center space-y-2 h-20 bg-slate-100">
          <div className="rounded-full border-solid border-2 border-black w-16 h-16 bg-orange-500 ml-4"></div>
          <div className="flex flex-col ml-3">
            <div className="font-extrabold text-2xl">Bill Rizer</div>
            <div className="font-normal text-sm">planet Designer</div>
          </div>
          <div className="absolute right-7 border-solid border-2 border-b-4 border-black rounded-xl w-20 bg-yellow-500 font-extrabold text-lg h-10 pl-3 pt-1">Invite</div>
          </div>
          <div className="flex rounded-xl border-solid border-2 border-black items-center space-y-2 h-20 bg-slate-100">
          <div className="rounded-full border-solid border-2 border-black w-16 h-16 bg-cyan-600 ml-4"></div>
          <div className="flex flex-col ml-3">
            <div className="font-extrabold text-2xl">Genbei Yagy</div>
            <div className="font-normal text-sm">planet Designer</div>
          </div>
          <div className="absolute right-7 border-solid border-2 border-b-4 border-black rounded-xl w-20 bg-yellow-500 font-extrabold text-lg h-10 pl-3 pt-1">Invite</div>
          </div>
          <div className="flex rounded-xl border-solid border-2 border-black items-center space-y-2 h-20 bg-slate-100">
          <div className="rounded-full border-solid border-2 border-black w-16 h-16 bg-orange-500 ml-4"></div>
          <div className="flex flex-col ml-3">
            <div className="font-extrabold text-2xl">Lancy Neo</div>
            <div className="font-normal text-sm">Rogue Corp</div>
          </div>
          <div className="absolute right-7 border-solid border-2 border-b-4 border-black rounded-xl w-20 bg-yellow-500 font-extrabold text-lg h-10 pl-3 pt-1">Invite</div>
          </div>
          <div className="flex rounded-xl border-solid border-2 border-black items-center space-y-2 h-20 bg-slate-100">
          <div className="rounded-full border-solid border-2 border-black w-16 h-16 bg-yellow-500 ml-4"></div>
          <div className="flex flex-col ml-3">
            <div className="font-extrabold text-2xl">Bill Rizer</div>
            <div className="font-normal text-sm">Hard Cops</div>
          </div>
          <div className="absolute right-7 border-solid border-2 border-b-4 border-black rounded-xl w-20 bg-yellow-500 font-extrabold text-lg h-10 pl-3 pt-1">Invite</div>
          </div>
          <div className="flex rounded-xl border-solid border-2 border-black items-center space-y-2 h-20 bg-slate-100">
          <div className="rounded-full border-solid border-2 border-black w-16 h-16 bg-pink-300 ml-4"></div>
          <div className="flex flex-col ml-3">
            <div className="font-extrabold text-2xl">Konami</div>
            <div className="font-normal text-sm">xenan Createor</div>
          </div>
          <div className="absolute right-7 border-solid border-2 border-b-4 border-black rounded-xl w-20 bg-yellow-500 font-extrabold text-lg h-10 pl-3 pt-1">Invite</div>
          </div>
        </div>
      </div>
    </div>
  );
}
