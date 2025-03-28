import './ProductList.css';
import Product from './Product';

function ProductList(){
    return (
        <div className='product-list'>
            <Product />
            <Product />
            <Product />
        </div>
    );
};

export default ProductList;