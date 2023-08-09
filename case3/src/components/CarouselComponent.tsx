import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent() {

return (
   <Carousel data-bs-theme="light" className="carousel">
      <Carousel.Item >
         <img className="w-100 carousel-image" src="https://media-cdn.tripadvisor.com/media/photo-s/1a/e0/95/eb/corn-dog-art.jpg" alt="First slide" />
         <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
         </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  >
         <img className="w-100 carousel-image" src="https://media-cdn.tripadvisor.com/media/photo-s/1a/e0/95/eb/corn-dog-art.jpg" alt="Second slide" />
         <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
         <img className="w-100 carousel-image" src="https://media-cdn.tripadvisor.com/media/photo-s/1a/e0/95/eb/corn-dog-art.jpg" alt="Third slide" />
         <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
         </Carousel.Caption>
      </Carousel.Item>
   </Carousel>
   );
   ;
   }


   export default CarouselComponent