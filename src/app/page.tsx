'use client'

import { TrendingArticles } from '@/components/TrendingArticles'
import { HomeContainer, StyledHome } from './styles'
import { Feed } from '@/components/Feed'
import { MainSidebar } from '@/components/MainSidebar'

export default function Home() {
  return (
    <HomeContainer>
      <StyledHome>
        <TrendingArticles />
        <Feed />
        <MainSidebar />
      </StyledHome>
    </HomeContainer>
  )
}
