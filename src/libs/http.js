class Http {
  static instance = new Http();
  get = async (url) => {
    try {
      let req = await fetch(url);
      let json = await req.json();
      return json;
    } catch (err) {
      console.log('hhtp get method err', errr);
      throw Error(err);
    }
  };

  post = async (url, body) => {
    try {
      let req = await fetch(url, {
        method: 'POST',
        body,
      });
      let json = await req.json();
      return json;
    } catch (err) {
      console.log('hhtp post method err', err);
      throw Error(err);
    }
  };
}
export default Http;
