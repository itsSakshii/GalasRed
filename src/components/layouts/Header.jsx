import { useState } from "react";
import Nav from "../ui/Nav";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // State to control nav open/close

  const navLinks = [
    { path: "/Home", label: "Home" },
    { path: "/Event", label: "Events" },
    { path: "/Vendor", label: "Vendors" },
    { path: "/Services", label: "Services" },
    { path: "/Blog", label: "Blog" },
    { path: "/About", label: "About Us" },
  ];

  const logo = {
    src: "src/assets/image/icons/galas-it-solutions.png",
    alt: "Galas IT Solutions",
  };

  return (
    <>
      <header className={`header sticky top-0 left-0 z-50 bg-customGray ${isNavOpen ? 'py-0' : 'py-6'}`} role="banner">
        <div className="container mx-auto p-4">
          <div className="header-inner flex justify-between items-center">
            <Nav links={navLinks} logo={logo} setIsNavOpen={setIsNavOpen} />
          </div>
        </div>
      </header>
      <div className="section-space-inner"></div>
    </>
  );
}
