import { Container, Row } from 'react-bootstrap';
import MovieItem from './MovieItem';

export default function ListMovie() {
  return (
    <Container className="py-5">
      <Row>
        {[1, 2, 3].map((index) => (
          <MovieItem key={index} />
        ))}
      </Row>
    </Container>
  );
}
