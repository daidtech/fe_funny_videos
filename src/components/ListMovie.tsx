'use client'
import { Container, Row } from 'react-bootstrap';
import MovieItem from './MovieItem';
import { useEffect, useState } from 'react';
import { getVideos } from '../services/videoService';
import { toast } from 'react-toastify';

export default function ListMovie() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos().then((res) => {
      setVideos(res);
      console.log(res);
    }).catch((err) => {
      console.log(err)
      toast.error('Error fetching videos');
    });
  }, [])

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
