import axios from 'axios';
const API_URL="http://localhost:8081";
class ProductService {
  saveProduct(product) {
    return axios.post(API_URL+"/saveproduct", product);
  }
    getAllProducts() {
        return axios.get(API_URL+"/");
    }
    getProductById(id) {
        return axios.get(API_URL+"/product/"+id);
    }
    deleteProduct(id) {
        return axios.delete(API_URL+"/deleteProduct/"+id);
    }
    editProduct(id, product) {
            return axios.put(API_URL+"/editProduct/"+product.id, product);
        }
         
}
export default ProductService;