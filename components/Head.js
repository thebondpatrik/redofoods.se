import React from "react";
import NextHead from "next/head";

const Head = ({ title, description }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title || "RE:DO - Plant Based Food"}</title>
    <meta name="description" content={description || "RE:DO - Plant Based Food"} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </NextHead>
);

export default Head;