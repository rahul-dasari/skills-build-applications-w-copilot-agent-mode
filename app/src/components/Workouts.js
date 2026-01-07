import React, { useEffect, useState } from 'react';
import { Table, Button, Card } from 'react-bootstrap';

const Workouts = () => {
  const [data, setData] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Fetched Workouts:', results);
        console.log('Endpoint:', endpoint);
      })
      .catch(err => console.error('Error fetching workouts:', err));
  }, [endpoint]);

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title as="h2" className="mb-3">Workouts</Card.Title>
        <Table striped bordered hover responsive>
          <thead className="table-danger">
            <tr>
              <th>Workout</th>
              <th>Type</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row */}
            <tr>
              <td>Push Ups</td>
              <td>Strength</td>
              <td>10 min</td>
              <td>
                <Button variant="primary" size="sm">Edit</Button>{' '}
                <Button variant="danger" size="sm">Delete</Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <Button variant="success">Add Workout</Button>
      </Card.Body>
    </Card>
  );
};

export default Workouts;
