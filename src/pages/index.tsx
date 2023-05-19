import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { SignIn, UserButton, useUser } from "@clerk/nextjs"

import { api } from "~/utils/api";
import { Sign } from "crypto";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const user = useUser();

  return (
    <>
      <Head>
        <title>MyVGDB</title>
        <meta name="description" content="My Video Game Database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div>
          {!user.isSignedIn && <SignIn/>}
          {!!user.isSignedIn && <UserButton/>}
        </div>
      </main>
    </>
  );
};

export default Home;
