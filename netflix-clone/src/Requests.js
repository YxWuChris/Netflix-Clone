const API_KEY = "dac2b2114f164155dc474374869396a9";

const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOrginals:`/discover/tv?api_key=${API_KEY}&with_network2=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10479`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;