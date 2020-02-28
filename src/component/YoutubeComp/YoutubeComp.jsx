import React from 'react'
import './YoutubeComp.css'


const YoutubeComp = (props) => {
    return (
        <div className='header-youtube'>
           
            <div className='head-img'>
                <img src="https://i.ytimg.com/an_webp/63f8LCbuoYg/mqdefault_6s.webp?du=3000&sqp=CKjm1_IF&rs=AOn4CLArtmEzvi2dtlFTNaxtE9SPF1cZaQ" alt=""/>
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