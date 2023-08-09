import { FETCH_PRODUCT_SUCCESS } from "./actionProductType";

const baseUrl: string = "http://localhost:8000";

type IProduct = {
   id: number;
   name: string;
   description: string;
   image: string;
   stock: number;
   price: number;
   createdAt: string;
   updatedAt: string;
}

type IFetchSuccess = {
   type: string,
   payload: IProduct[]
}

export const fetchProductSuccess = (payload: IProduct[]): IFetchSuccess => {

   return {
      type: FETCH_PRODUCT_SUCCESS,
      payload,
   }
}


export const fetchProduct = () => {
   return (dispatch: any): any=> {
      fetch( baseUrl, {
         headers: {
            'Content-Type': 'application/json'
         }
      })
      .then((res) => {
         return res.json()
      })
      .then((data) => {
         dispatch(fetchProductSuccess(data))
      })
   }
}
