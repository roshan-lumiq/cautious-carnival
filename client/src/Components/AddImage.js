import React, { useState } from 'react'
import axios from 'axios';
function AddImage() {
    const [formData, setFormData] = useState({
        hero: "",
        image: ""
    })
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:5001/add/hero", formData)
            setFormData({
                hero: "",
                image: ""
            })
            alert("added successfully")

        } catch (error) {
            alert("error")
        }

    }
    return (
        <div className='add-image'>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <label for="inputAddress">Hero Name</label>
                    <input type="text" className="form-control" id="inputAddress" name="hero" placeholder='Enter hero name' value={formData.hero} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress2">Image Url</label>
                    <input type="text" className="form-control" id="inputAddress2" name="image" placeholder='Enter image url' value={formData.image} onChange={e => onChange(e)} required />
                </div>
                <button type="submit" className="btn btn-primary">Add/Update</button>
            </form>
        </div>
    )
}

export default AddImage
