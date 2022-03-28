import RoutesKMV from "../src/general/routeKMV";
import Header from './general/headerKMV';
import Article from "./general/article";

function App() {
  return (
    <div>
			<Header />
			<RoutesKMV />
			<Article />
    </div>
  );
}
export default App;