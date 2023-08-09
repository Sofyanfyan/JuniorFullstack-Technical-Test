import { FETCH_PRODUCT_SUCCESS } from "../actions/actionProductType";

// type IState = {
//    news:[]
// }

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

type IAction = {
   type: string,
   payload: IProduct[]
}

const initialState: any = { product: [] }

function productReducer(state = initialState, action: IAction): any {

   switch(action.type) {
      case FETCH_PRODUCT_SUCCESS:
         return {
            ...state,
            product: action.payload
         }
      default:
         return state
      
   }
}

export default productReducer