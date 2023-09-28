import PropTypes from 'prop-types';
import ProductCard from './card';

export default function ProductsUI({ products = [] }) {

  async function deletePost(id) { 
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE'
    });
    const data = await res.json();
    console.log(`this was deleted----`, data);
  }





  


  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {products.map(({ id, title, body, userId }) => (
        <ProductCard
          key={id}
          id={id}
          title={title}
          body={body}
          userId={userId}
          deletePost={deletePost}
        />
      ))}
    </div>
  );
}

ProductsUI.propTypes = {
  products: PropTypes.array,
}
