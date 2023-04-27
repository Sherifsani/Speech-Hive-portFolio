import { useState } from "react";
import FacebookIcon from "../icons/FacebookIcon";
import TwitterIcon from "../icons/TwitterIcon";
import InstagramIcon from "../icons/Instagramicon";

function Navbar({ onClick, openMenu }) {
  return (
    <>
      <nav className="z-20 mobile-nav w-full h-16 bg-white flex justify-between items-center p-[1.5rem] lg:hidden">
        <div className=""></div>
        <h1 className="text-logo-color">Speech Hack</h1>
        <div className="menu cursor-pointer" onClick={onClick}>
          {!openMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" />
            </svg>
          )}
        </div>
      </nav>
      <nav className="desktop-nav bg-white hidden py-4 items-center mx-auto max-w-7xl md:flex">
        <div className="navbar">
          <div className="navbar-start">
            <div className="social-icons flex gap-3">
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
            </div>
          </div>
          <div className="navbar-center">
            <h1 className="text-cta font-sans text-3xl">Speech Hack</h1>
          </div>
          <div className="navbar-end">
            <a
              href=""
              className="btn bg-primary text-xl font-serif normal-case text-cta  py-3 px-7 border-none grid place-items-center rounded-lg font-normal hover:shadow-lg hover:bg-primary"
            >
              Call Us
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
