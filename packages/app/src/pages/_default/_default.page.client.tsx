import ReactDOM from "react-dom";
import React from "react";
import {getPage} from "vite-plugin-ssr/client";
import {PageLayout} from "./PageLayout";
import {PullstateCore} from "../../store";
import "virtual:windi.css";
import {PullstateProvider} from "pullstate";

hydrate();

async function hydrate() {
  const {Page, contextProps} = await getPage();
  const instance = PullstateCore.instantiate({ssr: false, hydrateSnapshot: contextProps.stateSnapshot});

  ReactDOM.hydrate(
    <PullstateProvider instance={instance}>
      <PageLayout>
        <Page {...contextProps.pageProps} />
      </PageLayout>
    </PullstateProvider>,
    document.getElementById("page-view")
  );
}
