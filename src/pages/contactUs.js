
import contact from "../data/contact.json";

const Contact = (setContactDetails) => {
  // Initialize AOS
 
  const handleClick = (link) => {
    window.open(link, "_blank"); // Opens the link in a new tab
  };

  return (
    <div className="bg-custom-navy h-screen flex flex-col justify-center items-center" id="contact">
      <h1 className="text-center text-4xl font-bold text-yellow-400 leading-tight tracking-widest mb-8">
        CONTACT US
      </h1>
      <div
        className="flex flex-wrap justify-center gap-8 mb-8"
        data-aos="zoom-in-up" // AOS animation
        data-aos-duration="1000" // Animation duration
      >
        {contact.map((item, idx) => (
          <div key={idx}>
            <img
              src={item.image}
              alt={item.icon}
              className="cursor-pointer w-10 h-10"
              onClick={() => handleClick(item.link)} // Click handler
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
