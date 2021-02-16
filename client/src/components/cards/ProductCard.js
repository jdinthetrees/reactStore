import React from "react";
import { Card} from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import camera from "../../images/kisspng-camera-photography-icon-vector-color-camera-design-5aa502dab59d18.8110978415207636107439.png";
import { Link } from "react-router-dom";


const {Meta} = Card;

const ProductCard = ({ product }) => {
    //destructure
    const {images, title, description, slug} = product;

return (
   
  <Card
    cover={
      <img
        src={images && images.length ? images[0].url : camera}
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


