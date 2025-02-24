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
