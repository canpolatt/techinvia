import { default as data } from "../services.json";
import ServiceItem from "../components/serviceItem";

const Services = () => {
  return (
    <>
      <section className="services--container">
        <h3>Our services with a simplified process</h3>
        <div className="services--wrapper">
          {data.map((item, idx) => (
            <ServiceItem key={idx} {...item}></ServiceItem>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
