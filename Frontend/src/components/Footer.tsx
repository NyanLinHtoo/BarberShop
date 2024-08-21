import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url("/image/footer.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "20vh",
          width: "100%",
        }}
        className="relative flex flex-col md:flex-row justify-between items-center bg-black text-white p-4">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="z-10 mb-4 md:mb-0">
          <img
            src="/image/logo.png"
            alt="logo"
            className="w-[150px] h-[100px] rounded-xl md:ms-20"
          />
        </div>
        <div className="z-10 text-center md:text-left md:me-20">
          <h5 className="text-xl sm:text-2xl pb-3 tracking-wider">
            Contact us
          </h5>
          <div className="flex justify-center md:justify-start items-center mb-2">
            <FontAwesomeIcon icon={faPhoneVolume} shake />
            <a href="tel:01343469305" className="ps-3">
              01-343469305
            </a>
          </div>
          <div className="flex justify-center md:justify-start items-center">
            <FontAwesomeIcon icon={faEnvelope} shake />
            <a href="mailto:info@barbar.com" className="ps-3">
              info@barbar.com
            </a>
          </div>
        </div>
      </div>
      <footer className="flex flex-col md:flex-row justify-between items-center bg-white text-black p-4 mx-4 md:mx-10">
        <span className="mb-2 md:mb-0">
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
