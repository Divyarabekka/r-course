import Card from 'react-bootstrap/Card';

function GridExample() {
  return (
<div id='model'>
    
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/08/featured-image-how-to-become-ui-ux-designer-1536x1046.webp" />
      <Card.Body>
        <Card.Title>How to Become a UI/UX Designer: 10 Steps to Master the Craft</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a class="elementor-post__read-more" href="https://www.guvi.in/blog/how-to-become-a-ui-ux-designer/">
Read More » </a>
      </Card.Body>
    </Card>   

    <Card style={{ width: '18rem' }}>
      <img variant="top" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/fullstack_php_js.jpg"/>
      <Card.Body>
        <Card.Title>Top Skills To Become a Full Stack Developer in 2023</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a class="elementor-post__read-more" href="https://www.guvi.in/blog/top-skills-to-become-a-full-stack-developer/">
Read More » </a>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210222183454/How-to-Become-a-Full-Stack-Web-Developer-in-2021.png" />
      <Card.Body>
        <Card.Title>5 Career Opportunities for Full Stack Development</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a class="elementor-post__read-more" href="https://www.guvi.in/blog/career-opportunities-for-full-stack-development/">
Read More » </a>
      </Card.Body>
    </Card>
     </div>
  );
}

export default GridExample;