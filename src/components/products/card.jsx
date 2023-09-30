// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Add this line


export default function ProductCard({ id, title, body, userId, deletePost }) {

    const [isEditing, setIsEditing] = useState(false);


    async function handleOnSubmitEdit(event) {
      event.preventDefault();
  
      const textAreaElement = event.target.elements.postEditBody.value; 
      setUpdateBody(textAreaElement);
      console.log(textAreaElement, "formElements")

      const payload = {
          id: id,
          body: textAreaElement,
          userId: userId,
      };
  
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, 
    {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  },
      setIsEditing(false)

  )
  const data = await res.json();
  console.log(`this was edited----`, data);
    }
  const [updateBody , setUpdateBody] = useState(body);
  

 const href = new URL(`products/${id}?id=${id}`, window.location.origin);

  return (
    <div key={id} className="group relative p-4 bg-white shadow-md rounded-lg flex flex-col justify-between">
      <a href={href}>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={"https://source.unsplash.com/random"}
          alt={title}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      </a>
      <div className='TESTESTTEST'>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-700">ID: {userId}</p>
       
        {isEditing ? (
            <form onSubmit={handleOnSubmitEdit}>
                <label htmlFor="postEditBody" className='block mb-2 font-medium text-gray-900 '>
                    Edit Post
                </label>
            <textarea name="postEditBody" id="postEditBody" cols="50" rows="5" className='block p-2.5 w-full text-sm text-gray-900, bg-gray-400' defaultValue={updateBody} />
            <button type='submit' className='btn-success rounded mt-2'>Update</button>

            </form>
        ) : (
          <p className="mt-2 text-gray-900">{updateBody}</p>
        )}
      </div>

      <div className="flex mt-4 justify-end">
        <button onClick={() => deletePost(id)} className="btn rounded mr-2">Delete</button>
        <button onClick={() => setIsEditing(prev => !prev)} className="btn rounded">Edit</button>
      </div>
    </div>
  );
}
ProductCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
    deletePost: PropTypes.func.isRequired,
  };