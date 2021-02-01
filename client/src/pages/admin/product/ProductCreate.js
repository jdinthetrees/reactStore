import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { createProduct } from "../../../functions/product";
import ProductCreateForm from "../../../components/forms/ProductCreateForm";

const initialState = {
  title: "Fuji Xt-3",
  description: "test camera",
  price: "500",
  categories: [],
  category: "",
  subs: "",
  shipping: "Yes",
  quantity: "50",
  images: [],
  colors: ["black", "silver", "white", "gray"],
  brands: ["Fuji", "Nikon", "Sony", "Canon", "Black Magic", "Panasonic"],
  color: "black",
  brand: "Fuji",
};

const ProductCreate = () => {
  const [values, setValues] = useState(initialState);

  //redux
  const { user } = useSelector((state) => ({ ...state }));

 
  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(values, user.token)
      .then((res) => {
        console.log(res);
        window.alert(`"${res.data.title}" is created`);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        // if (err.response.status === 400) toast.error(err.response.data);
        toast.error(err.response.data.err);
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, "  ------------ ", e.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div class="col-md-10">
          <h4>Product Create</h4>
          <hr />
          <ProductCreateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            values={values}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
