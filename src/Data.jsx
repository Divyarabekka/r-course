import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Data() {
  return (
    <div><div id='data'><h1><b>Data science</b></h1>
    <p>One of the most propelling careers on the planet today, Data Science is a vast arena of diverse 
        technologies and techniques. Are you ready to step into the world of Data? Then you probably should 
        not miss this corner of articles that is an assorted curation out of tedious research & exploration.
        The GUVI Blog’s Data Science category is here to help you steer through a lot of opinions that float on the 
        internet. High-Quality content curated by experts!</p>
</div>

<div id='model'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/08/data-science-webinars-and-workshops-1536x804.webp" />
      <Card.Body>
        <Card.Title>Data Science Webinars and Workshops</Card.Title>
        <Card.Text>
        In today’s world, it’s becoming increasingly important to be knowledgeable in the field of data science.
        </Card.Text>
        <a class="elementor-post__read-more" href="https://www.guvi.in/blog/data-science-webinars-and-workshops/">
Read More » </a>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/07/best-data-science-frameworks-1536x804.webp" />
      <Card.Body>
        <Card.Title>10 Best Data Science Frameworks in 2023</Card.Title>
        <Card.Text>
        One great way is by attending data science webinars and workshops. These interactive 
        virtual events are designed to give 
        </Card.Text>
        <a class="elementor-post__read-more" href="https://www.guvi.in/blog/10-best-data-science-frameworks/">
Read More » </a>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/07/must-watch-data-science-focused-youtube-channels-1536x804.webp" />
      <Card.Body>
        <Card.Title>7 Must-Watch Data Science Focused YouTube Channels for Effective Learning</Card.Title>
        <Card.Text>
        Attending data science webinars and workshops can be incredibly beneficial for
         anyone looking to grow professionally in the field.
        </Card.Text>
        <a class="elementor-post__read-more" href="https://www.guvi.in/blog/top-7-must-watch-data-science-youtube-channels/">
Read More » </a>
      </Card.Body>
    </Card>
    </div>

    </div>
  )
}

export default Data