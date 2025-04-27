import { useDispatch } from "react-redux";
import Content from "./content";
import Head from "./head";
import { useEffect } from "react";
import { getDetails } from "../../redux/actions";
import { useParams } from "react-router-dom";

const detail = () => {
  const { country } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(country));
  });
  return (
    <div className="flex-1 textt-white grid place-items-center p-6">
      <div
        className="bg-white border shadow-2xl min-h-[80%] py-6 px-8
      rounded-lg max-w-4xl max-md:w-full md:w-[80%]"
      >
        <Head />
        <Content />
      </div>
    </div>
  );
};

export default detail;
