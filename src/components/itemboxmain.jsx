import '../index.css';
import '../home.css';
import '../about.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemBoxMain(item) {
    return (
        <div className="container">
            <div className = 'aboutboxmain' style = {{ marginTop: '50px'}}>
                <p>Material: {item.material}</p>
                <p>Type: {item.type}</p>
                <p>Size: {item.size}</p>
                <p>Biodegradable: {item.biodegradable}</p>
                <p>Recyclable at Home: {item.homeRecyclable}</p>
                <p>Widely Recycled: {item.widelyRecycled}</p>
            </div>
        </div>
    );
};

export default ItemBoxMain;