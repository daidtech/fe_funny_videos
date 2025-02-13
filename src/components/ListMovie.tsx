'use client'
import { Container, Row } from 'react-bootstrap';
import MovieItem from './MovieItem';
import { useEffect, useState } from 'react';
import { getVideos } from '../services/videoService';
import { toast } from 'react-toastify';

export default function ListMovie() {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    await getVideos().then((res) => {
      setVideos(res);
      console.log(res);
    }).catch((err) => {
      console.log(err)
      toast.error('Error fetching videos');
    });
  }

  useEffect(() => {
    fetchVideos();
  }, [])

  return (
    <Container className="py-5">
      <Row>
        {
          videos.length>0 ? videos.map((video: any) => (
            <MovieItem key={video.id} video={video} />
          )) : <p>No videos found</p>
        }
      </Row>
    </Container>
  );
}
