import '../index.css';
import '../home.css';
import '../profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemBoxMain from '../components/itemboxmain';
import HowToBoxMain from '../components/howtoBoxMain';

// CAN BE SWAPPED OUT FOR API ELEMENTS ONCE API IS IMPLEMENTED THROUGH JSON
 
var item = {
  name: 'Innocent Orange Juice Bottle',
  material: 'PET (Polyethylene Terephthalate) Plastic',
  type: 'Single Use',
  biodegradable: 'No',
  homeRecyclable: 'Yes',
  size: '1.35 Litres',
  widelyRecycled: 'Yes',
};

function ItemPage() {
  return (
    <div className="itempage" style = {{margin:'50px'}}>
      <img className = 'pfpimage1' src = '../../images/juice.jpeg' alt = 'juiceImg'></img>
      <h1>{item.name}</h1>
      <ItemBoxMain {...item}></ItemBoxMain>
      <HowToBoxMain {...item}></HowToBoxMain>
    </div>
  );
};

export default ItemPage;