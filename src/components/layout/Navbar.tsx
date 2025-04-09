
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { 
      name: "Home", 
      path: "/" 
    },
    { 
      name: "Programs", 
      path: "/programs",
      dropdown: [
        { name: "Career Development", path: "/programs#career" },
        { name: "Technical Skills", path: "/programs#technical" },
        { name: "Leadership Training", path: "/programs#leadership" },
      ]
    },
    { 
      name: "Jobs", 
      path: "/jobs",
      dropdown: [
        { name: "Full-time Positions", path: "/jobs#full-time" },
        { name: "Contract Work", path: "/jobs#contract" },
        { name: "Remote Opportunities", path: "/jobs#remote" },
      ]
    },
    { 
      name: "About", 
      path: "/about",
      dropdown: [
        { name: "Our Story", path: "/about#story" },
        { name: "Our Team", path: "/about#team" },
        { name: "Our Mission", path: "/about#mission" },
      ]
    },
    { 
      name: "Success Stories", 
      path: "/success" 
    },
    { 
      name: "Blog", 
      path: "/blog" 
    },
    { 
      name: "Contact", 
      path: "/contact" 
    },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-brand-blue font-bold text-2xl">Career</span>
              <span className="text-brand-teal font-bold text-2xl">Launchpad</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="gap-2">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.name}>
                    {link.dropdown ? (
                      <>
                        <NavigationMenuTrigger className="text-gray-700 hover:text-brand-blue px-3 py-2 text-sm font-medium transition-colors duration-200">
                          {link.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[200px] gap-3 p-4">
                            {link.dropdown.map((item) => (
                              <li key={item.name}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={item.path}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none">
                                      {item.name}
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-gray-700 hover:text-brand-blue px-3 py-2 text-sm font-medium transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Button className="ml-4 bg-brand-blue hover:bg-brand-blue/90">
              Enroll Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-blue"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <div key={link.name} className="w-full">
              {link.dropdown ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-gray-700 hover:text-brand-blue w-full text-left px-3 py-2 rounded-md text-base font-medium">
                    {link.name}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {link.dropdown.map((item) => (
                      <DropdownMenuItem key={item.name} asChild>
                        <Link
                          to={item.path}
                          className="w-full"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  to={link.path}
                  className="text-gray-700 hover:text-brand-blue block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Button className="w-full mt-3 bg-brand-blue hover:bg-brand-blue/90">
            Enroll Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
