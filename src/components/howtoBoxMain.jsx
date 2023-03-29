import '../index.css';
import '../home.css';
import '../about.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const lb = "(";
const rb = ")";

// PLAIN TEXT WILL BE REPLACED WITH API CODE 

function HowToBoxMain(item) {
    return (
        <div className="container">
            <div className = 'aboutboxmain' style = {{ marginTop: '50px'}}>
                <h1>How to Recycle {item.name}</h1>
                <ol>
                    <p>1. Empty out and rinse bottle</p>
                    <p>2. Leave on labels {lb}Removed in process{rb} </p>
                    <p>3. Squish bottles to fit more in</p>
                    <p>4. Put lid back on {lb}Will be Recycled along with bottle{rb}</p>
                </ol>
                <h4>Put into your recycling bags/bins</h4>
            </div>
        </div>
        
    );
}

export default HowToBoxMain;