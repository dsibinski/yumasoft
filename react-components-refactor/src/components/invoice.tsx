import * as React from 'react';
import { Product } from '../viewModels/product';
import { Customer } from '../viewModels/customer';
import { Container, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

type InvoiceProps = {
    products: Product[];
    availableCustomers: Customer[];
}

type InvoiceState = {
    paymentDueDate: Date;
    customer: Customer;
    comments: string;
}


export class Invoice extends React.Component<InvoiceProps, InvoiceState> {
    constructor(props: InvoiceProps) {
        super(props);

        this.state = {
            customer: props.availableCustomers[0],
            paymentDueDate: new Date(),
            comments: ''
        };
    }

    onSelectionChange(eventKey: any, event: any) {
        this.setState({ customer: this.props.availableCustomers[eventKey] });
    }

    render() {
        return (
            <div className="products-list">
                <label htmlFor="invoice-customer">Select customer</label>
                <DropdownButton
                    title={this.state.customer.name}
                    id="invoice-customer"
                    onSelect={this.onSelectionChange.bind(this)}
                >
                    {this.props.availableCustomers.map((customer, index) => (
                        <Dropdown.Item key={index} eventKey={index.toString()}>
                            {customer.name}
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
                <Container>
                    <Row className="products-header">
                        <Col>Name</Col>
                        <Col>Description</Col>
                        <Col>Price</Col>
                    </Row>
                </Container>
                {this.props.products.map(product =>
                    <Container key={product.id.toString()}>
                        <Row className="product-row">
                            <Col>{product.name}</Col>
                            <Col>{product.description}</Col>
                            <Col>{(product.price - (product.price * (this.state.customer.loyaltyDiscount/100))).toFixed(2)}</Col>
                        </Row>
                    </Container>
                )}
            </div>)
    }
}