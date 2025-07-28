import { useForm } from "react-hook-form";
import patternRings from "../assets/images/pattern-rings.svg";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    mode: "onChange",
  });
  const onSubmit = (data: FormValues) => {
    console.log("Sending:", data);
    reset();
  };

  return (
    <section className="pt-15 pb-21.5 bg-dark-grey md:pb-23">
      <div className="relative wrapper lg:grid lg:grid-cols-2">
        <div className="mb-12.5 md:max-w-[445px] md:mx-auto">
          <h1 className="mb-5 text-center font-bold text-[40px] tracking-[-1.14px] leading-10 md:text-7xl md:tracking-[-2.05px] md:leading-[72px] lg:mb-9 lg:text-left lg:text-heading-xl lg:tracking-heading-xl lg:leading-heading-xl">
            Contact
          </h1>
          <p className="text-center lg:text-left">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <div className="lg:w-full md:max-w-[445px] md:mx-auto lg:ml-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-8">
              <div
                className={`relative grid w-full ${
                  errors.name && "error-icon"
                }`}
              >
                <input
                  className="w-[90%] pl-6 pb-4 transition-colors duration-200"
                  type="text"
                  placeholder="NAME"
                  {...register("name", { required: "Name is required" })}
                />
                <div
                  className={`border-b-1 mb-1 ${
                    errors.name
                      ? "border-error"
                      : watch("name")
                      ? "border-outline"
                      : "border-main"
                  }`}
                ></div>
                {errors.name ? (
                  <span className="error-message">
                    Sorry, invalid format here
                  </span>
                ) : (
                  <span className="h-4"></span>
                )}
              </div>
              <div
                className={`relative grid w-full ${
                  errors.email && "error-icon"
                }`}
              >
                <input
                  className="w-[90%] pl-6 pb-4 transition-colors duration-200"
                  type="text"
                  placeholder="EMAIL"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid format here",
                    },
                  })}
                />
                <div
                  className={`border-b-1 mb-1 ${
                    errors.email
                      ? "border-error"
                      : watch("email")
                      ? "border-outline"
                      : "border-main"
                  }`}
                ></div>
                {errors.email ? (
                  <span className="error-message">
                    Sorry, invalid format here
                  </span>
                ) : (
                  <span className="h-4"></span>
                )}
              </div>
              <div
                className={`relative grid w-full mb-3 ${
                  errors.message && "error-icon"
                }`}
              >
                <textarea
                  placeholder="MESSAGE"
                  className="w-[90%] h-26.5 pl-6 resize-none transition-colors duration-200"
                  {...register("message", {
                    required: "Message is required",
                  })}
                ></textarea>
                <div
                  className={`border-b-1 mb-1 ${
                    errors.message
                      ? "border-error"
                      : watch("email")
                      ? "border-outline"
                      : "border-main"
                  }`}
                ></div>
                {errors.message ? (
                  <span className="error-message">
                    Sorry, invalid format here
                  </span>
                ) : (
                  <span className="h-4"></span>
                )}
              </div>

              <button
                type="submit"
                className="w-fit ml-auto custom-border-bottom custom-link"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <img
          className="absolute w-[530px] h-[129px] bottom-[37px] left-[-50%] md:bottom-[-63px] md:left-[-44%] lg:bottom-[-30px] lg:left-[-33%]"
          src={patternRings}
          alt=""
        />
      </div>
    </section>
  );
};

export default Contact;
