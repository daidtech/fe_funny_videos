'use client'
import { useState } from "react"
import { Button, Card, Form } from "react-bootstrap"

const SharedVideo = () => {
  const [youtubeUrl, setYoutubeUrl] = useState<string>("")
  function handleShare(): void {
    throw new Error("Function not implemented.")
  }

  return (
    <div className="w-50 mx-auto mt-5">
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
          <Button className="w-100" onClick={handleShare} disabled={!youtubeUrl}>
            Share
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}
export default SharedVideo