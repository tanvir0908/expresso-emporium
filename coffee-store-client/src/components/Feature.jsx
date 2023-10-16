import icon1 from "../assets/icons/1.png";
import icon2 from "../assets/icons/2.png";
import icon3 from "../assets/icons/3.png";
import icon4 from "../assets/icons/4.png";

export default function Feature() {
  return (
    <div className="px-52 bg-[#ECEAE3] grid grid-cols-4 gap-20 py-20">
      <div>
        <img src={icon1} alt="" />
        <h3 className="font-ran my-3 text-4xl">Awesome Aroma</h3>
        <p className="font-rale">
          You will definitely be a fan of the design & aroma of your coffee
        </p>
      </div>
      <div>
        <img src={icon2} alt="" />
        <h3 className="font-ran my-3 text-4xl">High Quality</h3>
        <p className="font-rale">
          We served the coffee to you maintaining the best quality
        </p>
      </div>
      <div>
        <img src={icon3} alt="" />
        <h3 className="font-ran my-3 text-4xl">Pure Grades</h3>
        <p className="font-rale">
          The coffee is made of the green coffee beans which you will love
        </p>
      </div>
      <div>
        <img src={icon4} alt="" />
        <h3 className="font-ran my-3 text-4xl">Proper Roasting</h3>
        <p className="font-rale">
          Your coffee is brewed by first roasting the green coffee beans
        </p>
      </div>
    </div>
  );
}
