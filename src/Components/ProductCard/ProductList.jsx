import './ProductList.css';
import Product from './Product';

function ProductList(){
    return (
        <div className='product-list'>
            <Product title="Phone" description="A sleek and powerful smartphone with an all-day battery." image="phone.png"/>
            <Product title="Laptop" description="A high-performance laptop for work and entertainment." image="laptop.png"/>
            <Product title="Mouse" description="A smooth and responsive wireless mouse for effortless navigation." image="mouse.png"/>
        </div>
    );
};

export default ProductList;