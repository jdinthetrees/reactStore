import axios from "axios";

export const getCategories = async () => 
    await axios.get(`${process.env.REACT_APP_API}/categories`);

export const getCategory = async (slug) => 
    await axios.get(`${process.env.REACT_APP_API}/category/${slug}`);

    //authotoken needed as this is protected route
export const removeCategory = async (slug, authtoken) => 
    await axios.delete(`${process.env.REACT_APP_API}/category/${slug}`, {
        //we need to send authtoken in the headers
        headers: {
            authtoken,
        },
    });

export const updateCategory = async (slug, category, authtoken) => 
    await axios.put(`${process.env.REACT_APP_API}/category/${slug}`, {
        headers: {
            authtoken,
        },
    });
    
    export const createCategory = async (category, authtoken) => 
    await axios.post(`${process.env.REACT_APP_API}/category`, category, {
        headers: {
            authtoken,
        },
    });
     


