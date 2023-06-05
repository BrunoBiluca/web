import InfinityContentHolder from 'AppV1/InfinityContentHolder/InfinityContentHolder';
import Content from 'components/Contents/model/Content.model';
import GlobalConfig from 'config/GlobalConfig';
import { useEffect, useState } from 'react';
import BilucaIntro from './BilucaIntro.strings';


function mapContent(newContent, contentColor) {
  const content = new Content(newContent.title, newContent.contentSummary)
  content.categories = newContent.categories
  content.link = newContent.link
  content.publishedAt = newContent.publishedAt
  content.thumbnail = newContent.featuredImage.thumbnail
  content.contentColor = contentColor
  return content
}

async function getContents() {
  const gamesProvider = GlobalConfig.games.provider()
  const articlesProvider = GlobalConfig.articles.provider()

  const games = await gamesProvider.get()
  const articles = await articlesProvider.get()

  const allContents = [
    ...games.map(g => mapContent(g, GlobalConfig.games.color())),
    ...articles.map(a => mapContent(a, GlobalConfig.articles.color()))
  ];

  const sortedContents = allContents
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return sortedContents
}

const HomeContentView = () => {
  const [contents, setContents] = useState([])

  useEffect(() => {
    getContents().then(res => setContents(res))
  }, [])

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        {BilucaIntro.strings.content_title.toString()}
      </h1>
      <InfinityContentHolder contents={contents} />
    </div>
  )
}

export default HomeContentView;