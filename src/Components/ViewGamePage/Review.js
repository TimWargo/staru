import React, { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { MdStar, MdStarOutline } from 'react-icons/md';
import { BsChevronUp } from 'react-icons/bs';

class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showButton: false,
            isExpanded: true,
            height: '3.3em',
        }
        this.renderStars = this.renderStars.bind(this);
        this.renderDescription = this.renderDescription.bind(this);
    }

    countLines = () => {
        
    }

    renderStars = () => {
        return (
            <div className='d-flex'>
                {[...Array(5)].map((star, i) => {
                    if (i < this.props.rating) {
                        return (
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <MdStar style={{fontSize: '0.9vmax', color: 'yellow', zIndex: 2, position: 'absolute'}} />
                                <MdStar style={{fontSize: '1vmax', color: 'black'}} />
                            </div>
                        )
                    }
                    return (i < this.props.rating) ? <MdStar style={{fontSize: '1vmax', color: 'yellow'}}/> : <MdStarOutline style={{fontSize: '1vmax'}}/>;
                })}
            </div>
        )
    }

    renderDescription = () => {
        if (!this.state.isExpanded) {
            return <div style={{height: this.state.height}}>{this.props.description}</div>
        } else {
            return <Card.Text>{this.props.description}</Card.Text>
        }
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
                    {this.renderDescription()}
                    <div className='align-self-end'>
                        <BsChevronUp />
                    </div>
                </Card>
            </Container>
        )
    }
}
 
export default Review;