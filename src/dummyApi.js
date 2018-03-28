const dummyApi = () => {
  return new Promise(resolve => {
    console.log("call initiated...");
    setTimeout(() => {
      console.log("call finished..");
      resolve(5);
    }, 5000);
  });
};

export default dummyApi;
