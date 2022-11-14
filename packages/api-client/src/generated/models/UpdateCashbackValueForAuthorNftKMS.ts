/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateCashbackValueForAuthorNftKMS = {
    /**
     * The blockchain to work with
     */
    chain: 'BSC' | 'ETH' | 'KCS' | 'KLAY' | 'MATIC' | 'ONE';
    /**
     * The ID of the NFT to update royalty information for
     */
    tokenId: string;
    /**
     * The blockchain address of the NFT to update royalty information for
     */
    contractAddress: string;
    /**
     * The new value of the royalty cashback to be set for the author of the NFT; to disable the royalties for the NFT completely, set this parameter to 0
     */
    cashbackValue: string;
    /**
     * The KMS identifier of the private key of the NFT author's address
     */
    signatureId: string;
    /**
     * (Only if the signature ID is mnemonic-based) The index of the NFT author's address that was generated from the mnemonic
     */
    index?: number;
    /**
     * The nonce to be set to the transaction; if not present, the last known nonce will be used
     */
    nonce?: number;
    /**
     * The custom defined fee; if not present, will be calculated automatically
     */
    fee?: {
        /**
         * Gas limit for transaction in gas price.
         */
        gasLimit: string;
        /**
         * Gas price in Gwei.
         */
        gasPrice: string;
    };
}
