// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Samrith Shankar";
export const SITE_SUBLINE = "Experimenting with all things JavaScript.";
export const SITE_DESCRIPTION =
  "Samrith Shankar is a prominent fullstack developer and engineering leader. He loves working with TypeScript and has created numerous open source packages. He also provides advice and mentorship to startups.";

export enum Modes {
  LIGHT = "light",
  DARK = "dark",
}

export enum Seasons {
  SUMMER = "summer",
  MONSOON = "monsoon",
  WINTER = "winter",
}

export const SEASONS = [
  /**
   * January - March
   */
  Seasons.WINTER,
  Seasons.WINTER,
  Seasons.WINTER,

  /**
   * April - June
   */
  Seasons.SUMMER,
  Seasons.SUMMER,
  Seasons.SUMMER,

  /**
   * July - October
   */
  Seasons.MONSOON,
  Seasons.MONSOON,
  Seasons.MONSOON,
  Seasons.MONSOON,

  /**
   * November - December
   */
  Seasons.WINTER,
  Seasons.WINTER,
];

export const CURRENT_SEASON = SEASONS[new Date().getMonth()];
