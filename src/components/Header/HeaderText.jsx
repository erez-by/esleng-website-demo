import data from "../../data.json";
import { NavLink } from "react-router-dom";
import {motion, scale} from "framer-motion"

export default function HeaderText({isMenuOpen, setIsMenuOpen}) {
  

  return (
    <header className="flex flex-col min-h-60 bg-white shadow-sm items-center justify-center-top md:flex-row md:justify-around p-2 ">
      <NavLink to="/"><img src={data.mainPage.header.logo} className="h-32 p-1"/></NavLink>
      <div className="flex flex-col items-center space-y-2">
        <div className="flex flex-col items-center space-y-1">
          <a
            href={`mailto:${data.mainPage.header.contactEmail}`}
            className="text-gray-700 hover:text-blue-600"
          >
            {data.mainPage.header.contactEmail}
          </a>
          <a
            href={`tel:${data.mainPage.header.contactPhone}`}
            className="text-gray-700 hover:text-blue-600"
          >
            {data.mainPage.header.contactPhone}
          </a>
        </div>
        <div className="flex flex-row space-x-2 mt-2 mb-2">
          <a
            href={data.mainPage.header.facebookLink}
            className="text-gray-700 hover:text-blue-600"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              className="h-5 w-5"
            />
          </a>
          <a
            href={data.mainPage.header.whatsappLink}
            className="text-gray-700 hover:text-blue-600"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/15707/15707820.png"
              alt="WhatsApp"
              className="h-5 w-5"
            />
          </a>
          <a
            href={data.mainPage.header.facebookLink}
            className="text-gray-700 hover:text-blue-600"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="instegram"
              className="h-5 w-5"
            />
          </a>
        </div>
      </div>
      <motion.button onClick={() => {
        setIsMenuOpen(!isMenuOpen);
      }} className="mt-2"
      whileHover={{scale: 1.1}}>
        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png" alt="Menu" className="h-8 w-8"/>
      </motion.button>
      
    </header>
  );
}
