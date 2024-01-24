import { Header } from '@/components/Header'
import { Feed, StyledHome, TrendingTopics } from './styles'
import { Container } from '@/styles/global'
import { MainSidebar } from '@/components/MainSidebar'
import { TrendingCard } from '@/components/TrendingCard'

// FAZER REQUISIÇÃO PRA UM BANCO FAKE QUE PUXA AS 3 POSTAGENS MAIS CURTIDAS

export default function Home() {
  return (
    <>
      <Header />

      <StyledHome>
        <Container className="home-container">
          <TrendingTopics>
            <TrendingCard
              goTo="https://youtube.com"
              size="md"
              title="As dificuldades dos devs juniors no mercado atual de programação no Brasil"
              image={{
                url: 'https://source.unsplash.com/random/450x450',
                alt: 'Texto qualquer',
              }}
            />

            <TrendingCard
              goTo="https://youtube.com"
              size="sm"
              title="As dificuldades dos devs juniors no mercado atual de programação no Brasil"
              image={{
                url: 'https://source.unsplash.com/random/500x500',
                alt: 'Texto qualquer',
              }}
            />

            <TrendingCard
              goTo="https://youtube.com"
              size="sm"
              title="As dificuldades dos devs juniors no mercado atual de programação no Brasil"
              image={{
                url: 'https://source.unsplash.com/random/480x480',
                alt: 'Texto qualquer',
              }}
            />
          </TrendingTopics>
          <Feed>Feed</Feed>
          <MainSidebar />
        </Container>
      </StyledHome>
    </>
  )
}
