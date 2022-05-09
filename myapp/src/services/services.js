
const API_KEY = process.env.REACT_APP_API_KEY;

export const getBookList = async () => {
    const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=Gtdym4qr4grJV7x3aOBuAu0CcmchgkGj`);
    const result = await response.json();
    return await result.results; 
}

export const getReviews = async (title) => {
    const response = await fetch(`https://api.nytimes.com/svc/books/v3/reviews.json?api-key=Gtdym4qr4grJV7x3aOBuAu0CcmchgkGj&title=${title}`);
    return await response.json();
}

export const getBestSellerHistory = async () => {
    const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${API_KEY}`);
    return await response.json();
}