import {Col, Image, Card} from "react-bootstrap";
import React from "react";
import card1 from "../card1.jpg";
import card2 from "../card2.jpg";
import card3 from "../card3.jpg";
import card4 from "../card4.jpg";

const cards = [
    {
        image: card1,
        text: "Beyond the spaceport gates, the men of the Kharsa were hunting down a thief. I heard the shrill cries, the pad-padding of feet in strides just a little too long and loping to be human, raising echoes all down the dark and dusty streets leading up to the main square."
    },

    {
        image: card2,
        text: "But the square itself lay empty in the crimson noon of Wolf. Overhead the dim red ember of Phi Coronis, Wolf's old and dying sun, gave out a pale and heatless light. The pair of Spaceforce guards at the gates, wearing the black leathers of the Terran Empire, shockers holstered at their belts, were drowsing under the arched gateway where the star-and-rocket emblem proclaimed the domain of Terra."
    },

    {
        image: card3,
        text: "One of them, a snub-nosed youngster only a few weeks out from Earth, cocked an inquisitive ear at the cries and scuffling feet, then jerked his head at me.\n \"Hey, Cargill, you can talk their lingo. What's going on out there?\""
    },

    {
        image: card4,
        text: " I stepped out past the gateway to listen. There was still no one to be seen in the square. It lay white and windswept, a barricade of emptiness; to one side the spaceport and the white skyscraper of the Terran Headquarters, and at the other side, the clutter of low buildings, the street-shrine, the little spaceport cafe smelling of coffee and jaco, and the dark opening mouths of streets that rambled down into the Kharsa—the old town, the native quarter. "
    },
]

function MyCard({image, text}) {
    return (
        <>
            <Col sm={6} lg={3}>
                <Card border="light" className="mx-4">
                    <Card.Img as={Image} variant="top" src={image} roundedCircle={true}/>
                    <Card.Body>
                        <Card.Text> {text}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default MyCard;
export {cards};
