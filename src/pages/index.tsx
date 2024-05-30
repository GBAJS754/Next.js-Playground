import { GetServerSideProps } from "next";

interface PageProps {
  message: string;
}

export default function HomePage({ message }: PageProps) {
  console.log(message);
  return (
    <div>
      <h1>API Response</h1>
      <p>{message}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const res = await fetch("http://localhost:3000/api/forbidden");

    if (res.status === 403) {
      return {
        props: {
          message: "403 Error fetching data",
        },
      };
    }

    const data = await res.json();

    console.log("API Response:", data); // 서버 콘솔에 응답 로그 출력

    return {
      props: {
        message: data.message,
      },
    };
  } catch (error) {
    console.error("API Request Error:", error);
    return {
      props: {
        message: "Error fetching data",
      },
    };
  }
};
