import {useState,useEffect} from "react";
import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg";

const Navbar = () => {

  const [clicked,setClicked] = useState<boolean>(false);

  useEffect(()=>{
    if(clicked){
      document.body.classList.add("disable-overflow");
      document.querySelector(".global--nav")?.classList.add("nav--active");
    }
    if(!clicked){
      document.body.classList.remove("disable-overflow");
      document.querySelector(".global--nav")?.classList.remove("nav--active");
    }
  },[clicked])

  return (
    <nav className="global--nav">
      <div className="nav--container">
        <ul className="nav--content">
          <li className="nav--mobil-menu">
            <img onClick={()=>{setClicked(!clicked)}} src={Menu} alt="menu" />
          </li>
          <li>
            <img src={Logo} alt="techinvia" />
          </li>
          <div className="nav--links-container">
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
            <li className="nav--links">
              <div className="nav--links-talent-container">
                <p>soon</p>
                <div className="nav--links-talent-content">
                  <h2>
                    <span style={{ color: "#5B818D" }}>techin</span>talent
                  </h2>
                </div>
              </div>
            </li>
          </div>
          <li className="nav--lang-mobil">
            <h2>TR</h2>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
