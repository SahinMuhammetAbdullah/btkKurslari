import axios from "axios";

const baseUrl = `http://localhost:3000/Products`;

async function getOneProduct(id) {
    const url = `${baseUrl}/${id}`;
    const { data, status } = await axios.get(url);
    return data;
}

async function getAllProduct() {
    const { data, status } = await axios.get(baseUrl);
    return data;
}

async function creatOneProduct(product) {
    const { data, status } = await axios.post(baseUrl, product);
    return data;
}

const product = {

    "id": 13,
    "name": "latte",
    "price": 50

}

async function updatedOneProduct(id,product){
    const { data, status } = await axios.put(`${baseUrl}/${product.id}`, product);
    return data;
}

async function deleteOneProduct(id) {
    const { data, status } = await axios.delete(`${baseUrl}/${id}`);
    return data;
}

// const response = await getOneProduct(16);
// const response = await getAllProduct();
// const response = await creatOneProduct(product);
// console.log(response);
// const response = await updatedOneProduct(product);
// console.log(response);
const response = await deleteOneProduct(13);
console.log(response);
const responses = await getAllProduct();
console.log(responses);