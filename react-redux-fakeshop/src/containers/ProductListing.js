import React, { useEffect } from 'react'
import axios from 'axios';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';

const ProductListing = () => {
  const product = useSelector((state) => state.allproducts.products)
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response =  await axios.get('https://fakestoreapi.com/products').catch(err=> {
      console.log(err);
    })

    dispatch(setProducts(response.data));
  }

  useEffect(() => {
    fetchProducts();
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