import React from 'react';
import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com/search/photos", 
    headers: {
        Authorization: 'Client-ID i3KNQpK7Xkhks5YoCaA5ceWeAT5ZdIqdNI9rfoyuv5g'
    }
});
