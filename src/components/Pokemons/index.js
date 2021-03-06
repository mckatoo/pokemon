import Axios from "axios";
import { useEffect, useState } from "react";
import Paginate from "../Paginate"
import * as S from './styles'

const Pokemons = (props) => {

  const pageLimit = 10;
  const [totalPages, setTotalPages] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState(null);
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${pageLimit}`);
  useEffect(() => {
    async function fetchPokemons() {
      const { data } = await Axios.get(url)
      setPokemons(data.results)
      !!totalPages != null && setTotalPages(Math.ceil(data.count / pageLimit))
      !!previous != null && setPrevious(data.previous)
      !!next != null && setNext(data.next)
    }
    fetchPokemons()
  }, [url]);

  function handlePrevPage() {
    if (page > 1) {
      setUrl(previous)
      setPage(page - 1)
    }
  }

  function handleNextPage() {
    if (page < totalPages) {
      setUrl(next)
      setPage(page + 1)
    }
  }

  return (
    <S.Wrapper>
      <S.Ul>
        {pokemons.map(
          (pokemon, index) => <S.Li key={index}>{pokemon.name}</S.Li>
        )}
      </S.Ul>
      <Paginate
        page={{current: page, total: totalPages}}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </S.Wrapper>
  )
}

export default Pokemons