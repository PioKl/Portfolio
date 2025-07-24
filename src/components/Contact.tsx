const Contact = () => {
  return (
    <section className="pt-15 pb-21.5 bg-dark-grey md:pb-23">
      <div className="wrapper lg:grid lg:grid-cols-2">
        <div className="mb-12.5 lg:max-w-[445px]">
          <h1 className="mb-5 text-center font-bold text-[40px] tracking-[-1.14px] leading-10 md:text-7xl md:tracking-[-2.05px] md:leading-[72px] lg:mb-9 lg:text-left lg:text-heading-xl lg:tracking-heading-xl lg:leading-heading-xl">
            Contact
          </h1>
          <p className="text-center lg:text-left">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <div className="lg:w-full lg:max-w-[445px] lg:ml-auto">
          <form action="">
            <div className="grid gap-8">
              <input
                className="w-full pl-6 pb-4 border-b-1 border-main"
                type="text"
                placeholder="NAME"
              />
              <input
                className="w-full pl-6 pb-4 border-b-1 border-main"
                type="text"
                placeholder="EMAIL"
              />
              <textarea
                name=""
                id=""
                placeholder="MESSAGE"
                className="w-full h-26.5 mb-3 pl-6 border-b-1 border-main resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-fit ml-auto custom-border-bottom custom-link"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
