import { styled } from '@/styles/stitches.config'

export const StyledHome = styled('div', {
  marginTop: '110px',

  '.home-container': {
    display: 'grid',
    alignItems: 'flex-start',
    gridTemplateColumns: '1fr 29%',
    gridTemplateRows: 'auto 1fr',
    gridTemplateAreas: `'trending mainsidebar' 'feed mainsidebar'`,
    gap: '$4',

    'a:nth-of-type(1)': {
      gridArea: 'top1',
    },

    'a:nth-of-type(2)': {
      gridArea: 'top2',
    },

    'a:nth-of-type(3)': {
      gridArea: 'top3',
    },
  },
})

export const TrendingTopics = styled('section', {
  gridArea: 'trending',
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  gridTemplateAreas: `'top1 top2' 'top1 top3'`,
  gap: '$4',

  a: {
    background: '$gray300',
  },
})

export const Feed = styled('section', {
  gridArea: 'feed',
  background: '$gray300',
})
