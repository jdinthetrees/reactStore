import React from "react";
import { Card} from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Camera from "../../images/default.png";
import { Link } from "react-router-dom";


const {Meta} = Card;

const ProductCard = ({ product }) => {
    //destructure
    const {images, title, description, slug} = product;

return (
   
  <Card
    cover={
      <img
        src={images && images.length ? images[0].url : Camera}
        style={{ height: "150px", objectFit: "cover" }}
        className="m-2"
      />
    }

    actions={[
        <Link to={`/product/${slug}`}>
          <EyeOutlined className="text-primary" /> <br/> View Product
        </Link>,
        <>
        <ShoppingCartOutlined
          className="text-danger"
        /><br/> Add to Cart
        </>,
      ]}
  >
    <Meta
      title={title}
      description={`${description && description.substring(0, 400)}...`}
    />
  </Card>
);
    };


export default ProductCard;


