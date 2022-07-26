import React from 'react'

export default function Footer() {

    const year = new Date().getFullYear();

  return (
    <footer className = "footer py-1">
    <div className = "container">
        <div className = "roww">
            <div className = "col">
                <p className = "mb-0">&copy; {year}. All Rights Reserved. Developed by <a href='0' className='text-white fw-bold'> sulemansohaib.6735@gmail.com</a></p>
            </div>
        </div>
    </div>
</footer>
)
  
}
