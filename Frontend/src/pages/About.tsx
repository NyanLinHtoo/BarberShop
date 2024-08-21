const About = () => {
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
          Who Are We?
        </h4>
      </div>

      <div className="px-4 sm:px-8 lg:px-16 py-8">
        <div className="mb-10">
          <h5 className="text-xl sm:text-2xl font-bold text-left pb-5 tracking-wider">
            <i>Brief</i>
          </h5>
          <p className="text-left leading-relaxed sm:leading-loose">
            At [Barbershop Name], we pride ourselves on being more than just a
            place for a haircut; we are a destination where style, tradition,
            and community come together. Our barbers are true craftsmen,
            blending time-honored techniques with the latest trends to create
            haircuts that are not only stylish but also perfectly tailored to
            each client. Whether you’re stopping by for a precise fade, a
            classic shave, or just looking for a comfortable place to relax,
            every visit promises a premium experience. We believe that grooming
            is an art, and every client deserves nothing less than excellence.
          </p>
        </div>

        <div className="mb-10">
          <h5 className="text-xl sm:text-2xl font-bold text-left pb-5 tracking-wider">
            <i>Our Mission</i>
          </h5>
          <p className="text-left leading-relaxed sm:leading-loose">
            Our mission at [Barbershop Name] is to elevate the barbering
            experience by combining expert craftsmanship with personalized
            service. We are dedicated to helping our clients look and feel their
            best by delivering top-notch grooming services in an environment
            that feels like home. Every cut, shave, and style is designed with
            attention to detail and a passion for quality, ensuring that every
            client leaves our barbershop not just satisfied, but truly
            confident. We are committed to building a community where every
            individual is treated with respect, care, and the personalized
            attention they deserve.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
