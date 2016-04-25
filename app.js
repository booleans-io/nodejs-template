import request from 'request';
import keys from './keys';

let accessToken = keys.accessToken;
let booleanId = 'yourBooleanId';

let setBoolean = (id, val) => {
  request.put(`https://api.booleans.io/${booleanId}`, {
    headers: {
      'Authorization': `Token ${accessToken}`
    },
    body: {
      val: val
    },
    json: true
  });
};

let check = () => {
  if (yourAwesomeFunction()) {
    setBoolean(booleanId, true);
  } else {
    setBoolean(booleanId, false);
  }
};

let yourAwesomeFunction = () => {
  // Insert awesome code here
  return true;
};

setInterval(() => {
  check();
}, 300000); // Every 5 minutes

check();

