import { createSignal } from "solid-js";
import { Form, Button, Container, Row } from "solid-bootstrap";

const emptyContactForm = { from: "", subject: "", body: "" };
const [getContactForm, setContactForm] = createSignal(emptyContactForm);
const emailAlicia = "amanzanoalcaide@gmail.com"
const [getEmail, setEmail] = createSignal(emailAlicia);

function ContactMe() {
  return (
    <Container style={{ "max-width": "40%", "margin-top": "15px" }}>
      <Form>
        <Form.Group class="mb-3" controlId="formBasicEmail">
        <Form.Control
            type="text"
            placeholder="Asunto del contacto"
            value={getEmail()}
            id="emailAlicia"
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />
          <Form.Label>Tu Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Introducte tu email"
            value={getContactForm().from}
            onChange={(e) => {
              setContactForm({
                ...getContactForm(),
                from: e.currentTarget.value,
              });
            }}
          />
          <Form.Text class="text-muted">
            No compartiremos tu correo con nadie.
          </Form.Text>
        </Form.Group>

        <Form.Group class="mb-3" controlId="formBasicSubject">
          <Form.Label>Motivo del contacto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Asunto del contacto"
            value={getContactForm().subject}
            onChange={(e) => {
              setContactForm({
                ...getContactForm(),
                subject: e.currentTarget.value,
              });
            }}
          />
        </Form.Group>

        <Form.Group class="mb-3" controlId="formBasicMesage">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Cuerpo del mensaje"
            value={getContactForm().body}
            onChange={(e) => {
              setContactForm({
                ...getContactForm(),
                body: e.currentTarget.value,
              });
            }}
          />
        </Form.Group>

        <Row>
          <div class="col-md-12" style={{ "text-align": "right"}}>
            
            <a
              href={`mailto:${getEmail()}?cc=${
                getContactForm().from
              }&subject=${getContactForm().subject}&body=${
                getContactForm().body
              }`}
              target="_blank"
              type="submit"
              class="btn btn-primary"
            >
              Enviar
            </a>
          </div>
        </Row>
      </Form>
    </Container>
  );
}

export default ContactMe;
