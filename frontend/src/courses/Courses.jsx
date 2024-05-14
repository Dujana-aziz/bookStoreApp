import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Course from '../components/Course'

function Courses() {
    return (
        <div>
            <NavBar />
            <div className="pt-28">
                <Course />

            </div>
            <Footer />
        </div>
    )
}

export default Courses
