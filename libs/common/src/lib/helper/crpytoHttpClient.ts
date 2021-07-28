
import {HttpClient} from '../http-client'
import {BitcoinResponse }from '@crypto-wallet-tracker/models'
class EthClient extends HttpClient {
    constructor() {
        super({baseURL: 'https://api.blockcypher.com/v1/eth/main/addrs/'})
    }

    getAddress(address: string): Promise<BitcoinResponse> {
        return this.instance.get(`/address/${address}/balance`);
    }
    getTransaction(address: string): Promise<any> {
        return this.instance.get(`/address/${address}/tx`);
    }

}



export class BtcClient extends HttpClient {
    constructor() {
        super({baseURL: 'https://chain.api.btc.com/v3'})
    }
    getAddress(address: string): Promise<BitcoinResponse> {
        return this.instance.get(`/address/${address}`);
    }
    getTransaction(address: string): Promise<any> {
        return this.instance.get(`/address/${address}/tx`);
    }
}