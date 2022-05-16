import { Blockchain } from '@tatumio/shared-core'
import { btcBasedSdk } from '@tatumio/shared-blockchain-btc-based'
import { BitcoinService } from '@tatumio/api-client'
import { btcTransactions } from './transaction/btc.tx'
import { SDKArguments } from '@tatumio/shared-abstract-sdk'

const blockchain = Blockchain.BTC

export const TatumBtcSDK = (args: SDKArguments) => {
  return {
    ...btcBasedSdk({ ...args, blockchain }),
    transaction: btcTransactions(),
    blockchain: {
      mempool: BitcoinService.btcGetMempool,
      broadcast: BitcoinService.btcBroadcast,
      info: BitcoinService.btcGetBlockChainInfo,
      getBlockHash: BitcoinService.btcGetBlockHash,
      getBlock: BitcoinService.btcGetBlock,
      getUTXO: BitcoinService.btcGetUtxo,
      getBlockchainAccountBalance: BitcoinService.btcGetBalanceOfAddress,
      getTransaction: BitcoinService.btcGetRawTransaction,
      getTransactionsByAddress: BitcoinService.btcGetTxByAddress,
      sendTransaction: BitcoinService.btcTransferBlockchain,
    },
  }
}
