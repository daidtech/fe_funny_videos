import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { House } from 'lucide-react';
import MovieItem from './MovieItem';

export default function VideoPlatform() {
  return (
    <div className="min-vh-100 bg-light">
      {/* Header */}
      <header className="border-bottom">
        <Container className="py-4">
          <Row className="align-items-center justify-content-between">
            <Col md={4} className="d-flex align-items-center gap-2 mb-4 mb-md-0">
              <House className="h-6 w-6" />
              <h1 className="h4 font-weight-bold mb-0">Funny Movies</h1>
            </Col>
            <Col md={8} className="d-flex align-items-center justify-content-end gap-4">
              <Form.Control type="email" placeholder="email" className="w-25" />
              <Form.Control type="password" placeholder="password" className="w-25" />
              <Button variant="primary">Login / Register</Button>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Main Content */}
      <Container className="py-5">
        <Row>
          {[1, 2, 3].map((index) => (
            <MovieItem key={index} />
          ))}
        </Row>
      </Container>
    </div>
  );
}
