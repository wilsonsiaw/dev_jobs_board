import React from 'react';
import posts from '../../data/data.json';
import './Card.css'

const Card = ({ ...props }) => {

    const jobPosts = posts.map(post =>
        <div key={post.id} className='card'>
            <img src={post.logo}/>
            <div className="content">
              <div className="para1">
                <p>{post.postedAt}</p>
                <p>{post.contract}</p>
              </div>
              <h3>{post.position}</h3>
              <div className="company">
                <p>{post.company}</p>
              </div>
              <div className="location">
                <p>{post.location}</p>
              </div>
            </div>
        </div>)

  return (
    <div>
      <div className='cards'>{jobPosts}</div>
    </div>
  )
}

export default Card
