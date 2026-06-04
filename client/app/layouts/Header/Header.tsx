import "./Header.scss";

import LogoImageSrc from "~/assets/images/logo.svg";

import Logo from "~/components/Logo/Logo";
import Menu from "~/components/Menu/Menu";
import BurgerButton from "~/components/BurgerButton/BurgerButton";

import { useState, useEffect } from "react";
import MenuModal from "~/components/MenuModal/MenuModal";

import { AnimatePresence } from "motion/react"

const Header = () => {
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 64rem)")

    const handleChange = (event: MediaQueryListEvent) => {
      setIsTablet(event.matches)
    }

    setIsTablet(mediaQuery.matches)

    mediaQuery.addEventListener("change", (event) => handleChange(event));

    return () => mediaQuery.removeEventListener("change", (event) => handleChange(event))
  }, [])

  return (
    <header className="header">
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
