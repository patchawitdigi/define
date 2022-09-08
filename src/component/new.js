import './new.css';
import delogo from '../img/pointint/logo-menu.png'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { newsList } from'./flieapi';
import Aos from "aos";
import "aos/dist/aos.css";

export default function New() {

    let { newsRouting } = useParams();

    const [newinfo, setNewinfo] = useState([]);

    useEffect(() => {
        
        // fetch(`http://localhost:8202/publicServices/news/list.php?route=${newsId}`).then(
        // fetch(`https://define.com.vn/apiv1/publicServices/news/list.php?route=${newsRouting}`).then(
        fetch( newsList +`?route=${newsRouting}`).then(
            response => response.json().then(data => {
                setNewinfo(data);
            })
        )
        Aos.init({ duration: 1000 });
    }, [])

    function createMarkup(data) {
        return { __html: data };
    }

    return (
        <div>
            <img className='delogo' src={delogo} />
            <div className='headborder'>
                <h3 className="headnew" data-aos="fade-right" >NEWS & MEDIA</h3>
                <h3 className="headnew2" data-aos="fade-right" data-aos-delay="250"></h3>
            </div>

            <div className='newstyle'>
                <p className='titledate'>{newinfo.dateFormat}</p>
                <p className='titlename'>{newinfo.title}</p>
                <div dangerouslySetInnerHTML={createMarkup(newinfo.fullDetail)} className='fulldetali'></div>

            </div>
            <div className='backtomain'>
                <a href='/project/define/news-and-media'><FiArrowLeft size="1.5vw" className="backto" />BACK TO NEWS & MEDIA</a>
            </div>
        </div>
    )
}