// import React from 'react'
// import matt from '../images/barbers/matt.png';


// const CarouselGosforth = () => {
//   return (
//     <div>
//         <img className='logo' src={matt} alt='logo'></img>
//     </div>
//   )
// }

// export default CarouselGosforth;

import PropTypes from 'prop-types';
import React from 'react';
import Gallery from 'react-grid-gallery';

import img1 from '../images/gosforth/img1.png';
import img2 from '../images/gosforth/img2.png';
import img3 from '../images/gosforth/img3.png';
import img4 from '../images/gosforth/img4.png';
import img5 from '../images/gosforth/img5.png';
import img6 from '../images/gosforth/img6.png';
import img7 from '../images/gosforth/img7.png';


class CarouselGosforth extends React.Component {
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

CarouselGosforth.propTypes = {
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

CarouselGosforth.defaultProps = {
    images: [
        {
            thumbnail: img1,
            thumbnailWidth: 400,
            thumbnailHeight: 500,
        },
        {
            thumbnail: img2,
            thumbnailWidth: 200,
            thumbnailHeight: 300,
        },
        {
            thumbnail: img3,
            thumbnailWidth: 200,
            thumbnailHeight: 250,
        },
        {
            thumbnail: img4,
            thumbnailWidth: 200,
            thumbnailHeight: 113,
        },
        {
            thumbnail: img5,
            thumbnailWidth: 200,
            thumbnailHeight: 160,
        },
        {
            thumbnail: img6,
            thumbnailWidth: 200,
            thumbnailHeight: 250,
        },
        {
            thumbnail: img7,
            thumbnailWidth: 200,
            thumbnailHeight: 250,
        },
    ]
};

export default CarouselGosforth;