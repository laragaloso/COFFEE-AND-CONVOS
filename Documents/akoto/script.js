document.addEventListener("DOMContentLoaded", function () {
    // 20 Motivational quotes
    const quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
        "Believe you can and you're halfway there. -Theodore Roosevelt",
        "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
        "It always seems impossible until it's done. - Nelson Mandela",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
        "Strive not to be a success, but rather to be of value. - Albert Einstein",
        "Your attitude, not your aptitude, will determine your altitude. - Zig Ziglar",
        "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
        "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
        "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
        "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
        "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
        "Success is stumbling from failure to failure with no loss of enthusiasm. - Winston Churchill",
        "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
        "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
        "The best way to predict the future is to create it. - Peter Drucker"
    ];

    const quoteContainer = document.getElementById("quote-container");

    // Display quotes in the about section
    quotes.forEach((quote, index) => {
        const quoteCard = document.createElement("div");
        quoteCard.classList.add("quote");
        quoteCard.textContent = quote;
        quoteContainer.appendChild(quoteCard);
    });
});
