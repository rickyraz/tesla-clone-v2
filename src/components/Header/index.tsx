import React, { Dispatch, SetStateAction, useState } from "react";
import teslaLogo from "../../assets/tesla.svg";
import SideMenu from "./SideMenu";
// import "./hover.css";

export default function Header() {
  const [MenuSide, setMenuSide] = useState<boolean>(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-10 ">
      <div className="flex h-14 items-center justify-between font-montserrat text-sm font-semibold">
        <Logo />
        <Menu />
        {/* <Menu2 /> */}
        <RightMenu showMenu={setMenuSide} />
      </div>
      <SideMenu thisMenu={MenuSide} showMenu={setMenuSide} />
    </header>
  );
}

const Logo: React.FC = () => {
  return (
    <h1 className="xl:ml-4 w-36 pl-8">
      <a href="/" className="px-4">
        <img src={teslaLogo} className="w-28 " alt="Tesla logo" />
      </a>
    </h1>
  );
};

const Menu2: React.FC = () => {
  return (
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Blog</a>
      <a href="#">Portofolio</a>
      <a href="#">Contact</a>
      <div className="animation start-home"></div>
    </nav>
  );
};

const Menu: React.FC = () => {
  return (
    <nav className="relative ml-2 flex min-w-[600px] rounded-md md:ml-20 lgmax:hidden ">
      <a
        href="models"
        className="peer relative z-10 inline-block w-[100px] rounded-md py-2 text-center "
      >
        <span className="">Model S</span>
      </a>

      <a
        href="model3"
        className="peer relative z-10 inline-block w-[100px] rounded-md py-2 text-center"
      >
        <span className="mx-3 my-1">Model 3</span>
      </a>

      <a
        href="modelx"
        className="peer relative z-10 inline-block w-[100px] rounded-md py-2 text-center"
      >
        <span className="mx-3 my-1">Model X</span>
      </a>

      <a
        href="modely"
        className="peer relative z-10 inline-block w-[100px] rounded-md py-2 text-center"
      >
        <span className="mx-3 my-1">Model Y</span>
      </a>

      <a
        href="solarroof"
        className="peer relative z-10 inline-block w-[100px] rounded-md py-2 text-center"
      >
        <span className="mx-3 my-1">Solar Roof</span>
      </a>

      <a
        href="solarpanel"
        className="peer relative z-10 inline-block w-[110px] rounded-md py-2 text-center"
      >
        <span className="mx-3 my-1">Solar Panels</span>
      </a>

      <div className="absolute top-0 left-0 z-0 h-full w-[100px] rounded-md bg-slate-500/10 transition-all peer-hover:left-[100px]   peer-hover:bg-red-500/30"></div>
    </nav>
  );
};

interface RightProps {
  showMenu: Dispatch<SetStateAction<boolean>>;
}

const RightMenu: React.FC<RightProps> = ({ showMenu }) => {
  return (
    <ol className="flex pr-2 sm:pr-6 md:pr-8">
      <div className="flex lgmax:hidden">
        <li>
          <a
            href="#shop"
            className="rounded-md py-2 px-4 hover:bg-slate-500/10"
          >
            Shop
          </a>
        </li>
        <li>
          <a
            href="#account"
            className="rounded-md py-2 px-4 hover:bg-slate-500/10"
          >
            Account
          </a>
        </li>
      </div>
      <li>
        <a
          className="z-50 cursor-pointer rounded-md py-2 px-4 hover:bg-slate-500/10 lgmax:bg-slate-500/20"
          onClick={() => showMenu(true)}
        >
          Menu
        </a>
      </li>
    </ol>
  );
};
