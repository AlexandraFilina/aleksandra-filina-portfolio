import "./CarouselComponent.css";
import case1JPG from "../../case1.jpg";
import case2JPG from "../../case2.jpg";
import case3JPG from "../../case3.jpg";
import case4JPG from "../../case4.jpg";

function Carousel() {
  return (
    <div className="Carousel">
      <div className="card">
        <img src={case1JPG} />
        <span>rebranding</span>
      </div>
      <div className="card">
        <img src={case2JPG} />
        <span>marketing</span>
      </div>
      <div className="card">
        <img src={case3JPG} />
        <span>lawyer</span>
      </div>
      <div className="card">
        <img src={case4JPG} />
        <span>startup</span>
      </div>
      <div className="card">
        <img src={case1JPG} />
        <span>rebranding</span>
      </div>
    </div>
  );
}

export default Carousel;
