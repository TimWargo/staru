import React, { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { MdStar, MdStarOutline } from 'react-icons/md';

class Review extends Component {
    constructor(props) {
        super(props);
        this.renderStars = this.renderStars.bind(this);
    }

    renderStars = () => {
        return (
            <div>
                {[...Array(5)].map((star, i) => {                   
                    return (i < this.props.rating) ? <MdStar style={{fontSize: '1vmax', color: 'yellow'}}/> : <MdStarOutline style={{fontSize: '1vmax'}}/>;
                })}
            </div>
        )
    }

    render() {
        return (
            <Container className='my-0 p-3' key={this.props.id}>
                <Card className={'p-3'} style={{width: '40vmax'}}>
                    <Card.Title style={{fontSize: '1.5vmax'}}>{this.props.title}</Card.Title>
                    <Row style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Col className="col-auto">{this.renderStars()}</Col>
                        <Col className='flex-grow-1' style={{fontSize: '1vmax'}}>Account Name</Col>
                        <Col className='col-auto'  style={{fontSize: '1vmax'}}>#___ ago</Col>
                    </Row>
                    <div className='mb-3' />
                    <Card.Text style={{fontSize: '1vmax'}}>{this.props.description}</Card.Text>
                </Card>
            </Container>
        )
    }
}
 
export default Review;