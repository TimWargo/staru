import React, { Component } from 'react';
import './ViewGamePage.css';
import Amogus from './amogus.jpg';
import { ListGroup } from 'react-bootstrap';
import Review from './Review';

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
        }
        this.renderGenres = this.renderGenres.bind(this);
    }

    initContent() {
        // call api here
        this.setState({
            game: {
                id: 1,
                title: 'New Super Mario Bros.',
                year: 2022,
                price: 100.99,
                popularity: 9.9,
                platform: 'Xbox',
                pic: "https://i.kym-cdn.com/photos/images/original/001/300/547/5c1.jpg", // route to picture
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
                    rating: 7.5,
                },
                {
                    id: 2,
                    title: 'This game was pretty good',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper odio odio, in maximus magna sollicitudin non. Nunc hendrerit, sem at tempus pulvinar, dui ante aliquam ligula, nec consectetur nisl ante eget dui. Duis ut felis urna. Nulla nibh mauris, ornare in enim non, tristique egestas nunc. Nulla pellentesque ac nunc eget ultrices. Proin sodales a ligula vitae imperdiet. Aliquam iaculis lobortis libero, nec ornare velit lobortis vitae. In gravida elementum mi, at lobortis dolor semper et. Donec vel sem at nisi facilisis congue sed mattis sem. Praesent quis pharetra erat, et finibus diam. Duis posuere libero tortor, vehicula placerat tortor fringilla et. Cras dapibus tincidunt ex in volutpat. Donec id justo diam. Suspendisse imperdiet, augue eget vestibulum varius, nunc leo feugiat mauris, nec posuere purus libero nec sapien.',
                    rating: 7.5,
                }
            ]
        });
    }

    async componentDidMount() {
        this.initContent();
    }

    renderGenres() {
        if (this.state.genres) {
            return this.state.genres.map(genre => {
                return <div className='m-2 p-3 border rounded-pill border-1' key={genre.id}>{genre.name}</div>
            });
        }
    }

    render() {
        return (
            <>
                <div className='my-3' />
                <div className='container-main'>
                    <div className="d-flex">
                        <div className='row'>
                            <span className='rating_star'>&#9733;</span>
                            <div className='popularity'>{this.state.game.popularity}</div>
                        </div>
                        <div className='flex-grow-1' style={{paddingLeft: 40 + 'px'}}>
                            <div className='d-flex'>
                                <h1 className='title'>{this.state.game.title}</h1>
                                <h2 className='platform'>({this.state.game.platform})</h2>
                            </div>

                            <h3 className='year'>{this.state.game.year}</h3>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className='flex-grow-1'>
                            <img src={this.state.game.pic} alt={this.state.game.title} />
                        </div>
                        <div className='mx-4'>
                            <ListGroup horizontal>
                                {this.renderGenres()}
                            </ListGroup>
                            <p>{this.state.game.description}</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='price'>Cost: ${this.state.game.price}</div>
                    </div>
                    <div className='reviews'>
                        <h2>Reviews</h2>
                        {this.state.reviews.map(review => {
                            return <Review
                                id={review.id}
                                title={review.title}
                                rating={review.rating}
                                description={review.description}
                            />
                        })}
                    </div>
                </div>
            </>
        )
    }
}
 
export default ViewGamePage;

const StarRating = () => {
    return (
        <div className='star-rating'>
            {[...Array(5)].map((star) => {
                return (
                    <span className='star'>&#9733;</span>
                );
            })}
        </div>
    )
}