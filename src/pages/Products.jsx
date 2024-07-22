import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

export default function Products () {
  const [products] = useState([
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for product 1',
      price: 29.99,
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for product 2',
      price: 39.99,
      image: 'https://images.pexels.com/photos/134064/pexels-photo-134064.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for product 3',
      price: 19.99,
      image: 'https://images.pexels.com/photos/23710026/pexels-photo-23710026/free-photo-of-mulher-pe-casamento-festa-de-casamento.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ]);

  return (
    <div className="my-5">
      <Container>
        <h1>Produtos</h1>
        <Row>
          {products.map(product => (
            <Col key={product.id} sm={12} md={6} lg={4}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
