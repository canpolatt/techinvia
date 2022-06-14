import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg";

const navbar = () => {
  return (
    <nav className="global--nav">
      <div className="nav--container">
        <ul className="nav--content">
          <li className="nav--mobil-menu">
            <img src={Menu} alt="menu"/>
          </li>
          <li>
            <img src={Logo} alt="techinvia" />
          </li>
          <li className="nav--links">
            <h2>Home</h2>
          </li>
          <li className="nav--links">
            <h2>About</h2>
          </li>
          <li className="nav--links">
            <h2>Services</h2>
          </li>
          <li className="nav--links">
            <h2>Team</h2>
          </li>
          <li className="nav--links">
            <h2>Contact</h2>
          </li>
          <li className="nav--lang-mobil">
            <h2>TR</h2>
          </li>
          <li className="nav--links">
            <h2>techintalent</h2>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
