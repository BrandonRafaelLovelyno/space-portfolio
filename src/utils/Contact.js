const initValue = {
  firstName: "",
  lastName: "",
  email: "",
  topic: "",
  message: "",
};

function sendEmail(formValue,setStatus,setButtonText) {
  setButtonText('Sending...')
  fetch("http://localhost:5000/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify(formValue),
  })
  .then((res)=>{
    return res.json()
  })
  .then((resJson)=>{
    setButtonText('Send')
    setStatus(resJson);
  })
  .catch((err)=>{
    setStatus({status:'Error',message:'Fetching failed'})
  })
}

export { initValue, sendEmail };
