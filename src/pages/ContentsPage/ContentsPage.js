import React, { useEffect, useState } from 'react';
import ContentCardHorizontal from '../../components/ContentCardHorizontal/ContentCardHorizontal';
import { useLocation } from 'react-router';
import ContentCard from '../../components/ContentCard/ContentCard';
import GamesRequest from '../../services/GamesRequest';
import ArticlesRequest from '../../services/ArticlesRequest';

const ContentsPage = () => {

  const [isDesktop, setDesktop] = useState(window.innerWidth > 1400);
  let location = useLocation();

  var pageLimit = 10;

  var [contents, setContents] = useState([]);
  var [showMoreContent, setShowMoreContent] = useState(true);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1400);
  };

  useEffect(() => {
    getContents();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  function getContents() {
    if (location.pathname === "/games") {
      new GamesRequest().get(contents.length, pageLimit).then((res) => updateContent(res));
    }

    if (location.pathname === "/articles")
      new ArticlesRequest().get(contents.length, pageLimit).then((res) => updateContent(res));
  }

  function updateContent(res) {
    if (res.length < pageLimit)
      setShowMoreContent(false);

    setContents([
      ...contents,
      ...res
    ]);
  }

  return (
    <div>
      {
        isDesktop &&
        contents
          .map(c => {
            return <ContentCardHorizontal
              key={c.key}
              style={{
                margin: "2em 0",
                height: "250px"
              }}
              content={c}
              descriptionLimit={false}
              imageWidth={200}
            />
          })
      }

      {
        !isDesktop &&
        contents
          .map(c => {
            return <ContentCard
              key={c.key}
              style={{
                margin: "2em 0",
              }}
              content={c}
            />
          })
      }

      {
        showMoreContent &&
        <ContentCard style={{ height: "80px" }} onClick={getContents}>
          See more...
        </ContentCard>
      }
    </div>
  );

}
ContentsPage.propTypes = {};

ContentsPage.defaultProps = {};

export default ContentsPage;
