const ProductForm = () => {
  return (
    <div className="container mx-auto py-4">
      <div className="row">
        <form action="">
          <div className="form-control mx-auto flex flex-col ">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xl "
            />
          </div>

          <div className="form=group flex flex-col ">
            <label htmlFor="name">Price : </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xl "
            />
          </div>
          <div className="form=group flex flex-col ">
            <label htmlFor="name">Stock : </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xl "
            />
          </div>
          <button className="btn btn-primary my-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
