import React from "react";
import GoogleMapReact from "google-map-react";
import { MdPhone, MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";

import { ContactStyled } from "./style";

import { Container, Wrapper } from "../layout";
import service_header_bg from "../../images/service_header_bg.jpg";
import TitleSection from "../Sections/TitleSection";
import counter_bg from "../../images/counter_bg.jpg";
import { Input, TextArea } from "../ui/Input";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const phone = ["012345678", "012345678"];

const email = ["pestsite@example.com", "spest@example.com"];

const address = ["98 / Ram Nagar, India", "75 / California UK"];

const timeWork = [
  {
    date: "Monday",
    time: "7:30 am - 5.30 pm",
  },
  {
    date: "Tuesday",
    time: "10:00 am - 5.30 pm",
  },
  {
    date: "Wednesday",
    time: "7:30 am - 5.30 pm",
  },
  {
    date: "Thursday",
    time: "8:00 am - 5.30 pm",
  },
  {
    date: "Friday",
    time: "7:30 am - 5.30 pm",
  },
  {
    date: "Saturday",
    time: "7:30 am - 3.00 pm",
  },
  {
    date: "Sunday",
    time: "9:30 am - 3.00 pm",
  },
];

const InformationContact = ({ data, icon }) => {
  return (
    <div className="info">
      <div className="icon">{icon}</div>
      {data.map((item, idx) => (
        <p key={idx} className="text-left text-gray-2">
          {item}
        </p>
      ))}
    </div>
  );
};

const Contact = () => {
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  const { register, handleSubmit } = useForm({});
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <ContactStyled>
      <Container
        className="text-center w-full h-full bg-cover bg-no-repeat relative bg-center"
        style={{ backgroundImage: "url(" + service_header_bg + ")" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0, 0, 0, 0.8)" }}
        />
        <Wrapper>
          <TitleSection title="Contact" className="p-0" colorWhite />
        </Wrapper>
      </Container>
      <Container>
        <Wrapper>
          <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={"AIzaSyB9o_VBvVIirWff-I5GvE5PaS4eOrDAH0g"}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </Wrapper>
      </Container>
      <Container
        className="text-center w-full h-full bg-cover bg-no-repeat relative bg-center bg-fixed"
        style={{
          backgroundImage: "url(" + counter_bg + ")",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0, 0, 0, 0.8)" }}
        />
        <Wrapper className="flex items-center justify-around infor-wrapper">
          <InformationContact data={phone} icon={<MdPhone />} />
          <InformationContact data={email} icon={<MdEmail />} />
          <InformationContact data={address} icon={<FaTelegramPlane />} />
        </Wrapper>
      </Container>
      <Container>
        <Wrapper className="flex items-center justify-between contact-section">
          <div className="w-4/6 mr-4 send-message">
            <h1 className="text-left title">Leave Your Message</h1>
            <p className="text-left description text-gray-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aem aliqua. Ut
              enim ad minim veniam.
            </p>
            <form className="form" onSubmit={handleSubmit(onSubmit)} id="form">
              <div className="flex justify-between form-input">
                <div className="mr-4 input-field-wrapper">
                  <Input
                    placeholder="Full Name"
                    name="name"
                    type="text"
                    required
                    ref={register}
                    className="mb-6"
                  />
                  <Input
                    placeholder="Phone"
                    name="phone"
                    type="tel"
                    required
                    ref={register}
                    className="mb-6"
                  />
                  <Input
                    placeholder="Email"
                    name="email"
                    type="email"
                    required
                    ref={register}
                  />
                </div>
                <TextArea
                  rows="4"
                  cols="50"
                  name="message"
                  className="input-message"
                  ref={register}
                />
              </div>
              <button className="button mt-8">Send</button>
            </form>
          </div>
          <div className="w-2/6 ml-4 time-work">
            <h1 className="title">OPENING TIME</h1>
            {timeWork.map((item, idx) => (
              <div key={idx} className="flex justify-between time-item">
                <p>{item.date}</p>
                <p className="text-left max-w-36 w-full">{item.time}</p>
              </div>
            ))}
          </div>
        </Wrapper>
      </Container>
    </ContactStyled>
  );
};

export default Contact;
