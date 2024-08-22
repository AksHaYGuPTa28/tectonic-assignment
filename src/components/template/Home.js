import './Home.css';
import Container from '../atoms/Container/Container';
import SliderContainer from '../organisms/SliderContainer/sliderContainer';
import Video from "../../assets/Video.mp4"
import First from "../../assets/1.jpg"
import Second from "../../assets/2.jpg"
import Third from "../../assets/3.jpg"
import Fourth from "../../assets/4.jpg"
import Video2 from "../../assets/video2.mp4"
import Thumbnail1 from "../../assets/thumbnail1.jpg";
import Thumbnail2 from "../../assets/thumbnail2.jpg";

const slidersData = [
    {
      "id": "slider1",
      "slides": [
        { "type": "image", "src": First },
        { "type": "video", "src": Video },
        { "type": "image", "src":Second}
      ],
      "thumbnails":[
          {"name": "Campus Sutra", "dp":"799","ap":"1999","dc":"60%","src":Thumbnail1},
          {"name": "Campus Brown", "dp":"779","ap":"1999","dc":"61%","src":Thumbnail2},
      ]
    },
    {
        "id": "slider2",
        "slides": [
          { "type": "image", "src": Third},
          { "type": "video", "src": Video2 },
          { "type": "image", "src":Fourth}
        ]
      },
  ];


function Home() {
    return (
        <div className="home">
            <Container header="LookBook">
            <SliderContainer slidersData={slidersData} />
            </Container>
        </div>
    );
}

export default Home;
