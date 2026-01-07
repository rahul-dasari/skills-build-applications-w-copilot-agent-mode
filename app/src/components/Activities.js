import React, { useEffect, useState } from 'react';
import { Table, Button, Card } from 'react-bootstrap';

const Activities = () => {
  const [data, setData] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Fetched Activities:', results);
        console.log('Endpoint:', endpoint);
      })
      .catch(err => console.error('Error fetching activities:', err));
  }, [endpoint]);

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title as="h2" className="mb-3">Activities</Card.Title>
        <Table striped bordered hover responsive>
          <thead className="table-primary">
            <tr>
              <th>Date</th>
              <th>Activity</th>
              <th>Duration</th>
              <th>Calories</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row */}
            <tr>
              <td>2026-01-07</td>
              <td>Running</td>
              <td>30 min</td>
              <td>300</td>
              <td>
                <Button variant="primary" size="sm">Edit</Button>{' '}
                <Button variant="danger" size="sm">Delete</Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <Button variant="success">Add Activity</Button>
      </Card.Body>
    </Card>
  );
};

export default Activities;
