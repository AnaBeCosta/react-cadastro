import Menu from './components/Layout/Menu'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Produtos from "./components/Pages/Produto/ProdutosList"
import Pessoas from "./components/Pages/Pessoa/PessoaList"
import Vendas from "./components/Pages/Venda/VendasList"
import CadastroProduto from './components/Pages/Produto/CadastrarProduto';
import CadastroPessoa from './components/Pages/Pessoa/CadastrarPessoa';
import CadastroVenda from './components/Pages/Venda/CadastrarVenda';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Container class="container-md">
        <Menu/>
        <Routes>
          <Route path ="/" element={<Produtos />}> </Route>
          <Route path='/pessoas' element={<Pessoas />}> </Route>
          <Route path='/vendas' element={<Vendas />}> </Route>
          <Route path='/cadastrarProduto' element={<CadastroProduto />}> </Route>
          <Route path='/cadastrarPessoa' element={<CadastroPessoa />}></Route>
          <Route path='/cadastrarVenda' element={<CadastroVenda />}></Route>
        </Routes>
        </Container>
    </Router>
  );
}

export default App;
