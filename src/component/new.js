import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import './new.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function New(props) {
    const { data } = props;

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <Container fluid >
                <div className="images">
                    <Row>
                        {currentItems.map(image => {
                            return (
                                <Col lg={4} sm={6}>
                                    <div className="image">
                                        <img src={image.url} alt={image.title} />
                                        <p>{image.id}</p>
                                        <p>{image.thumbnailUrl}</p>
                                    </div>
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