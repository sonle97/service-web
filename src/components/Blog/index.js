import React, { useState, useEffect } from "react";
import { ClockWrapper } from "./style";
import { Container, Wrapper } from "../layout";

const Clock = () => {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    setHours(h);
    setMinutes(m);
    setSeconds(s);
  };

  return (
    <React.Fragment>
      <Container>
        <Wrapper>
          <ClockWrapper>
            <div className="clock">
              <div className="times">
                <div className="time">
                  <span id="hour">{hours}</span>
                </div>
                <div className="title">
                  <span>Hours</span>
                </div>
              </div>
              <div className="times">
                <div className="time">
                  <span id="minute">{minutes}</span>
                </div>
                <div className="title">
                  <span>Minute</span>
                </div>
              </div>
              <div className="times">
                <div className="time">
                  <span id="second">{seconds}</span>
                </div>
                <div className="title">
                  <span>Second</span>
                </div>
              </div>
            </div>
          </ClockWrapper>
        </Wrapper>
      </Container>
    </React.Fragment>
  );
};

export default Clock;
