import { useState } from "react";
import { Container, Row, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Notas from "../mocks/Surfistas";

function TableReport() {
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

  const quantidadeMaximaNotas = Notas.reduce(
    (max, { notas }) => Math.max(max, notas.length),
    0
  );
  const cabeçalho = Array.from(
    { length: quantidadeMaximaNotas },
    (_, index) => `W${index + 1}`
  );

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
          <Table responsive>
            <thead>
              <tr>
                <th>Surfistas</th>
                {cabeçalho.map((item) => (
                  <th key={item}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Notas.map(({ surfista, id, notas }) => (
                <tr>
                  <td>{surfista}</td>
                  {notas.map((nota) => (
                    <td>{nota}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
}

export default TableReport;
