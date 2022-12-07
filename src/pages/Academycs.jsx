import { Row, Card, Col, Container } from "solid-bootstrap";

function Academycs() {
  return (
    <Container style={{ "margin-top": "25px", "max-width": "700px"}}>
      <Row xs={1} md={1} class="g-4">
        <Col>
          <Card>
            <Card.Img
              class="formationCardImg"
              variant="top"
              src="https://raw.githubusercontent.com/DGEU-2022/alimanalc-jossolpue/9d3c46c4073a41e55ea714e35d45023134257e28/src/assets/logo_master.svg"
            />
            <Card.Body>
              <Card.Title>Master Universitario</Card.Title>
              <Card.Text>
                En Ingeniería Informática <hr /> Universidad de Sevilla <hr />{" "}
                2020 - *
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              class="formationCardImg"
              variant="top"
              src="https://raw.githubusercontent.com/DGEU-2022/alimanalc-jossolpue/d8799e58b06c35b0b6bc0c453725d8cc4cb89b68/src/assets/logo-ETSII-Color.svg"
            />
            <Card.Body>
              <Card.Title>Graduado Universitario</Card.Title>
              <Card.Text>
                En Ingeniería Informática - Ingeniería Software <hr />{" "}
                Universidad de Sevilla <hr /> 2015 - 2019
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col class="lastCard">
          <Card>
            <Card.Img
              class="formationCardImg"
              variant="top"
              src="https://raw.githubusercontent.com/DGEU-2022/alimanalc-jossolpue/8a5f10e26e0c1f36a600c8ffb9fd5ec98a3463ce/src/assets/logo_safa.svg"
            />
            <Card.Body>
              <Card.Title>Título de Bachiller</Card.Title>
              <Card.Text>
                En la modalidad de Ciencias y Tecnología <hr /> Sagrada Familia
                de Urgel, Sevilla <hr /> 2013 - 2015
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Academycs;
