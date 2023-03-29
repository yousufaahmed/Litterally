import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



function Review() {

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    
    const items = [
        <div className="item" data-value="1">
            <img className = 'pfpimage' src='../../images/pfp1.jpg' alt='imgHERE'></img>
            <h3>Carloe Archer</h3>
            <h4>'Litterally has given me the opportunity to join a litter rally as a litter ally.'</h4>
        </div>,
        <div className="item" data-value="2">
            <img className = 'pfpimage' src='../../images/pfp2.jpg' alt='imgHERE'></img>
            <h3>Sam Brown</h3>
            <h4>'You are either molded by the environment, or mould the environment for those yet to come.'</h4>
        </div>,
        <div className="item" data-value="3">
            <img className = 'pfpimage' src='../../images/pfp3.webp' alt='imgHERE'></img>
            <h3>Ciaran Harper</h3>
            <h4>'I love recycling'</h4>
        </div>,
        <div className="item" data-value="4">
            <img className = 'pfpimage' src='../../images/pfp1.jpg' alt='imgHERE'></img>
            <h3>Suraj Sen Maluru</h3>
            <h4>'As an environmentalist, recycling helps me meet my sustainability goals.'</h4>
        </div>,
        <div className="item" data-value="5">
            <img className = 'pfpimage' src='../../images/pfp2.jpg' alt='imgHERE'></img>
            <h3>Ahmed Salah Eldein</h3>
            <h4>'Life is like a box of chocolates, just make sure you put it in the recycling.'</h4>
        </div>,
        <div className="item" data-value="6">
            <img className = 'pfpimage' src='../../images/pfp3.webp' alt='imgHERE'></img>
            <h3>Yimin Gurung</h3>
            <h4>'Recycling is a true way of life, only the true mandem know.'</h4>
        </div>,
    ];
    return(
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            autoPlay
            autoPlayControls
            autoPlayStrategy="none"
            autoPlayInterval={1000}
            animationDuration={1000}
            animationType="fadeout"
            infinite
            touchTracking={false}
            disableDotsControls
            disableButtonsControls
        />
    );
}

export default Review;
