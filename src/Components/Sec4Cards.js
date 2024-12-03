import React from 'react'
import { Card } from 'react-bootstrap'

function Sec4Cards({ cardData }) {
console.log(cardData)
    return (
        <div className="d-flex justify-content-center">
        <Card className="custom-card" style={{ backgroundColor: 'black', maxWidth: '100%', border: '2px solid #7038FA' }}>
          {/* Optionally add a triangle */}
          {/* <div className="triangle"></div> */}
  
          <div className="card-icon-container">
            <img
              src={cardData.image}
              alt="Card Icon"
              className="card-icon"
            />
          </div>
  
          <Card.Body>
            <Card.Title style={{ color: '#7038FA' }}>{cardData.title}</Card.Title>
            <Card.Text style={{ color: 'white' }}>
              This is a card for {cardData.title}. Customize it with content related to the topic.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
}

export default Sec4Cards