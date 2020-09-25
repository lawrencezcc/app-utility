'use strict';

function getTFN() {
  return fetch('/tfn').then((response) => response.json());
}

export { getTFN };
