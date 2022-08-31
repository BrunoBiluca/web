import InfinityContentHolder from 'components/Contents/InfinityContentHolder/InfinityContentHolder';
import Content from 'components/Contents/model/Content.model';
import GlobalConfig from 'config/GlobalConfig';
import { useEffect, useState } from 'react';
import HomeStrings from './Home.strings';

const HomeContentView = () => {
  const [contents, setContents] = useState([])

  function mapContent(newContent, contentColor) {
    const content = new Content(newContent.title, newContent.contentSummary)
    content.categories = newContent.categories
    content.link = newContent.link
    content.publishedAt = newContent.publishedAt
    content.thumbnail = newContent.featuredImage.thumbnail
    content.contentColor = contentColor
    return content
  }
  const gamesProvider = GlobalConfig.games.provider()
  const articlesProvider = GlobalConfig.articles.provider()

  useEffect(() => {
    async function getContents() {
      const games = await gamesProvider.get()
      const articles = await articlesProvider.get()

      const allContents = [
        ...games.map(g => mapContent(g, GlobalConfig.games.color())),
        ...articles.map(a => mapContent(a, GlobalConfig.articles.color()))
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