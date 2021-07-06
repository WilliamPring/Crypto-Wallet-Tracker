import {BtcClient} from '../../helper/CrpytoHttpClient'
import { CoinType }from '../../type/coinType'


// interface walletData {
//     address: string;
//     walletType:
//     //walletType:
// }




interface CryptoStrategy {
    walletInfo(cryptoPublicAddress: string): Promise<unknown>;
}

class BitcoinStrategy implements CryptoStrategy {
    clinet: BtcClient;
    constructor() {
        this.clinet = new BtcClient()
    }

    public walletInfo(data: string): Promise<unknown> {
        console.log(data);
        try {
            return Promise.all([
                this.clinet.getAddress(data),
                this.clinet.getTransaction(data)
            ]).then(data => {
                const [generalInfo, transaction] = data;
                console.log(data);

                return {
                    generalInfo,
                    transaction
                }
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