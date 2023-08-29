function addObserver(domElement,setState){
    const observer=new IntersectionObserver((entries)=>{
        setState(entries[0].isIntersecting)
    })
    observer.observe(domElement)
}

export default addObserver;