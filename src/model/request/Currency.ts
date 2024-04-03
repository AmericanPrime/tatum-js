export enum Currency {
  BTC = "BTC",
  BCH = "BCH",
  LTC = "LTC",
  CELO = "CELO",
  KLAY = "KLAY",
  ONE = "ONE",
  CUSD = "CUSD",
  CEUR = "CEUR",
  ETH = "ETH",
  ETC = "ETC",
  XRP = "XRP",
  XLM = "XLM",
  DOGE = "DOGE",
  VET = "VET",
  NEO = "NEO",
  BNB = "BNB",
  BSC = "BSC",
  CAKE = "CAKE",
  ZIL = "ZIL",
  BUSD_BSC = "BUSD_BSC",
  B2U_BSC = "B2U_BSC",
  BETH = "BETH",
  GAMEE = "GAMEE",
  BBTC = "BBTC",
  BADA = "BADA",
  RMD = "RMD",
  WBNB = "WBNB",
  BDOT = "BDOT",
  BXRP = "BXRP",
  BLTC = "BLTC",
  BBCH = "BBCH",
  MATIC = "MATIC",
  USDC_MATIC = "USDC_MATIC",
  USDC_MATIC_NATIVE = "USDC_MATIC_NATIVE",
  USDC_BSC = "USDC_BSC",
  USDC_SOL = "USDC_SOL",
  USDT = "USDT",
  GMC = "GMC",
  GMC_BSC = "GMC_BSC",
  FLOW = "FLOW",
  FUSD = "FUSD",
  USDT_TRON = "USDT_TRON",
  INRT_TRON = "INRT_TRON",
  TRON = "TRON",
  LEO = "LEO",
  LINK = "LINK",
  INTENT = "INTENT",
  EURTENT = "EURTENT",
  GOLDAX = "GOLDAX",
  LISK = "LISK",
  WBTC = "WBTC",
  UNI = "UNI",
  SOL = "SOL",
  FREE = "FREE",
  MKR = "MKR",
  USDC = "USDC",
  MATIC_ETH = "MATIC_ETH",
  BAT = "BAT",
  TUSD = "TUSD",
  BUSD = "BUSD",
  PAX = "PAX",
  PLTC = "PLTC",
  XCON = "XCON",
  REVV = "REVV",
  SAND = "SAND",
  MMY = "MMY",
  PAXG = "PAXG",
  HAG = "HAG",
  ADA = "ADA",
  XDC = "XDC",
  LATOKEN = "LATOKEN",
  USDT_MATIC = "USDT_MATIC",
  EGLD = "EGLD",
  ALGO = "ALGO",
  KCS = "KCS",
  COIIN = "COIIN",
  COIIN_BSC = "COIIN_BSC",
  GLMR = "GLMR",
  EOS = "EOS",
  AVAX = "AVAX",
  FTM = "FTM",
  ARB = "ARB",
  OPTIMISM = "OPTIMISM",
  NEAR = "NEAR",
  CRO = "CRO",
  RSK = "RSK",
  AURORA = "AURORA",
  GNO = "GNO",
  DOT = "DOT",
  KSM = "KSM",
  OASIS = "OASIS",
  PALM = "PALM",
  TEZOS = "TEZOS",
  ZCASH = "ZCASH",
  ZEC = "ZEC",
  ZEN = "ZEN",
  CHZ = "CHZ",
  ISLM = "ISLM",
  FLR = "FLR",
  BASE = "BASE",
  KADENA = "KADENA",
  ROSTRUM = "ROSTRUM",
}

export const ERC20_CURRENCIES = [
  Currency.USDT.toString(),
  Currency.LATOKEN.toString(),
  Currency.LEO.toString(),
  Currency.LINK.toString(),
  Currency.UNI.toString(),
  Currency.FREE.toString(),
  Currency.MKR.toString(),
  Currency.BUSD.toString(),
  Currency.USDC.toString(),
  Currency.MATIC_ETH.toString(),
  Currency.BAT.toString(),
  Currency.WBTC.toString(),
  Currency.TUSD.toString(),
  Currency.PAX.toString(),
  Currency.PAXG.toString(),
  Currency.PLTC.toString(),
  Currency.XCON.toString(),
  Currency.MMY.toString(),
  Currency.COIIN.toString(),
  Currency.REVV.toString(),
  Currency.SAND.toString(),
  Currency.GMC.toString(),
];

export const BEP20_CURRENCIES = [
  Currency.BETH.toString(),
  Currency.BBTC.toString(),
  Currency.RMD.toString(),
  Currency.USDC_BSC.toString(),
  Currency.COIIN_BSC.toString(),
  Currency.B2U_BSC.toString(),
  Currency.BADA.toString(),
  Currency.WBNB.toString(),
  Currency.GMC_BSC.toString(),
  Currency.BDOT.toString(),
  Currency.BXRP.toString(),
  Currency.BLTC.toString(),
  Currency.BBCH.toString(),
  Currency.HAG.toString(),
  Currency.CAKE.toString(),
  Currency.BUSD_BSC.toString(),
];

export const MATIC20_CURRENCIES = [
  Currency.USDC_MATIC.toString(),
  Currency.USDC_MATIC_NATIVE.toString(),
  Currency.GAMEE.toString(),
  Currency.INTENT.toString(),
  Currency.EURTENT.toString(),
  Currency.GOLDAX.toString(),
  Currency.USDT_MATIC.toString(),
];

export const ETH_BASED_CURRENCIES = [
  Currency.ETH.toString(),
  ...ERC20_CURRENCIES,
];

export const MATIC_BASED_CURRENCIES = [
  Currency.MATIC.toString(),
  ...MATIC20_CURRENCIES,
];

export const BSC_BASED_CURRENCIES = [
  Currency.BSC.toString(),
  ...BEP20_CURRENCIES,
];
