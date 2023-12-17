import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../products/ProductsData';
import Comment from './Comment';

export default function ProductDetail() {
  const { id } = useParams();

  const selectedProduct = products.find(p => p.id === parseInt(id))
  if (!selectedProduct) {
    return <div>Ürün Bulunamadı</div>
  }
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
      <hr/>
      <h1>Yorumlar</h1>
      <ul>
        {/* {selectedProduct.comments.map((c) => (
          <li key={c?.id}>
            {c?.text}
          </li>
        ))} */}
        <Comment comments = {selectedProduct?.comments} />
      </ul>

      <p>
        <Link to="/products">Ürünler</Link>
      </p>

    </div>
  )
}
