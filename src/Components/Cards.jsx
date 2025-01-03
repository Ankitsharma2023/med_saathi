import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function ImageCards() {
  const images = [
    { id: 1, image: "image1.jpeg" },
   
  ];

  
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '50px', gap:"300px" }}>
      {images.map((item) => (
        <Card key={item.id} style={{ width: '18rem', padding: '20px' }}>
  
          <Card.Img 
            variant="top" 
            src="https://i.pinimg.com/736x/cc/cf/f8/cccff88d04c72a8e1724e03814d7567a.jpg"
            style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
          />
          <Card.Body>
            <Card.Title>Card Title {item.id}</Card.Title>
            <Card.Text>
             
            </Card.Text>
            
            <Button variant="primary" href= "/patientData" >Check Details</Button>
          
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ImageCards;
