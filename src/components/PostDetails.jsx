/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { BookmarkContext } from "../Providers/BookmarksProvider.jsx";

const PostDetails = () => {
 const {setBookmarks} = useContext(BookmarkContext)
  const data = useLoaderData();
  const { title, id, body } = data;
  const obj = useParams();
  console.log(obj.postId);

  const handleBooksmarks = (post) => {
    console.log(post);
    setBookmarks((prev) => [...prev, post]);
  };
  return (
    <div>
      <h1>Serial Number : {obj.postId}</h1>
      <div className="card">
        <h1>{title}</h1>
        <h1>{body}</h1>
        <Link to="/" className="btn">
          View Post
        </Link>
        <button onClick={()=>handleBooksmarks(data)} className="btn">
          Add to Bookmark
        </button>
      </div>
    </div>
  );
};

export default PostDetails;
