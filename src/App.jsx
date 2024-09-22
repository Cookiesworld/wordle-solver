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
      </header>
      <AppInsightsErrorBoundary
        onError={() => <h1>Something went wrong</h1>}
        appInsights={reactPlugin}
      >
        <WordsProvider>
          <Solver />
          <Words />
        </WordsProvider>
      </AppInsightsErrorBoundary>
    </div>
  );
};

export default App;
