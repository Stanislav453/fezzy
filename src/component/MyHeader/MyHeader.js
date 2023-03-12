
import "./MyHeader.scss";
import { Link } from "react-scroll";
import React, {useState, useEffect} from "react";
import { HeaderData } from "./HeaderData";
import { BsFillArrowDownSquareFill, BsFillArrowUpSquareFill  } from "react-icons/bs";

const MyHeader = () => {

    const [ textIndex, setTextIndex ] = useState(0)

    const HeaderDataLength = HeaderData.length - 1

    const autoScroll = true
    const textIndexTimer = 5000
    let textIndexInterval

    const textIndexNext = () => {
        setTextIndex( textIndex === HeaderDataLength ? 0 : textIndex + 1 )
    }

    function auto() {
        textIndexInterval = setInterval(textIndexNext, textIndexTimer)
    }

    useEffect( () => {
        if(autoScroll) {
            auto()
        }
        return () => clearInterval( textIndexInterval  )
    },[textIndex])
    
     
    return(
        <header className="header-main-container">
            <div className="center-container">
                <div className="content-container">
                    {
                        HeaderData.map( (item, key) => {
                            const{HightText, HeaderText, ButtonText, to} = item
                            return(
                                <div className={ 
                                    key === textIndex 
                                    ? "content-box content-box-show" 
                                    : "content-box" } key={key}> 
                                    <h1>{HightText}</h1>
                                    <p>{HeaderText}</p>
                                    <Link className="header-link" activeClass="active" to={to} spy={true} smooth={true} offset={50} duration={500}>
                                    {ButtonText}
                                    </Link>

                                </div>
                            )
                        } ) 
                    }
                </div>
            </div>
        </header>
    )
}

export default MyHeader