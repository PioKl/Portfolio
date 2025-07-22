import thumbnailMobile from "../assets/images/thumbnail-project-6-small.webp";
import thumbnailDesktop from "../assets/images/thumbnail-project-6-large.webp";

const projects = [
  {
    name: "Design Portfolio",
    skills: ["HTML", "CSS"],
    projectLink: "https://github.com/",
    codeLink: "https://github.com/",
    images: [thumbnailMobile, thumbnailDesktop],
  },
  {
    name: "Todo Web App",
    skills: ["HTML", "CSS", "Javascript"],
    projectLink: "https://github.com/",
    codeLink: "https://github.com/",
    images: [thumbnailMobile, thumbnailDesktop],
  },
];

const Projects = () => {
  return (
    <section className="wrapper mb-20 md:mb-25 lg:mb-35">
      <div className="flex items-center justify-between mb-10 md:mb-15 lg:mb-20">
        <h1 className="font-bold text-[40px] tracking-[-1.14px] leading-10 md:text-7xl md:tracking-[-2.05px] md:leading-[72px] lg:text-heading-xl lg:tracking-heading-xl lg:leading-heading-xl">
          Projects
        </h1>
        <a href="#" className="custom-link custom-border-bottom">
          Contact me
        </a>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-6 lg:gap-7.5">
        {projects.map((project) => (
          <div className="grid gap-5">
            <div tabIndex={0} className="relative group">
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet={project.images[1]}
                />
                <img
                  className=" md:w-auto lg:h-[400px]"
                  src={project.images[0]}
                  alt="profile image"
                />
                <div className="absolute top-0 w-full h-full gap-7.5 justify-center items-center opacity-0 group-hover:opacity-75 group-focus-within:opacity-75 group-hover:bg-black group-focus-within:bg-black transition-all duration-400 hidden lg:flex flex-col">
                  <a
                    href={project.codeLink}
                    className="custom-link custom-border-bottom"
                  >
                    View Project
                  </a>
                  <a
                    href={project.codeLink}
                    className="custom-link custom-border-bottom"
                  >
                    View Code
                  </a>
                </div>
              </picture>
            </div>

            <div className="grid gap-2">
              <h2 className="uppercase text-heading-m tracking-heading-m leading-heading-m font-heading-m">
                {project.name}
              </h2>
              <div className="flex gap-4">
                {project.skills.map((skill) => (
                  <span className="text-alt">{skill}</span>
                ))}
              </div>
            </div>
            <div className="flex gap-7.5 lg:hidden">
              <a
                href={project.codeLink}
                className="custom-link custom-border-bottom"
              >
                View Project
              </a>
              <a
                href={project.codeLink}
                className="custom-link custom-border-bottom"
              >
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
