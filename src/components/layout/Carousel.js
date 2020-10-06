// import React from 'react'
// import matt from '../images/barbers/matt.jpg';


// const Carousel = () => {
//   return (
//     <div>
//         <img className='logo' src={matt} alt='logo'></img>
//     </div>
//   )
// }

// export default Carousel;

import PropTypes from 'prop-types';
import React from 'react';
import Gallery from 'react-grid-gallery';

import img1 from '../images/shops/img1.jpeg';
import img2 from '../images/shops/img2.jpeg';
import img3 from '../images/shops/img3.jpeg';
import img4 from '../images/shops/img4.jpeg';
import img5 from '../images/shops/img5.jpeg';


class Carousel extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            images: this.props.images
        };

    }

    render () {
        return (
                <div style={{
                    display: "block",
                    minHeight: "1px",
                    width: "100%",
                    overflow: "hidden"}}>
                <Gallery
            images={this.state.images}
            enableLightbox={false}
            enableImageSelection={false}/>
                </div>
        );
    }
}

Carousel.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element
            ]),
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired
        })
    ).isRequired
};

Carousel.defaultProps = {
    images: [
        {
            thumbnail: img1,
            thumbnailWidth: 1600,
            thumbnailHeight: 1600,
        },
        {
            thumbnail: img2,
            thumbnailWidth: 1600,
            thumbnailHeight: 1600,
        },
        {
            thumbnail: img3,
            thumbnailWidth: 1600,
            thumbnailHeight: 1600,
        },
        {
            thumbnail: img4,
            thumbnailWidth: 1067,
            thumbnailHeight: 1600,
        },
        {
            thumbnail: img5,
            thumbnailWidth: 1600,
            thumbnailHeight: 1067,
        },
    ]
};

export default Carousel;