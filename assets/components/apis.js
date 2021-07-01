import {AxiosInstance} from './axios';

export async function getPokeData(rank) {
  //  console.log(rank);
  try {
    var Data = [];
    const res = await AxiosInstance.get('/' + rank + '/');
    //  console.log(res.data);
    Data = res.data;
    return Data;
  } catch (e) {
    return e;
  }
}
