import React from "react";
import { RecoilRoot } from "recoil";
import { TodoList } from "./components/TodoList";

// RecoilRootでWrapすると値をどこからでも渡せるようになる!
function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
