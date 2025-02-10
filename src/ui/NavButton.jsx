import { useState } from "react";
import { NavLink } from "react-router-dom";

import Modal from "./Modal";
import CreateCategoryForm from "../features/category/CreateCategoryForm";
import CreatePromotionForm from "../features/promotion/CreatePromotionForm";

export default function NavButton({
  text,
  link,
  icon,
  dropDown = false,
  children,
}) {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  if (dropDown) {
    return (
      <div className="group relative flex cursor-pointer flex-col gap-1 rounded-lg bg-transparent px-2 py-2 font-semibold text-[#11296B]/75 transition-all duration-300 ease-in-out hover:scale-95 hover:shadow-lg hover:shadow-[#1E96FC]/50">
        <div
          className="flex items-center justify-between"
          onClick={() => setDropDownOpen(!dropDownOpen)}
        >
          <div className="flex items-center justify-start gap-4">
            <img
              src={icon}
              alt={icon}
              className="w-6 transition-transform duration-300 ease-in-out group-hover:rotate-360"
            />
            <span className="text-base">{text}</span>
          </div>
          <div>
            {dropDownOpen ? (
              <img
                src="./icons/up.svg"
                alt="up icon"
                className="w-6 rotate-180 transition-transform duration-300 ease-in-out"
              />
            ) : (
              <img
                src="./icons/down.svg"
                alt="down icon"
                className="w-6 transition-transform duration-300 ease-in-out"
              />
            )}
          </div>
        </div>

        {dropDownOpen && (
          <div className="absolute top-6 right-0 mt-2 w-fit rounded-lg bg-[#e4f2ff] opacity-100 shadow-lg transition-opacity duration-300 ease-in-out">
            <Modal>
              <Modal.Window></Modal.Window>
              <Modal.Open>
                <button className="flex w-full cursor-pointer items-center justify-end gap-4 rounded-sm bg-transparent px-2 py-1 text-[#11296B] transition-all duration-300 ease-in-out hover:bg-[#1E96FC] hover:text-white">
                  Product
                </button>
              </Modal.Open>
              <Modal.Open content={<CreateCategoryForm />}>
                <button className="flex w-full cursor-pointer items-center justify-end gap-4 rounded-sm bg-transparent px-2 py-1 text-[#11296B] transition-all duration-300 ease-in-out hover:bg-[#1E96FC] hover:text-white">
                  Category
                </button>
              </Modal.Open>
              <Modal.Open content={<CreatePromotionForm />}>
                <button className="flex w-full cursor-pointer items-center justify-end gap-4 rounded-sm bg-transparent px-2 py-1 text-[#11296B] transition-all duration-300 ease-in-out hover:bg-[#1E96FC] hover:text-white">
                  Promotion
                </button>
              </Modal.Open>
            </Modal>
          </div>
        )}
      </div>
    );
  }
  return (
    <NavLink
      to={link}
      className="group flex items-center justify-start gap-4 rounded-lg border-[#11296B]/20 bg-transparent px-2 py-2 font-semibold text-[#11296B]/75 transition-all duration-300 ease-in-out hover:scale-95 hover:text-[#11296B] hover:shadow-lg hover:shadow-[#1E96FC]/50"
    >
      <img
        src={icon}
        alt={icon}
        className="w-6 transition-transform duration-300 ease-in-out group-hover:rotate-360"
      />
      <span className="text-base">{text}</span>
    </NavLink>
  );
}
