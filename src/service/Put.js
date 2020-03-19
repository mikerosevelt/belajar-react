import axios from 'axios';
import { RootPath, OnlineRoot } from './Config';

const Put = (path, root, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.put(`${root ? OnlineRoot : RootPath}/${path}/`, data)
            .then((res) => {
                resolve(res);
            }, (err) => {
                reject(err);
            })
    })

    return promise;
}

export default Put;
