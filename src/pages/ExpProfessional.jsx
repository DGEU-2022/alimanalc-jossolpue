import { Accordion } from "solid-bootstrap";

function AccordionHome() {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Plexus tech - Back-End Developer / 0CTUBRE DEL 2022 - ACTUALIDAD</Accordion.Header>
                <Accordion.Body>
                    <h5>Aplicación para la gestión de reservas de vuelos de una aerolina española</h5>
                    <p><strong>Stack tecnológico:</strong> AngularJS, Java 7, Jenkins, Kibana, SoapUI, Git, Jira.</p>
                    <p><strong>Trabajo realizado:</strong> Evolutivos, toma de requisitos y análisis junto con mis compañeros mediante metodología Scrum.</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>EUIGS - Full-Stack Developer / JUNIO DEL 2021 - 0CTUBRE DEL 2022</Accordion.Header>
                <Accordion.Body>
                    <h5>Aplicación para aseguradora de coches francesa</h5>
                    <p><strong>Stack tecnológico:</strong> AngularJS, Java 7, Jenkins, AWS, Selenium, Guidewire, Git, Jira.</p>
                    <p><strong>Trabajo realizado:</strong> Evolutivos, toma de requisitos y análisis junto con mis compañeros mediante metodología Scrum.</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Babel Sistemas Información - Full-Stack Developer / NOVIEMBRE DEL 2019 - JUNIO DEL 2021</Accordion.Header>
                <Accordion.Body>
                    <h5>Aplicación para la gestión de incidencias en transformadores eléctricos</h5>
                    <p><strong>Stack tecnológico:</strong> Angular 9, Angular Material, Java 8, Spring Boot, Hibernate, Maven, MySQL, Git, Docker.</p>
                    <p><strong>Trabajo realizado:</strong> Creación desde cero de la parte back-end, front-end y modelo de la base de datos, así como, análisis y toma de requisitos durante parte del proyecto.</p>
                    <h5>Aplicación para gestión de redes</h5>
                    <p><strong>Stack tecnológico:</strong> Angular 8, Bootstrap, Java 8, Spring Boot, Hibernate, Maven, MySQL, Git, Docker.</p>
                    <p><strong>Trabajo realizado:</strong> Creación desde cero de la parte back-end, front-end y modelo de la base de datos, así como, análisis y toma de requisitos junto con el Jefe de Proyecto.</p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

function ExpProfessional() {
    return (
        <div class="container-home container">
            <br></br>
            <br></br>
            <AccordionHome />
        </div>
    )
}

export default ExpProfessional;