'use client';

import { useRef, useState } from 'react';
import classes from './image-picker.module.css';

export default function ImagePicker({label, name}){

    const [pickedImage, setPicketImage] = useState();
    const imageInputRef = useRef();

    function handlePickClick() {
        imageInputRef.current.click();
    }
    
    function handleImageChange(event) {
        const file = event.target.files[0];
    }
    
    
    return <div className={classes.picker}>
        <label htmlFor="image">{label}</label>
        <div className={classes.controls}>
            <input className={classes.input} type="file" id={name} accept="image/png,  image/jpeg" onChange={handleImageChange} ref={imageInputRef} name={name} />
            <button className={classes.button} type="button" onClick={handlePickClick}>Pick an Image</button>
        </div>
    </div>
}