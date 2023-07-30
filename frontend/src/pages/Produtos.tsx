import { Link } from "react-router-dom";
import { useContext } from "react";
import { Container, Row, Card, Button, Col, Badge } from "react-bootstrap";
import MeuContexto from "../MeuContexto";

const Produtos = () => {
  const { valorDoContexto } = useContext(MeuContexto);

  if (!Array.isArray(valorDoContexto) || valorDoContexto.length === 0) {
    // Renderizar uma mensagem ou comportamento quando o valorDoContexto não é um array ou está vazio
    return <p>Nenhum produto encontrado.</p>;
  }

  return (
    <>
      <Container>
        <Row
          style={{
            alignItems: "center", // Corrigir a propriedade alignItems
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
          {valorDoContexto.map((produto, index) => (
            <Col key={index}>
              <Card style={{ width: "25rem", marginTop: "100px" }}>
                {produto.image && (
                  <img
                    className="imagemPreview"
                    src={produto.image}
                    alt="Pré-visualização da Imagem"
                  />
                )}
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
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(Number(produto.preco))}
                    </Badge>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Produtos;
