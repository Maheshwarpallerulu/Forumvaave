import queryString from 'query-string';

export const API_BASE_URL = 'https://jsonplaceholder.typicode.com'; //"https://vidmed2.dhanushinfotech.com";
export const SEESION_EXPIRE =
  'Your session is expired. Please try to login again.';
export const NO_INTERNET_MSG =
  'No Internet connection. Make sure that Wi-Fi or mobile data is turned on,then try again';
export const REFREST_TOKEN_API = 'vidmed-login/nojwt/user/refreshToken';
export const DUPLICATE_USER =
  'You have already logged in another session or previous session was closed abruptly. Please try again.';

export default class ApiClient {
  constructor(prefix = '/api') {
    this.prefix = API_BASE_URL;
  }

  get(requestUrl, params = {}) {
    return this.request({
      url: requestUrl,
      method: 'get',
      params,
    });
  }

  post(requestUrl, payload = {}) {
    return this.request({
      url: requestUrl,
      method: 'post',
      body: payload,
    });
  }

  postParamsPayload(requestUrl, payload = {}, params = {}) {
    return this.request({
      url: requestUrl,
      method: 'post',
      body: payload,
      params,
    });
  }
  postParams(requestUrl, params = {}) {
    return this.request({
      url: requestUrl,
      method: 'post',
      params,
    });
  }

  put(requestUrl, payload = {}) {
    return this.request({
      url: requestUrl,
      method: 'put',
      body: payload,
    });
  }

  patch(requestUrl, payload = {}) {
    return this.request({
      url: requestUrl,
      method: 'patch',
      body: payload,
    });
  }

  delete(requestUrl, params = {}) {
    return this.request({
      url: requestUrl,
      method: 'delete',
      params,
    });
  }

  upload(requestUrl, payload = {}, callback = () => {}) {
    return this.uploadFile({
      url: requestUrl,
      method: 'post',
      body: payload,
      callback: callback,
    });
  }

 

  request = async ({url, method, params = {}, body}) => {
    const isConnected = true;
    if (!isConnected) {
      const res = {
        error: NO_INTERNET_MSG,
        message: NO_INTERNET_MSG,
        noInternet: true,
      };
      return res;
    }
    let showToast = params.showToast;
    const query = queryString.stringify(params);
const urlWithQuery = query ? `${url}?${query}` : url; // 👈 only add ? if params exist
console.log('urlWithQuery=======> ', `${this.prefix}/${urlWithQuery}`);
    let headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const jwtToken = null;
    // console.log("vjwtTokenjwtToken",jwtToken);
    if (jwtToken) {
      headers = {
        ...headers,
        Authorization: jwtToken,
      };
    }
    // console.log('headers : ', headers);
    const init = {
      method,
      headers: headers,
      //url: `${this.prefix}/${urlWithQuery}`
    };

    if (method !== 'get' && method !== 'head') {
      init.body = JSON.stringify(body);
      //init.data = body;
    }
    try {
     // console.log('init : ', init);
      let res = await fetch(`${this.prefix}/${urlWithQuery}`, init); //axios(init);

      let status = res.status;
      // let msg = res.message;
      if (status == 401) {
        

        if (showToast != false) {
          // Toast.show(DUPLICATE_USER, Toast.LONG);
          console.log(DUPLICATE_USER);
        }
       
        return {
          ...res,
          error: SEESION_EXPIRE,
          message: SEESION_EXPIRE,
          status: 401,
        };
        
      }
      try {
        res = await res.json();
        //console.log('urlWithQuery=======> ', `${this.prefix}/${urlWithQuery}`);
      } catch (err) {
        res = await res.text();
        if (res == 'Success') {
          return {status: true};
        }
       // console.log('urlWithQuery=======> ', `${this.prefix}/${urlWithQuery}`);
        return res;
      }

      //console.log('response 1:- ', res);
      if (status >= 500) {
        //throw new Error('Bad response from server');
        res.error = res.message || 'Bad response from server';
      }
      if (status >= 400) {
        //throw new Error('Bad response from server');
        res.error = res.message || 'Bad Credentials';
      }

      if (res.status == 'failed') {
        res.error = `${res.response || res.message} ${res.httpStatus}`;
      }
      //console.log("response 2:- ", res);
      if (!res.error) {
        return res;
      } else {
        return res;
        //throw new Error(res.error);
      }
    } catch (err) {
      let res = {
          error : !isConnected ?  NO_INTERNET_MSG :  (err.message || "something went wrong."),
          message: !isConnected ?  NO_INTERNET_MSG :  (err.message || "something went wrong."),
      }
      return res;
    }
    
  };
}
