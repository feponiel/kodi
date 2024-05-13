import { StyledBlogCategory } from './styles'

interface BlogCategoryProps {
  name: string
  selected?: boolean
}

export function BlogCategory({ name, selected = false }: BlogCategoryProps) {
  return (
    <StyledBlogCategory $isSelected={selected}>
      {/*
      Quando clicar no botão abaixo, será executada a função
      passada via propriedade pra esse componente, que filtra
      o blog. Ex: onClick={() => handleFilterBlog('python')}
      */}
      <button>{name}</button>
    </StyledBlogCategory>
  )
}
