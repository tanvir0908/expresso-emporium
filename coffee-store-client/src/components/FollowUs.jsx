import cup1 from "../assets/cups/Rectangle 9.png";
import cup2 from "../assets/cups/Rectangle 10.png";
import cup3 from "../assets/cups/Rectangle 11.png";
import cup4 from "../assets/cups/Rectangle 12.png";
import cup5 from "../assets/cups/Rectangle 13.png";
import cup6 from "../assets/cups/Rectangle 14.png";
import cup7 from "../assets/cups/Rectangle 15.png";
import cup8 from "../assets/cups/Rectangle 16.png";

export default function FollowUs() {
  return (
    <div className="mx-52 text-center py-20">
      <p className="font-rale font-medium text-lg">Follow Us Now</p>
      <h2 className="font-ran text-6xl mt-3 mb-10 text-[#331A15]">
        Follow on Instagram
      </h2>
      <div className="grid grid-cols-4 gap-5">
        <div>
          <img className="w-full" src={cup1} alt="" />
        </div>
        <div>
          <img className="w-full" src={cup2} alt="" />
        </div>
        <div>
          <img className="w-full" src={cup3} alt="" />
        </div>
        <div>
          <img className="w-full" src={cup4} alt="" />
        </div>
        <div>
          <img className="w-full" src={cup5} alt="" />
        </div>
        <div>
          <img className="w-full" src={cup6} alt="" />
        </div>
        <div>
          <img className="w-full" src={cup7} alt="" />
        </div>
        <div>
          <img className="w-full" src={cup8} alt="" />
        </div>
      </div>
    </div>
  );
}
