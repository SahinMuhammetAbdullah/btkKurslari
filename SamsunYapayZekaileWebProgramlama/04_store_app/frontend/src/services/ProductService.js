import axios from 'axios';

class ProductService {
    constructor() {
        this.baseUrl = `http://localhost:3000/Products`;
    }

    async getAllProducts(){
        const {data} = await axios
            .get(this.baseUrl);
        return data;
    }
}

export default ProductService;