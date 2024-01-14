import React from "react";
import notFound from "../assets/images/notfound.png";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { useTittle } from "../hooks/useTitle";

export const PageNotFound = ({ title }) => {
  useTittle(title);

  return (
    <main>
      <section className="flex h-screen flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <div className="max-w-lg">
            <img className="rounded" src={notFound} alt="404 page not found" />
          </div>
        </div>

        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};
