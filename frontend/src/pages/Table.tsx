import { Container, Row, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Notas from "../mocks/Surfistas";

function TableReport() {

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
              {Notas.map(({ surfista, notas }) => (
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
