import React, { Component } from 'react';
import './ViewGamePage.css';
import { ListGroup, Button } from 'react-bootstrap';
import Review from './Review';
import { MdStar } from 'react-icons/md';
import { withRouter } from '../withRouter';
import axios from 'axios';

class ViewGamePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: {
                id: null,
                title: '',
                year: null,
                price: 0.00,
                popularity: 0.0,
                platform: '',
                pic: '',
                description: '',
            },
            genres: [{
                id: null,
                name: '',
            }],
            reviews: [{
                id: null,
                screen_name: '',
                title: '',
                description: '',
                rating: null,
                date: null,
            }],
            otherGames: [{
                id: null,
                title: '',
                popularity: null,
                platform: '',
            }],
            otherPlatforms: [{
                id: null,
                platform: '',
            }]
        }
        this.renderGenres = this.renderGenres.bind(this);
        this.renderOtherGames = this.renderOtherGames.bind(this);
        this.renderOtherPlatforms = this.renderOtherPlatforms.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    async initContent() {
        const { platform, name } = this.props.match.params;
        let title = name.replaceAll("+","%2B");
        await axios.get('http://localhost/staru/src/php/viewGame.php?platform='+platform+'&title='+title)
            .then(res => {
                const data = res.data;
                this.setState({
                    game: {
                        id: Number(data[0]),
                        title: data[1],
                        year: Number(data[2]),
                        price: Number(data[3]),
                        popularity: Number(data[4]),
                        platform: data[5],
                        pic: data[6],
                        description: data[7]
                    }
                })
            }).catch(error => {
                console.log(error.message)
            });
        axios.get('http://localhost/staru/src/php/viewGameGenre.php?id='+this.state.game.id)
            .then(res => {
                const genres = [];
                res.data.forEach(row=> {
                    const genre = {
                        id: Number(row[0]),
                        name: row[1]
                    };
                    genres.push(genre);
                });
                this.setState({
                    genres: genres,
                })
            }).catch(error => {
                console.log(error.message);
            });
        axios.get('http://localhost/staru/src/php/viewGameReview.php?id='+this.state.game.id)
            .then(res => {
                const reviews = [];
                res.data.forEach(row => {
                    const review = {
                        id: Number(row[0]),
                        screen_name: row[1],
                        title: row[2],
                        description: row[3],
                        rating: Number(row[4]),
                        date: new Date(Date.parse(row[5]))
                    };
                    reviews.push(review);
                });
                this.setState({
                    reviews: reviews,
                });
            }).catch(error => {
                console.log(error.message);
            });
        axios.get('http://localhost/staru/src/php/viewOtherGame.php?id='+this.state.game.id+'&title='+this.state.game.title.replaceAll("+","%2B"))
            .then(res => {
                const otherGames = [];
                res.data.forEach(row => {
                    const otherGame = {
                        id: Number(row[0]),
                        title: row[1],
                        platform: row[2],
                        popularity: Number(row[3])
                    };
                    otherGames.push(otherGame);
                });
                this.setState({
                    otherGames: otherGames,
                });
            }).catch(error => {
                console.log(error.message);
            });
        axios.get('http://localhost/staru/src/php/viewOtherPlatform.php?title='+this.state.game.title.replaceAll("+","%2B")+'&platform='+this.state.game.platform)
            .then(res => {
                if (res.data === '') {
                    this.setState({
                        otherPlatforms: null
                    });
                } else {
                    const otherPlatforms = [];
                    res.data.forEach(row => {
                        const otherPlatform = {
                            id: Number(row[0]),
                            platform: row[1]
                        };
                        otherPlatforms.push(otherPlatform);
                    });
                    this.setState({
                        otherPlatforms: otherPlatforms,
                    });
                }
            }).catch(error => {
                console.log(error.message);
            });
    }


    async componentDidMount() {
        this.initContent();
    }

    handleClick() {
        this.props.navigate('/games/create/'+this.state.game.id);
    }

    renderGenres() {
        if (this.state.genres) {
            return this.state.genres.map(genre => {
                return <div className='m-2 p-2 border border-dark rounded-pill border-1' style={{fontSize: 1.2 + 'vmax', backgroundColor: 'yellow'}} key={genre.id}>{genre.name}</div>
            });
        }
    }

    renderOtherGames() {
        if (this.state.otherGames) {
            return this.state.otherGames.map(game => {
                return (
                <div className='d-flex p-1 align-items-center' key={game.id}>
                    <div className='star-container'>
                        <MdStar className='rating-star ostar' />
                        <MdStar className='rating-star-border ostar-border' />
                        <div className='popularity opop'>{game.popularity}</div>
                    </div>
                    <a href={'/games/'+game.platform.toLowerCase().replace(' ','_')+'/'+game.title.toLowerCase().replaceAll(' ','_')} className='flex-grow-1 px-2 ogame'>{game.title}</a>
                </div>
                )
            })
        }
    }

    renderOtherPlatforms() {
        if (this.state.otherPlatforms) {
            return (
                <ListGroup horizontal>
                    <div style={{fontSize: '1.3vmax'}}>Also On:</div>
                    {this.state.otherPlatforms.map(otherPlatform => {
                        return <a className='ogame' href={'/games/'+otherPlatform.platform.toLowerCase().replace(' ','_')+'/'+this.state.game.title.toLowerCase().replaceAll(' ','_')} key={otherPlatform.id} style={{fontSize: '1.3vmax', marginLeft: '5px'}}>{otherPlatform.platform}</a>
                    })}
                </ListGroup>
            )
        }
    }

    render() {
        return (
            <>
                <div className='my-3' />
                <div className='container-main'>
                    <div className="d-inline-flex">
                        <div className='star-container'>
                            <MdStar className='rating-star' />
                            <MdStar className='rating-star-border' />
                            <div className='popularity'>{this.state.game.popularity}</div>
                        </div>
                        <div className='flex-grow-1' style={{paddingLeft: '2vmax'}}>
                            <div className='d-flex'>
                                <h1 className='title'>{this.state.game.title}</h1>
                            </div>
                            <div className='d-flex' style={{height: 'fit-content'}}>
                                <h2 className='m-0 platform'>{this.state.game.platform}</h2>
                                <h3 className='year mx-5 my-0'>{this.state.game.year}</h3>
                                
                            </div>
                        </div>
                    </div>
                    <div className='d-flex align-items-start'>
                        <img src={this.state.game.pic} alt={this.state.game.title} className='image'/>
                        <div className='mx-2'>
                            <ListGroup horizontal>
                                {this.renderGenres()}
                            </ListGroup>
                            <p className='description'>{this.state.game.description}</p>
                            <div className='price'>Cost on {this.state.game.platform}: {(this.state.game.price === 0) ? "Free" : "$"+this.state.game.price}</div>
                            {this.renderOtherPlatforms()}
                        </div>
                    </div>
                    <div className='my-4' />
                    <div className='d-flex'>
                        <div className='reviews'>
                            <div className='d-flex p-2 align-items-center' style={{backgroundColor: '#0C1821'}}>
                                <h2 className='flex-grow-1 rtitle'>View Reviews</h2>
                                <Button variant='primary' className='buttModal reviewButt' onClick={() => this.handleClick()}>Leave a review!</Button>
                            </div>
                            {this.state.reviews.map(review => {
                                return <Review
                                    id={review.id}
                                    title={review.title}
                                    screen_name={review.screen_name}
                                    rating={review.rating}
                                    description={review.description}
                                    date={review.date}
                                />
                            })}
                        </div>
                        <div className='other'>
                            <div className='p-2' style={{backgroundColor: '#0C1821'}}>
                                <h2 className='otitle'>Similar Games</h2>
                            </div>
                            <div className='mb-2' />
                            {this.renderOtherGames()}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
 
export default withRouter(ViewGamePage);