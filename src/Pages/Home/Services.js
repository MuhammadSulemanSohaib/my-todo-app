import React from 'react'

import Action from '../../Components/Button/Action'

export default function Services() {

  // const Title = ["Dolor exercitation c", "Sunt molestias alias", "Dolor dicta vel comm"]

  // const Location = ["Ea aperiam et facili", "Tempora iusto incidi", "Eligendi aliquid ut"]

  // const Description =["Ex laborics occaecat", "Autem magna mollitia", "Amet perspiciatis"]

  return (
    <>

    <div className='py-4'>
    <div className="container">
        <div className="row">
            <div className="col">       
        <div className="container shadow-lg py-5 section1">
            <h2 className='text-center'>Your Task</h2>

            {/* <div className="text-center">
              <td className='title'>

                {Title.map ((Title, i) => {
                  return <li key={i}>{Title}</li>
                })}

                {Location.map ((Location, i) => {
                  return <li key={i}>{Location}</li>
                })}

                {Description.map((Description, i) => {
                  return <li key={i}>{Description}</li>
                })}

              </td>
            </div> */}

            <table className='table table1'>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Location</th>
      <th scope="col">Description</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Dolor exercitation c</td>
      <td>Ea aperiam et facili</td>
      <td>Ex laborics occaecat</td>
      <td><Action /></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Sunt molestias alias</td>
      <td>Tempora iusto incidi</td>
      <td>Autem magna mollitia</td>
      <td><Action /></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Dolor dicta vel comm</td>
      <td>Eligendi aliquid ut</td>
      <td>Amet perspiciatis</td>
      <td><Action /></td>
    </tr>
  </tbody>
</table>        

         </div>
        </div>
      </div>
    </div>
  </div>

    </>
)}
