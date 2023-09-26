// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = eachBlog

  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <div className="each-blog" data-testid="loader">
        <img src={imageUrl} className="logo-image" />
        <div className="book-details">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-container">
            <img src={avatarUrl} className="author-image" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
