// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";

import { SITE_SUBLINE, SITE_TITLE } from "../consts";

export type OGImageProps = {
  title?: string;
  description?: string;
};

function OGImage({ title, description }: OGImageProps) {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "black",
        width: "100%",
        height: "100%",
        color: "white",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "2rem",
        padding: 100,
      }}
    >
      <img
        src="https://samrith.dev/logo.svg"
        width="200"
        alt="logo"
        style={{
          flexShrink: 0,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          flexShrink: 1,
        }}
      >
        <h1
          style={{
            margin: 0,
            lineHeight: "5rem",
            fontFamily: '"redhattext"',
            fontSize: "5.5rem",
          }}
        >
          {title || SITE_TITLE}
        </h1>
        <p
          style={{
            marginTop: 10,
            fontFamily: '"redhattext"',
            fontSize: "2rem",
            flexWrap: "wrap",
            wordWrap: "break-word",
          }}
        >
          {description || "samrith.dev"}
        </p>
      </div>
    </div>
  );
}

export function createOgImage(title?: string, description?: string) {
  return <OGImage title={title} description={description} />;
}
