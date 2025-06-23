import React from 'react'
import Row from 'react-bootstrap/esm/Row'


function Footer() {
  return (
    <div>
      <div className="container-fuild">
        <div className="row">
            <div className="col text-20 mx-5 d-flex justify-content-around ">
              <h1>Barand</h1>
            
               <div className='d-flex justify-content-evenly ankartext '>
                <a href="" className='text-decoration-none ustify-content-evenly text-dark'>Home</a>
                <a href="" className='text-decoration-none mx-5 text-dark'>About</a>
                <a href="" className='text-decoration-none text-dark'>Servisce</a>
               </div>
           
            
                <button className='Homebtn1'>getmore imfromation</button>
             </div>
        </div>

         <div className="row margin-top footerclass border-top  border-5 border-dark">
              <div className="col text-center  d-flex  justify-content-between ankartext ">
                < p className='mx-5'>2023 Relume. All right reserved.</p>
                < a className='text-decoration-none text-dark' href="">Privacy Policy</a>
                <a href="" className='text-decoration-none text-dark'>Terms of Service</a>
                <a href="" className='mx-5 text-decoration-none text-dark'>Cookies Settings</a>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Footer;
