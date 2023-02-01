const quoteContainer = document.getElementById('quote-container');
// const quoteText = document.getElementById('quote');
// const songText = document.getElementById('song');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');




async function getQuotes() {
    const apiUrl = 'https://taylorswiftapi.onrender.com/get';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json(); 
        console.log(apiQuotes);
        document.getElementById('quote').innerHTML = apiQuotes.quote;
        document.getElementById('song').innerHTML = "Taylor Swift - " + apiQuotes.song;     
    } catch (error) {
        alert(error)
    }
}


function tweetQuote() {
    const twitterUrl= `https://twitter.com/intent/tweet?text=${apiQuotes.quote} - ${"Taylor Swift - " + apiQuotes.song}`;
    window.open(twitterUrl, '_blank');

}


newQuoteBtn.addEventListener('click', getQuotes);
twitterBtn.addEventListener('click', tweetQuote);




getQuotes();