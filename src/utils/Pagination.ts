export function convertTo2D<T>(arr: T[], size: number) {
  const res: T[][] = [];

  arr.forEach((element, index) => {
    if (index % size === 0) {
      res.push([element]);
    } else {
      res[res.length - 1].push(element);
    }
  });

  return res;
}

export function convertUrlToLinkHref(url: string) {
  if (url === '/') {
    return '/';
  }

  return '/[page]';
}
