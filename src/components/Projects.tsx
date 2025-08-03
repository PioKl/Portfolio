import galleryMobile from "../assets/images/thumbnail-project-6-small.webp";
import galleryDesktop from "../assets/images/thumbnail-project-6-large.webp";
import entertainmentMobile from "../assets/images/thumbnail-project-1-small.webp";
import entertainmenDesktop from "../assets/images/thumbnail-project-1-large.webp";
import audioMobile from "../assets/images/thumbnail-project-2-small.webp";
import audioDesktop from "../assets/images/thumbnail-project-2-large.webp";
import dictionaryMobile from "../assets/images/thumbnail-project-3-small.webp";
import dictionaryDesktop from "../assets/images/thumbnail-project-3-large.webp";
import planetsMobile from "../assets/images/thumbnail-project-4-small.webp";
import planetsDesktop from "../assets/images/thumbnail-project-4-large.webp";
import bmiMobile from "../assets/images/thumbnail-project-5-small.webp";
import bmiDesktop from "../assets/images/thumbnail-project-5-large.webp";
import frontendqMobile from "../assets/images/thumbnail-project-7-small.webp";
import frontendqDesktop from "../assets/images/thumbnail-project-7-large.webp";
import dineMobile from "../assets/images/thumbnail-project-8-small.webp";
import dineDesktop from "../assets/images/thumbnail-project-8-large.webp";
import drink from "../assets/images/thumbnail-project-9-large.webp";
import ecommerce from "../assets/images/thumbnail-project-10-large.webp";
import biography from "../assets/images/thumbnail-project-11-large.webp";
import caribbean from "../assets/images/thumbnail-project-12-large.webp";

const projects = [
  {
    name: "E-Commerce Shop",
    skills: [
      "HTML",
      "CSS",
      "Tailwind",
      "Javascript",
      "Typescript",
      "React",
      "Nextjs",
      "Prisma",
      "Zod",
    ],
    projectLink: "https://e-commerce-shop-blush.vercel.app/",
    codeLink: "https://github.com/PioKl/E-Commerce-Shop",
    images: [ecommerce, ecommerce],
  },
  {
    name: "Audiophile e-commerce",
    skills: [
      "HTML",
      "CSS",
      "SASS",
      "Javascript",
      "Typescript",
      "React",
      "Nextjs",
      "Mongodb",
    ],
    projectLink: "https://audiophile-e-commerce-website-phi.vercel.app/",
    codeLink: "https://github.com/PioKl/Audiophile-E-Commerce-Website",
    images: [audioMobile, audioDesktop],
  },
  {
    name: "Entertainment web app",
    skills: [
      "HTML",
      "CSS",
      "SASS",
      "Javascript",
      "Typescript",
      "React",
      "Nextjs",
      "Mongodb",
      "API",
    ],
    projectLink: "https://entertainment-web-app-five-brown.vercel.app/",
    codeLink: "https://github.com/PioKl/Entertainment-Web-App",
    images: [entertainmentMobile, entertainmenDesktop],
  },
  {
    name: "Drink Share",
    skills: ["HTML", "CSS", "SASS", "Javascript", "React", "Nextjs", "Strapi"],
    projectLink: "https://drinkshare.vercel.app/",
    codeLink: "https://github.com/PioKl/Drinki-Koktajle-Frontend",
    images: [drink, drink],
  },
  {
    name: "Dictionary web app",
    skills: ["HTML", "CSS", "SASS", "Javascript", "Typescript", "React", "API"],
    projectLink: "https://piokl.github.io/Dictionary-Web-App/",
    codeLink: "https://github.com/PioKl/Dictionary-Web-App",
    images: [dictionaryMobile, dictionaryDesktop],
  },

  {
    name: "Characters-Biography",
    skills: ["HTML", "CSS", "SASS", "Javascript", "React", "GSAP"],
    projectLink: "https://piokl.github.io/Characters-Biography/",
    codeLink: "https://github.com/PioKl/Characters-Biography",
    images: [biography, biography],
  },
  {
    name: "Gallery",
    skills: ["HTML", "CSS", "SASS", "Javascript", "Typescript", "React"],
    projectLink: "https://piokl.github.io/Gallery/",
    codeLink: "https://github.com/PioKl/Gallery",
    images: [galleryMobile, galleryDesktop],
  },
  {
    name: "Planets fact site",
    skills: ["HTML", "CSS", "SASS", "Javascript", "Typescript", "React"],
    projectLink: "https://piokl.github.io/Planets-Facts/",
    codeLink: "https://github.com/PioKl/Planets-Facts",
    images: [planetsMobile, planetsDesktop],
  },
  {
    name: "Karaiby",
    skills: ["HTML", "CSS", "SASS", "Javascript", "React"],
    projectLink: "https://piokl.github.io/Karaiby/",
    codeLink: "https://github.com/PioKl/Karaiby",
    images: [caribbean, caribbean],
  },
  {
    name: "BMI calculator",
    skills: ["HTML", "CSS", "SASS", "Javascript", "Typescript", "React"],
    projectLink: "https://piokl.github.io/BMI-Calculator/",
    codeLink: "https://github.com/PioKl/BMI-Calculator",
    images: [bmiMobile, bmiDesktop],
  },
  {
    name: "Frontend Quiz app",
    skills: ["HTML", "CSS", "SASS", "Javascript", "Typescript", "React"],
    projectLink: "https://piokl.github.io/Frontend-Quiz-App/",
    codeLink: "https://github.com/PioKl/Frontend-Quiz-App",
    images: [frontendqMobile, frontendqDesktop],
  },
  {
    name: "Dine restaurant website",
    skills: ["HTML", "CSS", "SASS", "Javascript", "Typescript", "React"],
    projectLink: "https://piokl.github.io/Dine-Restaurant-Website/",
    codeLink: "https://github.com/PioKl/Dine-Restaurant-Website",
    images: [dineMobile, dineDesktop],
  },
];

const Projects = () => {
  return (
    <section className="wrapper mb-20 md:mb-25 lg:mb-35">
      <div className="flex items-center justify-between mb-10 md:mb-15 lg:mb-20">
        <h1 className="font-bold text-[40px] tracking-[-1.14px] leading-10 md:text-7xl md:tracking-[-2.05px] md:leading-[72px] lg:text-heading-xl lg:tracking-heading-xl lg:leading-heading-xl">
          Projects
        </h1>
        <a href="#contact" className="custom-link custom-border-bottom">
          Contact me
        </a>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-6 lg:gap-7.5">
        {projects.map((project, id) => (
          <div key={id} className="flex flex-col gap-5">
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
                    href={project.projectLink}
                    className="custom-link custom-border-bottom"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                  <a
                    href={project.codeLink}
                    className="custom-link custom-border-bottom"
                    target="_blank"
                    rel="noopener noreferrer"
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
              <div className="flex flex-wrap gap-4">
                {project.skills.map((skill, id) => (
                  <span key={id} className="text-alt">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex mt-auto gap-7.5 lg:hidden">
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
