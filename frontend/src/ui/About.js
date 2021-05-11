import {Card, Col, Container, Image, Nav, Navbar, Row} from "react-bootstrap";
import React from "react";
import CardBkg from "../mandalorian.jpg"
import squiggle from "../squiggle.png";
import sabers from "../sabers.jpg";


export function About() {
    return (
        <>
            <Navbar className="mb-2" expand="lg" bg="light" variant="light">
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
                </Card>
            </Container>

            {/*TODO maybe change flex direction at md breakpoint?*/}
            {/*<Container className="my-4 mx-0 d-flex flex-column flex-sm-row">
                <Col className="text-center mb-4 col-auto"><Image src={sabers}/></Col>
                <Col className="col-6 offset-3 col-sm-8 offset-sm-0"><p>She knew the Temple had burned; she had received the warning not to return. But she didn't know where any of her friends had been during the disaster. She knew only that she couldn't find them afterward, that her sense of them was gone, as if they had ceased to exist.</p></Col>
            </Container>*/}

            <Container fluid className="my-4 mx-0"><Row>
                <Col sm={6} md={4} className="text-center"><Image src={sabers}/></Col>
                <Col xs={{span:6, offset:3}} sm={{span:10, offset:1}} md={{span:8, offset:0}} className="align-content-center px-0 mt-2 mt-md-0 pl-md-2"><p className="mb-0">Why had it been her? She’d had that thought a hundred times since Order 66. Why had she survived? She wasn’t the most powerful; she wasn’t even a Jedi Knight, and yet she was still alive when so many others had died. She asked the question so often because she knew the answer. She just hated facing it, as painful as it was. She’d survived because she had left. She had walked away. She’d walked away from the Jedi and she’d walked away from Thabeska, and because of that she was alive, whether she deserved to be or not.</p></Col>
            </Row></Container>

            <Container fluid>
                <Row className="bg-dark text-center">
                    <Col>
                        <Image fluid src={squiggle}/>
                    </Col>
                </Row>
            </Container>

        </>
    )
}