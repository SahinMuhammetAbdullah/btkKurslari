import * as Yup from 'yup';
//yapılan iş validation kontrol

const BookValidationSchema = Yup.object().shape({
  title: Yup.string().required('Kitap adı zorunludur'),

  price: Yup.number()
    .typeError('lütfen geçerli fiyat giriniz')
    .positive('sıfırdan küçük olamaz')
    .required('Fiyatı zorunludur')
    .positive('Fiyat sıfırdan büyük olmalıdır')
    .min(10, "Fiyat 10 küçük olamaz")
    .max(1000, "Fiyat 1000 den büyük olamaz"),

  author: Yup.string().required('Yazar adı zorunludur'),
});

export default BookValidationSchema;