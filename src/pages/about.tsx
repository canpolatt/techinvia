import GroupImage from "../assets/techinvia_group.svg";

const About = () => {
  return (
    <section className="about--container">
      <div className="about--wrapper">
        <h3>Who are we ?</h3>
        <p className="about--text">
          We are the techinvia team ! techinvia was founded in July 2021 as a
          freelance organization with the desire of two friends who constantly
          improve themselves to produce something. Currently, we are an
          organization that works on projects to support software developers who
          will take a new step into the sector, and also provides freelance
          website services, slowly and surely, growing with our team, where
          there is no hierarchy and everyone is just a teammate.
        </p>
        <div className="about--image-container">
          <img className="about--image" src={GroupImage} alt="Techinvia Group"/>
        </div>
      </div>
    </section>
  );
};

export default About;
