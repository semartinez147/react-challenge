import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import {Card, CardDeck, Col, Row} from "react-bootstrap";
import murray from "../murray.jpg";
import card1 from "../card1.jpg";

export function Home() {
    return (
        <>
            <Navbar className="mb-2" bg="light" variant="light">
                <Navbar.Brand href="#home">Title</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/about">About Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container className="my-4">
                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                        The infant man, like the adult one, is a creature of habit, and, with a little systematic
                        training, it is very easy to form good habits, provided you begin early; but, if you delay until
                        bad habits have been formed, it then becomes an entirely different matter.
                    </p>
                    <p>
                        <Button variant="primary">Go Big</Button>
                    </p>
                </Jumbotron>
            </Container>
            <Container fluid className="bg-secondary py-5">
                <Row className="align-content-center justify-content-between">
                    <Col md={4} lg={3} className="mx-3 my-md-auto text-center">
                        <Image src={murray}/>
                    </Col>
                    <Col md={7} lg={8} className="mx-3 mt-3 align-self-center">
                        <p>It was a soft, reposeful summer landscape, as lovely as a dream, and as lonesome as Sunday.  The air was full of the smell of flowers, and the buzzing of insects, and the twittering of birds, and there were no people, no wagons, there was no stir of life, nothing going on.  The road was mainly a winding path with hoof-prints in it, and now and then a faint trace of wheels on either side in the grass—wheels that apparently had a tire as broad as one’s hand.</p>
                        <p>Presently a fair slip of a girl, about ten years old, with a cataract of golden hair streaming down over her shoulders, came along. Around her head she wore a hoop of flame-red poppies. It was as sweet an outfit as ever I saw, what there was of it.  She walked indolently along, with a mind at rest, its peace reflected in her innocent face.  The circus man paid no attention to her; didn’t even seem to see her.  And she—she was no more startled at his fantastic make-up than if she was used to his like every day of her life.  She was going by as indifferently as she might have gone by a couple of cows; but when she happened to notice me, then there was a change!</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={card1} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Container>
        </>
    )
}