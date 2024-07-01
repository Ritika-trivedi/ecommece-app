import BestSeller from "../BestSeller";
import Newletter from "../Newletter";
import Banner from "./Banner";
import Category from "./Category";
import Collections from "./Collections";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Products />
      <Collections />
      <BestSeller />
      <Newletter />
    </div>
  );
};

export default Home;
