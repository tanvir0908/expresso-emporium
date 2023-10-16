import logo from "../assets/more/logo1.png";
import background from "../assets/more/15.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="flex justify-center items-center py-3 gap-3"
      style={backgroundStyle}
    >
      <img src={logo} className="w-16" alt="" />
      <Link to={"/"}>
        {" "}
        <h2 className="font-ran text-5xl text-white">Espresso Emporium</h2>
      </Link>
    </div>
  );
}
