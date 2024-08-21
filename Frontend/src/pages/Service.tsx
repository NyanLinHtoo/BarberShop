import { useState } from "react";

export interface Service {
  id: number;
  title: string;
  image: string;
  description: string;
  price: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Hair Cut",
    image: "/image/haircut.jpg",
    description:
      "Each haircut begins with a complete consultation and hair analysis...",
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
  {
    id: 4,
    title: "Hair Color Dye",
    image: "/image/hairColorDye.jpg",
    description:
      "Each beard shave begins with a complete consultation and hair analysis...",
    price: "฿ 250",
  },
  {
    id: 5,
    title: "Hair Styling",
    image: "/image/hairStyle.jpg",
    description:
      "Each beard shave begins with a complete consultation and hair analysis...",
    price: "฿ 250",
  },
  {
    id: 6,
    title: "Cleaning Strip",
    image: "/image/cleaningStrip.jpg",
    description:
      "Each beard shave begins with a complete consultation and hair analysis...",
    price: "฿ 250",
  },
  {
    id: 7,
    title: "Face Skin Wax",
    image: "/image/faceSkinWax.jpg",
    description:
      "Each beard shave begins with a complete consultation and hair analysis...",
    price: "฿ 250",
  },
  {
    id: 8,
    title: "Body Skin Wax",
    image: "/image/bodyskinwax.jpg",
    description:
      "Each beard shave begins with a complete consultation and hair analysis...",
    price: "฿ 250",
  },
  {
    id: 9,
    title: "Hair Wash",
    image: "/image/hairwash.jpg",
    description:
      "Each beard shave begins with a complete consultation and hair analysis...",
    price: "฿ 250",
  },
  {
    id: 10,
    title: "HFace Treatment",
    image: "/image/facetreatment.jpg",
    description:
      "Each beard shave begins with a complete consultation and hair analysis...",
    price: "฿ 250",
  },
];

const Service = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<Service | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDetailClick = (service: Service) => {
    setModalData(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div
        style={{
          backgroundImage: `url("/image/homeBg.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "30vh",
          width: "100%",
        }}
        className="relative flex flex-col items-center justify-center space-y-4 p-4 text-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-75 z-0"></div>
        <h4 className="text-2xl sm:text-3xl font-semibold text-white relative z-10">
          Our Services
        </h4>
      </div>
      <div className="relative mb-6 -mt-8 flex justify-center">
        <input
          type="text"
          id="large-input"
          className="absolute z-10 block w-[75%] p-4 text-gray-900 border border-gray-300 rounded-xl bg-gray-50 text-base"
          placeholder="Search our services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="mx-10 my-32 flex flex-col">
        <div className="grid grid-cols-3 gap-x-4 gap-y-10 justify-items-center">
          {filteredServices.map((service) => (
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
    </>
  );
};

export default Service;
