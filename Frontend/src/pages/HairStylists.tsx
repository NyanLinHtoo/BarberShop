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
    id: 2,
    name: "Mr. John",
    image: "/image/john.jpg",
  },
  {
    id: 3,
    name: "Mr. Leo",
    image: "/image/Leo.jpg",
  },
  {
    id: 4,
    name: "Ms. Lilia",
    image: "/image/lilia.jpg",
  },
  {
    id: 5,
    name: "Ms. Makena",
    image: "/image/Makena.jpg",
  },
  {
    id: 6,
    name: "Ms. Mary",
    image: "/image/mary.jpg",
  },
  {
    id: 7,
    name: "Mr. Oliver",
    image: "/image/Oliver.jpg",
  },
  {
    id: 8,
    name: "Mr. Steve",
    image: "/image/steve.jpg",
  },
];

const HairStylists = () => {
  const [searchTerm, setSearchTerm] = useState("");
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
          height: "30vh",
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
          className="absolute z-10 block w-[90%] md:w-[75%] lg:w-[60%] p-4 text-gray-900 border border-gray-300 rounded-xl bg-gray-50 text-base"
          placeholder="Search our hair stylist..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="mx-4 sm:mx-10 my-32 flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 justify-items-center">
          {filteredStylists.map((stylist) => (
            <div
              key={stylist.id}
              className="relative w-[18rem] h-[18rem] sm:w-[18rem] sm:h-[18rem] lg:w-[18rem] lg:h-[18rem] group">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={stylist.image}
                  alt={stylist.name}
                  className="w-[18rem] h-[18rem] rounded-xl transform transition-transform duration-300 group-hover:scale-110 object-cover"
                />
                <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg sm:text-xl">
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HairStylists;
