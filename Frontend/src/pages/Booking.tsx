import moment from "moment";
import { FormEvent, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import CSS for the DatePicker
import { toast } from "sonner";

const Booking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const bookingInfo = { name, email, selectedDate, selectedTime };
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5050/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingInfo),
      });

      if (response.ok) {
        toast.success("Booking email sent successfully!");
      } else {
        toast.error("Failed to send booking email.");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url("/image/homeBg.jpg")`,
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto lg:h-[65vh] m-4 lg:m-10">
        <div className="flex flex-wrap justify-center  lg:flex-row lg:space-y-10 space-x-6 lg:space-x-2">
          <div className="relative h-64 w-40 lg:h-[20rem] lg:self-end lg:w-36 overflow-hidden group">
            <img
              src="/image/book1.jpg"
              alt=""
              className="absolute w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 rounded"
            />
            <div className="absolute inset-3 border border-gray-400 rounded-md"></div>
          </div>
          <div className="relative h-64 w-40 lg:h-[20rem] lg:w-36 overflow-hidden group">
            <img
              src="/image/book2.jpg"
              alt=""
              className="absolute w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 rounded"
            />
            <div className="absolute inset-3 border border-gray-400 rounded-md"></div>
          </div>
          <div className="relative h-64 w-40 lg:h-[20rem] lg:self-end lg:w-36 overflow-hidden group">
            <img
              src="/image/book3.jpg"
              alt=""
              className="absolute w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 rounded"
            />
            <div className="absolute inset-3 border border-gray-400 rounded-md"></div>
          </div>
        </div>

        <div className="p-4 lg:p-6">
          <form className="max-w-md mx-auto space-y-6" onSubmit={handleSubmit}>
            <div className="relative z-0 w-full group">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block py-3 px-3 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg "
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="relative z-0 w-full group">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 ">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block py-3 px-3 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg "
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
                  className="block mb-2 text-sm font-medium text-gray-900">
                  Select time:
                </label>
                <input
                  type="time"
                  id="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
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
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 "
                required
              />
              <label
                htmlFor="terms"
                className="ml-2 text-sm font-medium text-gray-900 ">
                I agree with the{" "}
                <a href="#" className="text-blue-600 hover:underline ">
                  terms and conditions
                </a>
              </label>
            </div>
            <button
              disabled={isLoading}
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-3 px-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              {isLoading ? "Loading..." : "Book Now!!"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Booking;
