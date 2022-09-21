import React from 'react'
import Carousel from 'react-elastic-carousel'
import {Slidestyle} from './slidestyle'

const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ]

const Slide = () => {
    return (
        <Slidestyle>
            <Carousel breakPoints={breakpoints} pagination={false}>
                <div className="slide">
                    <div className="slide__text">
                        <p className="text">Morenikeji Osibanjo</p>
                    </div>
                    <div className="slide__text1">
                        <p className="text2">Airtim2Cash is the most reliable option for airtime conversations to cash. They have the best rates too.
                        </p>
                    </div>
                </div>
                <div className="slide">
                    <div className="slide__text">
                        <p className="text">Oluwaseun</p>
                    </div>
                    <div className="slide__text1">
                        <p className="text2">I love this platform, it is very easy to use and the customer service is excellent.</p>
                    </div>
                </div>
                <div className="slide">
                    <div className="slide__text">
                        <p className="text">Paris</p>
                    </div>
                    <div className="slide__text1">
                        <p className="text2">This app gives a Swift, delightful experience. I will continue to recommend 
                        this exceptional app....Kudos</p>
                    </div>
                </div>
                <div className="slide">
                    <div className="slide__text">
                        <p className="text">Dozie Ohis</p>
                    </div>
                    <div className="slide__text1">
                        <p className="text2">Upgrade is nice and effective, the app have been the best i've ever used. Good in 
                        conversion of airtime to cash </p>
                    </div>
                </div>
            </Carousel>
        </Slidestyle>
    )
}

export default Slide