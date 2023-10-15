export default function AddCoffee() {
  const handleAddCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = { name, chef, supplier, taste, category, details, photo };
    console.log(newCoffee);
  };

  return (
    <div className="bg-[#F4F3F0] py-20">
      <h2 className="text-5xl font-bold text-center">Add New Coffee</h2>
      <p className="w-2/4 mt-5 font-medium text-gray-500 text-lg mx-auto text-center">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form className="mx-auto mt-20" onSubmit={handleAddCoffee}>
        <div className="flex gap-10 w-2/3 mx-auto">
          <div className="flex flex-col w-full">
            <span className="font-medium mb-1">Name</span>
            <input
              className="px-3 py-2 rounded text-xl"
              type="text"
              name="name"
              placeholder="Enter coffee name"
            />
          </div>
          <div className="flex flex-col w-full">
            <span className="font-medium mb-1">Chef</span>
            <input
              className="px-3 py-2 rounded text-xl"
              type="text"
              name="chef"
              placeholder="Enter coffee chef"
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
            />
          </div>
          <div className="flex flex-col w-full">
            <span className="font-medium mb-1">Taste</span>
            <input
              className="px-3 py-2 rounded text-xl"
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
            />
          </div>
        </div>
        <div className="flex gap-10 w-2/3 mx-auto">
          <div className="flex flex-col w-full">
            <span className="font-medium mb-1">Category</span>
            <input
              className="px-3 py-2 rounded text-xl"
              type="text"
              name="category"
              placeholder="Enter coffee category"
            />
          </div>
          <div className="flex flex-col w-full">
            <span className="font-medium mb-1">Details</span>
            <input
              className="px-3 py-2 rounded text-xl"
              type="text"
              name="details"
              placeholder="Enter coffee details"
            />
          </div>
        </div>
        <div className="flex-col flex mx-auto w-2/3 my-5">
          <span className="font-medium mb-1">Photo</span>
          <input
            className="px-3 py-2 rounded text-xl"
            type="text"
            name="photo"
            placeholder="Enter photo URL"
          />
        </div>
        <div className="mx-auto w-2/3">
          <input
            className="cursor-pointer mt-3 rounded py-2 font-medium w-full bg-[#D2B48C] border-2 border-[#331A15]"
            type="submit"
            value="Add Coffee"
          />
        </div>
      </form>
    </div>
  );
}
