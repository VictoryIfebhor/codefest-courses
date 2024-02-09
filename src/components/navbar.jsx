export const Navbar = () => {
  return (
    <nav>
      <div className="left-nav">
        <a href="">
          <img
            src="https://media.licdn.com/dms/image/D4D0BAQHkkC2HBf3xkw/company-logo_200_200/0/1705705169888/e_woke_logo?e=1715817600&v=beta&t=EMNLhMFH0vCe8r8f3dTynxF4Tayh7lv87J7cPOO1fX8"
            alt=""
          />
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
