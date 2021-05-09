import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Homepage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeImage from '../homepage.png'
function Homepage() {
    return (
        <Container fluid>
            <Row className="justify-content-around align-items-center height-100">
                <Col sm={6} className="text-light main-text text-left">
                    GET EXACT CRYPTO MARKET DATA IN REAL TIME WITH <span className="text-primary">BIKOJO</span>
                </Col>
                <Col sm={4} className="">
                   <img className="home-image" src={HomeImage} alt="" />
                </Col>
            </Row>
        </Container>
    )
}

export default Homepage
