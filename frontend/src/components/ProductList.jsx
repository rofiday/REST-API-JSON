import { getProducts } from "../services/api";
import { useState, useEffect } from "react";
import ProductForm from "./ProductForm";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isOpenForm, setIsOpenForm] = useState(false);
  useEffect(() => {
    (async () => {
      console.log(await getProducts());
      setProducts(await getProducts());
    })();
  }, []);
  const handleForm = () => {
    console.log(!isOpenForm);
    setIsOpenForm(!isOpenForm);
  };
  return (
    <div className="container mx-auto py-24">
      <div className="row w-3/4 mx-auto">
        <button className="btn btn-primary ml-5" onClick={handleForm}>
          Create Product
        </button>
        {isOpenForm && <ProductForm />}
        <div className="overflow-x-auto bg-slate-800 my-2 rounded-md">
          <table className="table text-center text-white ">
            <thead className="text-white">
              <tr>
                <th>No</th>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products?.products?.map((product) => (
                <tr key={product.id}>
                  <td>{products.products.indexOf(product) + 1}</td>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                  <td>
                    <button className="btn btn-success text-white mx-1">
                      Edit
                    </button>
                    <button className="btn btn-error text-white mx-1">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
