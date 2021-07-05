import * as React from "react";
import "./PageLayout.scss";

export { PageLayout };

type Children = React.ReactNode;

function PageLayout({ children }: { children: Children }) {
  return (
    <React.StrictMode>
      <Layout>
          {children}
      </Layout>
    </React.StrictMode>
  );
}

function Layout({ children }: { children: Children }) {
  return (
    <div className={"container"}>
      {children}
    </div>
  );
}
