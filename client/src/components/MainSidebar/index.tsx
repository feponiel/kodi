import { BlogAuthors } from './BlogAuthors'
import { BlogCategories } from './BlogCategories'
import { NewsLetterForm } from './NewsLetterForm'
import { OtherTrendingArticles } from './OtherTrendingArticles'
import { RecommendedArticles } from './RecommendedArticles'
import { SponsorSlider } from './SponsorSlider'
import { AdContainer, StyledMainSidebar } from './styles'

export function MainSidebar() {
  return (
    <StyledMainSidebar>
      <SponsorSlider />
      <RecommendedArticles />
      <AdContainer>
        <div>this is supposed to be an ad</div>
      </AdContainer>
      <OtherTrendingArticles />
      <BlogCategories />
      <AdContainer>
        <div>this is supposed to be an ad</div>
      </AdContainer>
      <BlogAuthors />
      <AdContainer>
        <div>this is supposed to be an ad</div>
      </AdContainer>
      <NewsLetterForm />
    </StyledMainSidebar>
  )
}
