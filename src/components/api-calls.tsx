import { useEffect, useState } from "react";

const baseURL = "https://jsonplaceholder.typicode.com";
const endPoints = {
  POSTS: "posts"
};

const ApiCalls = () => {
  const [data, setData] = useState([]);
  const [newPost, setNewPost] = useState({
    userID: "",
    title: "",
    body: ""
  });
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
        .then((result) => console.log(result));
      updateList();
    } catch (err) {
      console.log(err);
    }
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
            <input
              type="text"
              placeholder="userID"
              onChange={(e) =>
                setNewPost((prev) => ({ ...prev, userID: e.target.value }))
              }
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="title"
              onChange={(e) =>
                setNewPost((prev) => ({ ...prev, title: e.target.value }))
              }
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="body"
              onChange={(e) =>
                setNewPost((prev) => ({ ...prev, body: e.target.value }))
              }
            />
          </div>
          <button onClick={(e) => newPostHandle(e)}>Create New Post</button>
        </form>
      </div>
    </div>
  );
};

export default ApiCalls;