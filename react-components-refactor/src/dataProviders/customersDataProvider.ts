import { Customer } from '../viewModels/customer';
import { Guid } from 'typescript-guid';


export class CustomersDataProvider {
    getSampleCustomers(): Customer[] {
        return [{ id: Guid.create(), name: "Dawid Sibinski", loyaltyDiscount: 0 },
        { id: Guid.create(), name: "John A bit Loyal", loyaltyDiscount: 10 },
        { id: Guid.create(), name: "Alice Very Loyal", loyaltyDiscount: 30 }]
    }
}