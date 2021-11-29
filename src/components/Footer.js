import React from 'react';
import { Col, Container, Row } from 'reactstrap';
const logo = '/assets/images/logo.png';

export default function Footer(){
    return(
        <>
        <div className="footer1">
            <Container>
                <Row>
                    <Col md={2}>
                        <ul>
                            <li>
                                <a href="#dimensions">Dimensions</a>
                            </li>
                            <li>
                                <a href="#dimensions">Key features</a>
                            </li>
                            <li>
                                <a href="#shipping">Shipping information</a>
                            </li>
                            <li>
                                <a href="#ordering">Ordering information</a>
                            </li>
                            <li>
                                <a href="#buy">Buy now</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={2}>
                    <ul>
                            <li>
                                <a href="#dimensions">Applications</a>
                            </li>
                            <li>
                                <a href="#specification">Specifications</a>
                            </li>
                            <li>
                                <a href="#faq">F.A.Q</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={5}></Col>
                    <Col md={3}>
                        <div className="center">
                            <img src={logo} width="50px" />
                        </div>
                        <p id="logo-title"><b>LED</b> Lamp Liquidators</p>
                        <div className="right-text">
                            <p><b>Contact at:</b></p>
                            <p>Support LED Lamp</p>
                            <p>support@ledlampliquidators.com</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="footer2 center">
            <p><b>LED Lamp Liquidators INC.</b> All rights reserved</p>
        </div>
        </>
    );
}