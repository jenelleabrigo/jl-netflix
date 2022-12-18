import React from "react";
import requests from "./requests";
import Hero from "./Hero";
import Row from "./Row";

function Home() {
  return (
    <>
      <Hero></Hero>
      <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} isLargeRow></Row>
      <Row title="Trending Now" fetchURL={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchURL={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchURL={requests.fetchDocumantaries}></Row>
    </>
  );
}

export default Home;
