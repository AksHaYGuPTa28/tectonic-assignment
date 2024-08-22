import './Home.css';
import Container from '../../atoms/Container/Container';
import SliderContainer from '../../organisms/SliderContainer/sliderContainer';
import Video from "../../../assets/Video.mp4"
import First from "../../../assets/1.jpg"
import Second from "../../../assets/2.jpg"
import Third from "../../../assets/3.jpg"
import Fourth from "../../../assets/4.jpg"
import Video2 from "../../../assets/video2.mp4"
import Thumbnail1 from "../../../assets/thumbnail1.jpg";
import Thumbnail2 from "../../../assets/thumbnail2.jpg";
import Thumbnail3 from "../../../assets/thumbnail3.jpg";
import Thumbnail4 from "../../../assets/thumbnail4.jpg";

const slidersData = [
    {
        "id": "slider1",
        "slides": [
            { "type": "image", "src": First },
            { "type": "video", "src": Video },
            { "type": "image", "src": Second }
        ],
        "thumbnails": [
            {
                "name": "Powerlook", "dp": "799", "ap": "1999", "dc": "60%", "src": Thumbnail3, sizes: [28, 30, 32, 34, 36, 38],
                "bigImage1": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30045496/2024/6/28/c2779aab-e66c-4556-b00e-9225757f473b1719523851189PowerlookMenFloralOpaquePrintedCasualShirt1.jpg", 
                "bigImage2": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30045496/2024/6/28/16c447da-a4ea-46b6-b77e-9026a9a439521719523851340PowerlookMenFloralOpaquePrintedCasualShirt2.jpg", 
                "bigImage3": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30045496/2024/6/28/eedb73bb-22fa-4ec8-871a-af4e1f023ad21719523851277PowerlookMenFloralOpaquePrintedCasualShirt3.jpg", 
                "bigImage4": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30045496/2024/6/28/c3d2c37b-c2e9-4172-b2c5-6c748aa2469a1719523851246PowerlookMenFloralOpaquePrintedCasualShirt4.jpg"
            },
            {
                "name": "Powerlook", "dp": "779", "ap": "1999", "dc": "61%", "src": Thumbnail4, sizes: [28, 30, 32, 34, 36, 38],
                "bigImage1": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/AUGUST/6/WtXdHrAx_678fe47ad5034aae98f309a049487d84.jpg", 
                "bigImage2": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/AUGUST/6/0FcizSWH_36788d5cc814476face1fe410901dd34.jpg", 
                "bigImage3": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/AUGUST/6/6Vhw7hZP_f6a85a9238b249218fc1e39d7427e210.jpg", 
                "bigImage4": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/AUGUST/6/wFPNlhXR_aa660e8ed1f84fe2b7824aba5cfb2eec.jpg"
            },
        ]
    },
    {
        "id": "slider2",
        "slides": [
            { "type": "image", "src": Third },
            { "type": "video", "src": Video2 },
            { "type": "image", "src": Fourth }
        ],
        "thumbnails": [
            {
                "name": "Campus Sutra", "dp": "799", "ap": "1999", "dc": "60%", "src": Thumbnail1, sizes: [28, 30, 32, 34, 36, 38],
                "bigImage1": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29808888/2024/5/27/53276f9c-0f9d-43a0-856d-c2930b3806a21716814251530CampusSutraMenComfortTrousers1.jpg", 
                "bigImage2": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29808888/2024/5/27/558a1bbd-155b-4614-aa9c-288912309ba11716814251562CampusSutraMenComfortTrousers2.jpg", 
                "bigImage3": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29808888/2024/5/27/558a1bbd-155b-4614-aa9c-288912309ba11716814251562CampusSutraMenComfortTrousers2.jpg", 
                "bigImage4": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29808888/2024/5/27/509d5135-d3ed-44bb-beb2-8f296c2811ef1716814251615CampusSutraMenComfortTrousers4.jpg"
            },
            {
                "name": "Campus Brown", "dp": "779", "ap": "1999", "dc": "61%", "src": Thumbnail2, sizes: [28, 30, 32, 34, 36, 38],
                "bigImage1": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28282858/2024/3/15/c712f351-a7d4-4be1-b5d4-29266121fa2c1710482010129CampusSutraMenRelaxedEasyWashTrousers1.jpg", 
                "bigImage2": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28282858/2024/3/15/52fc5cac-b178-4152-9e32-246195b2b3ee1710482010154CampusSutraMenRelaxedEasyWashTrousers2.jpg", 
                "bigImage3": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28282858/2024/3/15/618bf40d-bf1c-40d4-a5fc-0c9b919c1ba71710482010177CampusSutraMenRelaxedEasyWashTrousers3.jpg", 
                "bigImage4": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28282858/2024/3/15/d5d70fa8-2b0a-4d73-8cd2-99b45122ebcb1710482010143CampusSutraMenRelaxedEasyWashTrousers4.jpg"
            },
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
