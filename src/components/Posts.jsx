import { useLoaderData } from "react-router-dom"
import Card from "./Card.jsx";

function Posts() {
    const posts = useLoaderData()
    console.log(posts);
  return (
    <div>
        Posts : {posts.length}
      <div className="box">
      {
            posts.map((post, index)=> <Card
            key={index}
            post={post}
            ></Card>)
        }
      </div>


    </div>
  )
}

export default Posts