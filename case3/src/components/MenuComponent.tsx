import CardComponent from "./CardComponent";
import { useSelector, useDispatch } from "react-redux";
import {useEffect} from 'react';
import { fetchProduct } from "../stores/actions/actionProductCreator";

function MenuComponent()
{

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

   const product = useSelector((state: any) => {
      return state.product.product
   })

   const dispatch = useDispatch()

   const fetch: any = fetchProduct()

   useEffect(() => {
      dispatch(fetch);
   }, [])


   if(!product)
   {
      return <h1>Loading</h1>
   }

return (
   <div className="list-menus d-flex justify-content-center">
      <div className="container mb-5">

         
            <h4 className="header my-4">Our menu</h4>
         <div className="row d-flex justify-content-evenly justify-content-center">

               {
                  product.map((el: any, index: number): any => {
                  

                  return <CardComponent key={index} {...el}/>
               })
               }
         </div>


         
      </div>
   </div>
);
}

export default MenuComponent