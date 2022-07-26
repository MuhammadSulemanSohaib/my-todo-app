import React from 'react'

export default function Hero() {
  return (
       <>
       <h2 className='text-center py-4'>Add Your Task</h2>
       <div className="container shadow-lg p-3 mb-5 section">
        <div className="row">
          <div className="col-md-6 my-2">
            <input type="text" className='form-control' placeholder='Title'/>
          </div>
          <div className="col-md-6 my-2">
          <input type="text" className='form-control' placeholder='Location'/>
          </div>
          <div className="col-sm-12 my-2">
            <textarea placeholder='Description' className='form-control'></textarea>
          </div>
          <button className='btn btn-danger button mx-auto'>ADD TASK</button>
        </div>
       </div>
       </>
  )
}
