import { Container, Row, Col, Image } from "solid-bootstrap";

function WhyMe() {
  return (
    <Container style={{ "max-width": "60%" }}>
      <br></br>
      <br></br>
      <Row>
        <h2>Me defino una persona abierta a nuevos proyectos que siempre consigue dar lo mejor de sí misma</h2>
        <p>Trabajadora con experiencia en distintas tecnologías. Destaco por mi carácter positivo con el que siempre afronto los retos y con el que genero un buen ambiente de trabajo. Me gusta aprender nuevas tecnologías y siempre aportar mi granito de arena.</p>
        <br></br>
        <br></br>
        <h3>Gran facilidad de aprendizaje</h3>
        <p>Mi gran facilidad de aprendizaje me ha ayudado a poder superar una gran cantidad de barreras, gracias a esa facilidad puedo decir que tengo altos conocimientos en Java, Angular2, Spring, Hibernate, AWS, Docker, Jenkins... Además de tener grandes capacidades tecnológicas, también tengo habilidades gestionando y analizando requisitos, obteniendo una gran satisfacción de los clientes.</p>
        <br></br>
        <br></br>
        <h3>Buen ambiente de trabajo</h3>
        <p>Soy una persona que le gusta crear un buen ambiente de trabajo, esto ayuda a que los equipos sean más eficientes, ya que hace que como equipo nos respaldemos los unos en los otros, consiguiendo también una gran capacidad de colaboración.</p>
        <br></br>
        <br></br>
        <h3>Autosuficiente</h3>
        <p>Me gusta ser una persona proactiva, intento siempre gestionar mi tiempo y mis tareas con eficiencia, siempre manteniendo una buena coordinación con mis compañeros de equipo.</p>  
        <Image style={{ "max-height": "750px", "margin-top": "25px" }}
          src="https://raw.githubusercontent.com/DGEU-2022/alimanalc-jossolpue/269bb2c258bd3277e208dc2cf64f9f594960b437/src/assets/MyAddedValue.svg"
          rounded
        />
      </Row>
    </Container>
  );
}

export default WhyMe;
