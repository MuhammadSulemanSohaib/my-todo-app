import React, {useRef} from 'react'
import { useEffect } from 'react'

import notification from "../../assets/audios/music.mp3"

export default function UseRef() {

    const notificationPlayer = useRef(null)

    useEffect(() => {
        // console.log(notificationPlayer.current.play())
        console.log("It's working")
        notificationPlayer.current.play()
    }, [])

  return (
    <div className="py-5">
        <div className="container">
            <div className="row">
                <div className="col">
                    <audio ref={notificationPlayer} src={notification}></audio>        
                    <h2 className='text-center'>This is a UseRef Page.</h2>      
                </div>
            </div>
        </div>
    </div>
  )
}
