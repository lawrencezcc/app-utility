'use strict';

function getTFN() {
  return fetch('https://www.helperutility.com/tfn').then((response) =>
    response.json()
  );
}

export { getTFN };
