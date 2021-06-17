import React from "react"
import {Button, CardDeck, Container, Col, Image, Jumbotron, Nav, Navbar, Row} from "react-bootstrap";
import MyCard, {cards} from "./MyCard";
import pong from "../pong.jpg";
import squiggle from "../squiggle.png";

export function Home() {
    return (
        <>
            <Navbar className="mb-2" expand="lg" bg="light" variant="light">
                <Navbar.Brand>React Layout</Navbar.Brand>
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
                        <Button variant="primary">I don't do anything</Button>
                    </p>
                </Jumbotron>
            </Container>

            <Container fluid className="bg-secondary py-4 my-2">
                <Row className="align-content-center justify-content-between">
                    <Col md={4} lg={3} className="mx-3 my-md-auto text-center">
                        <Image src={pong} rounded={true}/>
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
                            man paid no attention to her; didn't even seem to see her. And she—she was no more startled
                            at his fantastic make-up than if she was used to his like every day of her life. She was
                            going by as indifferently as she might have gone by a couple of cows; but when she happened
                            to notice me, then there was a change!</p>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="my-4">
                <CardDeck>
                    <Row>
{/*map() in React needs an index parameter to render properly. If the function is in curly braces, it needs a return statement as well.*/}
                        {cards.map((card, index) =>
                             <MyCard key={index} image={card.image} text={card.text}/>
                        )}
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