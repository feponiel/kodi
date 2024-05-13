import { styled } from 'styled-components'

export const StyledTrendingArticles = styled.div`
  grid-area: trending;
  display: grid;
  grid-template-columns: 65.92489568845619% 1fr 31.84979137691238%;
  grid-template-rows: 1fr 3.375527426160338% 1fr;
  grid-template-areas: 'top-1 . top-2' 'top-1 . .' 'top-1 . top-3';

  .top-1 {
    grid-area: top-1;
  }
  .top-2 {
    grid-area: top-2;
  }
  .top-3 {
    grid-area: top-3;
  }
`
