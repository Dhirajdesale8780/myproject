import React from 'react'
import resume from '../assets/dhiraj desale_9689848801.pdf'

function Home() {
  return (<>
    <div className='container-fluid text-light min-vh-100 d-flex justify-content-center align-items-center 'id='home'>
        <div className="d-flex flex-column justify-content-center align-items-center text-center" >

    
          <h1>Hello, I am <span className='text-danger display-2 fw-bold'>Dhiraj Desale</span></h1>
          <p className='my-info w-50 '>
            I am professional web developer looking for the opportunity to express my knowledge.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid velit dicta voluptatum rem blanditiis magnam voluptatibus vitae. Ipsum, dignissimos unde molestias at hic optio voluptatum beatae nihil, velit quaerat ratione. Quae sed neque fugiat ex!
          </p>
          <div>
            <a href={resume} className='btn btn-outline-danger mx-3' download>Download Resume</a>

            <a href className='btn btn-danger'>Connect on Whatsapp</a>

          </div>
        </div>
    </div>
    </>
  )
}
  

export default Home
