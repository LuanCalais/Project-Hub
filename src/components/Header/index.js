import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="box-image-1">
        <span>
          <h1>Project-Hub</h1>
          <h2>Organize seus projetos e times </h2>
        </span>
        <img src="/assets/img/forms.svg" alt="forms" />
      </div>

      <div className="box-image-2">
        <img src="/assets/img/banner.png" alt="banner" />
      </div>
    </header>
  );
};

export default Header;
