import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Invoice} from './components/invoice';
import {ProductsDataProvider} from './dataProviders/productsDataProvider';
import {CustomersDataProvider} from './dataProviders/customersDataProvider';

function App() {
  const productsDataProvider = new ProductsDataProvider();
  const customersDataProvider = new CustomersDataProvider();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Invoice products={productsDataProvider.getSampleProducts()} availableCustomers={customersDataProvider.getSampleCustomers()}/>
      </header>
    </div>
  );
}

export default App;
