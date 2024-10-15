import React from 'react'
import { useEffect, useState } from 'react'

const App = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = () => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => setproducts(data.products))
  }

  console.log(products);

  return (
    <>
    <div className='flex flex-wrap justify-center items-center bg-blue-50 p-10 gap-5'>
      {products.map((item, index) => (
        <div key={index} className='w-[23%] h-[40vh] bg-white p-4 border-2 border-gray-600'>
          <img src={item.images[0]} className='w-full h-40'></img>
          <h3>{item.title}</h3>
          <p>Price: {item.price}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default App