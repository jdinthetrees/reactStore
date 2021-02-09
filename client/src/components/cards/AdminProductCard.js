import React from "react";
import { Card } from "antd";
import camera from "../../images/kisspng-camera-photography-icon-vector-color-camera-design-5aa502dab59d18.8110978415207636107439.png";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Meta } = Card;

const AdminProductCard = ({ product, handleRemove }) => {
  //destructure
  const { title, description, images, slug } = product;

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
        <EditOutlined className="text-primary" />,
        <DeleteOutlined
          onClick={() => handleRemove(slug)}
          className="text-danger"
        />,
      ]}
    >
      <Meta
        title={title}
        description={`${description && description.substring(0, 400)}...`}
      />
    </Card>
  );
};

export default AdminProductCard;
