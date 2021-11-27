import React, { useState} from 'react'
import { Card, Col, Container, Row, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import Header from '../../components/Header'

import './style.css'

const Home = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Envivou o login e senha', {login, password})
  }

  return (
    <div className="App">
      <Header listTitle={'Estudos'}/>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <h3>Faça seu login:</h3>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control value={login} onChange={e => setLogin(e.target.value)} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <Button onClick={handleLogin}variant="primary" type="submit">
                    Login
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
