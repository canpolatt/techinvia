import { Dispatch, SetStateAction } from "react";
import right from "../assets/right.svg";
import left from "../assets/left.svg";
interface ServiceProps {
  id: number;
  title: string;
  header: string;
  description: string;
  image: string;
  color: string;
  viewPort: number;
  setViewPort: Dispatch<SetStateAction<number>>;
}

const ServiceItem = ({
  id,
  title,
  header,
  description,
  image,
  color,
  viewPort,
  setViewPort,
}: ServiceProps) => {
  const changeSlide = (id: number = 0, prev: boolean = false, next: boolean = false) => {
    console.log(id);
    if (prev && id !== 1) {
      setViewPort((prev) => prev + 100);
    }
    if (next && id !== 3) {
      setViewPort((prev) => prev - 100);
    }
    if (prev && id === 1) {
      setViewPort(-200);
    }
    if (next && id === 3) {
      setViewPort(0);
    }
  };

  return (
    <div className="service--container">
      <div className="service--wrapper">
        <div className="service--text">
          <h2 style={{ color: `${color}` }}>{title}</h2>
          <p style={{ fontWeight: "400" }}>
            <span style={{ fontWeight: "800" }}>We assume karma exists</span>
            <br /> Assume that doing the right things consistently will yield
            disproportionate rewards, even if you can’t always tell how that
            will happen.
          </p>
        </div>
        <img className="service--image" src={image} alt={image} />
      </div>
      <div className="service--before">
        <button onClick={() => changeSlide(id, true, false)}>
          <img className="service--button-image" src={left} alt={left} />
        </button>
      </div>
      <div className="service--next">
        <button onClick={() => changeSlide(id, false, true)}>
          <img className="service--button-image" src={right} alt={right} />
        </button>
      </div>
    </div>
  );
};

export default ServiceItem;
