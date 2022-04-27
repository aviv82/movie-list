import "./App.css";
import { useState } from "react";
import { Data } from "./Data";
import { Title } from "./components/title/Title";
import { Header } from "./components/header/Header";

function App() {
  const [newData, setNewData] = useState({ Data });

  return (
    <div className="App">
      <Header clickHandle={setNewData} />
      <Title details={newData} />
    </div>
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
