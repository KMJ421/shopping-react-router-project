import React from 'react'
import { useEffect, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const ProductDetail = () => {
  let{id} = useParams()
  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    const getProductDetail = async() => {
      let url = `https://my-json-server.typicode.com/KMJ421/shopping-react-router-project/products/${id}`
      let response = await fetch(url)
      let data = await response.json();
      setProduct(data);
    };
    getProductDetail()
  }, [id])

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img width="300px" src={product?.img} alt="상품 이미지" />
        </Col>
        <Col>
          <div className="product-title">{product?.title}</div>
          <div className="product-price">{product?.price + '원'}</div>
          <div className="product-choice">{product?.choice === true? "Conscious choice":""}</div>
          {product?.size && product.size.length > 0 && (
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product.size.map((s, index) => (
                  <Dropdown.Item key={index}>{s}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          )}
          <Button variant="dark" style={{ marginTop: '20px' }}>추가</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
