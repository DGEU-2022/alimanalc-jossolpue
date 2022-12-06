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
                    <h2>First slide label</h2>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
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
                    <h2>Second slide label</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                    <h2>Third slide label</h2>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }


function Home() {
    return  (
        <div>
           <CarrouselHome/>
           <center><h1>¿Que es lo que busco de una empresa?</h1></center>
        </div>
    );
}

export default Home;