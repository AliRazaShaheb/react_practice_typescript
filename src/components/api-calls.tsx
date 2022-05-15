import React, { useEffect, useState } from "react";

const baseURL = "https://jsonplaceholder.typicode.com";
const endPoints = {
  POSTS: "posts"
};

const ApiCalls = () => {
  const [data, setData] = useState<any>([]);
  const [newPost, setNewPost] = useState({
    userID: "",
    title: "",
    body: ""
  });
  console.log(newPost);
  const updateList = async () => {
    const res = await fetch(`${baseURL}/${endPoints.POSTS}`);
    const json = await res.json();
    setData(json);
  };
  useEffect(() => {
    updateList();
  }, []);

  const newPostHandle = (e) => {
    e.preventDefault();
    try {
      fetch(`${baseURL}/${endPoints.POSTS}`, {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((res) => res.json())
        .then((result) => setData((prev) => [...prev, result]));
      updateList();
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewPost({
      ...newPost,
      [name]: value
    });
  };

  return (
    <div>
      <div>
        {data.slice(95).map((post) => {
          return (
            <div key={post.id}>
              <pre>{JSON.stringify(post)}</pre>
            </div>
          );
        })}
      </div>
      {/* create new post */}
      <div>
        <form action="#">
          <div>
            <input type="text" placeholder="userID" onChange={handleChange} />
          </div>
          <div>
            <input type="text" placeholder="title" onChange={handleChange} />
          </div>
          <div>
            <input type="text" placeholder="body" onChange={handleChange} />
          </div>
          <button onClick={(e) => newPostHandle(e)}>Create New Post</button>
        </form>
      </div>
    </div>
  );
};

export default ApiCalls;
