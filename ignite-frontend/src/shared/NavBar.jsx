import {
  Button,
  Card,
  IconButton,
  MobileNav,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import "./navbar.css";
import { Avatar } from "@material-tailwind/react";
import { SiFireship } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ConnectWalletButton from "../assets/components/ConnectWalletButton";
// import { onPressConnect, onPressLogout } from "./functions/walletFunctions";
import Web3 from "web3";
import { onPressConnect, onPressLogout } from "./functions/connectWallet";
import { Modal } from "../assets/components/PaymentModal";
const NavBar = () => {
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");
  const [openNav, setOpenNav] = React.useState(false);
  const [openPaymentModal, setOpenPaymentModal] = useState(false);
  const { authToken, logout } = useAuth();
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const activeStyles = {
    fontWeight: "bold",
    color: "#161616",
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        {/* <a href="/browse" className="flex items-center">
          Browse
        </a> */}
        <NavLink
          to={"browse"}
          className="flex items-center"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Browse
        </NavLink>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        {/* <a href="contact" className="flex items-center">
          Contact Us
        </a> */}
        <NavLink
          to={"contact"}
          className="flex items-center"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Contact us
        </NavLink>
      </Typography>
    </ul>
  );
  return (
    <>
      <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] mb-10 mt-2">
        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Typography
              variant="h5"
              as="a"
              href="/"
              className="mr-4 cursor-pointer py-1.5 font-medium"
            >
              <div style={{ display: "inline-block", marginRight: "0.22em" }}>
                <SiFireship />
              </div>
              Project Ignite
            </Typography>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <div className="flex items-center gap-x-1">
                {authToken ? (
                  <>
                    <ConnectWalletButton
                      onPressConnect={async () =>
                        await onPressConnect({ setAddress, setLoading })
                      }
                      onPressLogout={async () =>
                        await onPressLogout({ setAddress })
                      }
                      loading={loading}
                      address={address}
                    />

                    <NavLink to={"/login"}>
                      <Button
                        onClick={() => logout()}
                        fullWidth
                        variant="text"
                        size="sm"
                        className=""
                      >
                        <span>Sign out</span>
                      </Button>
                    </NavLink>
                  </>
                ) : (
                  <NavLink to={"/login"}>
                    <Button fullWidth variant="text" size="sm" className="">
                      <span>Log in</span>
                    </Button>
                  </NavLink>
                )}
                {address && (
                  <Button
                    onClick={setOpenPaymentModal}
                    fullWidth
                    variant="text"
                    size="sm"
                    className=""
                  >
                    <span>Fund someone right now!</span>
                  </Button>
                )}
                {openPaymentModal && (
                  <Modal
                    address={address}
                    open={openPaymentModal}
                    setOpen={setOpenPaymentModal}
                  />
                )}
              </div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav open={openNav}>
            {navList}
            <div className="flex items-center gap-x-1">
              {authToken ? (
                <NavLink to={"/login"}>
                  <Button fullWidth variant="text" size="sm" className="">
                    <span>Log In</span>
                  </Button>
                </NavLink>
              ) : (
                <>
                  <NavLink to={"/login"}>
                    <Button fullWidth variant="text" size="sm" className="">
                      <span>Log out</span>
                    </Button>
                  </NavLink>
                  <ConnectWalletButton />
                </>
              )}
            </div>
          </MobileNav>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
