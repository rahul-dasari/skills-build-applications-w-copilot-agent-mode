import React, { useEffect, useState } from 'react';
import { Table, Button, Card } from 'react-bootstrap';

const Users = () => {
  const [data, setData] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Fetched Users:', results);
        console.log('Endpoint:', endpoint);
      })
      .catch(err => console.error('Error fetching users:', err));
  }, [endpoint]);

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title as="h2" className="mb-3">Users</Card.Title>
        <Table striped bordered hover responsive>
          <thead className="table-warning">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row */}
            <tr>
              <td>Bruce Wayne</td>
              <td>bruce@wayne.com</td>
              <td>
                <Button variant="primary" size="sm">Edit</Button>{' '}
                <Button variant="danger" size="sm">Delete</Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <Button variant="success">Add User</Button>
      </Card.Body>
    </Card>
  );
};

export default Users;
