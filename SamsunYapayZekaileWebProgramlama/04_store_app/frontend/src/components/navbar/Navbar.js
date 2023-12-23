import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
      <div>
          <ul>
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/book">Book</Link>
              </li>
              <li>
                  <Link to="/employees">Çalışanlar</Link>
              </li>
              <li>
                  <Link to="/counter">Sayaç</Link>
              </li>
              <li>
                  <Link to="/contact">İletişim</Link>
              </li>
              <li>
                  <Link to="/products">Ürünler</Link>
              </li>
          </ul>
    </div>
  )
}
