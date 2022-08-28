import React from 'react'

import './style.css';

const Restaurant = () => {
    const myStyle = {color: "red"};
  return (
    <>
        <div className="card-container">
            <div className="card">
                <div className="card-body">
                    <span className="card-number card-circle subtle">1</span>
                    <span className="card-author subtle" style={myStyle}>Breakfast</span>
                    <h2 className="card-title">Maggi</h2>
                    <span className="card-description subtle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tenetur accusamus nisi pariatur. Molestias quia porro temporibus numquam minima dolore?
                        I love Maggi. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </span>
                    <div className="card-read">Read</div>
                </div>
                <img src={image} alt="images" className="card-media" />
                <span className="card-tag subtle">Order Now</span>
            </div>
        </div>
    </>
  )
}

export default Restaurant