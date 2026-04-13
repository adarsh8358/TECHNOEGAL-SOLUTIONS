import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.scss";

const Breadcrumb = () => {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="breadcrumb">
      <Link to="/">Home</Link>

      {pathnames.map((name, index) => {
        const routeTo = "/" + pathnames.slice(0, index + 1).join("/");

        return (
          <span key={name}>
            {" / "}
            <Link to={routeTo}>{name}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;