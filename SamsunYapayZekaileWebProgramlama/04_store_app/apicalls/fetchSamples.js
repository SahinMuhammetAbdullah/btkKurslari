import fetch from "node-fetch";
const baseUrl = `http://localhost:3000/Products`;

// function getOneProduct(){
//     return fetch(baseUrl)
//         .then(res => res.json());
//         // .then(res => console.log(res));
// }
// async function getOneProduct(){
//     return await fetch(baseUrl)
//         .then(res => res.json());
//         // .then(res => console.log(res));
// }
async function getOneProduct(id) {
    const url = `${baseUrl}/${id}`

    return await fetch(url)
        .then(res => {
            // console.log(res);
            if (res.status !== 200) {
                console.log("200 kodu dışındaki bir kod")
            }
            return res.json()
        });
}
async function getAllProduct() {
    return await fetch(baseUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
        }

    })
        .then(res => {
            // console.log(res);
            if (res.status !== 200) {
                console.log("200 kodu dışındaki bir kod")
            }
            return res.json()
        });
}

async function updateOneProduct(id, product) {
    const url = `${baseUrl}/${id}`;

    try {
        const response = await fetch(url, {
            method: 'PUT', // HTTP PUT metodunu kullanabilirsiniz, gerekirse 'PATCH' veya 'POST' kullanabilirsiniz
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
            },
            body: JSON.stringify(product),
        });

        if (!response.ok) {
            throw new Error(`HTTP hata! Status: ${response.status}`);
        }

        const updatedProduct = await response.json();
        console.log('Güncellenmiş ürün:', updatedProduct);

        return updatedProduct;
    } catch (error) {
        console.error('Ürün güncelleme hatası:', error.message);
        throw error;
    }
}
const productIdToUpdate = 12; // Güncellenecek ürünün ID'si
const updatedProductData = {
    // Güncellenmiş ürün verileri
    name: 'Yeni Ürün Adı',
    price: 29.99,
    // Diğer güncellenmiş özellikler
};

updateOneProduct(productIdToUpdate, updatedProductData)
    .then(updatedProduct => {
        // Başarıyla güncellenmiş ürünü kullanın
        console.log('Başarıyla güncellenmiş ürün:', updatedProduct);
    })
    .catch(error => {
        // Hata durumunda işlemleri ele alın
        console.error('Ürün güncelleme hatası:', error.message);
    });

async function deleteOneProduct(id) {
    const response = await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
        },
    });

    return response.json();
}
const response = await getOneProduct(5);
const responses = await getAllProduct();
await deleteOneProduct(12);
const responsesss = await deleteOneProduct(12);
// const response = getOneProduct();
// console.log(response);
// console.log(responses);
// console.log(responsess);
console.log(responsesss);
// console.log(await getOneProduct())

//! bir şey asenkronsa o işlemin sonucunu beklemez await edersen bekletir beklemezsen promise döner