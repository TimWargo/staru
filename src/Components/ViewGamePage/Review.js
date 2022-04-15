import React, { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

class Review extends Component {
    render() {
        return (
            <Container className='my-0 p-3' key={this.props.id}>
                <Card className={'p-3'} style={{width: '50rem'}}>
                    <Row>
                        <Col>
                            <Card.Title>{this.props.title}</Card.Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-auto">{this.props.rating}</Col>
                        <Col className='flex-grow-1'>Account Name</Col>
                        <Col className='col-auto'>#___ ago</Col>
                    </Row>
                    <div className='mb-3' />
                    <Card.Text>{this.props.description}</Card.Text>
                </Card>
            </Container>
        )
    }
}
 
export default Review;