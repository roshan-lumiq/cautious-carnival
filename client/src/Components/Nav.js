import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <ul class="nav">
                <li class="nav-item">
                    <Link class="nav-link active" to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/addimage">Add/Update</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav
