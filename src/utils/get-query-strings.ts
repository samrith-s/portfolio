export function getQueryStrings(url: string) {
  const qs = url
    .split("?")[1]
    ?.split("&")
    .reduce(
      (a, p) => {
        const [key, value] = p.split("=");

        return {
          ...a,
          [key]: decodeURIComponent(value),
        };
      },
      {} as Record<string, string | undefined>,
    );

  return qs;
}
