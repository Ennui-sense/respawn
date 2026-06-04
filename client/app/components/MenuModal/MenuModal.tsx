import "./MenuModal.scss";

import { motion } from "motion/react";

import Menu from "../Menu/Menu";

interface IMenuModal {
  closeModal: () => void;
}

const MenuModal = ({ closeModal }: IMenuModal) => {
  return (
    <motion.div
      className="menu-modal"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="menu-modal__inner">
        <Menu/>
      </div>
      
      <button type="button" className="menu-modal__button" onClick={closeModal}>тык</button>
    </motion.div>
  )
}

export default MenuModal
