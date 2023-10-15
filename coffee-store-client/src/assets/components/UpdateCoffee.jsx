/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

export default function UpdateCoffee() {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    //send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Success", "Update Successfully", "success");
        }
      });
  };

  return (
    <div>
      <div className="bg-[#F4F3F0] py-20">
        <h2 className="text-5xl font-bold text-center">Update Coffee</h2>
        <p className="w-2/4 mt-5 font-medium text-gray-500 text-lg mx-auto text-center">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form className="mx-auto mt-20" onSubmit={handleUpdateCoffee}>
          <div className="flex gap-10 w-2/3 mx-auto">
            <div className="flex flex-col w-full">
              <span className="font-medium mb-1">Name</span>
              <input
                required
                className="px-3 py-2 rounded text-xl"
                type="text"
                name="name"
                placeholder="Enter coffee name"
                defaultValue={name}
              />
            </div>
            <div className="flex flex-col w-full">
              <span className="font-medium mb-1">Chef</span>
              <input
                className="px-3 py-2 rounded text-xl"
                type="text"
                name="chef"
                placeholder="Enter coffee chef"
                defaultValue={chef}
              />
            </div>
          </div>
          <div className="flex gap-10 my-5 w-2/3 mx-auto">
            <div className="flex flex-col w-full">
              <span className="font-medium mb-1">Supplier</span>
              <input
                className="px-3 py-2 rounded text-xl"
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                defaultValue={supplier}
              />
            </div>
            <div className="flex flex-col w-full">
              <span className="font-medium mb-1">Taste</span>
              <input
                className="px-3 py-2 rounded text-xl"
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
                defaultValue={taste}
              />
            </div>
          </div>
          <div className="flex gap-10 w-2/3 mx-auto">
            <div className="flex flex-col w-full">
              <span className="font-medium mb-1">Category</span>
              <input
                required
                className="px-3 py-2 rounded text-xl"
                type="text"
                name="category"
                placeholder="Enter coffee category"
                defaultValue={category}
              />
            </div>
            <div className="flex flex-col w-full">
              <span className="font-medium mb-1">Details</span>
              <input
                required
                className="px-3 py-2 rounded text-xl"
                type="text"
                name="details"
                placeholder="Enter coffee details"
                defaultValue={details}
              />
            </div>
          </div>
          <div className="flex-col flex mx-auto w-2/3 my-5">
            <span className="font-medium mb-1">Photo</span>
            <input
              required
              className="px-3 py-2 rounded text-xl"
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              defaultValue={photo}
            />
          </div>
          <div className="mx-auto w-2/3">
            <input
              className="cursor-pointer mt-3 rounded py-2 font-medium w-full bg-[#D2B48C] border-2 border-[#331A15]"
              type="submit"
              defaultValue="Update Coffee"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
