import './LeftBar.css'
import React, {useContext} from 'react'

import BarIndexContext from '../../context/BarIndexContext'

function LeftBar(){

    const { index, updateIndex } = useContext(BarIndexContext)

    const renderBarItem = (title,index) => {
        return(
            <div className='bar-item' onClick={()=>{updateIndex(index)}}>
                {title}
            </div>
        )
    }

    return(
        <div className='left-bar-container'>    
            {renderBarItem("Bulut Bilişim Nedir ?",0)}
            {renderBarItem("Tarihi",1)}
            {renderBarItem("Avantajları",2)}
            {renderBarItem("Kimler Kullanıyor ?",3)}
            {renderBarItem("Servis Modelleri",4)}
            {renderBarItem("Bulut Tipleri",5)}            
        </div>
    )
}

export default LeftBar;