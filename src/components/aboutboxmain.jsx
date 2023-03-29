import '../index.css';
import '../home.css';
import '../about.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutBoxMain() {
    return (
        <div className="container">
            <div className='aboutboxmain'>
                <h1 className = 'inputTitle title2'>What is LITTERALLY! and what does it do?</h1>
                <p>LITTERALLY! is an app which helps users recycle, providing step by step recycling instructions for every commercial item in the UK.</p>
                <p>All while providing a <b>worthwhile</b> incentive for the user.</p>
            </div>
            <div className = 'aboutboxmain' style = {{ marginTop: '50px'}}>
                <h1 className = 'inputTitle title2'>What does LITTERALLY! mean?</h1>
                <p>LITTERALLY: We are LITTERALLY! helping the environment, and saving the planet for generations to come.</p>
                <p>LITTER<b>ALLY</b>: We are allies with fellow Recycling and Litter prevention companies, leading to a sustainable and carbon free future.</p>
                <p>LITTE<b>R</b>ALLY: We are rallying for a clean, sustainable environment.</p>
            </div>
        </div>
        
    );
}

export default AboutBoxMain;