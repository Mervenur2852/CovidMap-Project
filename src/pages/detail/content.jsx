import { useSelector } from "react-redux";
import Card from "./card";
import ContentLoader from "../../components/loader/content-loader";

const Content = () => {
  const { isLoading, error, data } = useSelector((store) => store);

  const arr = Object.entries(data || {}).filter(([key]) => key !== "flag");
  return (
    <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {isLoading ? (
        <ContentLoader />
      ) : error ? (
        <Error info={error} />
      ) : (
        arr.map((item, key) => <Card key={key} item={item} />)
      )}
    </div>
  );
};

export default Content;
