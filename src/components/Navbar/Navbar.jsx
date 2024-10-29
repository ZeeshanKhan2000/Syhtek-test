import { MdOutlineMail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="header-container fixed top-0 left-0 w-full z-50">
      <div className="header-container fixed top-0 left-0 w-full z-50 bg-white">
        <div className="header-top hidden md:flex items-center justify-between px-5 bg-blue-400 py-2">
          <div className="flex items-center gap-5">
            <h6 className="text-white text-xl flex items-center gap-2">
              <span>
                <MdOutlineMail />
              </span>
              Info@example.com
            </h6>
            <h6 className="text-white text-xl flex items-center gap-2">
              <span>
                <IoMdCall />
              </span>{" "}
              +12123434
            </h6>
          </div>
          <div className="flex items-center gap-2">
            <h6 className="text-white text-xl">Privacy & Policy |</h6>
            <h6 className="text-white text-xl">Terms and Condition</h6>
          </div>
        </div>

        {/* Desktop Navbar (Visible only on large screens) */}
        <div className="navbar-header hidden navbar-desktop">
          <nav className="navbar-links flex items-center justify-center py-4">
            <ul className="flex items-center gap-7 font-xl">
              <li className="text-xl font-semibold active">Home</li>
              <li className="text-xl font-semibold">About Us</li>
              <li className="text-xl font-semibold">Wholesale</li>
              <li className="text-3xl font-bold">Logo</li>
              <li className="text-xl font-semibold">Services</li>
              <li className="text-xl font-semibold">News</li>
              <li className="text-xl font-semibold">How It Works</li>
            </ul>
          </nav>
        </div>

        {/* Mobile Navbar (Visible only on small screens) */}
        <div className="navbar-header flex md:hidden items-center justify-between px-5 py-4">
          {/* Logo on the Left */}
          <div className="text-3xl font-bold">Logo</div>
          <div onClick={toggleMobileMenu}>
            <div className="w-6 h-1 bg-black mb-1"></div>
            <div className="w-6 h-1 bg-black mb-1"></div>
            <div className="w-6 h-1 bg-black"></div>
          </div>

          {/* Mobile Menu Links */}
          <ul
            className={`flex-col items-center gap-7 font-xl bg-white absolute left-0 right-0 p-5 top-16 ${
              isMobileMenuOpen ? "flex" : "hidden"
            }`}
          >
            <li className="text-xl font-semibold">Home</li>
            <li className="text-xl font-semibold">About Us</li>
            <li className="text-xl font-semibold">Wholesale</li>
            <li className="text-xl font-semibold">Services</li>
            <li className="text-xl font-semibold">News</li>
            <li className="text-xl font-semibold">How It Works</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
