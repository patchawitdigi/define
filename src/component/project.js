import './project.css'

import delogo from "../img/pointint/logo-menu.png";
import bannerproject from "../img/project/banner-en.jpeg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from 'react';
import { projectinfo } from'./flieapi';

export default function Project() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch(projectinfo).then(
            (response) => response.json().then((data) => {
                setProjects(data);
            })
        );
    }, []);

    return (
        <div>
            <img className="delogo" src={delogo} />
            <img className="bannerproject" src={bannerproject} />
            <div className='lineproject'><h3></h3></div>
            <p className='infoproject'>INFORMATION OF REAL PROPERTIES PUT INTO BUSINESS</p>
            <Container className='project'>
                {projects.map((project) => {
                    return (
                        <div className='nameproject'>
                            <Row>
                                <Col xs={6} sm={4}>
                                    <div className='namedetail'>
                                        <p>{project.projectPropLabel}</p>
                                    </div>
                                </Col>
                                <Col xs={6} sm={8}>
                                    <p className='detailproject'>{project.projectPropDetail}</p>
                                </Col>
                            </Row>
                        </div>
                    );
                })}
            </Container>
        </div>
    )
}