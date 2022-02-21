import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
  const products = useSelector((state) => state.allproducts.products)
  console.log(products);

  const renderList = products.map(product => {
    return (
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start', margin: '1rem auto', width: '30%'}} key={product.id}>
        <Link to={`/product/${product.id}`}>
          <div className='ui link cards'>
            <div className='card'>
              <div className='image'>
                <img src={product.image} alt={product.title} />
              </div>
              <div className='content'>
                <div className='header'>{product.title}</div>
                <div className=' price'><b>$ {product.price}</b></div>
                <div className='meta'>{product.category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  })

  return (
    <>
      {renderList}
    </>
  )
}

export default ProductComponent