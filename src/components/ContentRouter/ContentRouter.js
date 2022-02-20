import React from "react";
import { Route, Switch } from "react-router";

import styles from "./ContentRouter.module.css";

import Home from "../../pages/Home/Home";
import GamesPage from "../../pages/GamesPage/GamesPage";
import ArticlePage from "../../pages/ArticlesPage/ArticlePage";
import ContentsPage from "../../pages/ContentsPage/ContentsPage";

class ContentRouter extends React.Component {

  render() {
    return (
      <div style={{flex: 1}} className={styles.contentRouter}>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/games' exact>
            <ContentsPage contentType="games" />
          </Route>
          <Route path='/games/:gameSlug' exact>
            <GamesPage />
          </Route>
          <Route path='/articles' exact>
            <ContentsPage contentType="articles" />
          </Route>
          <Route path='/articles/:articleSlug' exact>
            <ArticlePage />
          </Route>
        </Switch >
      </div>
    );
  }

}

export default ContentRouter;