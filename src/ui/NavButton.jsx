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
      <div className="flex cursor-pointer flex-col gap-1 rounded-lg bg-transparent px-2 py-2 font-medium text-[#11296B]/80 shadow transition-all hover:shadow-[#1E96FC]">
        <div
          className="flex items-center justify-between"
          onClick={() => setDropDownOpen(!dropDownOpen)}
        >
          <div className="flex items-center justify-start gap-4">
            <img src={icon} alt={icon} className="w-6" />
            <span className="text-base">{text}</span>
          </div>
          <div>
            {dropDownOpen ? (
              <img src="./icons/up.svg" alt="up icon" className="w-6" />
            ) : (
              <img src="./icons/down.svg" alt="down icon" className="w-6" />
            )}
          </div>
        </div>

        {dropDownOpen && (
          <div className="mt-2 flex flex-col items-end rounded-lg bg-[#1E96FC]/70 p-2">
            <Modal>
              <Modal.Window></Modal.Window>
              <Modal.Open>
                <button className="flex cursor-pointer items-center justify-end gap-4 rounded-sm bg-transparent px-2 py-1 text-white transition-all hover:bg-white hover:text-[#11296B]">
                  Product
                </button>
              </Modal.Open>
              <Modal.Open content={<CreateCategoryForm />}>
                <button className="flex cursor-pointer items-center justify-end gap-4 rounded-sm bg-transparent px-2 py-1 text-white transition-all hover:bg-white hover:text-[#11296B]">
                  Category
                </button>
              </Modal.Open>
              <Modal.Open content={<CreatePromotionForm />}>
                <button className="flex cursor-pointer items-center justify-end gap-4 rounded-sm bg-transparent px-2 py-1 text-white transition-all hover:bg-white hover:text-[#11296B]">
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
      className="flex items-center justify-start gap-4 rounded-lg border-[#11296B]/20 bg-transparent px-2 py-2 font-medium text-[#11296B]/80 shadow transition-all hover:text-[#11296B] hover:shadow-[#1E96FC]"
    >
      <img src={icon} alt={icon} className="w-6" />
      <span className="text-base">{text}</span>
    </NavLink>
  );
}
