import * as React from "react"
import logoOnepoint from "../images/onepoint_logo.png"

const Header = ({ siteTitle }) => (
  <header className="flex w-full h-14 bg-[#041021]">
    <nav className="flex w-full h-auto justify-center items-center">
      <img
        className="inline-block ml-32 m-0 w-[136px] h-[32px]"
        src={logoOnepoint}
        alt="Image"
      />
      <ul className="flex h-8 w-full space-x-10 justify-center -ml-32 m-0">
        <li>
          <a
            className="text-white font-poppins no-underline font-normal"
            href="#"
          >
            ACCUEIL
          </a>
        </li>
        <li>
          <a
            className="text-white font-poppins no-underline font-normal"
            href="#"
          >
            À PROPOS
          </a>
        </li>
        <li>
          <a
            className="text-white font-poppins no-underline font-normal"
            href="#"
          >
            NOS ÉQUIPES
          </a>
        </li>
        <li>
          <a
            className="text-white font-poppins no-underline font-normal"
            href="#"
          >
            ACTUS
          </a>
        </li>
        <li>
          <a
            className="text-white font-poppins no-underline font-normal"
            href="#"
          >
            CONTACT & PRESSE
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
