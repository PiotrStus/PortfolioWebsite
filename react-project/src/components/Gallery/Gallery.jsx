import { useState } from 'react'
import classes from './Gallery.module.css'


import Img1 from '../../img/01.jpg'
import Img2 from '../../img/02.jpg'
import Img3 from '../../img/03.jpg'
import Img4 from '../../img/04.jpg'
import Img5 from '../../img/05.jpg'
import Img6 from '../../img/06.jpg'
import Img7 from '../../img/07.jpg'
import Img8 from '../../img/08.jpg'
import Img9 from '../../img/09.jpg'
import Img10 from '../../img/10.jpg'
import Img11 from '../../img/11.jpg'
import Img12 from '../../img/12.jpg'

import { CloseOutlined, RightOutlined, LeftOutlined } from '@ant-design/icons';


function Gallery() {
    let data = [
        {id:1,
        imgSrc: Img1},
        {id:2,
        imgSrc: Img2},
        {id:3,
        imgSrc: Img3},
        {id:4,
        imgSrc: Img4},
        {id:5,
        imgSrc: Img5},
        {id:6,
        imgSrc: Img6},        
        {id:7,
        imgSrc: Img7},
        {id:8,
        imgSrc: Img8},
        {id:9,
        imgSrc: Img9},      
        {id:10,
        imgSrc: Img10},    
        {id:11,
        imgSrc: Img11},    
        {id:12,
        imgSrc: Img12},           
    ]

    const [model, setModel] = useState(false);
    const [id, setId] = useState(1)
    
    const getImg = (id) => {
        setModel(true)
        setId(id)
        console.log('actual id: ' + id)
    }

    const getPrevPhoto = () => {
        const isFirstPhoto = id === 0;
        const newIndex = isFirstPhoto ? data.length - 1 : id - 1;
        setId(newIndex);
        console.log(id)
    }

    const getNextPhoto = () => {
        const isLastPhoto = id === data.length - 1;
        const newIndex = isLastPhoto ? 0 : id + 1;
        setId(newIndex);
        console.log(id)
    }

    return (
        <>
        {/* <div className={model? classes.modelOpen : classes.model}> */}
        <div className={model? `${classes.model} ${classes.modelOpen}` : classes.model}>
                <img src={data[id].imgSrc} className={classes.img}  />
                    <div className={classes.test1}>
                    <CloseOutlined onClick={() => setModel(false)} />
                    </div>
                    <div className={classes.test2}>
                    <RightOutlined onClick={getNextPhoto}></RightOutlined>
                    </div>
                    <div className={classes.test3}>
                    <LeftOutlined onClick={getPrevPhoto}></LeftOutlined>
                    </div>
        </div>
        
        <div className={classes.gallery}>
            {data.map((item) => {
            return (
                <div className={classes.pics} key={item.id} onClick={() => getImg(item.id-1)}>
                    <img src={item.imgSrc} style={{width: '100%'}}/>

                </div>
            )
            })}
        </div>
        </>
    )
}





export default Gallery;