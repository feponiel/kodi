import { TrendingCard } from './TrendingCard'
import { StyledTrendingArticles } from './styles'

export function TrendingArticles() {
  const trendingTopics = [
    {
      id: 'blablaabla',
      redirectTo: 'https://youtube.com',
      title:
        'As dificuldades dos devs juniors no mercado atual de programação no Brasil',
      mainCategory: 'Python',
      image: {
        url: 'https://source.unsplash.com/random/600x600',
        alt: 'Texto qualquer',
      },
      rankPosition: 1,
    },

    {
      id: 'blablabdlaaaa',
      redirectTo: 'https://youtube.com',
      title:
        'As dificuldades dos devs juniors no mercado atual de programação no Brasil',
      mainCategory: 'Python',
      image: {
        url: 'https://source.unsplash.com/random/600x600',
        alt: 'Texto qualquer',
      },
      rankPosition: 2,
    },

    {
      id: 'blaaabasdlabla',
      redirectTo: 'https://youtube.com',
      title:
        'As dificuldades dos devs juniors no mercado atual de programação no Brasil',
      mainCategory: 'Python',
      image: {
        url: 'https://source.unsplash.com/random/600x600',
        alt: 'Texto qualquer',
      },
      rankPosition: 3,
    },
  ]

  return (
    <StyledTrendingArticles>
      {trendingTopics.map((trendingTopic) => {
        return (
          <TrendingCard
            redirectTo={trendingTopic.redirectTo}
            title={trendingTopic.title}
            mainCategory={trendingTopic.mainCategory}
            image={{
              url: trendingTopic.image.url,
              alt: trendingTopic.image.alt,
            }}
            key={trendingTopic.id}
            rankPosition={trendingTopic.rankPosition}
          />
        )
      })}
    </StyledTrendingArticles>
  )
}
