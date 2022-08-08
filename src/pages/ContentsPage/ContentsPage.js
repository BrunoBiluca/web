import React, { useEffect, useState } from 'react';
import ContentCardHorizontal from 'components/ContentCardHorizontal/ContentCardHorizontal';
import { useLocation } from 'react-router';
import ContentCard from 'components/ContentCard/ContentCard';
import GamesRequests from 'components/Games/services/backend/GamesRequests';
import ArticlesRequests from 'components/Articles/services/backend/ArticlesRequests';

const ContentsPage = () => {

  const [isDesktop, setDesktop] = useState(window.innerWidth > 1400);
  let location = useLocation();

  let pageLimit = 10;

  let [contents, setContents] = useState([]);
  let [showMoreContent, setShowMoreContent] = useState(true);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1400);
  };

  useEffect(() => {
    getContents();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  function getContents() {
    // TODO: esse roteamento deve ser feito pelo Router
    if (location.pathname === "/games") {
      new GamesRequests().get(contents.length, pageLimit).then((res) => updateContent(res));
    }

    if (location.pathname === "/articles")
      new ArticlesRequests().get(contents.length, pageLimit).then((res) => updateContent(res));
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
    <div data-testid="contents-page">
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
