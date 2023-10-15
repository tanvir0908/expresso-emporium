/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function CoffeeCard({ coffee }) {
  const { name, chef, supplier, taste, category, details, photo } = coffee;
  return (
    <div className="flex justify-between">
      <div className="w-3/4">
        <img src={photo} alt="" />
      </div>
      <div>
        <h2>{name}</h2>
        <p>{details}</p>
      </div>
      <div className="btn-group btn-group-vertical">
        <button className="btn btn-active">Details</button>
        <button className="btn">Edit</button>
        <button className="btn">Delete</button>
      </div>
    </div>
  );
}
