import Logo from "../../../public/assets/navbar/logo.svg";
import Menu from "../../../public/assets/navbar/menu.svg";

export default function Navbar() {
  return <header className="sticky top-0 flex flex-row bg-red-100">

    <Menu className="mb-3 ml-3 mt-3" />

    <Logo className="mb-3 ml-3 mt-3" />

  </header>
};
