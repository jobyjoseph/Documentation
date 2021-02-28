import React, { Component } from 'react';

class GoogleAds extends Component {

    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
                <ins className='adsbygoogle'
                    style={{ display: 'block', textAlign: 'center', padding: "10px" }}
                    data-ad-layout="in-article"
                    data-ad-client= 'ca-pub-5942804533883970'
                    data-ad-slot={this.props.slot}
                    data-ad-format= 'fluid'
                >
                </ins>
        );
    }
}

export default GoogleAds;
