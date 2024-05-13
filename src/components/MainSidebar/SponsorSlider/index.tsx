import { useState } from 'react'
import Link from 'next/link'
import { ProgressBar, StyledSponsorSlider } from './styles'
import Swiper from 'swiper'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'
import { Swiper as Slider, SwiperSlide as SliderSlide } from 'swiper/react'

interface CollaboratorSliderContent {
  url: string
  alt: string
  size: {
    width: number
    height: number
  }
  redirectTo: string
}

export function SponsorSlider() {
  const [progress, setProgress] = useState(0)
  const slideShowTimeInMs = 10000

  const apiResponseSimulation: CollaboratorSliderContent[] = [
    {
      url: 'https://source.unsplash.com/random/460x460',
      alt: '',
      size: {
        width: 500,
        height: 500,
      },
      redirectTo: 'https://youtube.com',
    },
    {
      url: 'https://source.unsplash.com/random/400x400',
      alt: '',
      size: {
        width: 500,
        height: 500,
      },
      redirectTo: '',
    },
    {
      url: 'https://source.unsplash.com/random/420x420',
      alt: '',
      size: {
        width: 500,
        height: 500,
      },
      redirectTo: '',
    },
  ]

  const partnersCarouselContentList = apiResponseSimulation.sort()

  function handleProgressBar(_: Swiper, timeLeft: number) {
    const timeLeftToNextSlideInMs = Math.ceil(timeLeft)
    const currentProgressBarFill = slideShowTimeInMs - timeLeftToNextSlideInMs

    setProgress(currentProgressBarFill)
  }

  return (
    <StyledSponsorSlider>
      <Slider
        modules={[Autoplay]}
        slidesPerView={1}
        loop
        onAutoplayTimeLeft={handleProgressBar}
        autoplay={{ delay: slideShowTimeInMs }}
      >
        {partnersCarouselContentList.map((content, index) => (
          <SliderSlide key={index}>
            <Link href={content.redirectTo} target="_blank">
              <Image
                src={content.url}
                alt={content.alt}
                width={content.size.width}
                height={content.size.height}
              />
            </Link>
          </SliderSlide>
        ))}
      </Slider>

      <ProgressBar value={progress} max={slideShowTimeInMs} />
    </StyledSponsorSlider>
  )
}
