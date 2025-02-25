import { services_data } from "./ServicesStatic";

export const ImageGridModel = ({
  props = {
    name: "sample",
    paragraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus illum aliquid suscipit! Cupiditate assumenda magni, voluptatum vero molestiae sequi modi voluptates dolores eos aspernatur laudantium laboriosam ullam nam. Et, saepe!",
    img: "/new_img/crane.jpg",
    url: "/",
  },
}) => {
  return (
    <div>
      <section>
        <div className="flex justify-center flex-col gap-3  px-10">
          <div className="mx-auto w-full">
            <img src={"/new_img/crane.jpg"} />
          </div>
          <div className="w-full font-semibold text-black text-clamp leading-[1] text-center text-xl">
            {props.name}
          </div>
          <p className=""> {props.paragraph}</p>

          <button> Learn More</button>
        </div>
      </section>
    </div>
  );
};

export const GridManager = ({ constraint }) => {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10">
      {services_data
        .filter((aa) => aa.belongsTo === constraint)
        .map((item) => (
          <ImageGridModel props={item} />
        ))}
    </div>
  );
};
export const SubSectionManager = ({ constraint }) => {
  return (
    <>
      <ul className="list-disc list-inside min-w-[20dvw] ">
        {services_data
          .filter((aa) => aa.belongsTo === constraint)
          .map((item) => (
            <li>
              <a href={`/services${item.url}`}>{item.name}</a>
            </li>
          ))}
      </ul>
    </>
  );
};

export const ImageViewer = ({ images, title, description }) => {
  return (
    <div className="grid  md:grid-cols-2  grid-cols-1 px-10 py-10   gap-10 w-full  ">
      {images.map((item) => (
        <div className="w-full min-h-[50dvh] flex flex-col   ">
          <img src={item} className="object-cover  w-full h-full" />

          <div>
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p className="text-lg">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export const ImageViewer2 = ({ images, description }) => {
  return (
    <>
      <div className="grid  md:grid-cols-2  grid-cols-1 px-10 py-10   gap-10 w-full  ">
        {images.map((item) => (
          <div className="w-full min-h-[50dvh] flex flex-col   ">
            <img src={item} className="object-cover  w-full h-full" />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center  flex-col gap-5">
        <p className="text-sm italic ">{description}</p>

        <a
          href="/get-quote"
          class="hidden  box-border relative z-30 md:inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-green-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-green-500 ease focus:outline-none"
        >
          <span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
          <span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
          <span class="relative z-20 flex items-center text-sm">
            <svg
              class="relative w-5 h-5 mr-2 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
            Get in Touch
          </span>
        </a>
      </div>
    </>
  );
};
