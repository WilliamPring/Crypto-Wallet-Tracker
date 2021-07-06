
import {HttpClient} from '../http-client'

class EthClient extends HttpClient {
    constructor() {
        super({baseURL: ''})
    }

}



export class BtcClient extends HttpClient {
    constructor() {
        super({baseURL: 'https://chain.api.btc.com/v3'})
    }
    getAddress(address: string) {
        return this.instance.get(`/address/${address}`);
    }
    getTransaction(address: string) {
        return this.instance.get(`/address/${address}/tx`);
    }
}


//ADAPTER(TYPE, dataset) (STANDARD plugin) - ALWAYS take in same format
    //ETH
    //BTC



// {"data":{"address":"15urYnyeJe3gwbGJ74wcX89Tz7ZtsFDVew","received":13623974394090,"sent":13623974384090,"balance":10000,"tx_count":6264,"unconfirmed_tx_count":0,"unconfirmed_received":0,"unconfirmed_sent":0,"unspent_tx_count":1},"err_code":0,"err_no":0,"message":"success","status":"success"}