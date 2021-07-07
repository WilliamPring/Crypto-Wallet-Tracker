
import {HttpClient} from '../http-client'
import {BitcoinResponse, BitcoinResponseTransaction }from '@crypto-wallet-tracker/models'
class EthClient extends HttpClient {
    constructor() {
        super({baseURL: ''})
    }

}



export class BtcClient extends HttpClient {
    constructor() {
        super({baseURL: 'https://chain.api.btc.com/v3'})
    }
    getAddress(address: string): Promise<BitcoinResponse> {
        return this.instance.get(`/address/${address}`);
    }
    getTransaction(address: string): Promise<BitcoinResponseTransaction> {
        return this.instance.get(`/address/${address}/tx`);
    }
}