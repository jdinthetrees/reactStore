import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { createSub, getSub, removeSub, getSubs } from "../../../functions/sub";
import { Link } from "react-router-dom";
import { getCategories } from "../../../functions/category";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import CategoryForm from "../../../components/forms/CategoryForm";
import LocalSearch from "../../../components/forms/LocalSearch";

const SubCreate = () => {
  const { user } = useSelector((state) => ({ ...state }));

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
//   const [subs, setSubs] = useState([]);

  //step 1 whenever user sets keyword for query set it in state
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () =>
    getCategories().then((c) => setCategories(c.data));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    createSub({ name, parent: category }, user.token)
      .then((res) => {
        //console.log(res)
        setLoading(false);
        setName("");
        toast.success(`"${res.data.name}" is created`);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        if (err.response.status === 400) toast.error(err.response.data);
      });
  };

  const handleRemove = async (slug) => {
    // let answer = window.confirm("Delete?");
    // console.log(answer, slug);
    if (window.confirm("Delete?")) {
      setLoading(true);
      removeSub(slug, user.token)
        .then((res) => {
          setLoading(false);
          toast.error(`${res.data.name} deleted`);
        })
        .catch((err) => {
          if (err.response.status === 400) {
            setLoading(false);
            toast.error(err.response.data);
          }
        });
    }
  };

  //step4 higher order function to use in MAP to show show results
  const searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword);

  return (
    <div className="container-fluid">
      <div class="row">
        <div class="col-md-2">
          <AdminNav />
        </div>
        <div class="col">
          {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (
            <h4>Create sub category</h4>
          )}

          <div className="form-group">
            <label>Parent Category</label>
            <select name="category" className="form-control" 
            onChange={(e) => setCategory(e.target.value)}
            >
             <option>Please Select</option>
              {categories.length > 0 &&
                categories.map((c) => 
                  <option key={c._id} value={c._id}>
                    {c.name}
                  </option>
                )}
            </select>
          </div>

          {JSON.stringify(category)}
          <CategoryForm
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
          />

          {/* step 2 and step 3 moved to this component */}
          <LocalSearch keyword={keyword} setKeyword={setKeyword} />

          <hr />
          {/* step 5 implement seached in MAP */}
          {/* {categories.filter(searched(keyword)).map((c) => (
            <div className="alert alert-secondary" key={c._id}>
              {c.name}{" "}
              <span
                onClick={() => handleRemove(c.slug)}
                className="btn btn-sm float-right"
              >
                <DeleteOutlined className="text-danger" />
              </span>{" "}
              <Link to={`/admin/category/${c.slug}`}>
                <span className="btn btn-sm float-right">
                  <EditOutlined className="warning" />
                </span>
              </Link>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default SubCreate;
