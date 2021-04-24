import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Customer } from '../viewModels/customer';
import { Product } from '../viewModels/product';

type ProductsListProps = {
    products: Product[];
    customer: Customer;
}


export class ProductsList extends React.Component<ProductsListProps> {
    render() {
        return (
            <div>
                <Container>
                    <Row className="products-header">
                        <Col>Name</Col>
                        <Col>Description</Col>
                        <Col>Price</Col>
                    </Row>
                </Container>
                {
                    this.props.products.map(product =>
                        <Container key={product.id.toString()}>
                            <Row className="product-row">
                                <Col>{product.name}</Col>
                                <Col>{product.description}</Col>
                                <Col>{(product.price - (product.price * (this.props.customer.loyaltyDiscount / 100))).toFixed(2)}</Col>
                            </Row>
                        </Container>
                    )
                };
            </div>)
    };
}