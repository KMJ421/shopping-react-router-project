import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query] = useSearchParams();
    
    //오류방지용용
    productList.map((item) => (
      <ProductCard key={item.id} item={item} />
    ))   

    useEffect(() => {
      const getProducts= async() => {
        let SearchQuery = query.get('q')||"";
        console.log("쿼리값은?", SearchQuery);
        let url = `https://my-json-server.typicode.com/KMJ421/shopping-react-router-project/products?q=${SearchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data)
    };
        getProducts()
    }, [query])
  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll
