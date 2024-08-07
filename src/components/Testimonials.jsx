
import Carousel from 'react-bootstrap/Carousel';
import Cards from './Cards';

function Testimonials() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item >
        <Cards
       name="John Doe"
       role="CEO, ExampleCorp"
       testimonial="This is the best service I have ever used. Highly recommend!"
       image="https://via.placeholder.com/80" // Replace with actual image URL
       rating={5}
        />
      </Carousel.Item>
      <Carousel.Item>
      <Cards
      name="John Doe"
      role="CEO, ExampleCorp"
      testimonial="This is the best service I have ever used. Highly recommend!"
      image="https://via.placeholder.com/80" // Replace with actual image URL
      rating={4}/>
      </Carousel.Item>
      <Carousel.Item>
      <Cards
     name="John Doe"
     role="CEO, ExampleCorp"
     testimonial="This is the best service I have ever used. Highly recommend!"
     image="https://via.placeholder.com/80" // Replace with actual image URL
     rating={3}/>
      </Carousel.Item>
      <Carousel.Item>
      <Cards
      name="John Doe"
      role="CEO, ExampleCorp"
      testimonial="This is the best service I have ever used. Highly recommend!"
      image="https://via.placeholder.com/80" // Replace with actual image URL
      rating={4}/>
      </Carousel.Item>
      <Carousel.Item>
      <Cards
     name="John Doe"
     role="CEO, ExampleCorp"
     testimonial="This is the best service I have ever used. Highly recommend!"
     image="https://via.placeholder.com/80" // Replace with actual image URL
     rating={3}/>
      </Carousel.Item>
    </Carousel>
  );
}

export default Testimonials;