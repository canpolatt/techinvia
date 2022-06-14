import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";

interface TeamProps {
  id: number;
  title: string;
  description: string;
  image: string;
  background: string;
}

const Team_member = ({
  id,
  title,
  description,
  image,
  background,
}: TeamProps) => {
  return (
    <div style={{ background: `${background}` }} className="team--card">
      <div className="team--card-border"></div>
      <img className="team--card-image" src={image} alt={`team member ${id}`} />
      <div className="team--card-text">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      <ul className="team--card-socialMedia">
        <li>
          <img className="team--card-social-logo" src={github} alt="github"/>
        </li>
        <li>
          <img className="team--card-social-logo" src={linkedin} alt="linkedin"/>
        </li>
        <li>
          <img className="team--card-social-logo" src={twitter} alt="twitter"/>
        </li>
      </ul>
    </div>
  );
};

export default Team_member;
