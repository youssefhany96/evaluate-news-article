import { checkURL } from "./URLVerifier"

const postInfo = async (url = '', info = {}) => {
    const response = await fetch(url, {
        method: 'POSTInfo',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'app/json'
        },
        body: JSON.stringify(info)
    })
    try {
        return await response.json()    
    } catch (error) {
        console.log('the error is', error)
    }
}    

async function handleSubmit(event) {
    event.preventdefault()
    let urltext=document.getElementById('article-url').value;
    if(checkURL(urltext)) {
         postInfo("http://localhost:8088/addurl", {url: urltext}).then(info => {
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