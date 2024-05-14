import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import { Link } from 'react-router-dom'

function Course() {
    console.log(list)
    return (
        <>
            <div className="  max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className="  item-center justify-center text-center ">
                    <h1 className='text-2xl  md:text-4xl'>We're delighted to have you <span className='text-pink-600'>here! :)</span>
                    </h1>
                    <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam earum facilis dolore deserunt ea, explicabo fugiat placeat voluptas expedita. Maxime, explicabo ex! Nostrum earum rem, libero voluptas inventore quisquam, consectetur velit possimus totam soluta dolore esse. Quos qui nam, officiis ducimus, animi pariatur tenetur eius sed obcaecati in natus labore, optio dolorum nulla perferendis ab quo? Porro laboriosam ratione a neque harum assumenda exercitationem provident dolorum eius ex quidem qui et fugit, iure alias necessitatibus distinctio asperiores autem excepturi nulla? Quaerat iste repellat, quia,
                    </p>
                    <Link to='/'>
                        <button className='bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>
                            Back
                        </button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
                    {
                        list.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course
