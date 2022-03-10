import React, { Component } from "react";
import { CreatePortfolio } from "./CreatePortfolio";
import  PortfolioDetail  from "./PortfolioDetail";
import { Layout } from "./Layout";
import { Home } from "./Home";
import { Route, Routes } from "react-router";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/CreatePortfolio" element={<CreatePortfolio/>} />
          <Route path="/PortfolioDetail" element={<PortfolioDetail/>} />
        </Routes>
      </Layout>
    );
  }
}
