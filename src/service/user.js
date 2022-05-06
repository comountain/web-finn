
import {history} from '../utils/History.js';
import "../utils/Config"

export const login = (name,word) => {
        if(name === global.user.user && word === global.user.password)
        {
            history.push("/home");
        }
}