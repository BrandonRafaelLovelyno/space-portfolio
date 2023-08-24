//Importing styles
import '../styles/FillButton.css'

function FillButton({mainImage,afterImage,height,width}){
    const mainStyle={
        backgroundImage:`url(${mainImage})` ,
        height:`${height}px`,
        width:`${width}px`,
    }
    const beforeStyle={
        backgroundImage:`url(${afterImage})`, 
        height:`${height}px`,
        width:`${width}px`,
        top:`-7%`,
        left:`-8.5%`,
    }
    return(
        <div className='main' style={mainStyle}>
            <div className='before-button' style={beforeStyle}></div>
        </div>
    )
}

export default FillButton