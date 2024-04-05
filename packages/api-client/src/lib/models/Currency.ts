export enum Currency {
  BTC = 'BTC',
  AVAX = 'AVAX',
  FTM = 'FTM',
  REVV = 'REVV',
  SAND = 'SAND',
  ADA = 'ADA',
  BCH = 'BCH',
  BNB = 'BNB',
  LTC = 'LTC',
  ONE = 'ONE',
  ETH = 'ETH',
  ETC = 'ETC',
  EGLD = 'EGLD',
  MATIC = 'MATIC',
  GAMEE = 'GAMEE',
  MATIC_ETH = 'MATIC_ETH',
  USDC_MATIC = 'USDC_MATIC',
  USDC_MATIC_NATIVE = 'USDC_MATIC_NATIVE',
  USDC_BSC = 'USDC_BSC',
  USDC_SOL = 'USDC_SOL',
  RMD = 'RMD',
  GMC = 'GMC',
  GMC_BSC = 'GMC_BSC',
  CELO = 'CELO',
  COIIN = 'COIIN',
  COIIN_BSC = 'COIIN_BSC',
  CUSD = 'CUSD',
  CEUR = 'CEUR',
  FLOW = 'FLOW',
  FUSD = 'FUSD',
  BSC = 'BSC',
  XDC = 'XDC',
  DOGE = 'DOGE',
  XRP = 'XRP',
  XLM = 'XLM',
  USDT = 'USDT',
  TRON = 'TRON',
  LEO = 'LEO',
  LINK = 'LINK',
  LISK = 'LISK',
  FREE = 'FREE',
  MKR = 'MKR',
  USDC = 'USDC',
  UNI = 'UNI',
  BAT = 'BAT',
  TUSD = 'TUSD',
  PAX = 'PAX',
  PLTC = 'PLTC',
  XCON = 'XCON',
  MMY = 'MMY',
  PAXG = 'PAXG',
  VET = 'VET',
  HAG = 'HAG',
  BETH = 'BETH',
  BUSD = 'BUSD',
  BBTC = 'BBTC',
  BADA = 'BADA',
  WBNB = 'WBNB',
  BDOT = 'BDOT',
  BXRP = 'BXRP',
  BLTC = 'BLTC',
  BBCH = 'BBCH',
  CAKE = 'CAKE',
  BUSD_BSC = 'BUSD_BSC',
  B2U_BSC = 'B2U_BSC',
  WBTC = 'WBTC',
  USDT_TRON = 'USDT_TRON',
  USDT_MATIC = 'USDT_MATIC',
  LATOKEN = 'LATOKEN',
  INRT_TRON = 'INRT_TRON',
  ALGO = 'ALGO',
  SOL = 'SOL',
  KCS = 'KCS',
  NEO = 'NEO',
  KLAY = 'KLAY',
  EOS = 'EOS',
  ARB = 'ARB',
  OPTIMISM = 'OPTIMISM',
  NEAR = 'NEAR',
  CRO = 'CRO',
  RSK = 'RSK',
  AURORA = 'AURORA',
  GNO = 'GNO',
  DOT = 'DOT',
  KSM = 'KSM',
  OASIS = 'OASIS',
  TEZOS = 'TEZOS',
  PALM = 'PALM',
  GLMR = 'GLMR',
  INTENT = 'INTENT',
  EURTENT = 'EURTENT',
  GOLDAX = 'GOLDAX',
  ZCASH = 'ZCASH',
  ZEC = 'ZEC',
  ZIL = 'ZIL',
  ZEN = 'ZEN',
  CHZ = 'CHZ',
  ISLM = 'ISLM',
  FLR = 'FLR',
  BASE = 'BASE',
  KADENA = 'KADENA',
  ROSTRUM = 'ROSTRUM',
  ATOM = 'ATOM',
}

export const ERC20_CURRENCIES = [
  Currency.USDT,
  Currency.LEO,
  Currency.LINK,
  Currency.UNI,
  Currency.MATIC_ETH,
  Currency.BUSD,
  Currency.SAND,
  Currency.REVV,
  Currency.LATOKEN,
  Currency.COIIN,
  Currency.FREE,
  Currency.XCON,
  Currency.MKR,
  Currency.USDC,
  Currency.BAT,
  Currency.GMC,
  Currency.TUSD,
  Currency.PAX,
  Currency.PLTC,
  Currency.MMY,
  Currency.PAXG,
  Currency.WBTC,
]

export const BEP20_CURRENCIES = [
  Currency.BETH,
  Currency.BBTC,
  Currency.RMD,
  Currency.USDC_BSC,
  Currency.COIIN_BSC,
  Currency.B2U_BSC,
  Currency.BADA,
  Currency.WBNB,
  Currency.GMC_BSC,
  Currency.BDOT,
  Currency.BXRP,
  Currency.BLTC,
  Currency.BBCH,
  Currency.HAG,
  Currency.CAKE,
  Currency.BUSD_BSC,
]

export const NATIVE_CURRENCIES = [
  Currency.BTC,
  Currency.ONE,
  Currency.ADA,
  Currency.BNB,
  Currency.FLOW,
  Currency.BSC,
  Currency.XDC,
  Currency.LTC,
  Currency.DOGE,
  Currency.TRON,
  Currency.BCH,
  Currency.ETH,
  Currency.XRP,
  Currency.XLM,
  Currency.CELO,
  Currency.MATIC,
  Currency.VET,
  Currency.EGLD,
  Currency.ALGO,
  Currency.SOL,
  Currency.KCS,
  Currency.KLAY,
]

export const TRON_CURRENCIES = [Currency.TRON, Currency.USDT_TRON, Currency.INRT_TRON]
export const FLOW_CURRENCIES = [Currency.FLOW, Currency.FUSD]
export const CELO_CURRENCIES = [Currency.CELO, Currency.CEUR, Currency.CUSD]

export const MATIC20_CURRENCIES = [
  Currency.USDC_MATIC,
  Currency.USDC_MATIC_NATIVE,
  Currency.GAMEE,
  Currency.USDT_MATIC,
  Currency.INTENT,
  Currency.EURTENT,
  Currency.GOLDAX,
]

export const ETH_BASED_CURRENCIES = [Currency.ETH, ...ERC20_CURRENCIES]

export const MATIC_BASED_CURRENCIES = [Currency.MATIC, ...MATIC20_CURRENCIES]

export const BSC_BASED_CURRENCIES = [Currency.BSC, ...BEP20_CURRENCIES]

export const NFT_SUPPORTED_CURRENCIES = [
  Currency.ETH,
  Currency.MATIC,
  Currency.KCS,
  Currency.ONE,
  Currency.CELO,
  Currency.TRON,
  Currency.FLOW,
  Currency.BSC,
  Currency.KLAY,
]

export type NftSupportedCurrencies = (typeof NFT_SUPPORTED_CURRENCIES)[number]
export type NativeCurrency = (typeof NATIVE_CURRENCIES)[number]
