import { ListSection } from '../ListSection'
import { BlogCategory } from './BlogCategory'

export function BlogCategories() {
  return (
    <ListSection
      type="ul"
      alignment="row"
      isScrollable
      maxListHeight={220}
      title="Categorias de artigos"
    >
      <BlogCategory name="HTML" selected />
      <BlogCategory name="CSS" />
      <BlogCategory name="JavaScript" />
    </ListSection>
  )
}
