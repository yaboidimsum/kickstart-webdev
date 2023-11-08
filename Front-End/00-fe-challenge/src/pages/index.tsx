import Image from "next/image";
import { IoMdAddCircle } from "react-icons/io";
import {MdDelete, MdModeEdit} from "react-icons/md"

export default function Home() {
  return (
    <main className="bg-[#11162A]">
      <header>
        <div className="flex w-full flex-row items-center justify-between bg-[#0D1120] px-[64px] py-[24px]">
          <div className="just flex flex-row items-center gap-8">
            <Image
              src="/images/logorpl.png"
              width={50}
              height={30}
              alt="logo rpl"
            />
            <h2 className="max-w-[265px] font-pjs text-lg font-bold">
              Software Engineering Laboratory
            </h2>
          </div>
          <div className="flex flex-row gap-8 ">
            <a
              className="text-lg font-bold duration-300 ease-in-out hover:text-slate-400"
              href=""
            >
              Home
            </a>
            <a
              className="text-lg font-bold duration-300 ease-in-out hover:text-slate-400"
              href=""
            >
              About
            </a>
            <a
              className="text-lg font-bold duration-300 ease-in-out hover:text-slate-400"
              href=""
            >
              Service
            </a>
          </div>
        </div>
      </header>
      {/* Main Card */}
      <div className="flex h-screen items-center justify-center">
        <div className="bg-[#0D1120] py-16 px-16">
          <div className="flex flex-col gap-8">
          <h2 className="text-lg font-semibold">Get Things Done</h2>
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-normal">Add todo list</h4>
            <div className="flex flex-row gap-4 items-center">
              <input
                className="rounded-sm bg-[#161B27] py-2 px-2 w-[550px]"
                type="text"
                placeholder="Insert todo list"
              />
              <a href="">
                <IoMdAddCircle size={40} />
              </a>
            </div>
          </div>
          <div className="grid grid-rows-4 grid-flow-col gap-4">
            <div className="flex flex-row justify-between items-center w-[20rem] py-4 px-4 bg-[#354154] text-slate-300 transition ease-in-out duration-300 hover:bg-slate-800 hover:text-white">
              <h2 className="text-md font-normal ">
                Praktikum Jarkom Modul 3
              </h2>
              <div className="flex flex-row gap-2">
              <MdModeEdit size={20} color={"yellow"} />
              <MdDelete size={20} color={"red"} />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-[20rem] py-4 px-4 bg-[#354154] text-slate-300 transition ease-in-out duration-300 hover:bg-slate-800 hover:text-white">
              <h2 className="text-md font-normal ">
                FP PBKK 
              </h2>
              <div className="flex flex-row gap-2">
              <MdModeEdit size={20} color={"yellow"} />
              <MdDelete size={20} color={"red"} />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-[20rem] py-4 px-4 bg-[#354154] text-slate-300 transition ease-in-out duration-300 hover:bg-slate-800 hover:text-white">
              <h2 className="text-md font-normal ">
                FP GRAFKOM
              </h2>
              <div className="flex flex-row gap-2">
              <MdModeEdit size={20} color={"yellow"} />
              <MdDelete size={20} color={"red"} />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-[20rem] py-4 px-4 bg-[#354154] text-slate-300 transition ease-in-out duration-300 hover:bg-slate-800 hover:text-white">
              <h2 className="text-md font-normal ">
                Asistensi RSBP
              </h2>
              <div className="flex flex-row gap-2">
              <MdModeEdit size={20} color={"yellow"} />
              <MdDelete size={20} color={"red"} />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-[20rem] py-4 px-4 bg-[#354154] text-slate-300 transition ease-in-out duration-300 hover:bg-slate-800 hover:text-white">
              <h2 className="text-md font-normal ">
                Tugas Kick-Start Webdev
              </h2>
              <div className="flex flex-row gap-2">
              <MdModeEdit size={20} color={"yellow"} />
              <MdDelete size={20} color={"red"} />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-[20rem] py-4 px-4 bg-[#354154] text-slate-300 transition ease-in-out duration-300 hover:bg-slate-800 hover:text-white">
              <h2 className="text-md font-normal ">
                Belajar Fecth API NextJS
              </h2>
              <div className="flex flex-row gap-2">
              <MdModeEdit size={20} color={"yellow"} />
              <MdDelete size={20} color={"red"} />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-[20rem] py-4 px-4 bg-[#354154] text-slate-300 transition ease-in-out duration-300 hover:bg-slate-800 hover:text-white">
              <h2 className="text-md font-normal ">
                Belajar Golang
              </h2>
              <div className="flex flex-row gap-2">
              <MdModeEdit size={20} color={"yellow"} />
              <MdDelete size={20} color={"red"} />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-[20rem] py-4 px-4 bg-[#354154] text-slate-300 transition ease-in-out duration-300 hover:bg-slate-800 hover:text-white">
              <h2 className="text-md font-normal ">
                Belajar React Hook
              </h2>
              <div className="flex flex-row gap-2">
              <MdModeEdit size={20} color={"yellow"} />
              <MdDelete size={20} color={"red"} />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      {/* Made with Love */}
    <h2 className="flex items-center justify-center pb-5 text-lg font-semibold">Made with ❤️ by Awan</h2>
    </main>
  );
}
