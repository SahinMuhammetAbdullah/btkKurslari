import React from 'react'

export default function Comment({ selectedProduct }) {
  if (selectedProduct?.comments.length === 0) {
    return (
      <div>
        Henüz yorum yapılmadı
      </div>
    )
  }
  return (
    <div>
      <ul>
        {selectedProduct?.comments.map((c) => (
          <li key={c?.id}>
            {c?.text}
          </li>
        ))}
      </ul>
      Toplam Yorum Sayısı: -- {selectedProduct?.comments.length} --
    </div>
  )
}
