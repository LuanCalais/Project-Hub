import "./Footer.css";
import icon from "./Icon.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="box-info">
          <div className="col-one">
            <img src={icon} alt="icon" />
            <span>2023, Luan S. Calais</span>
          </div>

          <div className="col-two">
            <a href="https://www.instagram.com/luan_calais/" target="_blank" rel="noreferrer">
              <i class="bx bxl-instagram-alt"></i>
            </a>

            <a href="https://api.whatsapp.com/send?phone=11910396496" target="_blank" rel="noreferrer">
              <i class="bx bxl-whatsapp"></i>
            </a>

            <a href="https://www.linkedin.com/in/luan-s-calais-186104217/" target="_blank" rel="noreferrer">
              <i class="bx bxl-linkedin-square"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
