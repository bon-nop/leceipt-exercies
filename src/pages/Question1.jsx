import { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";

function Question1() {
  const [person, setPerson] = useState({
    name: "",
    age: 0,
    address: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    const updatedPerson = {
      ...person,
      [name]: value,
    };
    setPerson(updatedPerson);
  };

  return (
    <Form className="pt-3">
      <Row className="mb-3">
        <Col xs={4}>
          <Form.Group as={Col}>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter name"
              onChange={handleChange}
              value={person.name}
              />
          </Form.Group>
        </Col>
        <Col xs={1}>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              name="age"
              placeholder="0"
              onChange={handleChange}
              value={person.age}
              />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              name="address"
              placeholder="1234 Main St"
              onChange={handleChange}
              value={person.address}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className="text-start">
            <p>My name is {person.name}.</p>
            <p>I'm {person.age} years old.</p>
            <p>I live at {person.address}.</p>
        </Col>
      </Row>
    </Form>
  );
}

export default Question1;
