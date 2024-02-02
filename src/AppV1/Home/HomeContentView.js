import InfinityContentHolder from 'AppV1/InfinityContentHolder/InfinityContentHolder';
import Content from 'components/Contents/Content.model';
import { useEffect, useState } from 'react';
import BilucaIntro from './BilucaIntro.strings';
import GamesLocalProvider from 'components/Games/GamesLocalProvider';
import ArticlesLocalProvider from 'components/Articles/services/local/ArticlesLocalProvider';
import ContentColor from 'components/Contents/ContentColor.model';


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
  const gamesProvider = new GamesLocalProvider()
  const articlesProvider = new ArticlesLocalProvider()

  const games = await gamesProvider.getAll()
  const articles = await articlesProvider.getAll()

  const allContents = [
    ...games.map(g => mapContent(g, new ContentColor("azure", "#69dada", "#1cadad"))),
    ...articles.map(a => mapContent(a, new ContentColor("beige", "#dddd99", "#c6c61e")))
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