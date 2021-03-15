import "./App.css";
import { Header, Navigation, Layout, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          className="header-color"
          title={
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              MyPortfolio
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link to="/resume"> Resume </Link>
            <Link to="/aboutme"> About Me </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/contact"> Contact </Link>
            <Link to="/journey"> Journey Map </Link>
          </Navigation>
        </Header>
        <Drawer
          title={
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Kishore
            </Link>
          }
        >
          <Navigation>
            <Link to="/resume"> Resume </Link>
            <Link to="/aboutme"> About Me </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/contact"> Contact </Link>
            <Link to="/journey"> Journey Map </Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>{" "}
      </Layout>{" "}
    </div>
  );
}

export default App;
