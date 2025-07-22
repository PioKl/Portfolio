import patternRings from "../assets/images/pattern-rings.svg";

const skills = [
  { skill: "HTML", exp: "4 Years Experience" },
  { skill: "CSS", exp: "4 Years Experience" },
  { skill: "Javscript", exp: "4 Years Experience" },
  { skill: "Accessibility", exp: "4 Years Experience" },
  { skill: "React", exp: "4 Years Experience" },
  { skill: "Sass", exp: "4 Years Experience" },
];

const Experience = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="wrapper mb-20 pb-10 border-b-1 border-alt md:mb-25 md:pb-0 md:border-0 lg:mb-35">
        <ul className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:gap-13 md:grid-cols-2 lg:gap-14.5 lg:grid-cols-3">
          {skills.map((item, id) => (
            <li key={id} className="flex flex-col items-center md:items-start">
              <span className="font-bold text-[32px] tracking-[-1.00px] leading-10 whitespace-nowrap md:text-heading-l md:tracking-heading-l md:leading-heading-l">
                {item.skill}
              </span>
              <span className="text-alt font-medium text-base tracking-[0] leading-[26px] md:text-body md:tracking-body md:leading-body">
                {item.exp}
              </span>
            </li>
          ))}
        </ul>
        <img
          src={patternRings}
          alt=""
          className="absolute -z-1 w-[530px] h-[129px] left-[50%] bottom-[16px] md:left-[80%] md:bottom-[36px] lg:bottom-[88px]"
        />
      </div>
    </section>
  );
};

export default Experience;
