import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Row, Col, Container } from "react-bootstrap";

function Question3() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    // Use Axios to make an HTTP GET request
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, []);

  // Function to update a data item
  const updateDataItem = (id, newData) => {
    const updateUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;

    setLoading(true);

    axios
      .put(updateUrl, newData)
      .then((response) => {
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  };

  return (
    <Container className="mt-3">
      <h1>Sample Axios Request in React</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Row xs={1} md={4} className="g-1">
          {data.map((item) => (
            <Col key={item.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Text>{item.title} </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() =>
                      updateDataItem(item.id, { title: "New Title" })
                    }
                  >
                    Button
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default Question3;
