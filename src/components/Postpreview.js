import React from 'react';

const Postpreview = (props) => {
    return (
        <div className="post-preview">
              <a href="post.html">
                <h2 className="post-title">
                  {props.heading}
                </h2>
                <h3 className="post-subtitle">
                {props.subtitle}
                </h3>
              </a>
              <p className="post-meta">Posted by
                <a href="#"> {props.author} </a>
                on {props.date} </p>
            </div>
    );
}

export default Postpreview;
