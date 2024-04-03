const appTitle = "dota2 dashboard";

export const pageTitle = (...args: (string | undefined | null)[]) =>
  [appTitle, ...args].filter((p) => !!p).join(" - ");
