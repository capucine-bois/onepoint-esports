import * as React from "react"
import linkedin from "../images/linkedin_logo.png" // Tell webpack this JS file uses this image
import square_w from "../images/square_w_logo.png" // Tell webpack this JS file uses this image
import twitch from "../images/twitch_logo.png" // Tell webpack this JS file uses this image

const Footer = () => (
  <footer className="w-full h-20 text-white flex bg-onepoint-blue p-5 shrink-0">
    <div className="flex text-sm font-poppins font-semibold justify-between">
      <div className="flex items-center gap-10 h-11">
        <img
          className="inline h-10 w-10 m-0"
          src={square_w}
          alt="Logo linkedin"
        />
        <p className="flex-1 m-0 whitespace-nowrap">© Ligue Corpo 2023</p>
      </div>
      <div className="flex justify-center items-center gap-5 underline w-[936px]">
        <a
          className="m-0 text-white decoration-[0.5px] font-semibold"
          href="https://www.groupeonepoint.com/fr/mentions-legales/"
        >
          Mentions légales
        </a>
        <a
          className="m-0 text-white decoration-[0.5px] font-semibold"
          href="https://www.groupeonepoint.com/fr/politique-confidentialite-donnees-caracteres-personnel/"
        >
          Charte de confidentialité
        </a>
        <a
          className="m-0 text-white decoration-[0.5px] font-semibold"
          href="https://www.groupeonepoint.com/fr/conditions-generales-dutilisation/"
        >
          Conditions d'utilisation
        </a>
      </div>
      <div className="flex gap-10 items-center">
        <img
          className="inline h-10 w-10 m-0"
          src={linkedin}
          alt="Logo linkedin"
        />
        <img className="inline h-10 w-10 m-0" src={twitch} alt="Logo twitch" />
      </div>
    </div>
  </footer>
)

export default Footer
