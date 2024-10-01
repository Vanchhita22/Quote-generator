
const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
const options = {
method: 'GET',
headers: {
    'X-RapidAPI-Key': 'c21d6c9be9mshc583abeafaac79ep1b901fjsn82321b7b931a',
    'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
}
};

async function generate() {
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        quote.innerHTML = result.content;
        authorName.innerHTML = result.originator.name;
    } catch (error) {
        console.error(error);
    }

}
window.onload = function(){
    
    generate();
    //Next Function
    document.getElementById('next').addEventListener('click',function(){
        generate();
    })
    
     //Copy Function
    document.getElementById('copy').addEventListener('click',()=>
    {

    let text = document.getElementById('quote')
    navigator.clipboard.writeText(text.innerHTML);
    console.log("copied")

    })

    //Text to Speech Function
    speak.addEventListener('click',()=>{
        
    })
}



