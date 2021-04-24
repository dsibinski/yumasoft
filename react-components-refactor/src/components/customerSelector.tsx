import * as React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { Customer } from '../viewModels/customer';

type CustomerSelectorProps = {
    availableCustomers: Customer[];
    selectedCustomer: Customer;
    onSelectionChange: (eventKey: any, event: any) => void;
}

export class CustomerSelector extends React.Component<CustomerSelectorProps> {

    render() {
        return <div>
            <label htmlFor="invoice-customer">Select customer</label>
            <DropdownButton
                title={this.props.selectedCustomer.name}
                id="invoice-customer"
                onSelect={this.props.onSelectionChange}
            >
                {this.props.availableCustomers.map((customer, index) => (
                    <Dropdown.Item key={index} eventKey={index.toString()}>
                        {customer.name}
                    </Dropdown.Item>
                ))}
            </DropdownButton>
        </div>
    }
}