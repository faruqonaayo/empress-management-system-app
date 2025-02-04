import Modal from "./Modal";
import NavButton from "./NavButton";

export default function Sidebar({ children }) {
  return (
    <div className="flex h-full w-80 flex-col justify-between gap-1 bg-[#333533] px-2 py-4 shadow-xl">
      <div>
        <NavButton text="Add Item" icon="./icons/plus.svg" dropDown={true} />
        <NavButton text="Home" icon="./icons/home.svg" />
        <NavButton text="Products" icon="./icons/bracelet.svg" />
        <NavButton text="Categories" icon="./icons/category.svg" />
        <NavButton text="Promo" icon="./icons/discount.svg" />
        <NavButton text="Orders" icon="./icons/van.svg" />
      </div>

      <div>
        <NavButton text="Profile" icon="./icons/setting.svg" />
      </div>
    </div>
  );
}
