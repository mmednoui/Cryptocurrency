import "./App.css";
import Header from "./components/Header";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import Home from "./components/Home";
import Details from "./components/Details";
import News from "./components/News";
import Crypto from "./components/Crypto";
import Exchanges from "./components/Exchanges";

const App = () => (
  <div className="app">
    <div className="navbar">
      <Header />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/crypto">
              <Crypto />
            </Route>
            <Route exact path="/crypto/:coinId">
              <Details />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          Copyright © 2021
          <Link to="/">Cryptoverse Inc.</Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;
