import '../index.css';
import '../home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Row, Col } from 'react-bootstrap';
//import { useState } from 'react';

// export  function SendRecycle() {
//     const [recycle, setRecycle] = useState();

//     function handleClick() {
//         setRecycle()
//     };
// }

function InputBoxMain() {
    return (
        <div className="inputboxmain container">
            <Form>
                <h1 className = 'title2'>What do you want to recycle?</h1>
                <Row className="d-flex align-items-end">
                    <Form.Group as={Col} className = 'inputboxinput'>
                    <Form.Control size = 'lg' type="input" placeholder="Which item do you want to recycle?" />
                    </Form.Group>
        
                    <Form.Group as={Col} className = 'inputboxinput'>
                    <Form.Control size = 'lg' type="input" placeholder="What is your postcode?" />
                    </Form.Group>
        
                    <Form.Group as={Col} controlId="formButton">
                    <Button href = '/item' type = 'submit' className = 'button1'>GO</Button>
                    </Form.Group>
                </Row>
            </Form>
        </div>
    );
}

export default InputBoxMain;