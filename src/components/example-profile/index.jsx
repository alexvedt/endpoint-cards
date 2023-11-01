import { useState, useEffect } from "react";
import { supabase } from "../../lib/api";

export function ApiProfile() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const makeANewPost = async (event) => {
    event.preventDefault();
    const { data, error } = await supabase
      .from("posts")
      .insert([
        { author_name: authorName, title: title },
      ])
      .select();

    console.log(data, error);
    setPosts(prev => [...data, ...prev]);
    setTitle(''); // Clear form
    setAuthorName(''); // Clear form
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase.from("posts").select();
        if (error) { throw error; }
        setPosts(data);
      }
      catch(error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <section>
        <div>
          <form onSubmit={makeANewPost}>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
            <input type="text" value={authorName} onChange={e => setAuthorName(e.target.value)} placeholder="Author Name" />
            <button type="submit">Make a New Post</button>
          </form>
        </div>
      </section>
      <div className="flex flex-col justify-center items-center">
        <h1>This is posts</h1>
        {posts.map(({ id, author_name, title }) => (
          <div key={id}>
            <h3 className="capitalize">{title}</h3>
            <h4>{author_name}</h4>
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://source.unsplash.com/random" alt="Random Unsplash Image" />
          </div>
        ))}
      </div>
    </>
  );
}
