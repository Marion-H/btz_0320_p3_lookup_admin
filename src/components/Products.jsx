import React, { useState, useEffect } from "react";
import { Row, Container, Spinner } from "reactstrap";
import axios from "axios";
import BaseCardProduct from "./builders/BaseCardProduct";
import AddProduct from "./builders/AddProduct";
const Products = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProduct = async () => {
    try {
      const res = await axios.get(
        "https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/products"
      );
      setProductData(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Spinner color="primary" />;
  }

  return (
    <Container>
      <Row>
        <h1>Produits</h1>
      </Row>
      <Row>
        {productData.map((it) => (
          <BaseCardProduct
            key={it.uuid}
            uuid={it.uuid}
            name={it.name}
            price={it.price}
            description={it.description}
            picture={it.picture}
            getProduct={getProduct}
          />
        ))}
      </Row>
      <Row>
        <AddProduct getProduct={getProduct} />
      </Row>
    </Container>
  );
};

export default Products;
