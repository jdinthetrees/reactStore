import axios from "axios";


export const createProduct = async (product, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/product`, product, {
    headers: {
      authtoken,
    },
  });

export const getProductsByCount = async (count) =>
  await axios.get(`${process.env.REACT_APP_API}/products/${count}`);

// export const getCategory = async (slug) =>
//   await axios.get(`${process.env.REACT_APP_API}/category/${slug}`);

// export const removeCategory = async (slug, authtoken) =>
//   await axios.delete(`${process.env.REACT_APP_API}/category/${slug}`, {
//     headers: {
//       authtoken,
//     },
//   });

// export const updateCategory = async (slug, category, authtoken) =>
//   await axios.put(`${process.env.REACT_APP_API}/category/${slug}`, category, {
//     headers: {
//       authtoken,
//     },
//   });


