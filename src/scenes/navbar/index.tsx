import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link as RouterLink } from "react-router-dom";
import Logo from "@/assets/logo.png";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-pale-blue drop-shadow";

  return (
    <nav>
      {/* Fixed Navbar */}
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 left-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} w-full px-10`}>
          {/* LEFT SIDE */}
          <img className="max-w-[80px] w-full h-auto" src={Logo} alt="logo" />

          {/* RIGHT SIDE */}
          {isAboveMediumScreens ? (
            <div className="ml-auto flex items-center gap-20 text-4xl">
              <RouterLink
                to="/"
                onClick={() => setSelectedPage(SelectedPage.Home)}
                className={`hover:text-blue-500 ${
                  selectedPage === SelectedPage.Home ? "text-blue-500" : ""
                }`}
              >
                Home
              </RouterLink>
              <RouterLink
                to="/projects"
                onClick={() => setSelectedPage(SelectedPage.Projects)}
                className={`hover:text-blue-500 ${
                  selectedPage === SelectedPage.Projects ? "text-blue-500" : ""
                }`}
              >
                Projects
              </RouterLink>
              {/* You can uncomment the Resume link if needed */}
            </div>
          ) : (
            <button
              className="rounded-full bg-blue-main p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-pale-blue drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-blue-main" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-4xl">
            <RouterLink
              to="/"
              onClick={() => setSelectedPage(SelectedPage.Home)}
              className={`hover:text-blue-500 ${
                selectedPage === SelectedPage.Home ? "text-blue-500" : ""
              }`}
            >
              Home
            </RouterLink>
            <RouterLink
              to="/projects"
              onClick={() => setSelectedPage(SelectedPage.Projects)}
              className={`hover:text-blue-500 ${
                selectedPage === SelectedPage.Projects ? "text-blue-500" : ""
              }`}
            >
              Projects
            </RouterLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
