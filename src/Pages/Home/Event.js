import React from 'react'

export default function Event() {

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("button is working")
    }
  return (
<div className='py-5 bg-secondary'>
    <div className="container">
        <div className="row">
            <div className="col">
                <h2 className='text-center text-white py-4'>This is our Event section.</h2>
                <div className="text-center">
                    <form>
                        <input type="text" className='mb-2 form-control' placeholder='Enter your text' />
                    <button className='btn btn-info m-2' onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
                <p className='text-center text-white mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, perspiciatis. Quae eum repellat voluptatem iure quasi dicta accusantium laudantium iusto ipsam atque, incidunt praesentium earum fugit possimus laboriosam veniam. Error?</p>
            </div>
        </div>
    </div>
</div>  
  )
}
