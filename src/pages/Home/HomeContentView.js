
import InfinityContentHolder from 'components/Contents/InfinityContentHolder/InfinityContentHolder';
import Content from 'components/Contents/model/Content.model';
import FeaturesConfig from 'config/FeaturesConfig';
import { useEffect, useState } from 'react';
import HomeStrings from './Home.strings';

const HomeContentView = () => {
  const [contents, setContents] = useState([])

  function mapContent(newContent, backgroundColor, shadowColor, hoverColor) {
    const content = new Content(newContent.title, newContent.contentSummary)
    content.categories = newContent.categories
    content.link = newContent.link
    content.publishedAt = newContent.publishedAt
    content.thumbnail = newContent.featuredImage.thumbnail
    content.backgroundColor = backgroundColor
    content.shadowColor = shadowColor
    content.hoverColor = hoverColor
    return content
  }
  const gamesProvider = FeaturesConfig.games.provider()
  const articlesProvider = FeaturesConfig.articles.provider()
  
  useEffect(() => {
    async function getContents() {
      const games = await gamesProvider.get()
      const articles = await articlesProvider.get()

      const allContents = [
        ...games.map(g => mapContent(g, "azure", "#69dada", "#1cadad")),
        ...articles.map(a => mapContent(a, "beige", "#dddd99", "#c6c61e"))
      ];

      setContents(allContents.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)))
    }

    getContents()
  }, [articlesProvider, gamesProvider])


  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        {HomeStrings.strings.content_title.toString()}
      </h1>
      <InfinityContentHolder contents={contents} />
    </div>

  )
}

export default HomeContentView;