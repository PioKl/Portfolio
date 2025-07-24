import IconGithub from "../../assets/icons/icon-github.svg";
import IconTwitter from "../../assets/icons/icon-twitter.svg";
import patternRings from "../../assets/images/pattern-rings.svg";
export default function Header() {
  return (
    <>
      <header
        className="relative grid gap-5 h-auto pt-5 text-center m-auto md:flex md:flex-row md:justify-between md:wrapper md:pt-7 md:mb-23 lg:mb-32"
        role="banner"
      >
        <span className="font-bold text-white text-2xl tracking-[-0.33px] leading-8 whitespace-nowrap md:text-[32px] md:tracking-[-0.44px] md:leading-8">
          adamkeyes
        </span>

        <nav className="lg:pr-7.5">
          <ul className="flex gap-6 items-center justify-center">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={IconGithub} alt="GitHub" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={IconTwitter} alt="" />
              </a>
            </li>
          </ul>
        </nav>
        <img
          src={patternRings}
          alt=""
          className="absolute top-[140%] -translate-x-1/2 -z-1 w-[530px] h-[129px] md:top-[145%] lg:top-[200%]"
        />
      </header>
    </>
  );
}
