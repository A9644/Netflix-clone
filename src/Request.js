const APIKEY = "1e350ffdb26753270237d261289fe766";
const request = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_generes=28`,
    fetchComedyMovies:  `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_generes=99`,
    

   
    
     
}
export default request;