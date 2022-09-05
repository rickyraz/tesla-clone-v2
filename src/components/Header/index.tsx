import React, { useState } from "react";
import teslaLogo from "../../assets/tesla.svg";

type Props = {};

export default function Header({}: Props) {
  const [MenuSide, setMenuSide] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-10 ">
      <div className="flex h-14 items-center justify-between font-montserrat text-sm font-semibold">
        <Logo />
        <Menu />
        {/* setMenuSide={setMenuSide} */}
        <RightMenu />
      </div>
      {/* <SideMenuNav MenuSide={MenuSide} setMenuSide={setMenuSide} /> */}
    </header>
  );
}

const Logo: React.FC = () => {
  return (
    <h1 className="pl-8 xl:ml-4">
      <a href="/" className="px-4">
        <img src={teslaLogo} className="w-28 " alt="Tesla logo" />
      </a>
    </h1>
  );
};

const Menu: React.FC = () => {
  return (
    <ol className="ml-20 flex justify-center mdmax:hidden ">
      <li>
        <a href="models" className="rounded-md py-2 px-1 hover:bg-slate-500/10">
          <span className="mx-3 my-1">Model S</span>
        </a>
      </li>
      <li>
        <a href="model3" className="rounded-md py-2 px-1 hover:bg-slate-500/10">
          <span className="mx-3 my-1">Model 3</span>
        </a>
      </li>
      <li>
        <a href="modelx" className="rounded-md py-2 px-1 hover:bg-slate-500/10">
          <span className="mx-3 my-1">Model X</span>
        </a>
      </li>
      <li>
        <a href="modely" className="rounded-md py-2 px-1 hover:bg-slate-500/10">
          <span className="mx-3 my-1">Model Y</span>
        </a>
      </li>
      <li>
        <a
          href="solarroof"
          className="rounded-md py-2 px-1 hover:bg-slate-500/10"
        >
          <span className="mx-3 my-1">Solar Roof</span>
        </a>
      </li>
      <li>
        <a
          href="solarpanel"
          className="rounded-md py-2 px-1 hover:bg-slate-500/10"
        >
          <span className="mx-3 my-1">Solar Panels</span>
        </a>
      </li>
    </ol>
  );
};

const RightMenu: React.FC = () => {
  return (
    <ol className="flex pr-8">
      <div className="flex mdmax:hidden">
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
          href="#main"
          className="rounded-md py-2 px-4 hover:bg-slate-500/10"
          //   onClick={() => setMenuSide(true)}
        >
          Menu
        </a>
      </li>
    </ol>
  );
};