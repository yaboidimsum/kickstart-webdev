import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { BsSuitHeartFill } from "react-icons/bs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <header className="bg-[#FE6E06] p-3">
        <div className="m-auto flex w-11/12 max-w-[1320px] items-center justify-between">
          <Image
            src="/images/logorpl.png"
            alt="logo rpl"
            width={65}
            height={65}
          />
          <div className="flex gap-12 text-lg font-bold">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Service</a>
          </div>
        </div>
      </header>
      <section className="h-screen bg-[#EFAF64]">
        <div className="m-auto w-11/12 max-w-[1320px] py-40">
          <h1 className="text-[85px] font-bold leading-[80px] ">
            Kickstart <br /> Web Development
          </h1>
          <p className="mt-16 text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            voluptas, sequi quo cum error beatae officia adipisci, id quasi,
            porro nulla nihil consectetur corrupti labore. Iure vitae atque
            ipsam quidem?
          </p>
          <Link href="/todo">
            <button className="mt-10 rounded-full bg-[#FE6E06] px-9 py-4">
              Get Started
            </button>
          </Link>
          <div>
            <BsSuitHeartFill className="text-" />
            <h5>Title</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              totam animi laborum iure libero nam cum ratione aut optio, amet
              eos aperiam blanditiis tempore quas! Ad, possimus illum. Sit,
              totam.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
