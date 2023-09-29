import {useEffect, useState} from 'react';


function ProductPage() {
const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const searchQuery = window.location.search;
      const url = new URLSearchParams(searchQuery)
      const id = url.get('id');
      const res = await fetch (
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const json = await res.json();
      console.log("json>>>>>", json, id);
      setPostData(json);
    };
    fetchData();
  }, []);


    return (
      <>

<section className="flex justify-center items-center h-screen">
<div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://source.unsplash.com/random" alt="" />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{postData?.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</div>
</section>

      </>
    );
  }
  
  export default ProductPage;
  