import React, {
  Dispatch,
  SetStateAction,
  useRef,
  useLayoutEffect,
} from "react";
import { gsap } from "gsap";

interface RightProps {
  showMenu: Dispatch<SetStateAction<boolean>>;
  thisMenu: boolean;
}

// showMenu is seState && thisMenu is State
const SideMenu: React.FC<RightProps> = ({ thisMenu, showMenu }) => {
  const elem0 = useRef(null);

  const toggleShow = () => {
    showMenu(!thisMenu);
  };

  useLayoutEffect(() => {
    const menu = elem0.current;
    if (thisMenu) {
      gsap.fromTo(
        menu,
        { right: "-50%", opacity: 0 },
        { right: "0%", opacity: 1, duration: 0.8 }
      );
    } else {
      gsap.to(menu, { right: "-80%", opacity: 0, duration: 0.8 });
    }
  });

  const words = [
    {
      title: "Existing Inventory",
      href: "/inventory/new/m3",
    },
    {
      title: "Used Inventory",
      href: "/inventory/used/m3",
    },
    {
      title: "Trade-In",
      href: "/tradein",
    },
    {
      title: "Test Drive",
      href: "/drive",
    },
    {
      title: "Insurance",
      href: "/insurance",
    },
    {
      title: "Cybertruck",
      href: "/cybertruck",
    },
    {
      title: "Roadster",
      href: "/roadster",
    },
    {
      title: "Semi",
      href: "/semi",
    },
    {
      title: "Charging",
      href: "/charging",
    },
    {
      title: "Powerwall",
      href: "/powerwall",
    },
    {
      title: "Commercial Energy",
      href: "/commercial",
    },
    {
      title: "Utilities",
      href: "/utilities",
    },
    {
      title: "Find Us",
      href: "/findus",
    },
    {
      title: "Support",
      href: "/support",
    },
    {
      title: "Investor Relations",
      href: "https://ir.tesla.com",
    },
  ];

  return (
    <div
      className={`fixed top-0 right-0  min-w-[311px] overflow-auto overflow-y-auto overscroll-contain overscroll-y-contain  overscroll-x-contain bg-white font-montserrat text-base font-normal shadow-xl will-change-scroll ${
        thisMenu === false ? "z-[0]" : "z-[1000]"
      }`}
      ref={elem0}
    >
      <div className="sticky top-0 z-10 flex  flex-row-reverse justify-between p-5">
        <button
          aria-label="Close Modal"
          className=" cursor-pointer appearance-none rounded p-2 hover:bg-slate-500/10 hover:transition hover:duration-300 hover:ease-in focus:outline-1 focus:outline-offset-2 focus:outline-slate-900"
          type="button"
          onClick={toggleShow}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.53 17.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.748.748 0 0 1-1.06 0 .75.75 0 0 1 0-1.06L10.94 12 5.47 6.53a.75.75 0 1 1 1.06-1.06L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
      <section className="box-border scroll-smooth px-8 pb-12 pt-1">
        <ol className="relative flex flex-col scroll-smooth ">
          {words.map((item) => (
            <li className="mb-2 flex rounded hover:bg-slate-500/10 hover:transition hover:duration-300 hover:ease-in">
              <a className="py-1 px-2 font-medium" href={item.href}>
                <span className="mx-1">{item.title}</span>
              </a>
            </li>
          ))}
          <li>
            <div
              className="flex"
              role="button"
              // tabIndex="0"
            >
              <svg
                className="ml-2 mt-2 mb-6 w-6 p-[1px]"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM9.254 20.047a8.147 8.147 0 0 1-.768-1.378c-.404-.91-.722-1.985-.935-3.169h-3.3a8.526 8.526 0 0 0 5.003 4.547Zm.603-1.988c.336.757.718 1.324 1.103 1.69.382.364.732.501 1.04.501.308 0 .658-.137 1.04-.5.385-.367.767-.934 1.103-1.69.321-.723.588-1.59.78-2.56H9.076c.192.97.459 1.837.78 2.56ZM8.75 12c0 .691.036 1.36.103 2h6.294c.067-.64.103-1.309.103-2 0-.691-.036-1.36-.103-2H8.853c-.067.64-.103 1.309-.103 2Zm-1.405-2H3.737a8.522 8.522 0 0 0-.237 2c0 .689.082 1.359.237 2h3.608a20.75 20.75 0 0 1 0-4Zm1.732-1.5h5.845c-.19-.97-.458-1.837-.779-2.56-.336-.756-.718-1.323-1.103-1.69-.382-.363-.732-.5-1.04-.5-.308 0-.658.137-1.04.5-.385.367-.767.934-1.103 1.69-.321.723-.588 1.59-.78 2.56Zm7.577 1.5a20.728 20.728 0 0 1 0 4h3.61a8.52 8.52 0 0 0 .236-2 8.52 8.52 0 0 0-.237-2h-3.609Zm3.094-1.5a8.526 8.526 0 0 0-5.002-4.547c.287.408.543.873.768 1.378.404.91.722 1.985.935 3.169h3.3Zm-12.197 0c.213-1.184.531-2.26.935-3.169.225-.505.48-.97.768-1.378A8.526 8.526 0 0 0 4.252 8.5h3.3Zm7.963 10.169c-.225.505-.48.97-.768 1.378a8.526 8.526 0 0 0 5.002-4.547h-3.3c-.212 1.184-.53 2.26-.934 3.169Z"
                  fill="currentColor"
                ></path>
              </svg>
              <div className="tds-card-body text-sm">
                <div>
                  <strong className=" font-medium">United States</strong>
                </div>
                <a className="tds-link tds-link--secondary tds-text--caption">
                  English
                </a>
              </div>
            </div>
          </li>
        </ol>
      </section>
    </div>
  );
};

export default SideMenu;
