import Link from "next/link";
import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import axios from "axios";
export const getStaticPaths = async () => {
  const data = (await axios.get("https://jsonplaceholder.typicode.com/posts"))
    .data;

  const paths = data.map((item, index) => {
    return {
      params: {
        pageno: item.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await res.json();
  const id = context.params.pageno;
  const data = (
    await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  ).data;
  return {
    props: {
      data,
    },
  };
};
const Dynamic = ({ data }) => {
  //niche is see ko use kro
  const { id, title, body } = data;
  return (
    <>
      <div
        className="absolute flex justify-center items-center flex-col h-full w-full"
        // key={data.id} // no need
      >
        <p className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 w-72 sm:w-96 text-lg rounded-tl-3xl rounded-br-3xl">
          <h1 className="text-black font-semibold text-2xl mb-2 underline underline-offset-4">
            Hello I'm a page {id} {/*  {data.id} */}
          </h1>
          {body}
          {/* {data.body} */}
        </p>
      </div>
      <div className="relative w-full flex flex-col justify-end min-h-screen">
        <div className=" h-14 flex justify-between px-[5%] items-center bg-[#252525] text-white sm:text-2xl font-mono w-full">
          <h1 className="">staticPath</h1>
          <Link className="border-2 p-2 rounded-full" href="/">
            <RiArrowGoBackFill />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Dynamic;
