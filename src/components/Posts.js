import React from 'react'
import {Card, Button} from 'react-bootstrap';
const Posts = () => {
    return (
        <div className="container">
            <Card>
                <Card.Img variant="top" src="icon-48x48.png" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Officia veniam irure quis laborum deserunt duis laborum velit ad non.</Card.Text>
                    <Button variant="primary">Go</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Posts