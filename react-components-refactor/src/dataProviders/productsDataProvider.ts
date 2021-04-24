import {Product} from '../viewModels/product';
import {Guid} from 'typescript-guid';


export class ProductsDataProvider {
    getSampleProducts(): Product[] {
        return [{id: Guid.create(), name: "Shampoo", description: "This is a very nice shampoo!", price: 15.55, availableQuantity: 50},
        {id: Guid.create(), name: "iPhone XS", description: "Great phone", price: 600.00, availableQuantity: 150},
        {id: Guid.create(), name: "Apple", description: "Imported from Poland, sooo good!", price: 15.53, availableQuantity: 1025},
        {id: Guid.create(), name: "Samsung Galaxy S3", description: "Legendary smartphone", price: 150.00, availableQuantity: 25},
        {id: Guid.create(), name: "ASUS ZenBook laptop", description: "15 screen, 16 GB RAM, SSD", price: 2200.00, availableQuantity: 17},
        {id: Guid.create(), name: "Helmet", description: "Scooter helmet for your safety", price: 25.99, availableQuantity: 33},
        {id: Guid.create(), name: "ASUS charging cable", description: "Your ASUS cable is broken? We have a new one!", price: 5.50, availableQuantity: 6},
        {id: Guid.create(), name: "Water", description: "Stay hydrated ;)", price: , availableQuantity: 457}]
    }
}