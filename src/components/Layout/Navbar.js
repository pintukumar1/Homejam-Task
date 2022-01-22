import React from "react";
import { useWidth } from "../../hooks/useWidth";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
const Navbar = () => {
	const width = useWidth();
	const navbarSelector = () => {
		switch (width) {
			case "xs":
			case "sm":
				return <NavbarMobile />;
			default:
				return <NavbarDesktop />;
		}
	};

	return navbarSelector(width);
};

export default Navbar;
