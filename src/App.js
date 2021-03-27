import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, Form } from 'react-bootstrap';
import EmailInput from './components/EmailInput';
import PasswordInput from './components/PasswordInput';
import Address from './components/Address';
import Address2 from './components/Address2';
import City from './components/City';
import State from './components/State';
import Zip from './components/Zip';
import CheckBox from './components/CheckBox';

function App() {
  return (
    <Container>
      <h3>Form with React with seperate components </h3>
    <Form>
      <Form.Row>
        <EmailInput />

        <PasswordInput />
      </Form.Row>

     <Address />

     <Address2 />

      <Form.Row>
        <City />

        <State />

        <Zip />
      </Form.Row>

      <CheckBox />

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>

  );
}

export default App;
