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
      const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                setProducts(json);
                console.log("json>>>>>", json)
            } catch (error) {
                console.error(error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <Skeleton />
    }

    if (error) {
        return <div>Oh no, something went terribly wrong: {error.message}</div>;
    }
    console.log("products>>>", products)

    return (
        <div className="bg-primary">
                    
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
            <ProductsUI products={products} title="tom" />

          </div>
        </div>
      );
}

