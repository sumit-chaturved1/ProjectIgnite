import React from "react";
import ContactCard from "./ContactCard";
const ContactPage = () => {
  const data = [
    {
      name: "Sumit",
      insta: "https://www.instagram.com/sumit_chaturvedi__/",
      github: "https://github.com/sumit-chaturved1",
      linkedin: "https://linkedin.com/in/sumit-chaturvedi",
      mail: "Chaturvedisumit338@gmail.com",
    },
    {
      name: "Siddhart Juyal",
      insta: "https://www.instagram.com/_siddharth_juyal_/",
      github: "https://github.com/SiddharthJ3",
      linkedin: "https://www.linkedin.com/in/siddharthjuyal/",
      mail: "Chaturvedisumit338@gmail.com",
    },
    {
      name: "Rohit",
      insta: "https://www.instagram.com/livingasrohit/",
      github: "https://github.com/rohit-ojha-10",
      linkedin: "https://linkedin.com/in/sumit-chaturvedi",
      mail: "rohit.ojha22feb2002@gmail.com",
    },
    {
      name: "Utkarsh",
      insta: "https://www.instagram.com/s_utkarshh/",
      github: "https://github.com/sumit-chaturved1",
      linkedin: "https://linkedin.com/in/sumit-chaturvedi",
      mail: "Chaturvedisumit338@gmail.com",
    },
  ];
  const displayedCards = data.map((item) => {
    return <ContactCard data={item} />;
  });
  return (
    <div className="h-screen">
      <div className="mainContainer">
        <div className="contactTitleBox">
          <div>
            <div className="mt-16 mb-14">
              <h1 className="text-5xl font-medium mb-2">
                Get in Touch with Us
              </h1>
              <p className="text-sm">
                Have any questions? We'd would love to hear from you.
              </p>
            </div>
          </div>
        </div>
        <div className="border-t-[3px] border-black max-w-[80%] mx-auto mb-16  "></div>
        <div className=" h-80 flex flex-row justify-between ">
          {displayedCards}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
