/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomFee } from './CustomFee';

export type ChainDeployCeloErc20KMS = {
    /**
     * The blockchain to work with
     */
    chain: 'CELO';
    /**
     * Symbol of the ERC20 token
     */
    symbol: string;
    /**
     * Name of the ERC20 token
     */
    name: string;
    /**
     * Max supply of ERC20 token.
     */
    totalCap?: string;
    /**
     * Max supply of ERC20 token.
     */
    supply: string;
    /**
     * Number of decimal points
     */
    digits: number;
    /**
     * Address on Ethereum blockchain, where all created ERC20 tokens will be transferred.
     */
    address: string;
    /**
     * Identifier of the private key associated in signing application. Private key, or signature Id must be present.
     */
    signatureId: string;
    /**
     * The nonce to be set to the transaction; if not present, the last known nonce will be used
     */
    nonce?: number;
    /**
     * The currency in which the transaction fee will be paid
     */
    feeCurrency: 'CELO' | 'CUSD' | 'CEUR';
    fee?: CustomFee;
}
