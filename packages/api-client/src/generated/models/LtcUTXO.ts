/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LtcUTXO = {
    /**
     * The version of the transaction
     */
    version?: number;
    /**
     * The height (number) of the block where the transaction is included in
     */
    height?: number;
    /**
     * The amount of the UTXO
     */
    value?: number;
    /**
     * Data generated by the spender; is almost always used as variables to satisfy the conditions in the pubkey script
     */
    script?: string;
    /**
     * The blockchain address of the UTXO owner
     */
    address?: string;
    /**
     * If set to "true", the transaction is a coinbase transaction (a transaction created by a Bitcoin miner to collect their reward)
     */
    coinbase?: boolean;
    /**
     * The hash of the transaction
     */
    hash?: string;
    /**
     * The index of the transaction output checked for the UTXO
     */
    index?: number;
}
