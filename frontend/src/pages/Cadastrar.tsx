import { useState } from "react";
import { Container, Row, Card, Button, Col, Badge } from "react-bootstrap";
import FormControl from "../components/FormControl";
import { Link } from "react-router-dom";

type FormValues = {
  nome: string;
  descricao: string;
  preco: string;
  image: File | null;
  tags: string;
};

function Cadastrar() {
  const [form, setForm] = useState<FormValues>({
    nome: "Nome do Produto",
    descricao: "Descrição do produto",
    preco: "0,00",
    image: null, // Alterar para "File | null" em vez de "Image"
    tags: "Tags do produto",
  });

  function updateForm(
    nome: string,
    descricao: string,
    preco: string,
    image: File | null,
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
  function previewImagem(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (file) {
      setForm((prevData) => ({
        ...prevData,
        image: file, // Atualizar com o arquivo selecionado
      }));

      const reader = new FileReader();
      reader.onload = function (e) {
        const imagemPreview = document.getElementById("imagemPreview") as HTMLImageElement;
        if (imagemPreview) {
          imagemPreview.style.width = "398px";
          imagemPreview.style.height = "405px";
          imagemPreview.src = e.target?.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
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
                src={form.image ? URL.createObjectURL(form.image) : "Screenshot_1.png"}
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
