import React, { useState } from "react";
import { GiHappySkull } from "react-icons/gi";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import { Container, Wrapper } from "../../layout";
import counter_bg from "../../../images/testimonial_bg.jpg";
import { Content } from "./style";

let data = [
  {
    icon: <GiHappySkull />,
    amount: 100,
    description: "Quality",
    type: "%",
  },
  {
    icon: <GiHappySkull />,
    amount: 2055,
    description: "Happy Clients",
  },
  {
    icon: <GiHappySkull />,
    amount: 845,
    description: "Success Mission",
  },
  {
    icon: <GiHappySkull />,
    amount: 257,
    description: "Passionate Employee",
  },
];

const Item = ({ item }) => {
  const [didViewCountUp, setDidViewCountUp] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setDidViewCountUp(true);
    }
  };

  return (
    <div className="item">
      <div className="icon-wrapper">
        <div className="icon">{item.icon}</div>
      </div>
      <div className="count-description">
        <VisibilitySensor
          onChange={onVisibilityChange}
          offset={{
            top: 10,
          }}
          delayedCall
        >
          <CountUp
            className="timer"
            start={0}
            end={didViewCountUp ? item.amount : 0}
            suffix={item.type === "%" ? "%" : "+"}
            duration={3}
          />
        </VisibilitySensor>
        <h5 className="con1">{item.description}</h5>
      </div>
    </div>
  );
};

const Couter = () => {
  return (
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
      <Wrapper>
        <Content>
          {data.map((item, index) => (
            <Item item={item} key={index} />
          ))}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Couter;
