import NavButton from "./NavButton";

export default function Sidebar() {
  return (
    <div className="flex h-full w-80 flex-col justify-between gap-1 bg-white px-4 py-4 shadow-xl">
      <div className="flex flex-col justify-center gap-2">
        <NavButton text="Add Item" icon="./icons/plus.svg" dropDown={true} />
        <NavButton text="Home" icon="./icons/home.svg" link="/" />
        <NavButton text="Products" icon="./icons/bracelet.svg" />
        <NavButton
          text="Categories"
          icon="./icons/category.svg"
          link="/categories"
        />
        <NavButton
          text="Promotions"
          icon="./icons/discount.svg"
          link="/promotions"
        />
        <NavButton text="Orders" icon="./icons/van.svg" />
        <NavButton text="Customers" icon="./icons/users.svg" />
        <NavButton text="Messages" icon="./icons/messages.svg" />
      </div>

      <div>
        <NavButton text="Profile" icon="./icons/setting.svg" />
      </div>
    </div>
  );
}
