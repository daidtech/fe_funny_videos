'use client'
import { useState } from "react"
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import { createVideo } from "../services/videoService"
import { toast } from "react-toastify"

const ShareVideo = () => {
  const [youtubeUrl, setYoutubeUrl] = useState<string>("")
  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")

  function handleShare(): void {
    createVideo({youtube_video_hash: youtubeUrl, title, description}).then((response) => {
      toast.success('Video shared successfully');
    }).catch((err) => { console.log(err) });
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6} className="mx-auto">
          <Card className="w-100 mx-auto">
            <Card.Header>
              <Card.Title>Share a Youtube movie</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <label htmlFor="youtube-url" className="form-label">
                  Youtube URL:
                </label>
                <Form.Control
                  id="youtube-url"
                  value={youtubeUrl}
                  onChange={(e) => setYoutubeUrl(e.target.value)}
                  placeholder="https://www.youtube.com/watch?v="
                  />
              </div>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title:
                </label>
                <Form.Control
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                  />
              </div>
                <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description:
                </label>
                <Form.Control
                  as="textarea"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                  rows={2}
                  />
                </div>
              <Button className="w-100" onClick={handleShare} disabled={!youtubeUrl}>
                Share
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
export default ShareVideo