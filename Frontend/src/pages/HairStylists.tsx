import { useState } from "react";

export interface Stylist {
  id: number;
  name: string;
  image: string;
}

const stylists: Stylist[] = [
  {
    id: 1,
    name: "Mr. Berry",
    image: "/image/Berry.jpg",
  },
  {
    id: 1,
    name: "Mr. John",
    image: "/image/john.jpg",
  },
  {
    id: 1,
    name: "Mr. Leo",
    image: "/image/Leo.jpg",
  },
  {
    id: 1,
    name: "Ms. Lilia",
    image: "/image/lilia.jpg",
  },
  {
    id: 1,
    name: "Ms. Makena",
    image: "/image/Makena.jpg",
  },
  {
    id: 1,
    name: "Ms. Mary",
    image: "/image/mary.jpg",
  },
  {
    id: 1,
    name: "Mr. Oliver",
    image: "/image/Oliver.jpg",
  },
  {
    id: 1,
    name: "Mr. Steve",
    image: "/image/steve.jpg",
  },
];

const HairStylists = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [modalData, setModalData] = useState<Stylist | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // const handleDetailClick = (stylist: Stylist) => {
  //   setModalData(stylist);
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   setModalData(null);
  // };

  const filteredStylists = stylists.filter((stylist) =>
    stylist.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div
        style={{
          backgroundImage: `url("/image/homeBg.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          width: "100%",
        }}
        className="relative flex flex-col items-center justify-center space-y-4 p-4 text-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-75 z-0"></div>
        <h4 className="text-2xl sm:text-3xl font-semibold text-white relative z-10">
          Our Hair Stylists
        </h4>
      </div>
      <div className="relative mb-6 -mt-8 flex justify-center">
        <input
          type="text"
          id="large-input"
          className="absolute z-10 block w-[75%] p-4 text-gray-900 border border-gray-300 rounded-xl bg-gray-50 text-base"
          placeholder="Search our hair stylist..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="mx-10 my-32 flex flex-col">
        <div className="grid grid-cols-3 gap-x-4 gap-y-10 justify-items-center">
          {filteredStylists.map((stylist) => (
            <div
              key={stylist.id}
              className="relative w-[25rem] h-[18rem] group">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={stylist.image}
                  alt={stylist.name}
                  className="w-full h-[18rem] rounded-xl transform transition-transform duration-300 group-hover:scale-110"
                />
                <span className="absolute bottom-10 left-36 text-white">
                  {stylist.name}
                </span>
              </div>
              <div className="absolute rounded-xl inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h5 className="text-white text-xl mb-2">{stylist.name}</h5>
                <span className="border-b-2 border-white w-[80%] mb-4"></span>

                <div className="grid grid-flow-col gap-6 pt-5">
                  <button className="rounded-xl bg-white border py-2 px-4 text-md text-black hover:bg-transparent hover:text-white">
                    Book Now!
                  </button>
                  {/* <button
                    className="rounded-xl bg-transparent border py-2 px-4 text-md text-white hover:bg-white hover:text-black"
                    onClick={() => handleDetailClick(stylist)}>
                    Detail
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* {isModalOpen && modalData && (
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
                  alt={modalData.name}
                  className="w-full h-auto"
                />
              </div>

              <div className="mt-4 w-1/2 pl-8">
                <h5 className="text-xl font-bold">{modalData.name}</h5>
                <span className="border-b-2 border-gray-800 w-16 mb-4 block"></span>
                <p className="mb-4">{modalData.description}</p>
                <span className="self-end block mb-4">{modalData.price}</span>
                <button className="rounded bg-white border py-2 px-4 text-md text-black hover:bg-transparent hover:text-white">
                  Book Now!
                </button>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </>
  );
};

export default HairStylists;
