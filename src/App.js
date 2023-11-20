import { Fragment } from "react";
import "./App.css";
import AceLayout from "./components/Layout/AceLayout";
import { publicRoutes } from "./routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((value, index) => {
            let Layout = AceLayout;
            if (value.layout) {
              Layout = value.layout;
            } else if (value.layout === null) {
              Layout = Fragment;
            }
            let Content = value.element;
            return (
              <Route
                key={index}
                path={value.path}
                element={
                  <Layout>
                    <Content />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
