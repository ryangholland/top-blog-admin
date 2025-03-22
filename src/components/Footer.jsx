import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3">
      <Container fluid>
        <Row className="justify-content-center">
          <Col className="text-center">
            <p className="my-2 mb-1 d-flex gap-2 justify-content-center">
              &copy; {new Date().getFullYear()} <strong>Ryan Holland</strong>

              <a
                href="https://github.com/ryangholland"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white d-inline-flex align-items-center ml-3"
              >
                <img
                  src="/images/github.png"
                  alt="GitHub Cat Logo"
                  width="20"
                  height="20"
                  className="mr-2"
                />
                
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
