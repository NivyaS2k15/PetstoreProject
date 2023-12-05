import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Card, Row, Col } from 'react-bootstrap';

interface Contact {
  id: string;
  name: string;
  address: string;
  state: string;
  district: string;
  pin: string;
}

const ContactCard = ({ contact }: { contact: Contact }) => {
  return (
    <Col md={4}>
      <Card style={{ margin: '10px', backgroundColor: '#90a7f0' }}>
        <Card.Body>
          
          <Card.Title>
            <h6>Name :{contact.name}</h6>
            
          </Card.Title>
          <Card.Text>
            <h6>Address : {contact.address}</h6>
            
          </Card.Text>
          <Card.Text>
            <h6>State: {contact.state}</h6>
            
          </Card.Text>
          <Card.Text>
  <h6>District: {contact.district}</h6>
</Card.Text>
          <Card.Text>
            <h6>Pin : {contact.pin} </h6>
            
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

const OrderDetail: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [selectedContactId, setSelectedContactId] = useState<string>('');

  useEffect(() => {
    async function fetchContacts() {
      const response = await fetch('http://localhost:4561/api/buynow/getbuy');
      const data: Contact[] = await response.json();
      setContacts(data);
    }

    fetchContacts();
  }, []);

  const fetchContactById = async () => {
    if (selectedContactId) {
      const response = await fetch(`http://localhost:4561/api/buynow/${selectedContactId}`);
      const data: Contact = await response.json();
      setSelectedContact(data);
    }
  };

  return (
    <div>
      <Row>
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </Row>
      <Row>
        <Col>
          {/* <Button onClick={fetchContactById}>Fetch Details by ID</Button> */}
        </Col>
      </Row>
      {selectedContact && (
        <div>
          <h2>Contact Details</h2>
          <ContactCard contact={selectedContact} />
        </div>
      )}
    </div>
  );
};

export default OrderDetail;
