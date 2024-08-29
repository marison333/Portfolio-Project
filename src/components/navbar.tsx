import { Link } from "@nextui-org/link";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import React from "react";

import { siteConfig } from "@/config/site";
import { InstagramIcon, LinkedinIcon } from "@/components/icons";

export const Navbar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <div className="hidden md:flex gap-4 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <Link
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium",
                  )}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </NavbarItem>
            ))}
          </div>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden sm:flex gap-2">
            <Button
              className="bg-gradient-to-br from-forestgreen to-limegreen text-white"
              color="success"
              variant="shadow"
              onPress={onOpen}
            >
              Contact me
            </Button>
            <Modal
              backdrop={"blur"}
              isOpen={isOpen}
              onOpenChange={onOpenChange}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      You are about to be send to your email service
                    </ModalHeader>
                    <ModalBody>Are you sure?</ModalBody>
                    <ModalFooter>
                      <Button
                        isExternal
                        as={Link}
                        className="bg-gradient-to-tr from-forestgreen to-limegreen text-white"
                        href=""
                        variant="shadow"
                        onPress={onClose}
                      >
                        yes
                      </Button>
                      <Button color="danger" variant="ghost" onPress={onClose}>
                        No
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
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
          {siteConfig.navItems.map((item) => (
            <NavbarMenuItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                href={item.href}
                underline="active"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <Button
              className="bg-gradient-to-br from-forestgreen to-limegreen text-white"
              color="success"
              variant="shadow"
              onPress={onOpen}
            >
              Contact me
            </Button>
          </NavbarMenuItem>
        </NavbarMenu>
      </NextUINavbar>
    </header>
  );
};
