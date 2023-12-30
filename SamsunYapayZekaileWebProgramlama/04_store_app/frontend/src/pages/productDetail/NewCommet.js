import React from 'react'
import { Button, Input } from '@mui/material'
import { useFormik } from 'formik'
import ProductService from '../../services/ProductService'

function NewCommet({ selectedProduct, setSelectedProduct }) {

  const formik = useFormik({
    initialValues: {
      id: selectedProduct?.comments.length + 1,
      text: ''
    },
    onSubmit: (values) => {
      const productService = new ProductService();

      const product = {
        ...selectedProduct,
        comment: [
          ...selectedProduct.comment,
          values
        ]
      }
      productService.updateOneProduct(product.id,product);
      setSelectedProduct(product);
    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit} >
        <Input name="text" value={formik.values.comment} onChange={formik.handleChange} />
        <Button variant='contained' type='submit' >Gönder</Button>
      </form>
    </div>
  )
}

export default NewCommet;