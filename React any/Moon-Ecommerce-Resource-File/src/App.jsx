import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/common/Layout";
import Header from "./components/common/Header";

export const App = () => {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <h1>Home</h1>
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter> */}
      <Header/>
    </>
  );
};
