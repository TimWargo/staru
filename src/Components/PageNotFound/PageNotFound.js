import React, { Component } from "react";

class PageNotFound extends Component {
    divStyle = {height: 'calc(100% - 126px)'}
    four04 = {color: '#8B1E3F', fontSize: '150px', fontStyle: 'italic'}
    render() {
        return (
            <div style={this.divStyle}>
                <div style={{height: '15%'}} />
                <h1 className='my-0 py-0' style={this.four04}>404</h1>
                <p style={{textAlign: 'center', color: '#0C1821', fontSize: '30px'}}>Page Not Found</p>
            </div>
        );
    }
}

export default PageNotFound;