import { Carousel, Image } from "solid-bootstrap";

import fondo1 from '../assets/fondo1.webp';
import fondo2 from '../assets/fondo2.webp';
import fondo3 from '../assets/fondo3.webp';

function CarrouselHome() {

    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <div
                    class="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                    style={{ height: "400px" }}
                >
                    <Image src={fondo1} fluid />
                </div>
                <Carousel.Caption>
                    <h2>Compañerismo</h2>
                    <p>
                        Este es uno de los principales pilares en los que me baso a la hora de trabajar, saber crear un buen ambiente mejora la productividad y la calidad del trabajo.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div
                    class="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                    style={{ height: "400px" }}
                >
                    <Image src={fondo2} fluid />
                </div>

                <Carousel.Caption>
                    <h2>Creatividad</h2>
                    <p>
                        Destaco por mis soluciones innovadoras así como de poder ofrecer un enfoque fresco y joven.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div
                    class="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                    style={{ height: "400px" }}
                >
                    <Image src={fondo3} fluid />
                </div>

                <Carousel.Caption>
                    <h2>Crecimiento continuo</h2>
                    <p>
                        Me encanta aprender tecnologias y metodologias nuevas, estoy abierta al cambio y eso hace que pueda dar opiniones fundamentadas en el conocimiento.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}


function Home() {
    return (
        <div>
            <CarrouselHome />
            <br></br>
            <br></br>
            <div class="container-home container">
                <center><h1>¿Que es lo que busco de una empresa?</h1></center>
                <br></br>
                <br></br>
                <p>En mi día a día me encuentro con una gran cantidad de empresas que me preguntan sobre que es lo que busco en una empresa por lo que esto sería una lista de imprescindibles que debe cumplir para poder plantearme la posibilidad de cambiar de trabajo, si estas leyendo esto y eres un trabajador de recursos humanos por favor verifica que se cumplen las condiciones antes de contactar conmigo, esto ahorrará a ambos mucho tiempo.</p>
                <div>
                    <ul>
                        <li>Teletrabajo</li>
                        <li>Horario flexible</li>
                        <li>Seguro médico</li>
                        <li>24 días de vacaciones</li>
                        <li>45K/año</li>
                        <li>45K/año</li>
                    </ul>
                </div>
                <br></br>
                <br></br>

            </div>

        </div>
    );
}

export default Home;