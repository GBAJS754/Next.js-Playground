import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Search({
  data,
  error,
}: {
  data: any;
  error: string | null;
}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {error ? (
          <div>
            <h1>Error</h1>
            <p>{error}</p>
          </div>
        ) : data ? (
          <div>
            <h1>API Response</h1>
            <p>{data.message}</p>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers["host"];
  const absoluteUrl = `${protocol}://${host}/api/forbidden`;

  try {
    const res = await fetch(absoluteUrl);
    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.statusText}`);
    }
    const data = await res.json();
    return { props: { data, error: null } };
  } catch (error: any) {
    return { props: { data: null, error: error.message } };
  }
}
