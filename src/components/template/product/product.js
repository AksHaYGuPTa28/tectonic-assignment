import React from 'react';
import { useLocation } from 'react-router-dom';
import './Product.css';

const Product = () => {
    const location = useLocation();
    const { thumbnail } = location.state;
    const { name, dp, ap, dc, sizes } = thumbnail;

    return (
        <div className="product-page">
            <div className="image-gallery">
                <img src={thumbnail.bigImage1} alt={name} />
                <img src={thumbnail.bigImage2} alt={name} />
                <img src={thumbnail.bigImage3} alt={name} />
                <img src={thumbnail.bigImage4} alt={name} />
            </div>
            <div className="product-details">
                <h1>{name}</h1>
                <div className="price-section">
                    <span className="current-price">₹{dp}</span>
                    <span className="original-price">₹{ap}</span>
                    <span className="discount">{dc}% OFF</span>
                </div>
                <p className="tax-info">inclusive of all taxes</p>
                <div className="size-selector">
                    <p>Select Size</p>
                    <div className="sizes">
                        {sizes.map(size => (
                            <button key={size} className="size-button">{size}</button>
                        ))}
                    </div>
                </div>
                <button className="buy-now">Buy Now</button>
            </div>
        </div>
    );
};

export default Product;
