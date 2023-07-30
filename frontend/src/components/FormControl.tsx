import Button from "react-bootstrap/Button";
import { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import MeuContexto from "../MeuContexto";

type FormProps = {
  submitFunction: (
    nome: string,
    descricao: string,
    preco: string,
    image: File | null,
    tags: string
  ) => void;
  submitPreview: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

type FormValues = {
  nome: string;
  descricao: string;
  preco: string;
  image: File | null;
  tags: string;
};

function FormControl({ submitFunction, submitPreview }: FormProps) {  
  const [validated, setValidated] = useState(false);
  

  //Esse state esta controlando o FormControl
  const [formData, setFormData] = useState<FormValues>({
    nome: "Nome do Produto",
    descricao: "Descrição do produto",
    preco: "0,00",
    image: null,
    tags: "Tags do produto",
  });


  const { setValorDoContexto } = useContext(MeuContexto); // Defina o tipo correto aqui

  // Essa função vai atualizar o contexto global
  const atualizarValor = (novoProduto: FormValues) => {
    setValorDoContexto((produtosAntigos: FormValues[]) => [
      ...produtosAntigos,
      novoProduto,
    ]);
  };

  // Essa função valida o formulario
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    const form = event.currentTarget;
    console.log(form.checkValidity());
    const { nome, descricao, preco, image, tags } = formData;
    if (form.checkValidity() === false) {
      // Essa função atualiza o estado via props.
      submitFunction(nome, descricao, preco, image, tags);
      event.preventDefault();
      event.stopPropagation();
    } else {
      atualizarValor(formData);
    }
    event.preventDefault();
    setValidated(true);
  };

  // Essa função manipula os inputs dentro do formulado para preencher no formData
  const handleInputChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {

      setFormData((prevData) => ({
        ...prevData,
        image: file, // Atualizar com o arquivo selecionado
      }));
      submitPreview(event);
    }
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      style={{
        marginTop: "100px",
      }}
    >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>
          Nome <span style={{ color: "red", margin: "1px" }}>*</span>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Digite o nome do produto"
          name="nome"
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>
          Descrição <span style={{ color: "red", margin: "1px" }}>*</span>
        </Form.Label>
        <Form.Control
          name="descricao"
          placeholder="Digite a descrição do produto"
          as="textarea"
          rows={3}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>
          Preço <span style={{ color: "red", margin: "1px" }}>*</span>
        </Form.Label>
        <Form.Control
          required
          type="number"
          name="preco"
          placeholder="Digite um preço"
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Image</Form.Label>
        <Form.Control
          required
          name="image"
          type="file"
          placeholder="name@example.com"
          onChange={handleImageChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Tags</Form.Label>
        <Form.Control
          required
          type="text"
          name="tags"
          placeholder="Digite as Tags para o produto"
          onChange={handleInputChange}
        />
      </Form.Group>

      <Button type="submit">Salvar</Button>
    </Form>
  );
}

export default FormControl;
