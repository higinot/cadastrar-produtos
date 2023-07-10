import { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Card, Button, Col, Badge } from "react-bootstrap";
import { MeuContexto } from "../MeuContexto";

const Produtos = () => {
  const { valorDoContexto } = useContext(MeuContexto);

  console.log(valorDoContexto);

  if (!valorDoContexto) {
    // Renderizar uma mensagem ou comportamento quando o valorDoContexto estiver vazio
    return <p>Nenhum produto encontrado.</p>;
  }

  return (
    <>
      <Container>
        <Row
          style={{
            alignItems: "true",
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
          <Link to="/produtos">
            <Button
              variant="secondary"
              style={{ padding: "10px", margin: "10px", width: "150px" }}
            >
              Ver produtos
            </Button>
          </Link>
        </Row>
        <Row style={{ height: "90vh" }}>
          {valorDoContexto ? (
            valorDoContexto.map((produto, index) => (
              <Col key={index}>
                <Card style={{ width: "25rem", marginTop: "100px" }}>
                  <img
                    id="imagemPreview"
                    src={produto.image}
                    alt="Pré-visualização da Imagem"
                  />
                  <Card.Body>
                    <Card.Title>{produto.nome}</Card.Title>
                    <Card.Text>{produto.descricao}</Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Badge bg="secondary">{produto.tags}</Badge>
                      <Badge bg="primary">
                        R$ {Number(produto.preco).toFixed(2)}
                      </Badge>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col>
              <p>Nenhum produto encontrado.</p>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Produtos;
