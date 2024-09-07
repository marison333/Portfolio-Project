import { Link } from "@nextui-org/link";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from "@nextui-org/navbar";
import React from "react";

import { InstagramIcon, LinkedinIcon } from "@/components/icons";
import ContactButton from "@/components/contact.tsx";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header>
      <NextUINavbar
        maxWidth="xl"
        position="sticky"
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <h2 className="font-bold text-inherit">Marison Sol</h2>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden sm:flex gap-2">
            <ContactButton />
          </NavbarItem>
          <NavbarItem>
            <Link isExternal href="https://www.instagram.com/marison.jpeg">
              <InstagramIcon className="text-default-500" />
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link isExternal href="https://www.linkedin.com/in/marison-sol">
              <LinkedinIcon className="text-default-500" />
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          <NavbarMenuItem>
            <h4>Wanna talk?</h4>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <ContactButton />
          </NavbarMenuItem>
        </NavbarMenu>
      </NextUINavbar>
    </header>
  );
};
