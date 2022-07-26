import React from 'react'

import moment from 'moment';

moment(). format()

const date = moment().format('dddd MMMM Do YYYY, h:mm:ss A')

export default function Header() {
    return (
            <header className = "bg-danger py-1">
                <div className = "container">
                    <div className = "roww">
                        <div className = "col">
                            <p className = "mb-0 text-center text-white">{date}</p>
                        </div>
                    </div>
                </div>
            </header>
    )
}
