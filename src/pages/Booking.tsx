import moment from "moment";
import { FormEvent, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import CSS for the DatePicker

const Booking = () => {
  // State to manage form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const bookingInfo = { name, email, selectedDate, selectedTime };
    console.log(bookingInfo);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url("/image/frantisek-canik-htm5bLLW2GY-unsplash.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "20vh",
          width: "100%",
        }}
        className="relative flex flex-col items-center justify-center space-y-4 p-4 text-center bg-black bg-opacity-70">
        <div className="absolute inset-0 bg-black opacity-75 z-0"></div>
        <h4 className="text-2xl sm:text-3xl font-semibold text-white z-10">
          Booking
        </h4>
      </div>

      <div className="grid grid-cols-2 gap-8 h-[70vh] m-10">
        <div className="flex flex-col-3 space-x-10">
          <div className="relative h-[25rem] w-52 self-end overflow-hidden group">
            <img
              src="/image/book1.jpg"
              alt=""
              className="absolute w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 rounded"
            />
            <div className="absolute inset-3 border border-gray-400 rounded-md"></div>
          </div>
          <div className="relative h-[25rem] w-52 overflow-hidden group">
            <img
              src="/image/book2.jpg"
              alt=""
              className="absolute w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 rounded"
            />
            <div className="absolute inset-3 border border-gray-400 rounded-md"></div>
          </div>
          <div className="relative h-[25rem] w-52 self-end overflow-hidden group">
            <img
              src="/image/book3.jpg"
              alt=""
              className="absolute w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 rounded"
            />
            <div className="absolute inset-3 border border-gray-400 rounded-md"></div>
          </div>
        </div>

        <div className="p-6">
          <form className="max-w-md mx-auto space-y-6" onSubmit={handleSubmit}>
            <div className="relative z-0 w-full group">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block py-3 px-3 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="relative z-0 w-full group">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block py-3 px-3 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full group">
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-medium text-gray-900">
                  Select date:
                </label>
                <DatePicker
                  selected={selectedDate ? new Date(selectedDate) : null}
                  onChange={(date) =>
                    setSelectedDate(moment(date).format("YYYY-MM-DD"))
                  } // Format the date
                  className="w-full py-3 px-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg"
                  placeholderText="Select a date"
                  id="date"
                />
              </div>
              <div className="z-0 w-full group">
                <label
                  htmlFor="time"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Select time:
                </label>
                <input
                  type="time"
                  id="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  min="09:00"
                  max="18:00"
                  required
                />
              </div>
            </div>
            <div className="flex items-start">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
              <label
                htmlFor="terms"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                I agree with the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-500">
                  terms and conditions
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-3 px-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Book Now!!
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Booking;
