import DesktopNavbar from "./desktopNavbar";
import MobileNavbar from "./mobileNavbar";
import { linkList } from "./linkList";

export function Navbar() {
  return (
    <>
      <div className="max-md:hidden">
        <DesktopNavbar links={linkList} />
      </div>
      <div className="md:hidden">
        <MobileNavbar links={linkList} />
      </div>
    </>
  );
}
