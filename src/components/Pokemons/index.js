import Paginate from "../Paginate"
import * as S from './styles'

const Pokemons = (props) => {
  const { pokemons, page, handleNextPage, handlePrevPage } = props
  return (
    <S.Wrapper>
      <S.Ul>
        {pokemons.map(
          (pokemon, index) => <S.Li key={index}>{pokemon.name}</S.Li>
        )}
      </S.Ul>
      <Paginate
        page={page}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </S.Wrapper>
  )
}

export default Pokemons