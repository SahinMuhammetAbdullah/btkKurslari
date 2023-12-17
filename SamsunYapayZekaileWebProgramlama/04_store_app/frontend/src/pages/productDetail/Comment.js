import React from 'react'

export default function Comment({ comments }) {
  if (comments.length === 0) {
    return (
      <div>
        Henüz yorum yapılmadı
      </div>
    )
  }
  return (
    <div>
      <ul>
        {comments?.map((c) => (
          <li key={c?.id}>
            {c?.text}
          </li>
        ))}
      </ul>
      Toplam Yorum Sayısı: -- {comments.length} --
    </div>
  )
}
