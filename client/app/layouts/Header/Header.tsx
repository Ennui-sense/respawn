import "./Header.scss";

import LogoImageSrc from "~/assets/images/logo.svg";

import Logo from "~/components/Logo/Logo";
import Menu from "~/components/Menu/Menu";
import BurgerButton from "~/components/BurgerButton/BurgerButton";

import { useState, useEffect } from "react";
import MenuModal from "~/components/MenuModal/MenuModal";

import { AnimatePresence } from "motion/react"
import clsx from "clsx";
import useMediaQuery from "~/hooks/useMediaQuery";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const isTablet = useMediaQuery("tablet");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;

      if (isChanged === isScrolled) {
        return;
      }

      setIsChanged(isScrolled);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isChanged])

  useEffect(() => {
    if (!isTablet) {
      setIsOpen(false);
    }
  }, [isTablet])

  return (
    <header className={clsx("header", { "header--changed": isChanged })}>
      <div className="header__inner container">
        <Logo className="header__logo" imageSrc={LogoImageSrc} />
        {isTablet ? <BurgerButton openModal={() => setIsOpen(true)} /> : <Menu className="header__menu" />}

        <AnimatePresence>
          {isOpen && <MenuModal closeModal={() => setIsOpen(false)} />}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header
