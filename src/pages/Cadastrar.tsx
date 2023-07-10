import { useState } from "react";
import { Container, Row, Card, Button, Col, Badge } from "react-bootstrap";
import FormControl from "../components/FormControl";
import { Link } from "react-router-dom";

function Cadastrar() {
  const imagem = new Image();
  imagem.src = "/Screenshot_1.png.";
  const [form, setForm] = useState({
    nome: "Nome do Produto",
    descricao: "Descrição do produto",
    preco: "0,00",
    image: imagem,
    tags: "Tags do produto",
  });

  function updateForm(
    nome: string,
    descricao: string,
    preco: string,
    image: string,
    tags: string
  ) {
    const newProduct = {
      nome: nome,
      descricao: descricao,
      preco: preco,
      image: image,
      tags: tags,
    };

    setForm(newProduct);
  }

  function previewImagem(event: any) {
    const input = event.target;
    const file = input.files[0];

    setForm((prevData) => ({
      ...prevData,
      [event.target.name]: input,
    }));

    console.log(form);

    const reader = new FileReader();
    reader.onload = function (e) {
      const imagemPreview = document.getElementById("imagemPreview");
      imagemPreview.style.width = "398px";
      imagemPreview.style.height = "405px";
      imagemPreview.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  return (
    <>
      <Container style={{}}>
        <Row
          style={{
            alignItems: "",
            display: "flex",
            justifyContent: "center",
            height: "10vh",
          }}
          xs={4}
        >
          <Link to="/cadastrar">
            <Button
              variant="primary"
              style={{ padding: "10px", margin: "10px", width: "150px" }}
            >
              Cadastrar
            </Button>
          </Link>
          <Link to={{ pathname: "/produtos" }}>
            <Button
              variant="secondary"
              style={{ padding: "10px", margin: "10px", width: "150px" }}
            >
              Ver produtos
            </Button>
          </Link>
        </Row>
        <Row style={{ height: "90vh" }}>
          <Col>
            <FormControl
              submitFunction={updateForm}
              submitPreview={previewImagem}
            ></FormControl>
          </Col>
          <Col>
            <Card style={{ width: "25rem", marginTop: "100px" }}>
              <img
                id="imagemPreview"
                src="public\Screenshot_1.png"
                alt="Pré-visualização da Imagem"
              />
              <Card.Body>
                <Card.Title>{form.nome}</Card.Title>
                <Card.Text>{form.descricao}</Card.Text>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Badge bg="secondary">{form.tags}</Badge>
                  <Badge bg="primary">R$ {Number(form.preco).toFixed(2)}</Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cadastrar;
