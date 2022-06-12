import React from 'react';
import {Card , Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


const InformationCard = () => {
    return (
        <div className='InformationCard'>
            <Card style={{ width: '30rem' }}>
                <Card.Img style={{width:"100%"}} variant="top" src="https://thumbs.dreamstime.com/b/software-development-business-process-automation-internet-technology-concept-virtual-screen-software-development-143587196.jpg" />
                <Card.Body>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Text>
                        To get More Information Please Click on Subscribe 👇 Button.
                    </Card.Text>
                    <Button className='btnColor'>
                       <Link className='link' to="introduction">SUBSCRIBE</Link>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default InformationCard