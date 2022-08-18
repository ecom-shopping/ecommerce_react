import React from 'react'
import { NavLink}from 'react-router-dom'



function Nav() {
    return (
        // <Router>
            <div className="navbar">
                <ul>
                    <li>
                        <NavLink className='position' exact activeClassName="active" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='position'  activeClassName="active" to="/create">
                            Create
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='position' activeClassName="active" to="/read">
                            Read
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='position' activeClassName="active" to="/update">
                            Update
                        </NavLink>
                    </li>
                </ul>
                <hr />
               

            </div>
        // </Router>


    )
}
export default Nav;