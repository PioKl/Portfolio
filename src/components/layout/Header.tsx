import IconGithub from "@/assets/icons/icon-github.svg?react";
import patternRings from "@/assets/images/pattern-rings.svg";

export default function Header() {
  return (
    <>
      <header
        className="relative grid gap-5 h-auto pt-5 text-center m-auto md:flex md:flex-row md:justify-between md:wrapper md:pt-7 md:mb-23 lg:mb-32"
        role="banner"
      >
        <span className="font-bold text-white text-2xl tracking-[-0.33px] leading-8 whitespace-nowrap md:text-[32px] md:tracking-[-0.44px] md:leading-8">
          piokl
        </span>

        <nav className="grid lg:pr-7.5">
          <ul className="flex gap-6 items-center justify-center">
            <li className="grid">
              <a
                href="https://github.com/PioKl"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <IconGithub className="w-[25px] h-[24px] group-hover:[&>path]:fill-interactive group-focus-within:[&>path]:fill-interactive [&>path]:transition-colors [&>path]:duration-150" />
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
