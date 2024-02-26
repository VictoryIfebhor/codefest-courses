import logoImage from "../assets/logo.jpg";

export const Navbar = () => {
  return (
    <nav>
      <div className="left-nav">
        <a href="">
          <img src={logoImage} alt="Codefest Institute Logo" />
        </a>
      </div>
      <div className="right-nav">
        <div className="menus">
          <span>
            <a href="">home</a>
          </span>
          <span>
            <a href="#content">courses</a>
          </span>
          <span>
            <a href="#footer">contact</a>
          </span>
        </div>
        {/* <div className="hamburger">=</div> */}
      </div>
    </nav>
  );
};
