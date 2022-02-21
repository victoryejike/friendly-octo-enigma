import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent';
import { fetchProducts } from '../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';

const ProductListing = () => {
  const product = useSelector((state) => state.allproducts.products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className='ui grid container' style={{paddingTop: '5rem'}}>
      {
        Object.keys(product).length === 0 ? <div>...Loading</div>
        : <ProductComponent />
      }
      
    </div>
  )
}

export default ProductListing