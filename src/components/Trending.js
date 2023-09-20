import { Card, Container, Row, Col, Image } from "react-bootstrap";
import mobil1 from "../Assets/trending/mobil-1.jpg";
import mobil2 from "../Assets/trending/mobil-2.jpg";
import mobil3 from "../Assets/trending/mobil-3.jpg";
import mobil4 from "../Assets/trending/mobil-4.jpg";
import mobil5 from "../Assets/trending/mobil-5.jpg";
import mobil6 from "../Assets/trending/mobil-6.jpg";

const Trending = () => {
  return (
    <Container>
      <br/>
      <br/>
      <h1 className="text-white text-center" id="trending">TRENDING CAR</h1>
      <Row>
        <Col className="movieWrapper" md={4}>
          <Col className="movieImage">
            <Card className="bg-dark text-white movieImage">
              <Image src={mobil1} className="images" />
              <div className="bg-dark p-3">
                <Card.Title className="text-center">Card title</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
        </Col>
        <Col className="movieWrapper" md={4}>
          <Col className="movieImage">
            <Card className="bg-dark text-white movieImage">
              <Image src={mobil2} className="images" />
              <div className="bg-dark p-3">
                <Card.Title className="text-center">Card title</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
        </Col>
        <Col className="movieWrapper" md={4}>
          <Col className="movieImage">
            <Card className="bg-dark text-white movieImage">
              <Image src={mobil3} className="images" />
              <div className="bg-dark p-3">
                <Card.Title className="text-center">Card title</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
        </Col>
        <Col className="movieWrapper" md={4}>
          <Col className="movieImage">
            <Card className="bg-dark text-white movieImage">
              <Image src={mobil4} className="images" />
              <div className="bg-dark p-3">
                <Card.Title className="text-center">Card title</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
        </Col>
        <Col className="movieWrapper" md={4}>
          <Col className="movieImage">
            <Card className="bg-dark text-white movieImage">
              <Image src={mobil5} className="images" />
              <div className="bg-dark p-3">
                <Card.Title className="text-center">Card title</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
        </Col>
        <Col className="movieWrapper" md={4}>
          <Col className="movieImage">
            <Card className="bg-dark text-white movieImage">
              <Image src={mobil6} className="images" />
              <div className="bg-dark p-3">
                <Card.Title className="text-center">Card title</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Trending;
