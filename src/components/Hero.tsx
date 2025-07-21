import Header from "./layout/Header";
import profileDesktop from "../assets/images/image-profile-desktop.webp";
import profileTablet from "../assets/images/image-profile-tablet.webp";
import profileMobile from "../assets/images/image-profile-mobile.webp";
import patternCircle from "../assets/images/pattern-circle.svg";

export const Hero = () => {
  return (
    <div className="text-center">
      <Header />
      <div className="mb-20 md:mb-15 md:grid md:grid-cols-[1fr_1fr_1fr_0.2fr_0.3fr_0.3fr_1.7fr] lg:wrapper lg:mb-26 lg:grid-cols-[1fr_1fr_1fr_0.5fr_0.3fr_0.3fr_1.7fr] lg:items-start">
        <div className="grid grid-cols-[1fr_minmax(173px,1fr)_1fr] grid-rows-1 relative -z-1 overflow-hidden -mt-[96px] mb-10 justify-center md:-mt-[155px] md:mb-0 md:justify-end md:[grid-column:5/8] md:[grid-row:1/2] lg:grid-cols-[minmax(173px,1fr)_1fr] lg:-mt-[188px] lg:md:[grid-column:5/8] lg:overflow-visible">
          <img
            src={patternCircle}
            alt=""
            className="absolute bottom-0.5 right-[-64.5px] md:bottom-[3px] lg:bottom-[10%] lg:left-[-64.5px]"
          />
          <picture className="col-start-2 col-end-3 md:col-start-1 md:col-end-4 md:ml-auto">
            <source media="(min-width: 1024px)" srcSet={profileDesktop} />
            <source media="(min-width: 768px)" srcSet={profileTablet} />

            <img
              className="object-cover md:h-[600px] md:w-auto lg:h-[720px]"
              src={profileMobile}
              alt="profile image"
            />
          </picture>
        </div>

        <div className="wrapper grid gap-6 md:w-auto md:[margin-inline:initial] md:gap-0 md:ml-[calc(var(--margin-wrapper))] md:[grid-column:1/6] md:[grid-row:1/2] lg:ml-0 lg:[grid-column:1/6]">
          <h1 className="mb-0 text-center text-[40px] font-bold leading-10 tracking-[-1.14px] md:mb-15 md:text-left md:text-7xl md:leading-[72px] md:tracking-[-2.05px] lg:text-[length:var(--heading-XL-font-size)] lg:leading-[var(--heading-XL-line-height)] lg:tracking-[var(--heading-XL-letter-spacing)] lg:mb-11">
            <span className="md:block lg:inline">Nice to </span>
            <span className="md:block lg:inline">meet you! I’m </span>
            <a href="#">Adam Keyes</a>.
          </h1>
          <p className="leading-[28px] md:mb-13 md:text-left md:max-w-[440px] lg:mb-16">
            Based in the UK, I’m a front-end developer passionate about building
            accessible web apps that users love.
          </p>
          <a
            href="#"
            className="m-auto block w-fit text-left uppercase font-black leading-[26px] tracking-[3.29px] no-underline custom-border-bottom md:ml-[initial]"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="wrapper border-b-1 border-alt"></div>
    </div>
  );
};
