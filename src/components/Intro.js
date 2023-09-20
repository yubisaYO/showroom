import { Col, Container, Row, Button } from "react-bootstrap";
const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-black d-flex justify-content-center align-item-center">
        <Row>
          <Col>
            <div className="title">LETS GO </div>
            <div className="title">
              THIS IS OUR SHOWROOM
            </div>
            <div className="IntroButton mt-4 d-flex justify-content-center">
              <Button variant="dark">Lihat Semua List</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
