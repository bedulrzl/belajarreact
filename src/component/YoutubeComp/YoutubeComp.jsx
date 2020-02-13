import React from 'react'
import './YoutubeComp.css'


const YoutubeComp = (props) => {
    return (
        <div className='header'>
           
            <div className='head-img'>
                <img src="https://i.ytimg.com/an_webp/p7Nwlq9ZKCU/mqdefault_6s.webp?du=3000&sqp=COiEk_IF&rs=AOn4CLDxI9qvAOa6uwN-2iDx3hHd4YMBdw" alt=""/>
                <p className='img-time'>{props.time}</p>
            </div>
            <p>{props.title}</p>
            <p>desc here</p>

        </div>
    )
}

YoutubeComp.defaultProps = {
    time: '00:00',
    title: 'title here'
}

export default YoutubeComp;