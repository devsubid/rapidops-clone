import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setVariant } from "../../redux/slices/cursorSlice";

const Brands = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <section className="container-custom-xs min-h-screen my-28 flex flex-col justify-center">
      <h2
        className="font-serif text-4xl mb-8"
        onMouseEnter={() => {
          dispatch(setVariant("pointer"));
        }}
        onMouseLeave={() => {
          dispatch(setVariant("none"));
        }}
      >
        Trusted by top brands globally
      </h2>
      <p className="mb-24">
        Fortune 500, mid-size enterprises, innovative startups - all trust us to
        deliver on their mission-critical digital initiatives.
      </p>
      <img src="/imgs/brands.png" className="w-full aspect-auto" alt="" />
      <div className="testimonial my-24">
        <div className="testimonial__content leading-loose text-xl p-16">
          I have brought Rapidops in for massive digital transformation projects
          at my last three companies (all different industries) and will
          continue to do so.{" "}
          <span className="text-black/50">
            I am impressed with the exceptional quality, expertise, and speed
            they brought to the table.
          </span>
        </div>
        <div className="testimonial__author flex justify-between items-center">
          <div className="left flex items-center gap-4">
            <img
              src="https://www.rapidops.com/static/d4f5cdf23c72ac6baf57334fe76af3e5/d6c07/testimonial-author-img.webp"
              className="w-20 h-20 rounded-full"
              alt=""
            />
            <div className="author-details">
              <h4 className="font-serif text-2xl">Chase Cabanillas</h4>
              <p className="text-black/50">CIO / Flex Technology Group</p>
            </div>
          </div>
          <div className="right">
            <img
              src="https://www.rapidops.com/static/e737ee3a457805eeee0005f1e21ac0f1/82578/home-testimonial-flex-logo.webp"
              className="h-12"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
