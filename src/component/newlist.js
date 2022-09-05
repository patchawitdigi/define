import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import './newlist.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function Newlist(props) {
    const { data } = props;

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));

        Aos.init({ duration: 1000 });
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <Container fluid>
                <div className="images">
                    <Row>
                        {currentItems.map(image => {
                            let content
                            if (image.externalUrl == "") {
                                content = `news-and-media/news-promotion/${image.newsRouting}`
                            }
                            else {
                                content = image.externalUrl
                            }
                            console.log(content)
                            return (
                                <Col lg={4} sm={6}>
                                    <a href={content} target="_blank" style={{ textDecoration: 'none' }}>
                                        {/* <Link to={`/news-and-media/news-promotion/${image.newsRouting}`} style={{ textDecoration: 'none' }}> */}
                                        <div className="image" data-aos="fade-up" data-aos-delay="500">
                                            <img src={image.coverUrl} />
                                            <div className="newdetail">
                                                <div className="date">
                                                    <p>{image.dateFormat}</p>
                                                </div>
                                                <div className="newtitle">
                                                    <h6>{image.title}</h6>
                                                    <p>{image.subTitle}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </Col>

                            );
                        })}
                    </Row>
                </div>
            </Container>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousLinkClassName="page-num-chg"
                nextLinkClassName="page-num-chg"
                activeLinkClassName="active"
            />

        </>
    );

}