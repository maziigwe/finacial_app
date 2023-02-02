import React from "react";
import { Helmet } from "react-helmet";

const Layout = ({ ...props }) => {
  const {
    children,
    title = props.title,
    description = props.description,
  } = props;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="%PUBLIC_URL%/favicon_blank.ico" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/favicon_blank.ico" />
      </Helmet>

      {children}
    </>
  );
};

export { Layout };
