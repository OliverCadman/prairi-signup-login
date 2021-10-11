import "./App.css";
import SignUp from "./components/SignUp";
import Header from "./components/Header";
import { Container, Row, Col } from "react-bootstrap";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
  background: black;
  height: 100%;
  margin: 0;
  font-family: 'Rubik', sans-serif;
  color: #f2f2f2;
}
`;

function App() {
  return (
    <div className="form-container">
      <GlobalStyle />
      <Container>
        <Row className="justify-content-center">
          <Col className="col-6">
            <div className="header">
              <Header />
            </div>
            <SignUp />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
