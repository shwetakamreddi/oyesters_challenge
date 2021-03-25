import React from 'react'
import "./ProductServices.css"
function ProductServices() {
    return (
        <div className="product_services">
            <div className="header">
                <h1>Product and Service</h1>
            </div>
                <div className="product">
                    <div className="img">
                        <img src="img/product.png" alt="product" />
                    </div>
                    <div className="subheader">
                        <h3>Our Product</h3>
                    </div>
                    <div className="info">
                        <p>Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.</p>
                    </div>
                    <div className="button">
                        <p>Read More</p>
                    </div>
                </div>
                <div className="service">
                    <div className="img">
                        <img src="img/service.png" alt="product" />
                    </div>
                    <div className="subheader">
                        <h3>Our Service</h3>
                    </div>
                    <div className="info">
                        <p>DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.</p>
                    </div>
                    <div className="button">
                        <p>Read More</p>
                    </div>
                </div>
                <div className="technology">
                    <div className="img">
                        <img src="img/technology.png" alt="product" />
                    </div>
                    <div className="subheader">
                        <h3>Our Technology</h3>
                    </div>
                    <div className="info">
                        <p>DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.</p>
                    </div>
                    <div className="button">
                        <p>Read More</p>
                    </div>
                </div>
        </div>
    )
}

export default ProductServices
