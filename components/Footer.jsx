import { AiFillInstagram } from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";
import { SlSocialVkontakte } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="footer-container">
      <p> &#169; 2023 Developed Giftedvision. All rights reserved.</p>
      <p className="icons">
        <AiFillInstagram size={20}/>
        <SlSocialVkontakte size={20}/>
        <RiTelegramLine size={20}/>
      </p>
    </div>
  );
};

export default Footer;
