import { Button, Card, Form, Container, Row, Col } from 'react-bootstrap';
import { ThumbsUp, ThumbsDown, Play, Volume2, Maximize2, House } from 'lucide-react';

const MovieItem = () => {
  return (
    <Col md={6}>
      <Card className="mb-4">
        <Card.Body className="p-4">
          <Row className="">
            {/* Video Player */}
            <Col md={6} className="bg-secondary rounded" style={{ minHeight: '200px' }}>
              {/* Video controls can be added here */}
            </Col>

            {/* Video Info */}
            <Col md={6} className="space-y-2">
              <h2 className="h5 font-weight-bold text-danger">Movie Title</h2>
              <p className="text-muted">Shared by: someone@gmail.com</p>
              <div className="d-flex align-items-center gap-4">
                  <div className="d-flex align-items-center gap-1">
                  <ThumbsUp className="h-4 w-4" style={{ cursor: 'not-allowed' }} />
                  <span>89</span>
                  </div>
                <div className="d-flex align-items-center gap-1">
                  <ThumbsDown className="h-4 w-4" style={{ cursor: 'not-allowed' }}/>
                  <span>12</span>
                </div>
              </div>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default MovieItem;