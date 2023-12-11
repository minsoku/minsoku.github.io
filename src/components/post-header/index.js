import React from 'react';
import './style.scss';

function PostHeader({ post }) {
  return (
    <header className="post-header">
      <div className="info">
        <div className="categories">
          {post.categories.map((category) => (
            <div className="category" key={category}>
              {category}
            </div>
          ))}
        </div>
      </div>

      <h1 className="title">{post.title}</h1>
    </header>
  );
}
export default PostHeader;
