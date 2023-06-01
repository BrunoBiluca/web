import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";

import styles from "./ContentRouter.module.css";

import Home from "../../v1/Home/Home";
import GamesPage from "../../pages/GamesPage/GamesPage";
import ArticlePage from "../../pages/ArticlesPage/ArticlePage";

export default function ContentRouter() {
  let { path } = useRouteMatch();

  return (
    <div style={{ flex: 1 }} className={styles.contentRouter}>
      <Switch>
        <Route path={path} exact children={<Home />} />
        <Route path={`${path}/games/:gameSlug`} exact children={<GamesPage />} />
        <Route path={`${path}/articles/:articleSlug`} exact children={<ArticlePage />} />
      </Switch >
    </div>
  );
}
