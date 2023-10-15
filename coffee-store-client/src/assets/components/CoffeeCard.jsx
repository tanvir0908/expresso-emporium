/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function CoffeeCard({ coffee, coffees, setCoffees }) {
  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
              const remaining = coffees.filter((coffee) => coffee._id != id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-2">
        <img src={photo} alt="" />
      </div>
      <div className="col-span-3 ml-2">
        <h2 className="text-2xl font-medium">Name: {name}</h2>
        <p className="text-lg font-medium text-gray-500">Price: {details}</p>
      </div>
      <div className="btn-group btn-group-vertical">
        <button className="btn">Details</button>
        <Link to={`/updateCoffee/${_id}`}>
          <button className="btn">Edit</button>
        </Link>

        <button className="btn bg-red-500" onClick={() => handleDelete(_id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
