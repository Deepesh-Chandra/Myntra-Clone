import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./App.css";
import Fetchingdata from "../components/Fetchingdata";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <Fetchingdata />
      {fetchStatus.currentlyFetching ? <Loader /> : <Outlet />}

      <Footer />
    </>
  );
}

export default App;
