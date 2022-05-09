import './RightContent.css'
import React, {useContext} from 'react'
import BarIndexContext from '../../context/BarIndexContext';
import Advantages from './Contents/Advantages';
import ForWho from './Contents/ForWho';
import History from './Contents/History';
import Introductory from './Contents/Introductory';
import ServiceTypes from './Contents/ServiceTypes';
import Varieties from './Contents/Varieties';

function RightContent(){

    const { index } = useContext(BarIndexContext)

    return(
        <div className='right-content-container'>
            {
                index === 0 &&
                <Introductory/>
            }
            {
                index === 1 &&
                <History/>
            }
            {
                index === 2 &&
                <Advantages/>
            }
            {
                index === 3 &&
                <ForWho/>
            }     
            {
                index === 4 &&
                <ServiceTypes/>
            }  
            {
                index === 5 &&
                <Varieties/>
            }                                          
        </div>
    )
}

export default RightContent;