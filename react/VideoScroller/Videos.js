import React, { Component } from 'react';
import './Videos.css';

class Videos extends Component {
    render(){
        return(
            <div className="right">
                <div>
                    <h3>Video Title Here</h3>
                    <p>Short description</p>
                    <video className="video" controls>
                        <source src="mov_bbb.mp4" type="video/mp4"/>
                    </video>
                </div>
            </div>
        )
    }
}

export default Videos