import React, { useEffect, useState } from 'react';
import { Table, Button, Card } from 'react-bootstrap';

const Teams = () => {
  const [data, setData] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Fetched Teams:', results);
        console.log('Endpoint:', endpoint);
      })
      .catch(err => console.error('Error fetching teams:', err));
  }, [endpoint]);
  
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title as="h2" className="mb-3">Teams</Card.Title>
        <Table striped bordered hover responsive>
          <thead className="table-info">
            <tr>
              <th>Team Name</th>
              <th>Members</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row */}
            <tr>
              <td>Marvel Heroes</td>
              <td>Iron Man, Captain America</td>
              <td>
                <Button variant="primary" size="sm">Edit</Button>{' '}
                <Button variant="danger" size="sm">Delete</Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <Button variant="success">Add Team</Button>
      </Card.Body>
    </Card>
  );
};

export default Teams;
