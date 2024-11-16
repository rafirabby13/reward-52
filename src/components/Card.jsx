/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

function Card({post}) {
    const {title,id, body} = post
  return (
    <div>
        <div className="card">
            <h1>{title}</h1>
            <h1>{body}</h1>
            <Link to={`/post/${id}`} className="btn">View Post</Link>
        </div>
    </div>
  )
}

export default Card