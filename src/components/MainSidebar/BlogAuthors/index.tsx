import { ListSection } from '../ListSection'
import { BlogAuthor } from './BlogAuthor'

export function BlogAuthors() {
  return (
    <ListSection type="ul" title="Autores mais lidos">
      <BlogAuthor
        name="Felipe Elias"
        synthesis="Founder of Kodi - Working @ IBM"
        profilePicture="https://github.com/feponiel.png"
        social={{
          linkedInUrl: 'https://www.linkedin.com/in/felipe-daniel-elias/',
          githubUrl: 'https://github.com/feponiel',
        }}
        blogLink="https://youtube.com/@meiaum2"
      />

      <BlogAuthor
        name="Diego Fernandes"
        synthesis="Author - CTO @ Rocketseat"
        profilePicture="https://github.com/diego3g.png"
        social={{
          linkedInUrl: 'https://www.linkedin.com/in/diego3g/',
          githubUrl: 'https://github.com/diego3g',
        }}
        blogLink="https://youtube.com/@meiaum2"
      />

      <BlogAuthor
        name="Filipe Deschamps"
        synthesis="Author - CEO @ Pagar.me"
        profilePicture="https://github.com/filipedeschamps.png"
        social={{
          linkedInUrl: 'https://www.linkedin.com/in/filipedeschamps/',
          githubUrl: 'https://github.com/filipedeschamps',
        }}
        blogLink="https://youtube.com/@meiaum2"
      />

      <BlogAuthor
        name="Mayk Brito"
        synthesis="Instrutor - Teacher @ Rocketseat"
        profilePicture="https://github.com/maykbrito.png"
        social={{
          linkedInUrl: 'https://www.linkedin.com/in/maykbrito/',
          githubUrl: 'https://github.com/maykbrito',
        }}
        blogLink="https://youtube.com/@meiaum2"
      />

      <BlogAuthor
        name="Dalton Menezes"
        synthesis="Author - Q&A @ Rocketseat"
        profilePicture="https://github.com/daltonmenezes.png"
        social={{
          linkedInUrl: 'https://www.linkedin.com/in/daltonmenezes/',
          githubUrl: 'https://github.com/daltonmenezes',
        }}
        blogLink="https://youtube.com/@meiaum2"
      />
    </ListSection>
  )
}
