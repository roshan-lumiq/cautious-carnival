import React, { useState } from 'react'
import axios from 'axios';
import { set } from 'mongoose';
// import PropTypes from 'prop-types'

function ShowImage(props) {
    const [key, setKey] = useState([])
    const [image, setImage] = useState('')


    const onClick = (e) => {
        console.log(e.target.value);
        setKey([...key, e.target.value])
        console.log(key)
    }

    const onBack = () => {
        if (key.length != 0) {
            let n = key.pop()
            setKey([...key])
        }
    }

    const onSubmit = async (e) => {

        e.preventDefault()
        // console.log(key);
        const body = {
            keys: key
        }
        try {

            let res = await axios.post("http://localhost:5001/get/superhero", body)
            setImage(res.data.image)
            setKey([])

        } catch (err) {
            alert("error ")
            console.error(err);
        }
    }



    return (
        <div >
            {
                image ? (<img src={image} alt="couldn't load the image" class="image-1" />) : (<h2>serch for hero</h2>)

            }


            <form className='table-1' style={{ background: "blue" }} onSubmit={e => onSubmit(e)}>
                <div class="input-group input-group-lg">
                    <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder='superhero name' value={key} disabled />
                </div>
                <table className="table">
                    <tbody>
                        <tr>
                            <td><input type="button" value="abc" className='btn-secondary' onClick={e => onClick(e)} /> </td>
                            <td><input type="button" value="def" className='btn-secondary' onClick={e => onClick(e)} /> </td>
                            <td><input type="button" value="ghi" className='btn-secondary' onClick={e => onClick(e)} /> </td>
                        </tr>
                        <tr>
                            <td><input type="button" value="jkl" className='btn-secondary' onClick={e => onClick(e)} /> </td>
                            <td><input type="button" value="mno" className='btn-secondary' onClick={e => onClick(e)} /> </td>
                            <td><input type="button" value="pqr" className='btn-secondary' onClick={e => onClick(e)} /> </td>
                        </tr>
                        <tr>
                            <td><input type="button" value="stu" className='btn-secondary' onClick={e => onClick(e)} /> </td>
                            <td><input type="button" value="vwx" className='btn-secondary' onClick={e => onClick(e)} /> </td>
                            <td><input type="button" value="yz" className='btn-secondary' onClick={e => onClick(e)} /> </td>
                            <td>
                                <button type="button" style={{ background: "grey" }} onClick={onBack} disabled={!key.length}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-backspace" viewBox="0 0 16 16">
                                    <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
                                    <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z" />
                                </svg></button>
                            </td>
                            <td>
                                <button type='submit' className='btn-secondary' disabled={!key.length} >Done</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </form>

        </div>
    )
}

ShowImage.propTypes = {

}

export default ShowImage

