import { Container, Row, Col, Image } from "solid-bootstrap";

function WhyMe() {
  return (
    <Container>
      <Row>
        <Image style={{ "max-height": "800px", "margin-top": "25px" }}
          src="https://raw.githubusercontent.com/DGEU-2022/alimanalc-jossolpue/269bb2c258bd3277e208dc2cf64f9f594960b437/src/assets/MyAddedValue.svg"
          rounded
        />
      </Row>
    </Container>
  );
}

export default WhyMe;
