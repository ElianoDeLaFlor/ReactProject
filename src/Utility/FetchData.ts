import Product from "../models/Product";
import ServiceResponse from "../models/ServiceResponse";

class FetchData {

    public async fetchProductDetail(url: string) {
        try {
            const response = await fetch(url, { method: "GET" });
            if (response.ok) {
                const data = await response.json() as Product;
                let result = new ServiceResponse<Product>();
                result.data = data;
                result.success = true;
                result.message = "Operation completed successfully";

                return result;
            } else {
                let result = new ServiceResponse<Product>();
                result.data = null;
                result.success = false;
                result.message = "an error occur";

                return result;
            }

        } catch (error) {
            let result = new ServiceResponse<Product>();
            result.data = null;
            result.success = false;
            result.message = error as string;

            return result;
        }
    }

    public async fetchProductList(url: string) {
        try {
            const response = await fetch(url, { method: "GET" });
            const data = await response.json() as Product[];

            let result = new ServiceResponse<Array<Product>>();
            result.data = data;
            result.message = "data retrieved successfully";
            result.success = true;
            return result;
        } catch (error) {
            let result = new ServiceResponse<Array<Product>>();
            result.data = null;
            result.message = "an error occured";
            result.success = false;
            return result;
        }
    }
}

export default FetchData;