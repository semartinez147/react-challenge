import React from "react"
import {Button, Card, CardDeck, Container, Col, Image, Jumbotron, Nav, Navbar, Row} from "react-bootstrap";
import murray from "../murray.jpg";
import card1 from "../card1.jpg";
import card2 from "../card2.jpg";
import card3 from "../card3.jpg";
import card4 from "../card4.jpg";
import squiggle from "../squiggle.png";

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
            <Container fluid className="bg-secondary py-4 my-2">
                <Row className="align-content-center justify-content-between">
                    <Col md={4} lg={3} className="mx-3 my-md-auto text-center">
                        <Image src={murray}/>
                    </Col>
                    <Col md={7} lg={8} className="mx-3 mt-3 align-self-center">
                        <p>It was a soft, reposeful summer landscape, as lovely as a dream, and as lonesome as Sunday.
                            The air was full of the smell of flowers, and the buzzing of insects, and the twittering of
                            birds, and there were no people, no wagons, there was no stir of life, nothing going on. The
                            road was mainly a winding path with hoof-prints in it, and now and then a faint trace of
                            wheels on either side in the grass—wheels that apparently had a tire as broad as one’s
                            hand.</p>
                        <p>Presently a fair slip of a girl, about ten years old, with a cataract of golden hair
                            streaming down over her shoulders, came along. Around her head she wore a hoop of flame-red
                            poppies. It was as sweet an outfit as ever I saw, what there was of it. She walked
                            indolently along, with a mind at rest, its peace reflected in her innocent face. The circus
                            man paid no attention to her; didn’t even seem to see her. And she—she was no more startled
                            at his fantastic make-up than if she was used to his like every day of her life. She was
                            going by as indifferently as she might have gone by a couple of cows; but when she happened
                            to notice me, then there was a change!</p>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="my-4">
                <CardDeck>
                    <Row>
                        <Col sm={6} lg={3}>
                            <Card border="light" className="mx-4">
                                <Card.Img variant="top" src={card1} roundedCircle/>
                                <Card.Body>
                                    <Card.Text>
                                        Beyond the spaceport gates, the men of the Kharsa were hunting down a thief. I
                                        heard
                                        the
                                        shrill cries, the pad-padding of feet in strides just a little too long and
                                        loping
                                        to be
                                        human, raising echoes all down the dark and dusty streets leading up to the main
                                        square.
                                    </Card.Text>
                                </Card.Body>
                            </Card></Col>
                        <Col sm={6} lg={3}>
                            <Card border="light" className="mx-4">
                                <Card.Img variant="top" src={card2}/>
                                <Card.Body>
                                    <Card.Text>
                                        But the square itself lay empty in the crimson noon of Wolf. Overhead the dim
                                        red
                                        ember
                                        of Phi Coronis, Wolf's old and dying sun, gave out a pale and heatless light.
                                        The
                                        pair
                                        of Spaceforce guards at the gates, wearing the black leathers of the Terran
                                        Empire,
                                        shockers holstered at their belts, were drowsing under the arched gateway where
                                        the
                                        star-and-rocket emblem proclaimed the domain of Terra.
                                    </Card.Text>
                                </Card.Body>
                            </Card></Col>
                        <Col sm={6} lg={3}>
                            <Card border="light" className="mx-4">
                                <Card.Img variant="top" src={card3}/>
                                <Card.Body>
                                    <Card.Text>
                                        One of them, a snub-nosed youngster only a few weeks out from Earth, cocked an
                                        inquisitive ear at the cries and scuffling feet, then jerked his head at
                                        me.<br/>
                                        "Hey, Cargill, you can talk their lingo. What's going on out there?"
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} lg={3}>
                            <Card border="light" className="mx-4">
                                <Card.Img variant="top" src={card4}/>
                                <Card.Body>
                                    <Card.Text>
                                        I stepped out past the gateway to listen. There was still no one to be seen in
                                        the
                                        square. It lay white and windswept, a barricade of emptiness; to one side the
                                        spaceport
                                        and the white skyscraper of the Terran Headquarters, and at the other side, the
                                        clutter
                                        of low buildings, the street-shrine, the little spaceport cafe smelling of
                                        coffee
                                        and
                                        jaco, and the dark opening mouths of streets that rambled down into the
                                        Kharsa—the
                                        old
                                        town, the native quarter.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </CardDeck>
            </Container>

            <Container fluid>
                <Row className="bg-dark text-center">
                    <Col>
                        <Image src={squiggle}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}