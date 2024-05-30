import { GetServerSideProps } from "next";

interface PageProps {
  message: string;
}

export default function HomePage({ message }: PageProps) {
  return (
    <div>
      <h1>API Response</h1>
      <p>{message}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/forbidden");
  const data = await res.json();

  return {
    props: {
      message: data.message,
    },
  };
};
