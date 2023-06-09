import Head from "next/head";
import axios from "axios";
export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Hello User</title>
      </Head>
      <div className="flex flex-wrap justify-center items-center gap-10 py-8">
        {data?.map((item, index) => {
          return (
            <div
              className="bg-[#ECEEFF] rounded-xl w-72 sm:w-96 hover:shadow-2xl transition duration-300 ease-in-out animate-fade-in"
              key={item.id}
            >
              <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-72 sm:w-96 md:w-auto">
                <div className="mt-3 font-semibold text-lg">{item.id}.</div>
                <div className="text-sm font-normal w-60 md:w-auto">
                  {item.title}
                </div>
                <div className="my-4">
                  <span className="font-light text-sm">{item.body}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export const getStaticProps = async () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await res.json();
  const data = (await axios.get("https://jsonplaceholder.typicode.com/posts"))
    .data;
  return {
    props: {
      data,
    },
  };
};
