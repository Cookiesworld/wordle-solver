import "./App.css";
import Solver from "./solver";
import { reactPlugin } from "./appInsights";
import { AppInsightsErrorBoundary } from "@microsoft/applicationinsights-react-js";
import { WordsProvider } from "./context/wordsContext";
import Words from "./words";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Wordl Helper</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://blog.cookiesworld.co.uk/">
              Cookiesworld
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <header className="App-header">
        <h1>Wordle Helper</h1>
        <p
          style={{
            maxWidth: "420px",
            margin: "0.5rem auto 0",
            fontSize: "1rem",
            color: "#444",
          }}
        >
          This tool helps you solve{" "}
          <a
            href="https://www.nytimes.com/games/wordle/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wordle
          </a>{" "}
          puzzles by filtering possible words based on your clues. Enter your
          known and excluded letters to get suggestions!
        </p>
      </header>
      <main className="main-content">
        <AppInsightsErrorBoundary
          onError={() => <h1>Something went wrong</h1>}
          appInsights={reactPlugin}
        >
          <WordsProvider>
            <Solver />
            <Words />
          </WordsProvider>
        </AppInsightsErrorBoundary>
      </main>
      <footer className="App-footer">
        <p>
          Made with ❤️ by{" "}
          <a
            href="https://blog.cookiesworld.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cookiesworld
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
