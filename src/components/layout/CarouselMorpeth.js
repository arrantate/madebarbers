// import React from 'react'
// import matt from '../images/barbers/matt.jpg';


// const CarouselMorpeth = () => {
//   return (
//     <div>
//         <img className='logo' src={matt} alt='logo'></img>
//     </div>
//   )
// }

// export default CarouselMorpeth;

import PropTypes from 'prop-types';
import React from 'react';
import Gallery from 'react-grid-gallery';

import img1 from '../images/morpeth/img1.jpeg';
import img2 from '../images/morpeth/img2.jpeg';
import img3 from '../images/morpeth/img3.jpeg';
import img4 from '../images/morpeth/img4.jpeg';
import img5 from '../images/morpeth/img5.jpeg';


class CarouselMorpeth extends React.Component {
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

CarouselMorpeth.propTypes = {
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

CarouselMorpeth.defaultProps = {
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

export default CarouselMorpeth;