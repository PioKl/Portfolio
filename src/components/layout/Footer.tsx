import IconGithub from "../../assets/icons/icon-github.svg";
const Footer = () => {
  return (
    <footer className="pb-15 bg-dark-grey">
      <div className="wrapper mb-10 border-b-1 border-alt md:mb-7.5 lg:mb-11.5"></div>
      <div className="wrapper flex justify-between items-center">
        <span className="block mb-5 font-bold text-center text-white text-2xl tracking-[-0.33px] leading-8 whitespace-nowrap md:text-[32px] md:tracking-[-0.44px] md:leading-8">
          adamkeyes
        </span>

        <nav>
          <ul className="flex gap-6 items-center justify-center">
            <li>
              <a
                href="https://www.github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={IconGithub} alt="GitHub" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
