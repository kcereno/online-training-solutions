import { Carousel } from "react-bootstrap";


export default function CustomerReviews(){

  return (
    <div className="carousel text-center bg-secondary text-white ">
    <h2 className="pt-4 pb-3 display-6">Customer Reviews</h2>
    <Carousel controls={false}>
      <Carousel.Item> 
        <div className="pb-5">
          <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, temporibus?"</p>
          <h4>Ana</h4>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="pb-5">
          <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum assumenda sunt."</p>
          <h4>Karl</h4>
        </div>
      </Carousel.Item>
    </Carousel>
  </div>
  )
}