import { checkURL } from "./URLVerifier"

const postInfo = async (url = '', info = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(info)
    })
    try {
        return await response.json()    
    } catch (error) {
        console.log('the error is', error)
    }
}    

function handleSubmit(e) {
    e.preventDefault()
 
    let urltext=document.getElementById("text").value;
    if(Client.checkURL(urltext)) {
         postInfo("http://localhost:8088/addurl", {urltext}).then(info => {
          document.getElementById('model').innerHTML = `model: ${info.model}`;
          document.getElementById('agreement').innerHTML = `agreement: ${info.agreement}`;
          document.getElementById('subjectivity').innerHTML = `subjectivity: ${info.subjectivity}`;
          document.getElementById('confidence').innerHTML = `confidence: ${info.confidence}`;
          document.getElementById('irony').innerHTML = `irony: ${info.irony}`;      
        })
    } else {
        alert('plz enter a valid url')
    }
}    

export { handleSubmit }