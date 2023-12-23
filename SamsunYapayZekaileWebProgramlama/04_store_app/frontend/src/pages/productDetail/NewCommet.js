import React from 'react'
import { Button, Input } from '@mui/material'
import { useFormik } from 'formik'

function NewCommet({ selectedProduct, setSelectedProduct }) {

  const formik = useFormik({
    initialValues: {
      id: selectedProduct?.comments.length + 1,
      text: ''
    },
    onSubmit: (values) => {
      const newComment = {
        id: selectedProduct?.comments.length + 1,
        text: values.text
      }
      setSelectedProduct((prevState) => ({
        ...prevState,
        comments: [...prevState.comments, newComment]
      }))
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