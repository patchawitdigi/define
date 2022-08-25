import './new.css';
import delogo from '../img/pointint/logo-menu.png'
import { useState, useEffect } from 'react';

export default function New() {

    // const [Newinfo, setNewinfo] = useState([]);
    // useEffect(() => {
    //     fetch(`http://localhost:8202/publicServices/news/list.php?route=${newsId}`).then(
    //         response => response.json().then(data => {
    //             setNewinfo(data);
    //         })
    //     )
    // }, [])

    return (
        <div>
            <img className='delogo' src={delogo} />
            <div className='headborder'>
                <h3 className="headnew" data-aos="fade-right" >NEWS & MEDIA</h3>
                <h3 className="headnew2" data-aos="fade-right" data-aos-delay="250"></h3>
            </div>
            <p>date</p>
            <p>title</p>
            <img />
            <p>sub title</p>
            
        </div>
    )
}