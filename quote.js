const quoteArr = [
    {
        Text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        Text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        Text: "Do something today that your future self will thank you for.",
        author: "Divvy"
    },
    {
        Text: "Your time is limited, so don’t waste it living someone else’s life.",
        author: "Steve Jobs"
    },
    {
        Text: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        Text: "Hardships often prepare ordinary people for an extraordinary destiny.",
        author: "C.S. Lewis"
    },
    {
        Text: "Don’t watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        Text: "Great things never came from comfort zones.",
        author: "Unknown"
    },
    {
        Text: "Push yourself, because no one else is going to do it for you.",
        author: "Unknown"
    }
];


const backgrounds = [
    "linear-gradient(to right, #667eea, #764ba2)",
    "linear-gradient(to right, #ff9966, #ff5e62)",
    "linear-gradient(to right, #00c6ff, #0072ff)",
    "linear-gradient(to right, #43cea2, #185a9d)",
    "linear-gradient(to right, #f7971e, #ffd200)",
    "linear-gradient(to right, #e96443, #904e95)"
];


const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote");

newQuoteBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quoteArr.length);
    const quote = quoteArr[randomIndex];
    quoteText.textContent = `"${quote.Text}"`;
    quoteAuthor.textContent = `- ${quote.author}`;

    const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    document.body.style.background = randomBg;
});
