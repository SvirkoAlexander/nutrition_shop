import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";
import { SlSocialVkontakte } from "react-icons/sl";
import bg from "../image/sportpit2.jpg";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div
      className="hero-banner-container"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <h2>
          Магазин спортивного питания Минск. Большой ассортимент, лучшее качесто на рынке, закзывай и получи скидку 20%.
        </h2>
        <img
          src={urlFor(heroBanner.image)}
          alt="headphones"
          className="hero-banner-image"
        />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>

          <div className="media">
						<p className="icons2">
							<Link href='https://www.instagram.com/svirkosam/'>
              <AiFillInstagram size={30} />
							</Link>

              <SlSocialVkontakte size={30} />
              <RiTelegramLine size={30} />
            </p>
          </div>

          <div className="desc">
            <h5>Контактный тел.</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
