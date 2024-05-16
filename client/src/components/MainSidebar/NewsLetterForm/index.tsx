import { PaperPlaneRight } from '@phosphor-icons/react'
import {
  NewsLetterFormSubmitButton,
  NewsLetterSubscribeForm,
  StyledNewsLetterForm,
} from './styles'
import { Title } from '@/styles/global'

export function NewsLetterForm() {
  return (
    <StyledNewsLetterForm>
      <Title $level={2} $size="sm">
        Newsletter
      </Title>
      <p>
        Inscreva-se e fique por dentro dos assuntos mais falados no mundo da
        tecnologia
      </p>

      <NewsLetterSubscribeForm>
        <input placeholder="Digite seu e-mail..." />
        <NewsLetterFormSubmitButton type="submit">
          <PaperPlaneRight />
        </NewsLetterFormSubmitButton>
      </NewsLetterSubscribeForm>
    </StyledNewsLetterForm>
  )
}
