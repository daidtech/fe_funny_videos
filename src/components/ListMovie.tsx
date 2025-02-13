'use client'
import { Container, Row } from 'react-bootstrap';
import MovieItem from './MovieItem';
import { useEffect, useState } from 'react';
import { getVideos } from '../services/videoService';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { createConsumer } from "@rails/actioncable";

const token = Cookies.get('token');
const cable = token ? createConsumer(`ws://localhost:3000/cable?token=${token}`) : null;

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

  const showPopupNotification = () => {
    if(cable) {
      cable.subscriptions.create("NotificationsChannel", {
        received(data) {
          toast(`${data.sender} shared a new video: "${data.title}"`)
          fetchVideos();
        },
      });
    }
  }

  useEffect(() => {
    fetchVideos();
    showPopupNotification()
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
