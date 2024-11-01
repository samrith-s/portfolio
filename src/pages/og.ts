import { ImageResponse } from "@vercel/og";
import type { APIRoute } from "astro";

import { createOgImage } from "../components/OGImage";
import { getQueryStrings } from "../utils/get-query-strings";

export const GET: APIRoute = async ({ request }) => {
  const qs = getQueryStrings(request.url);
  const title = qs.title;
  const description = qs.description;

  try {
    const regularFont = await fetch(
      "https://samrith.dev/fonts/red-hat-text/regular.ttf",
    ).then((res) => res.arrayBuffer());

    const boldFont = await fetch(
      "https://samrith.dev/fonts/red-hat-text/bold.ttf",
    ).then((res) => res.arrayBuffer());

    const res = new ImageResponse(createOgImage(title, description), {
      width: 1024,
      height: 640,
      fonts: [
        {
          name: "redhattext",
          data: regularFont,
          weight: 400,
          style: "normal",
        },
        {
          name: "redhattext",
          data: boldFont,
          weight: 900,
          style: "normal",
        },
      ],
    });

    return res;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
