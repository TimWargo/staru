import React, { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { MdStar, MdStarOutline } from 'react-icons/md';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { withRouter } from '../withRouter';

class Review extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     isExpanded: false,
        //     height: '3.3em',
        // }
        this.dinput = React.createRef();
        this.renderStars = this.renderStars.bind(this);
        this.renderDescription = this.renderDescription.bind(this);
    }

    componentDidMount() {
        console.log(this.dinput.current.clientHeight + ' ' + this.props.id)
        if (this.dinput.current.clientHeight > 70) {
            console.log(true)
        }
    }

    handleClick = () => {
        this.setState({
            isExpanded: !this.state.isExpanded,
        })
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
                        <Col className='col-auto'  style={{fontSize: '0.9vmax'}}>#___ ago</Col>
                    </Row>
                    <div className='mb-3' />
                    {/* {this.renderDescription()} */}
                    <Card.Text style={{fontSize: '0.8vmax'}} ref={this.dinput}>{this.props.description}</Card.Text>
                </Card>
            </Container>
        )
    }
}
 
export default withRouter(Review);