import { Button } from "@headlessui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Service } from "./Service";

const services: Service[] = [
  {
    id: 1,
    title: "Hair Cut",
    image: "/image/haircut.jpg",
    description:
      "Each haircut begins with a complete consultation and hair analysis, followed by a magnificent luxury relaxing sensational atmosphere. After your cut, we style and give our recommendations for home hair care.",
    price: "฿ 250",
  },
  {
    id: 2,
    title: "Children Hair Cut",
    image: "/image/childrenhaircut.jpg",
    description:
      "Each haircut begins with a complete consultation and hair analysis...",
    price: "฿ 250",
  },
  {
    id: 3,
    title: "Beard Shaving",
    image: "/image/beardshaving.jpg",
    description:
      "Each beard shave begins with a complete consultation and hair analysis...",
    price: "฿ 250",
  },
];

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<Service | null>(null);
  const navigate = useNavigate();

  const handleDetailClick = (service: Service) => {
    setModalData(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url("/image/frantisek-canik-htm5bLLW2GY-unsplash.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
        className="relative flex flex-col items-center justify-center space-y-4 p-4 text-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-75 z-0"></div>

        {/* Content */}
        <p className="bg-transparent border rounded-xl text-white px-4 py-2 text-lg sm:text-xl relative z-10">
          Your hair, your identity.
        </p>
        <h4 className="text-2xl sm:text-3xl font-semibold text-white relative z-10">
          Crafted for Your Comfort, Styled with Elegance.
        </h4>
        <p className="text-sm sm:text-lg text-slate-300 relative z-10">
          In the barber's hands, every man is a king.
        </p>

        <div className="relative z-10 grid grid-flow-col gap-6 pt-5">
          <Button className="rounded-xl bg-white border py-4 px-8 text-md text-black data-[hover]:bg-transparent data-[hover]:text-white">
            Book Now!
          </Button>
          <Button className="rounded-xl bg-transparent border py-4 px-8 text-md text-white data-[hover]:bg-white data-[hover]:text-black">
            Learn More
          </Button>
        </div>
      </div>

      <div className="p-5">
        <h5 className="text-2xl sm:text-2xl text-center pb-5 tracking-wider">
          Who are we?
        </h5>
        <div className="grid grid-cols-2 gap-8">
          <p className="px-10 py-5 leading-9 tracking-wider">
            At [Barbershop Name], we are more than just a place for a haircut—we
            are a community hub where style meets tradition. Our skilled barbers
            are artisans of their craft, combining classic techniques with
            modern trends to deliver the perfect cut, tailored to your unique
            personality. Whether you're here for a fresh fade, a traditional
            shave, or simply a place to relax and unwind, we ensure every visit
            is a premium experience. With a deep passion for grooming and a
            commitment to excellence, we’re dedicated to helping you look and
            feel your best. Welcome to a barbershop where precision meets
            personalization, and every client is treated like a friend.
          </p>
          <div className="flex flex-col space-y-6">
            <div className="relative w-[30rem] h-60 self-end overflow-hidden group">
              <img
                src="/image/AdobeStock_231500099_Preview.jpg"
                alt=""
                className="absolute w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 rounded"
              />
              <div className="absolute inset-3 border border-gray-400 rounded-md"></div>
            </div>
            <div className="relative w-[30rem] h-64 overflow-hidden group">
              <img
                src="/image/faceSkinWax.jpg"
                alt=""
                className="absolute w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 rounded"
              />
              <div className="absolute inset-3 border border-gray-400 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="m-10 flex flex-col">
        <h5 className="text-2xl sm:text-2xl text-center pb-5 tracking-wider">
          Our Services
        </h5>
        <div className="grid grid-cols-3 gap-4 justify-items-center">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative w-[25rem] h-[18rem] group">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[18rem] rounded-xl transform transition-transform duration-300 group-hover:scale-110"
                />
                <span className="absolute bottom-10 left-36 text-white">
                  {service.title}
                </span>
              </div>
              <div className="absolute rounded-xl inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h5 className="text-white text-xl mb-2">{service.title}</h5>
                <span className="border-b-2 border-white w-[80%] mb-4"></span>
                <p className="text-white mb-2 text-center px-10">
                  {service.description}
                </p>
                <span className="text-white self-end pe-10">
                  {service.price}
                </span>
                <div className="grid grid-flow-col gap-6 pt-5">
                  <button className="rounded-xl bg-white border py-2 px-4 text-md text-black hover:bg-transparent hover:text-white">
                    Book Now!
                  </button>
                  <button
                    className="rounded-xl bg-transparent border py-2 px-4 text-md text-white hover:bg-white hover:text-black"
                    onClick={() => handleDetailClick(service)}>
                    Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="self-end pt-5 me-10">
          <Button
            onClick={() => navigate("/services")}
            className="rounded-xl bg-white border py-4 px-8 text-md text-black data-[hover]:bg-transparent data-[hover]:text-white">
            See all our services
          </Button>
        </div>

        {isModalOpen && modalData && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={closeModal}>
            <div
              className="bg-white p-8 rounded-lg max-w-3xl w-full flex relative"
              onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                onClick={closeModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="relative w-1/2">
                <img
                  src={modalData.image}
                  alt={modalData.title}
                  className="w-full h-auto"
                />
              </div>

              <div className="mt-4 w-1/2 pl-8">
                <h5 className="text-xl font-bold">{modalData.title}</h5>
                <span className="border-b-2 border-gray-800 w-16 mb-4 block"></span>
                <p className="mb-4">{modalData.description}</p>
                <span className="self-end block mb-4">{modalData.price}</span>
                <button className="rounded bg-white border py-2 px-4 text-md text-black hover:bg-transparent hover:text-white">
                  Book Now!
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        style={{
          backgroundImage: `url("/image/andre-reis-o6cWr3SwyNw-unsplash.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          width: "100%",
        }}
        className="relative flex flex-col items-center justify-center space-y-4 p-4 text-center">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <p className="text-white px-4 py-2 text-xl sm:text-3xl font-bold relative z-10">
          Look sharp, feel sharper, and enjoy the difference.
        </p>
        <p className="text-sm sm:text-lg text-white relative z-10 brightness-75">
          every man deserves a great cut to enjoy.
        </p>
      </div>

      <div className="m-10 flex flex-col">
        <h5 className="text-2xl sm:text-2xl text-center pb-5 tracking-wider">
          Hair Stylists
        </h5>
        <div className="grid grid-cols-3 gap-4 justify-items-center">
          <div className="relative w-[25rem] h-[25rem] group">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="/image/mary.jpg"
                alt="Hair Cut"
                className="w-full h-[25rem] rounded-xl transform transition-transform duration-300 group-hover:scale-110 object-cover"
              />
              <span className="absolute bottom-10 left-36 text-white font-bold tracking-wider">
                Ms. Mary
              </span>
            </div>
          </div>

          <div className="relative w-[25rem] h-[25rem] group">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="/image/steve.jpg"
                alt="Hair Cut"
                className="w-full h-[25rem] rounded-xl transform transition-transform duration-300 group-hover:scale-110 object-cover"
              />
              <span className="absolute bottom-10 left-36 text-white font-bold tracking-wider">
                Mr. Steve
              </span>
            </div>
          </div>

          <div className="relative w-[25rem] h-[25rem] group">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="/image/john.jpg"
                alt="Hair Cut"
                className="w-full h-[25rem] rounded-xl transform transition-transform duration-300 group-hover:scale-110 object-cover"
              />
              <span className="absolute bottom-10 left-36 text-white font-bold tracking-wider">
                Mr. John
              </span>
            </div>
          </div>
        </div>
        <div className="self-end pt-5 me-10">
          <Button
            onClick={() => navigate("/hairstylists")}
            className="rounded-xl bg-white border py-4 px-8 text-md text-black data-[hover]:bg-transparent data-[hover]:text-white">
            See all our Hair stylists
          </Button>
        </div>
      </div>

      <div className="m-10 flex flex-col">
        <h5 className="text-2xl sm:text-2xl text-center pb-5 tracking-wider">
          Locations
        </h5>
        <div className="self-center">
          {/* <CustomMap /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15504.456344670249!2d100.5889645871582!3d13.711539500000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f642db8a50f%3A0x2abf3b0973ff193f!2sApple%20Hairstyles%20People%20Park!5e0!3m2!1sen!2sth!4v1723910736464!5m2!1sen!2sth"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </>
  );
};

export default Home;
