import { useState } from "react";
import Nav from "../ui/Nav";
import logoImage from "../../assets/image/logo/galas.webp"; 

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // State to control nav open/close

  const navLinks = [
    { path: "/", label: "Home" },         // "/" for home route
    { path: "/event", label: "Events" },  // Lowercase for consistency
    { path: "/discover", label: "Discover" },
    { path: "/services", label: "Services" },
    { path: "/blog", label: "Blog" },
    { path: "/about", label: "About Us" },
  ];

  // Use the imported logoImage for src
  const logo = {
    src: logoImage,
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
