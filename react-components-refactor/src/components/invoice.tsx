import * as React from 'react';
import { Product } from '../viewModels/product';
import { Customer } from '../viewModels/customer';
import { ProductsList } from './productsList';
import { CustomerSelector } from './customerSelector';
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
                <CustomerSelector
                    availableCustomers={this.props.availableCustomers}
                    selectedCustomer={this.state.customer}
                    onSelectionChange={this.onSelectionChange.bind(this)} />
                <ProductsList products={this.props.products} customer={this.state.customer} />
            </div>)
    }
}