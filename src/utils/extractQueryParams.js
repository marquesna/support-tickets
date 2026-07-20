export function extractQueryParams(query) {
  //vai tirar o ? do url
  return query
    .slice(1)
    .split("&")
    .reduce((queryParams, param) => {
      const [key, value] = param.split("=");

      queryParams[key] = value;

      return queryParams;
    }, {});
}
