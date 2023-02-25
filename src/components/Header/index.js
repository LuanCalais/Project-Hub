import "./Header.css";
import banner from "./banner.png"

const Header = () => {
  return (
    <header className="header">
      <div className="box-image-1">
        <span>
          <h1>Project-Hub</h1>
          <h2>Organize seus projetos e times </h2>
        </span>
      </div>

      <div className="box-image-2">
        <img src={banner} alt="banner" />
      </div>
    </header>
  );
};

export default Header;
