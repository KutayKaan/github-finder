import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Footer extends Component {
  render() {
    return (
      <div className='container'>
        <footer className='py-3 my-4'>
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className='nav-item'>
                    <Link to="/AboutUsContent" className='nav-link px-2 text-body-secondary'>About Us</Link>
                </li>
                <li className='nav-item'>
                    <Link to="#" className='nav-link px-2 text-body-secondary'>Contact Us</Link>
                </li>
                <li className='nav-item'>
                    <Link to="#" className='nav-link px-2 text-body-secondary'>AnkaraUniversity</Link>
                </li>
                <li className='nav-item'>
                    <Link to="#" className='nav-link px-2 text-body-secondary'>ComputerScience</Link>
                </li>
            </ul>
            <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
        </footer>
      </div>
    )
  }
}

export default Footer