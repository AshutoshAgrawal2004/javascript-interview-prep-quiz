import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import { Header } from "./header";

export const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return (
    <div className="flex flex-col gap-8 w-full h-full min-h-screen pt-4 font-inter">
      <Header />
      <div className="container px-4 flex-1 max-w-4xl">
        <Outlet />
      </div>
    </div>
  );
};
