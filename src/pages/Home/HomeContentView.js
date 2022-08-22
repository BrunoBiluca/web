
import InfinityContentHolder from 'components/Contents/InfinityContentHolder/InfinityContentHolder';
import Content from 'components/Contents/model/Content.model';
import FeaturesConfig from 'config/FeaturesConfig';
import { useEffect, useState } from 'react';

const HomeContentView = () => {
  const gamesProvider = FeaturesConfig.games.provider()
  const articlesProvider = FeaturesConfig.articles.provider()

  const [contents, setContents] = useState([])

  function mapContent(newContent) {
    const content = new Content(newContent.title, newContent.contentSummary)
    content.categories = newContent.categories
    content.link = newContent.link
    content.publishedAt = newContent.publishedAt
    content.thumbnail = newContent.featuredImage
    return content
  }

  useEffect(() => {
    async function getContents() {
      const games = await gamesProvider.get()
      const articles = await articlesProvider.get()

      setContents([
        ...games.map(g => mapContent(g)),
        ...articles.map(a => mapContent(a))
      ])
    }

    getContents()
  }, [])


  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Um pouco do meu trabalho 🧑‍💻</h1>
      <InfinityContentHolder contents={contents} />
    </div>
    
  )
}

export default HomeContentView;