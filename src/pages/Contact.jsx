import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmailForm from '../components/emailform';

function Contact() {
  return (
    <div className="Contact">
        <h1 style = {{ margin: '60px'}}>Contact us here by filling out this form:</h1>
        <EmailForm></EmailForm>
    </div>
  );
}

export default Contact;
