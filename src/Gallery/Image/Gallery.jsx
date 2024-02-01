import Slide from "./Slide";
import Button from "../../components/Button/Button";
import Div from "../../components/Div/Div";
import "../../App.css";
import { useState } from "react";

const imageLibrary = [
    {
        source: `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg`,
        desc: 'Дерево на фоне фиолетового заката'
    },
    {
        source: `https://static.toiimg.com/photo/msid-53891743,width-96,height-65.cms`,
        desc: 'Эйфелева башня в Париже'
    },
    {
        source: `https://wallpapers.com/images/hd/coolest-pictures-88c269e953ar0aw4.jpg`,
        desc: 'Космонавт чилит с балтикой 9, только не понятно как он пьет через скофандр'
    },
    {
        source: `https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-taj-mahal.jpg`,
        desc: 'Тадж-Махал в Индии'
    }
]

function Gallery () {
    const [images, changeImg] = useState(0);
   
    const previousButton = function (){
        if(images === 0){
            changeImg(imageLibrary.length - 1); 
            return;
        }
        changeImg(images - 1)
    }

    const nextButton = function (){
        if (images === imageLibrary.length - 1){
            changeImg(0);
            return;
        }
        changeImg(images + 1)
    }



    return (
        <>
        <Div className='galleryContainer'>
            <Button qorwok={previousButton}>Prev</Button>
            <Div className='imageContainer'>
                <Slide src={imageLibrary[images].source}  desc={imageLibrary[images].desc}/>
            </Div>
            <Button qorwok={nextButton}>Next</Button>
        </Div>
        </>
    )
}

export default Gallery;
