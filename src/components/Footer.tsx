import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url("/image/AdobeStock_334798577_Preview.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "30vh",
          width: "100%",
        }}
        className="relative flex justify-between items-center bg-black text-white p-4">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="z-10">
          <img
            src="../../public/image/logo.png"
            alt="logo"
            className="w-[150px] h-[100px] ms-20 rounded-xl" // Corrected the class for size
          />
        </div>
        <div className="z-10 me-20">
          <h5 className="text-2xl sm:text-2xl text-center pb-3 tracking-wider">
            Contact us
          </h5>

          <FontAwesomeIcon icon={faPhoneVolume} shake />
          <a href="tel:01343469305" className="ps-3">
            01-343469305
          </a>
          <br />
          <FontAwesomeIcon icon={faEnvelope} shake />
          <a href="mailto:info@barbar.com" className="ps-3">
            info@barbar.com
          </a>
        </div>
      </div>
      <footer className="flex justify-between items-center bg-white text-black p-4 mx-10">
        <span>
          <i>All rights reserved 2024</i>
        </span>
        <span>
          <i>Made with 🖤 by Nyan Lin Htoo</i>
        </span>
      </footer>
    </>
  );
};

export default Footer;
