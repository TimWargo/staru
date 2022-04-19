import React, { Component } from 'react';

class ViewGamePage2 extends Component {
    render() { 
        return (
            <>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-auto'>
                            <div className='star'>&#9733;</div>
                            <div className='popularity1'>9.9</div>
                        </div>
                        <div className='col'>
                            <div className='row'>
                                <div className='col-md-auto'>Title</div>
                                <div className='col-md-auto'>Platform</div>
                            </div>
                            <div className='row'>
                                <div className='col-md-auto'>Year</div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnMicleKfStZMgKF-m_tzywSramlD5u6oWyA&usqp=CAU' alt='new super mario game' />
                        </div>
                        <div className='col'>
                            <div className='row'>
                                <div className='col'>Action</div>
                                <div className='col'>Adventure</div>
                                <div className='col'>Romance</div>
                            </div>
                            <div className='row'>
                                <p>aoirsdgha;lkdfgjed;slkjaweds;klfjwEADS;FGHAWEGLAWSDFAKJDSJHGAKDSG ADSHGLKASDHGKADSHG ASDFGHASDGF ASDFLHADSJFHASDKHFALSD F</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-auto'>Price: $100</div>
                        <div className='col-md-auto'>Also on: </div>
                    </div>
                </div>
            </>
        );
    }
}
 
export default ViewGamePage2;