import background from "../assets/more/3.png";

export default function Banner() {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="w-[100%] h-[90vh]" style={backgroundStyle}>
      <div className="pt-96 w-11/12 pl-[47%]">
        <h2 className="font-ran text-6xl text-white">
          Would you like a Cup of Delicious Coffee?
        </h2>
        <p className="font-rale text-white my-8 text-lg leading-relaxed">
          It is coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion <br /> of every moment!!! Enjoy the
          beautiful moments and make them memorable.
        </p>
        <button className="font-ran text-black border-2 border-[#E3B577] rounded text-3xl px-5 py-2 bg-[#E3B577] hover:bg-transparent hover:border-white hover:border-2 hover:text-white">
          Learn More
        </button>
      </div>
    </div>
  );
}
