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
                title: '',
                description: '',
                rating: null,
            }],
            otherGames: [{
                id: null,
                title: '',
                rating: null,
            }]
        }
        this.renderGenres = this.renderGenres.bind(this);
        this.renderOtherGames = this.renderOtherGames.bind(this);
    }

    initContent() {
        // call api here
        const { platform, name } = this.props.match.params;
        const title = name.replace(/_/g," ");
        let game = {
            platform: platform,
            title: title,
        };
        axios.get('http://localhost/staru/src/php/viewGame.php', game)
            .then(res => {
                console.log(res);
            }).catch(error => {
                console.log("error")
            });

        this.setState({
            game: {
                id: 1,
                title: 'New Super Mario Bros.',
                year: 2022,
                price: 100.99,
                popularity: 4.9,
                platform: 'Xbox',
                pic: '/Images/deathloop.jpg', // route to picture
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper odio odio, in maximus magna sollicitudin non. Nunc hendrerit, sem at tempus pulvinar, dui ante aliquam ligula, nec consectetur nisl ante eget dui. Duis ut felis urna. Nulla nibh mauris, ornare in enim non, tristique egestas nunc. Nulla pellentesque ac nunc eget ultrices. Proin sodales a ligula vitae imperdiet. Aliquam iaculis lobortis libero, nec ornare velit lobortis vitae. In gravida elementum mi, at lobortis dolor semper et. Donec vel sem at nisi facilisis congue sed mattis sem. Praesent quis pharetra erat, et finibus diam. Duis posuere libero tortor, vehicula placerat tortor fringilla et. Cras dapibus tincidunt ex in volutpat. Donec id justo diam. Suspendisse imperdiet, augue eget vestibulum varius, nunc leo feugiat mauris, nec posuere purus libero nec sapien.',
            },
            genres: [
                {
                    id: 1,
                    name: 'Action',
                },
                {
                    id: 2,
                    name: 'Horror',
                },
                {
                    id: 3,
                    name: 'Drama',
                }
            ],
            reviews: [
                {
                    id: 1,
                    title: 'This game was pretty good',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper odio odio, in maximus magna sollicitudin non. Nunc hendrerit, sem at tempus pulvinar, dui ante aliquam ligula, nec consectetur nisl ante eget dui. Duis ut felis urna. Nulla nibh mauris, ornare in enim non, tristique egestas nunc. Nulla pellentesque ac nunc eget ultrices. Proin sodales a ligula vitae imperdiet. Aliquam iaculis lobortis libero, nec ornare velit lobortis vitae. In gravida elementum mi, at lobortis dolor semper et. Donec vel sem at nisi facilisis congue sed mattis sem. Praesent quis pharetra erat, et finibus diam. Duis posuere libero tortor, vehicula placerat tortor fringilla et. Cras dapibus tincidunt ex in volutpat. Donec id justo diam. Suspendisse imperdiet, augue eget vestibulum varius, nunc leo feugiat mauris, nec posuere purus libero nec sapien.',
                    rating: 2,
                },
                {
                    id: 2,
                    title: 'This game was pretty good',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper odio odio, in maximus magna sollicitudin non. Nunc hendrerit, sem at tempus pulvinar, dui ante aliquam ligula, nec consectetur nisl ante eget dui. Duis ut felis urna. Nulla nibh mauris, ornare in enim non, tristique egestas nunc. Nulla pellentesque ac nunc eget ultrices. Proin sodales a ligula vitae imperdiet. Aliquam iaculis lobortis libero, nec ornare velit lobortis vitae. In gravida elementum mi, at lobortis dolor semper et. Donec vel sem at nisi facilisis congue sed mattis sem. Praesent quis pharetra erat, et finibus diam. Duis posuere libero tortor, vehicula placerat tortor fringilla et. Cras dapibus tincidunt ex in volutpat. Donec id justo diam. Suspendisse imperdiet, augue eget vestibulum varius, nunc leo feugiat mauris, nec posuere purus libero nec sapien.',
                    rating: 4,
                }
            ],
            otherGames: [
                {
                    id: 1,
                    title: 'Nintendo',
                    rating: 4.5,
                },
                {
                    id: 2,
                    title: 'Nintendo',
                    rating: 4.5,
                },
                {
                    id: 3,
                    title: 'Nintendo',
                    rating: 4.5,
                },
                {
                    id: 4,
                    title: 'Nintendo',
                    rating: 4.5,
                },
            ]
        });
    }

    async componentDidMount() {
        this.initContent();
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
                        <div className='popularity opop'>{game.rating}</div>
                    </div>
                    <a href='' className='flex-grow-1 px-2 ogame'>{game.title}</a>
                </div>
                )
            })
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
                                <h2 className='platform'>({this.state.game.platform})</h2>
                            </div>

                            <h3 className='year'>{this.state.game.year}</h3>
                        </div>
                    </div>
                    <div className='d-flex align-items-start'>
                        <img src={this.state.game.pic} alt={this.state.game.title} className='image'/>
                        <div className='mx-2'>
                            <ListGroup horizontal>
                                {this.renderGenres()}
                            </ListGroup>
                            <p className='description'>{this.state.game.description}</p>
                            <div className='price'>Cost on {this.state.game.platform}: ${this.state.game.price}</div>
                            <div style={{fontSize: '1.3vmax'}}>Also On: Playstation, Nintendo Switch, PC</div>
                        </div>
                    </div>
                    <div className='my-4' />
                    <div className='d-flex'>
                        <div className='reviews'>
                            <div className='d-flex p-2 align-items-center' style={{backgroundColor: '#0C1821'}}>
                                <h2 className='flex-grow-1 rtitle'>View Reviews</h2>
                                <Button variant='primary' className='buttModal reviewButt'>Leave a review!</Button>
                            </div>
                            {this.state.reviews.map(review => {
                                return <Review
                                    id={review.id}
                                    title={review.title}
                                    rating={review.rating}
                                    description={review.description}
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