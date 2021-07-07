import {BtcClient} from '../../helper/CrpytoHttpClient'
import { CoinType }from '../../type/coinType'
import { flatten, map }from 'lodash'
import { BitcoinResponse } from '@crypto-wallet-tracker/models'
// interface walletData {
//     address: string;
//     walletType:
//     //walletType:
// }




interface CryptoStrategy {
    walletInfo(cryptoPublicAddresses: string[]): Promise<BitcoinResponse[]>;
}

class BitcoinStrategy implements CryptoStrategy {
    client: BtcClient;
    constructor() {
        this.client = new BtcClient()
    }

    public walletInfo(cryptoPublicAddresses: string[]): Promise<BitcoinResponse[]> {
        //kinda bad use global exception handeler you can catch then throw a custom error...
        try {
            return Promise.all(map(cryptoPublicAddresses, cryptoPublicAddress => Promise.all([
                this.client.getAddress(cryptoPublicAddress)
                // this.client.getTransaction(data)
            ]))).then(d => {
               return flatten(d)
            })
        } catch (e) {
            console.log(e)
        }
    }
}
// class EthStrategy implements CryptoStrategy {
//     public walletInfo(data: string): Promise<unknown> {
//         return null;
//     }
// }

export const cryptoStrategy = {
    [CoinType.BTC]: new BitcoinStrategy(),
    // [CoinType.BTC]: new EthStrategy()
}