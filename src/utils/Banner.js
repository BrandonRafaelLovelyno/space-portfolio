/** 
* @param {string} text - The typing text.
* @param {function(string):void} setText - The text useState.    
* @param {number} wordIndex- The word index.
* @param {function(number):void} setWordIndex - The text useState.   
* @param {string[]} toRotate- The words to be shown.
* @param {bool} isDeleting- The words to be shown.
* @param {function(bool):void} setIsDeleting- The words to be shown.
* @param {number} index- The words to be shown.
* @param {function(number)} setIndex- The words to be shown.
* @param {function(number)} setDelta- The words to be shown.
*/

function typeText(text,setText,wordIndex,setWordIndex,isDeleting,setIsDeleting,setDelta,toRotate){
    let fullText=toRotate[wordIndex]
    const updateText= isDeleting?fullText.substring(0,text.length-1):fullText.substring(0,text.length+1);
    const randomNumber=400-Math.random()*300;
    //Updating basic state
    setText(updateText)
    setDelta(randomNumber)
    
    
    //Algorithm
    if(updateText===fullText){
        //Delete the word, isDeleting === false
        setIsDeleting(true)
    }else if(updateText===''){
        //Might be starting or changing
        if(isDeleting==true){
            //Changing
            setWordIndex((prevIndex)=>(prevIndex+1)%toRotate.length)
            setIsDeleting(false)
        }
    }
}

export default typeText