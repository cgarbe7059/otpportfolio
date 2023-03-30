const searchForm = document.querySelector('.search');
const input = document.querySelector('.input');
const newsList = document.querySelector('.news-list');

searchForm.addEventListener('submit', retrieve)


// Validation Requirement

function retrieve(e){

    if(input.value == ''){
        alert('Input field is empty')
        return
    }

    newsList.innerHTML = ''

    e.preventDefault()

    const apiKey = "d81f904a62c24564bed95c4ad63a0309"
    let topic = input.value;
    
    let url = `https://newsapi.org/v2/everything?pageSize=5&q=${topic}&apiKey=${apiKey}` 
    'pageSize=30&'

    
    fetch(url).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
        data.articles.forEach(article => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute('href', article.url );
            a.setAttribute('target', '_blank')
            a.textContent = article.title;
            li.appendChild(a);
            newsList.appendChild(li);
        })

    }).catch((error)=>{
        console.log(error)


    })
    

}