import "./Hero.scss";

import imageSrc from "~/assets/images/hero-bg.jpg";
import imageMobileSrc from "~/assets/images/hero-bg-mobile.jpg";

import HeroLink from "~/components/HeroLink/HeroLink";

import useMediaQuery from "~/hooks/useMediaQuery";

const Hero = () => {
  const isMobile = useMediaQuery("mobile");

  return (
    <section className="hero">
      <div className="hero__bg">
        <img src={isMobile ? imageMobileSrc : imageSrc} alt="" className="hero__bg-image" />

        <span className="hero__bg-circle hero__bg-circle--1"></span>
        <span className="hero__bg-circle hero__bg-circle--2"></span>
        <span className="hero__bg-circle hero__bg-circle--3"></span>
      </div>
      <div className="hero__inner container">
        <h1 className="hero__title">Жизнь — игра<span className="hero__title-comma">,</span> и ты всегда можешь переродиться</h1>
        <p className="hero__description">Пространство восстановления, где тело и сознание перезагружаются после сложных уровней. Дарим ощущение нового старта, когда это нужно больше всего</p>

        <HeroLink />
      </div>
    </section>
  )
}

export default Hero
