import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Pokemons from './components/Pokemons';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header>Pokemons</Header>
      <Pokemons />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
