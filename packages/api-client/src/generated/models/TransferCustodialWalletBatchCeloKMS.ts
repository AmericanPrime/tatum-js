/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TransferCustodialWalletBatchCeloKMS = {
    /**
     * The blockchain to work with
     */
    chain: 'CELO';
    /**
     * The gas pump address that transfers the assets
     */
    custodialAddress: string;
    /**
     * The blockchain address that receives the assets
     */
    recipient: Array<string>;
    /**
     * The type of the assets to transfer. Set <code>0</code> for fungible tokens (ERC-20 or equivalent), <code>1</code> for NFTs (ERC-721 or equivalent), <code>2</code> for Multi Tokens (ERC-1155 or equivalent), or <code>3</code> for native blockchain currencies.
     */
    contractType: Array<0 | 1 | 2 | 3>;
    /**
     * <ul>
     * <li>
     * If the assets are fungible tokens, NFTs, or Multi Tokens, set this parameter to the array of the addresses of the tokens to transfer:<br/>
     * <code>"tokenAddress": ["0x782919AFc85eEA2cB736874225456bB5d3e242bA","0x74225456bB5d3e242bA782919AFc85eEA2cB7368",...,"0x3e242bA78274225456bB52cB7368d919AFc85eEA"]</code>
     * </li>
     * <li>
     * If the assets are a native blockchain currency, set this parameter to the array of zeros, a zero per currency:<br/>
     * <code>"tokenAddress": ["0","0",...,"0"]</code>
     * </li>
     * </ul>
     *
     */
    tokenAddress: Array<string>;
    /**
     * <ul>
     * <li>
     * If the assets are fungible tokens, Multi Tokens, or a native blockchain currency, set this parameter to the array of the amounts of the assets to transfer:<br/>
     * <code>"amount": ["100000","15000",...,"250000"]</code>
     * </li>
     * <li>
     * If the assets are NFTs, set this parameter to the array of zeros, a zero per NFT:<br/>
     * <code>"amount": ["0","0",...,"0"]</code>
     * </li>
     * </ul>
     *
     */
    amount: Array<string>;
    /**
     * <ul>
     * <li>
     * If the assets are Multi Tokens or NFTs, set this parameter to the array of the IDs of the tokens to transfer:<br/>
     * <code>"tokenId": ["12","13",...,"24"]</code>
     * </li>
     * <li>
     * If the assets are fungible tokens or a native blockchain currency, set this parameter to the array of zeros, a zero per fungible token/currency:<br/>
     * <code>"tokenId": ["0","0",...,"0"]</code>
     * </li>
     * </ul>
     *
     */
    tokenId: Array<string>;
    /**
     * The KMS identifier of the private key of the blockchain address that owns the gas pump address key ("master address")
     */
    signatureId: string;
    /**
     * (Only if the signature ID is mnemonic-based) The index of the specific address from the mnemonic
     */
    index?: number;
    /**
     * The currency to pay for the gas fee
     */
    feeCurrency: 'CELO' | 'CUSD' | 'CEUR';
    /**
     * The nonce to be set to the transfer transaction; if not present, the last known nonce will be used
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
