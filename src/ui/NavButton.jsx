import { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import CreateCategoryForm from "../features/category/CreateCategoryForm";

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
      <div className="flex cursor-pointer flex-col rounded-sm bg-transparent px-2 py-1 text-white transition-all hover:bg-[#464846]">
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
          <div className="mt-2 flex flex-col items-end">
            <Modal>
              <Modal.Window>hello</Modal.Window>

              <Modal.Open>
                <button className="flex cursor-pointer items-center justify-end gap-4 rounded-sm bg-transparent px-2 py-1 text-white transition-all hover:bg-[#ffd100] hover:text-black">
                  Product
                </button>
              </Modal.Open>
              <Modal.Open content={<CreateCategoryForm />}>
                <button className="flex cursor-pointer items-center justify-end gap-4 rounded-sm bg-transparent px-2 py-1 text-white transition-all hover:bg-[#ffd100] hover:text-black">
                  Category
                </button>
              </Modal.Open>
              <Modal.Open>
                <button className="flex cursor-pointer items-center justify-end gap-4 rounded-sm bg-transparent px-2 py-1 text-white transition-all hover:bg-[#ffd100] hover:text-black">
                  Promo
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
      className="flex items-center justify-start gap-4 rounded-sm bg-transparent px-2 py-1 text-white transition-all hover:bg-[#464846]"
    >
      <img src={icon} alt={icon} className="w-6" />
      <span className="text-base">{text}</span>
    </NavLink>
  );
}
