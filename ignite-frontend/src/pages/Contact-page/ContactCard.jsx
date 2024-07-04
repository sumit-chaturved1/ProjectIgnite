import React from "react";
import { Link } from "react-router-dom";
import instapic from "../../assets/images/instagram.png";
import githubpic from "../../assets/images/github.png";
import linkedinpic from "../../assets/images/linkedin.png";
import mailpic from "../../assets/images/mail.png";
import ButtonMailto from "./ButtonMailTo";
const ContactCard = (props) => {
  const { name, insta, github, linkedin, mail } = props.data;
  return (
    <div className="h-96 w-80 rounded-2xl bg-blue-gray-50 relative border-t-8 border-black shadow-xl ">
      <div className="absolute mt-8 inset-x-0">
        <p className="text-3xl ">{name}</p>
        <div className="h-1 border-t-[8px] border-gray-500 border-dotted max-w-[55%] mx-auto mt-5 "></div>
        <div className="absolute h-72 w-[90%] ml-4 mt-4 ">
          <Link to={insta} target="_blank">
            <div className="w-[95%] bg-white mx-auto mt-4 rounded-lg h-9 relative shadow-lg ">
              <div className=" absolute inset-0 mt-1 flex justify-center ">
                <p className=" text-xl mr-1 ">Instagram</p>
                <img src={instapic} alt="insta" className="h-6 m-0.5" />
              </div>
            </div>
          </Link>
          <Link to={github} target="_blank">
            <div className="w-[95%] bg-white mx-auto mt-4 rounded-lg h-9 relative shadow-lg">
              <div className=" absolute inset-0 mt-1 flex justify-center ">
                <p className=" text-xl mr-1 ">Github</p>
                <img src={githubpic} alt="github " className="h-6 m-0.5" />
              </div>
            </div>
          </Link>
          <Link to={linkedin} target="_blank">
            <div className="w-[95%] bg-white mx-auto mt-4 rounded-lg h-9 relative shadow-lg">
              <div className=" absolute inset-0 mt-1 flex justify-center ">
                <p className=" text-xl mr-1 ">LinkedIn</p>
                <img src={linkedinpic} alt="linkedin" className="h-6 m-0.5" />
              </div>
            </div>
          </Link>
          <div className="w-[95%] bg-white mx-auto mt-4 rounded-lg h-9 relative shadow-lg">
            <div className=" absolute inset-0 mt-1 flex justify-center ">
              <div className="mt-0.5">
                <ButtonMailto label="Email" mailto={`mailto:${mail}`} />
              </div>
              <img src={mailpic} alt="mail" className="h-6 m-0.5 ml-2 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
