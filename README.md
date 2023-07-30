# Cadastrar Produtos

Este é um projeto de exemplo para um aplicativo web de cadastro de produtos. O projeto foi desenvolvido utilizando [React](https://reactjs.org/) como biblioteca de front-end e [React Bootstrap](https://react-bootstrap.github.io/) para estilização. O aplicativo possui duas páginas: "Cadastrar" e "Produtos". A página "Cadastrar" permite adicionar produtos com informações como nome, descrição, preço, imagem e tags. A página "Produtos" exibe uma lista dos produtos cadastrados com suas informações e uma pré-visualização da imagem.

| ![image](https://github.com/higinot/cadastrar-produtos/assets/94652743/bcf6b04b-f128-43dc-b2e2-92c00d1fedf5) |
|:--:|
| **Tela de Cadastrar** |

## Dockerização

Este projeto também está dockerizado para facilitar o processo de desenvolvimento e implantação. O Docker oferece uma forma padronizada de empacotar o aplicativo com todas as suas dependências, garantindo que ele funcione de maneira consistente em qualquer ambiente.

## Como executar o projeto localmente

Para executar o projeto localmente, você precisará ter o Docker instalado na sua máquina. Siga os passos abaixo:

1. Clone este repositório para o seu computador:

```bash
git clone https://github.com/higinot/cadastrar-produtos
```

2. Navegue até o diretório do projeto:

```bash
cd cadastrar-produtos
```

3. Construa a imagem do Docker:

```bash
docker-compose --file 'docker-compose.yml' --project-name 'cadastrar-produtos' up --build
```

4. Execute o contêiner Docker:

```bash
docker run -p 3000:3000 nome-do-projeto
```

5. Abra o navegador e acesse o aplicativo em [http://172.19.0.2:5173/cadastrar](http://172.19.0.2:5173/cadastrar).

## Contribuindo

Se você quiser contribuir com o projeto, sinta-se à vontade para abrir um Pull Request. Será um prazer receber suas contribuições!
