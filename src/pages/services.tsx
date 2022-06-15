import { useState, useEffect } from "react";
import { default as data } from "../services.json";
import ServiceItem from "../components/serviceItem";

const Services = () => {
  const [viewPort, setViewPort] = useState<number>(0);

  useEffect(()=>{
    const timer = setInterval(()=>{
      if(viewPort === -200){
        setViewPort(0)
      }
      if(viewPort !== -200){
        setViewPort(prev => prev - 100);
      }
    },4000)
    return () => {
      clearInterval(timer);
    }
  },[viewPort])

  return (
    <>
      <section className="services--container">
        <h3>Our services with a simplified process</h3>
        <ul className="services--stage">
          <li className={viewPort === 0 ? "services--active-stage" : undefined}>
            01
          </li>
          <li
            className={viewPort === -100 ? "services--active-stage" : undefined}
          >
            02
          </li>
          <li
            className={viewPort === -200 ? "services--active-stage" : undefined}
          >
            03
          </li>
        </ul>
        <div
          style={{ transform: `translateX(${viewPort}vw)` }}
          className="services--wrapper"
        >
          {data.map((item, idx) => (
            <ServiceItem
              key={idx}
              {...item}
              viewPort={viewPort}
              setViewPort={setViewPort}
            ></ServiceItem>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
