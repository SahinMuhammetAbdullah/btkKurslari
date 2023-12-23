import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../products/ProductsData';
import Comment from './Comment';
import NewCommet from './NewCommet';

export default function ProductDetail() {
  const { id } = useParams();

  // const selectedProduct = products.find(p => p.id === parseInt(id))

  const [selectedProduct, setSelectedProduct] =
    useState(products.find(p => p.id === parseInt(id)));

  if (!selectedProduct) {
    return <div>Ürün Bulunamadı</div>
  }

  return (
    <div>
      <h1>
        {selectedProduct?.name}
      </h1>
      <img src={selectedProduct?.imageUrl} alt={selectedProduct?.name} />
      <p>
        {selectedProduct?.price}
      </p>
      <hr />
      <h1>Yorumlar</h1>
      <ul>
        {/* {selectedProduct.comments.map((c) => (
          <li key={c?.id}>
            {c?.text}
          </li>
        ))} */}
        <Comment selectedProduct={selectedProduct} />
      </ul>

      <p>
        <NewCommet selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
      </p>

      <p>
        <Link to="/products">Ürünler</Link>
      </p>


    </div>
  )
}
