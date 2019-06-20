import React from "react";
import "./App.css";
import MyWidget from "./components/MyWidget";
import ErrorBoundary from "./components/ErrorBoundary";

// 在线上环境上可以看出报错效果
function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <MyWidget />
      </ErrorBoundary>
    </div>
  );
}

export default App;
