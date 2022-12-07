import React from "react";
import { Navbar } from "flowbite-react";
import SearchField from "./search"
import AvatarField from "./Avatar";

export default function Navigation() {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      menuOpen={false}
    >
      <Navbar.Brand href="#">
        <img
          src="/icon.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          VideoSRV
        </span>
      </Navbar.Brand>
      <SearchField></SearchField>
      <AvatarField></AvatarField>
    </Navbar>

  )
}