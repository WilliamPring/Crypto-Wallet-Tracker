import {BtcClient} from '../../helper/CrpytoHttpClient'

interface CryptoStrategy {
    walletInfo(cryptoPublicAddress: string): unknown;
}

class BitcoinStrategy implements CryptoStrategy {
    clinet: BtcClient;
    constructor() {
        this.clinet = new BtcClient()
    }

    public walletInfo(data: string): unknown {
        return Promise.all([
            this.clinet.getAddress(data),
            this.clinet.getTransaction(data)
        ]).then(data => {
            const [generalInfo, transaction] = data;
            return {
                generalInfo,
                transaction
            }
        })
    }
}

class EthStrategy implements CryptoStrategy {
    public walletInfo(data: string): string[] {
        return data.sort();
    }
}

export const cryptoStrategy = {
    BTC: new BitcoinStrategy(),
    ETH: new EthStrategy()
}