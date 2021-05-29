import "./Connect.css";
import github from "./img/github.png";
import mail from "./img/mail.png";
import linkedin from "./img/linkedin.png";
function Connect() {
  return (
    <div className="connect-component">
      <a href="https://github.com/Shazeen15" target="_blank" rel="noreferrer">
        {/* <img src={github} alt="github logo" className="footer-img" /> */}
        <i className="fab fa-github-alt footer-img"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/shazeen-fabius-52635b135/"
        target="_blank"
        rel="noreferrer"
      >
        {/* <img src={linkedin} alt="linkedin logo" className="footer-img" /> */}
        <i className="fab fa-linkedin footer-img"></i>
      </a>

      <a href="mailto:shazeenfabius@gmail.com">
        {/* <img src={mail} alt="envelop" className="footer-img" /> */}
        <i className="fas fa-reply footer-img"></i>
      </a>
    </div>
  );
}
export default Connect;
