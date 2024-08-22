import React from 'react';
import './Container.css';
import { useNavigate } from 'react-router-dom';

const SmallContainer = ({ thumbnails }) => {
    const navigate = useNavigate();

    const handleThumbnailClick = (thumbnail) => {
      navigate('/product', { state: { thumbnail } });
    };

    
    return (
        <div className="small-container">
            {thumbnails.map((thumbnail, index) => (
                <div key={index} className="thumbnail" onClick={() => handleThumbnailClick(thumbnail)}>
                    <img className='thumbnail-img' src={thumbnail.src} alt={thumbnail.name} />
                    <div className="thumbnail-details">
                        <h3>{thumbnail.name}</h3>
                        <p><b>₹{thumbnail.dp} </b> <span className='ap'>₹{thumbnail.ap}</span></p>
                        <p className='dc'>{thumbnail.dc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SmallContainer;
