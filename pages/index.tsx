import Main from "./Main";
import Helmet from '../components/Helmet'
import GlobalStyles from '../styles/global'

const Home: React.FC = () => {
  return (
    <>
    <Helmet />
    <GlobalStyles/>
    <Main/>
    </>
  )
};

export default Home;
