import React from 'react'
import Header from '../components/header/Header'
import { useFormik } from 'formik'
import BookValidationSchema from './BookValidation';


function BookWithFormik() {

    const formik = useFormik({
        initialValues: {
            title: '',
            price: '',
            author: '',
        },

        onSubmit: (values) => {
            console.log(values);
            formik.resetForm();
        },

        validationSchema: BookValidationSchema
    });

    return (
        <center>
            <Header data={{ title: "Formik ile Form kontrolü" }} />
            <form onSubmit={formik.handleSubmit} >
                <div>
                    <input
                        type="text"
                        name="title"
                        placeholder="Kitap adı"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                        onBlur={formik.handleBlur}
                    />
                    {(formik.errors.title && formik.touched.title) && <div>{formik.errors.title}</div>}
                </div>

                <div>
                    <input
                        type="text"
                        name="price"
                        placeholder="Fiyatı"
                        onChange={formik.handleChange}
                        value={formik.values.price}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.price && formik.touched.price != null ? <div>{formik.errors.price}</div> : null}
                </div>

                <div>
                    <input
                        type="text"
                        name="author"
                        placeholder="Yazarı"
                        onChange={formik.handleChange}
                        value={formik.values.author}
                        onBlur={formik.handleBlur}
                    />
                    {(formik.errors.author && formik.touched.author) && <div>{formik.errors.author}</div>}
                </div>

                <input type="submit" />
            </form>
            {JSON.stringify(formik.values)}

        </center>
    )
}
export default BookWithFormik;