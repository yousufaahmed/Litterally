import '../index.css';
import '../home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton } from 'react-share';

const shareUrl = 'localHost:3000';

function Share(){
    return(
        <div className =  'container' style={{ color: '#000000', padding: '50px' }}>
            <h2 className = 'inputtitle'>Save the planet by sharing this</h2>
            <EmailShareButton url = {shareUrl}>
                <EmailIcon size = {40}/>
            </EmailShareButton>
            <FacebookShareButton url = {shareUrl}>
                <FacebookIcon size = {40}/>
            </FacebookShareButton>
            <LinkedinShareButton url = {shareUrl}>
                <LinkedinIcon size = {40}/>
            </LinkedinShareButton>
            <TwitterShareButton url = {shareUrl}>
                <TwitterIcon size = {40}/>
            </TwitterShareButton>
        </div>
    );
}

export default Share;