export const Navbar = () => {
  return (
    <nav>
      <div className="left-nav nav-item">
        <img
          src="https://codefestuniversity.online/assets/logo-fa6ae0c9.png"
          alt=""
        />
      </div>
      <div className="right-nav">
        <div className="menus nav-item">
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
