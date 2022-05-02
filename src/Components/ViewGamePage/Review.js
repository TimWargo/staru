import React, { Component, createRef } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { MdStar, MdStarOutline } from 'react-icons/md';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { withRouter } from '../withRouter';

class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
        this.dinput = createRef();
        this.renderStars = this.renderStars.bind(this);
        this.renderDescription = this.renderDescription.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            if (this.dinput.current.clientHeight > 100) {
                this.setState({
                    show: true,
                    isExpanded: false,
                    height: 100
                });
            }
        }, 100);

    }

    handleClick = () => {
        this.setState({
            isExpanded: !this.state.isExpanded,
        })
    }

    setTime = () => {
        let seconds = Math.floor((new Date() - this.props.date) / 1000);
        let interval = seconds / 31536000;
        if (interval > 1) {
            if (Math.floor(interval) === 1) return Math.floor(interval) + " year ago";
            else return Math.floor(interval) + " years ago";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            if (Math.floor(interval) === 1) return Math.floor(interval) + " month ago";
            else return Math.floor(interval) + " months ago";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            if (Math.floor(interval) === 1) return Math.floor(interval) + " day ago";
            else return Math.floor(interval) + " days ago";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            if (Math.floor(interval) === 1) return Math.floor(interval) + " hour ago";
            else return Math.floor(interval) + " hours ago";
        }
        interval = seconds / 60;
        if (interval > 1) {
            if (Math.floor(interval) === 1) return Math.floor(interval) + " minute ago";
            else return Math.floor(interval) + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
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
                    } else {
                        return <MdStarOutline style={{fontSize: '1vmax'}} />
                    }
                })}
            </div>
        )
    }

    renderDescription = () => {
        if (!this.state.isExpanded) {
            return (
                <>
                    <div style={{height: this.state.height, overflow: 'hidden', fontSize: '0.8vmax'}} id='content'>{this.props.description}</div>
                    <div className='align-self-end mx-2'>
                        <BsChevronDown onClick={() => this.handleClick()}/>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <Card.Text style={{fontSize: '0.8vmax'}} id='content'>{this.props.description}</Card.Text>
                    <div className='align-self-end mx-2'>
                        <BsChevronUp onClick={() => this.handleClick()}/>
                    </div>
                </>
            )
        }
    }

    render() {
        return (
            <Container className='my-0 p-3' key={this.props.id}>
                <Card className={'p-3'} style={{width: '30vmax'}}>
                    <Card.Title style={{fontSize: '1.2vmax'}}>{this.props.title}</Card.Title>
                    <Row style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Col className="col-auto">{this.renderStars()}</Col>
                        <Col className='flex-grow-1' style={{fontSize: '0.9vmax'}}>{this.props.screen_name}</Col>
                        <Col className='col-auto'  style={{fontSize: '0.9vmax'}}>{this.setTime()}</Col>
                    </Row>
                    <div className='mb-3' />
                    {this.state.show && this.renderDescription()}
                    {!this.state.show && (<Card.Text style={{fontSize: '0.8vmax'}} ref={this.dinput}>{this.props.description}</Card.Text>)}
                </Card>
            </Container>
        )
    }
}
 
export default withRouter(Review);