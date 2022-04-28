import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Data, MovieDetails } from "./Data";
import { Title } from "./components/title/Title";
import { Header } from "./components/header/Header";
import { RenderDetails } from "./components/detail-page/RenderDetails";

function App() {
  const [newData, setNewData] = useState({ Data });
  const [movieData, newMovieData] = useState({ MovieDetails });
  return (
    <Router>
      <div className="App">
        <Header clickHandle={setNewData} />
        <Routes>
          <Route
            path="/"
            element={<Title details={newData} linkHandle={newMovieData} />}
          />
          <Route path="/details" element={<RenderDetails info={movieData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

/*
return (
    <Router>
      <div className="App">
        <Logo
          handleHome={() => {
            setMovieData(data);
            Object.keys(movieDetail).forEach((key) => delete movieDetail[key]);
            console.log("movieDetail:",movieDetail);
          }}
        />
        <SearchBox
          movieName={movieName}
          handleChange={(e) => setMovieName(e.target.value)}
          handleSearch={() => setMovieData(filteredData)}
        />
        <Routes>
          <Route path="/" element={<Cards data={movieData} />} />
          <Route
            exact
            path="/details"
            element={<MovieDetails movie={movieDetail} />}
          />
        </Routes>
      </div>
    </Router>
  );
}
*/
