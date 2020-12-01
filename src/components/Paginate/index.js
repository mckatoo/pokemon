import * as S from './style.js'

const Paginate = (props) => {
  const { page, handleNextPage, handlePrevPage } = props
  return (
  <S.Ul>
    <S.Li>
      <S.Button onClick={() => handlePrevPage()}>«</S.Button>
      <S.Pages>{page.current} / {page.total} pages</S.Pages>
      <S.Button onClick={() =>  handleNextPage()}>»</S.Button>
    </S.Li>
  </S.Ul>
)}

export default Paginate