import {Card, Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import React from "react";
import CardBkg from "../mandalorian.jpg"


export function About() {
    return (
        <>
            <Navbar className="mb-2" bg="light" variant="light">
                <Navbar.Brand href="#">Title</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container fluid className="px-0">
                <Card fluid className="bg-dark text-white">
                    <Card.Img src={CardBkg} alt="Mandalorian walking into a vaporwave sunset"/>
                    <Card.ImgOverlay as={Container} fluid className="h-100 align-items-between">
                        <Row className="align-self-start w-100 h-100">
                            <Col><Card.Title>About Us</Card.Title></Col>
                            <Col xs={6} className="px-0 mt-auto align-content-end"><Card.Text>
                                “Don't ever turn your back to the enemy. 'Cause that's where your jetpack is, and you don't want to take a blaster bolt to that.”  - Janada Bralor
                            </Card.Text></Col>
                        </Row>
                    </Card.ImgOverlay>
                </Card></Container>
        </>
    )
}