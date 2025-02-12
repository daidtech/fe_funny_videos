import { Container, Row } from 'react-bootstrap';
import MovieItem from './MovieItem';

export default function VideoPlatform() {
  return (
    <Container className="py-5">
      {/* <Button onClick={notify}>Notify !</Button> */}
      <Row>
        {[1, 2, 3].map((index) => (
          <MovieItem key={index} />
        ))}
      </Row>
    </Container>
  );
}
