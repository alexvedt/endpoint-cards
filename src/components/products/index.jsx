/**
 * 
 * Displays a list of products from the server
 */

import { useEffect } from "react";
import { useState } from "react";
import  ProductsUI  from "./ui.jsx";
import Skeleton from "./skeleton.jsx";


export default function ProductsList() {
    const [products, setProducts,] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

       useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then((res) => res.json()) 
        .then(({ products }) => setProducts(products))
        .catch((err) => {
            console.want(err)
            setError(err);
        })
        .finally(() => setIsLoading(false));
           
            
    }, []);

    if (isLoading) {
        return <Skeleton />

    }
    
    if (error) {
        return <div>Oh no, something went terribly wrong: {error.message}</div>;
    }
    
    


    return (
        <div className="bg-primary">
                    
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
            <ProductsUI products={products} title="tom" />

          </div>
        </div>
      );
}
