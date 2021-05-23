import React from "react";
import ThemeDisplay from "../components/ThemeDisplay";
import {IUIStore, UIStore} from "../store/UIStore";
import {useStoreState} from "pullstate";

export { Page };

function setOppositeThemeMode(s: IUIStore) {
    s.timesThemeChanged += 1;
    s.theme.isDark = !s.theme.isDark;
}
function Page() {
    const { isDark, timesChanged } = useStoreState(UIStore, (s) => ({
        isDark: s.theme.isDark,
        timesChanged: s.timesThemeChanged
    }));
    return (
      <div className={`app ${isDark ? "dark" : "light"}`}>
          <h1>
              Hello
          </h1>
          <div className="container-logo">
              <img src="https://tsed.io/tsed-og.png" alt="Ts.ED" />
          </div>

          <div className="button-area">
              <button onClick={() => UIStore.update(setOppositeThemeMode)}>
                  Change to {isDark ? "light" : "dark"} theme!
              </button>
              <h2>
                  You've changed the theme {timesChanged} time
                  {(timesChanged > 1 || timesChanged === 0) && "s"}
              </h2>
          </div>
          <div>
              <ThemeDisplay />
          </div>
      </div>
    );
}
