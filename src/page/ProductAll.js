import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const getProducts= async() => {
        let url = 'http://localhost:5000/products';
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data)
    }
    
    //오류방지용용
    productList.map((item) => (
      <ProductCard key={item.id} item={item} />
    ))   

    useEffect(() => {
        getProducts()
    }, [])
  return (
    <div>
      <ProductCard/>
    </div>
  )
}

export default ProductAll
