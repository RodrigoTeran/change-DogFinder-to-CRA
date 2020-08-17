export function fetcher(url, method) {
  fetch(url, {  
    method: method
  })
    .then(res => res.json())
    .then(data => {
      return data;
    });
};