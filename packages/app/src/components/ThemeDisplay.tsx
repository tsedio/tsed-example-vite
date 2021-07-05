import React from "react";
import {useStoreState} from "pullstate";
import {UIStore} from "../store/UIStore";
import {Moon, Sun} from "./Icons";

function ThemeDisplay() {
  const isDark = useStoreState(UIStore, s => s.theme.isDark);

  return (
    <div className={`theme-icon ${isDark ? "dark" : "light"}`}>
      {isDark ? <Moon /> : <Sun />}
    </div>
  );
}

export default ThemeDisplay;
