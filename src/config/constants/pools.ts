import { PoolCategory, PoolConfig, QuoteToken } from './types'

const pools: PoolConfig[] = [
  // {
  //   sousId: 0,
  //   tokenName: 'CAKE',
  //   stakingTokenName: QuoteToken.CAKE,
  //   stakingTokenAddress: {
  //     97: '0x85582d24455caaf44fc4f914bdca2a6cb73e6681',
  //     56: '0x2849b1aE7E04A3D9Bc288673A92477CF63F28aF4', // CAKE
  //   },
  //   contractAddress: {
  //     97: '0x9FcA113B2D4E64462229E107A8F4Aa7359D055F5',
  //     56: '0xfC2BA5B6Ec7A5Fe68546fC8fB55A915b5CA5E261', // SmartChef
  //   },
  //   rewardTokenAddress: {
  //     97: '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee', // BUSD, didnt find CAKE
  //     56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82', // CAKE
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://pancakeswap.finance/',
  //   harvest: true,
  //   tokenPerBlock: '0.00295',
  //   sortOrder: 1,
  //   isFinished: true,
  //   tokenDecimals: 18,
  //   burnFee: 0,
  // },
  // {
  //   sousId: 1,
  //   tokenName: 'WBNB',
  //   stakingTokenName: QuoteToken.CAKE,
  //   stakingTokenAddress: {
  //     97: '0x85582d24455caaf44fc4f914bdca2a6cb73e6681',
  //     56: '0x2849b1aE7E04A3D9Bc288673A92477CF63F28aF4', // CAKE
  //   },
  //   contractAddress: {
  //     97: '0xF08d05d91426A63aB35Ef7f4bBC6E8717B59e838',
  //     56: '0x8eAFF0bF4C7e8a9aA3cFe13e2B4533D23251fdaF', // SmartChef
  //   },
  //   rewardTokenAddress: {
  //     97: '0xec5dcb5dbf4b114c9d0f65bccab49ec54f6a0867', // DAI, didnt had WBNB
  //     56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', // WBNB
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://binance.com/',
  //   harvest: true,
  //   tokenPerBlock: '0.0001736111111',
  //   sortOrder: 2,
  //   isFinished: true,
  //   tokenDecimals: 18,
  //   burnFee: 0,
  // },
  // {
  //   sousId: 2,
  //   tokenName: 'SLME',
  //   stakingTokenName: QuoteToken.CAKE,
  //   stakingTokenAddress: {
  //     97: '0x85582d24455caaf44fc4f914bdca2a6cb73e6681',
  //     56: '0x2849b1aE7E04A3D9Bc288673A92477CF63F28aF4', // CAKE
  //   },
  //   contractAddress: {
  //     97: '0xF08d05d91426A63aB35Ef7f4bBC6E8717B59e838',
  //     56: '0xFC4A74E326F34dA2954F8B0De39A759e14B5472f', // SmartChef
  //   },
  //   rewardTokenAddress: {
  //     97: '0xec5dcb5dbf4b114c9d0f65bccab49ec54f6a0867', // DAI, didnt had SLIME
  //     56: '0x4fcfa6cc8914ab455b5b33df916d90bfe70b6ab1', // SLIME
  //   },
  //   poolCategory: PoolCategory.COMMUNITY,
  //   projectLink: 'https://slime.finance/',
  //   harvest: true,
  //   tokenPerBlock: '0.00496031746',
  //   sortOrder: 3,
  //   isFinished: true,
  //   tokenDecimals: 18,
  //   burnFee: 0,
  // },
  // {
  //   sousId: 3,
  //   tokenName: 'BUSD',
  //   stakingTokenName: QuoteToken.CAKE,
  //   stakingTokenAddress: {
  //     97: '0x85582d24455caaf44fc4f914bdca2a6cb73e6681',
  //     56: '0x2849b1aE7E04A3D9Bc288673A92477CF63F28aF4', // CAKE
  //   },
  //   contractAddress: {
  //     97: '0xF08d05d91426A63aB35Ef7f4bBC6E8717B59e838',
  //     56: '0x1495989d4592c7e94fe1E9448A172894f179956E', // SmartChef
  //   },
  //   rewardTokenAddress: {
  //     97: '0xec5dcb5dbf4b114c9d0f65bccab49ec54f6a0867', // DAI
  //     56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // BUSD
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://binance.com/',
  //   harvest: true,
  //   tokenPerBlock: '0.694',
  //   sortOrder: 4,
  //   isFinished: true,
  //   tokenDecimals: 18,
  //   burnFee: 0,
  // },
  // {
  //   sousId: 4,
  //   tokenName: 'EGG',
  //   stakingTokenName: QuoteToken.CAKE,
  //   stakingTokenAddress: {
  //     97: '0x85582d24455caaf44fc4f914bdca2a6cb73e6681',
  //     56: '0x2849b1aE7E04A3D9Bc288673A92477CF63F28aF4', // CAKE
  //   },
  //   contractAddress: {
  //     97: '0xF08d05d91426A63aB35Ef7f4bBC6E8717B59e838',
  //     56: '0x2974b4aECbEc5FFEA565E7Ef47395429f44D0c81', // SmartChef
  //   },
  //   rewardTokenAddress: {
  //     97: '0xec5dcb5dbf4b114c9d0f65bccab49ec54f6a0867', // DAI
  //     56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6', // EGG
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://goosedefi.com',
  //   harvest: true,
  //   tokenPerBlock: '0.002624734287',
  //   sortOrder: 5,
  //   isFinished: true,
  //   tokenDecimals: 18,
  //   burnFee: 0,
  // },
  // {
  //   sousId: 5,
  //   tokenName: 'BREW',
  //   stakingTokenName: QuoteToken.CAKE,
  //   stakingTokenAddress: {
  //     97: '0x85582d24455caaf44fc4f914bdca2a6cb73e6681',
  //     56: '0x2849b1aE7E04A3D9Bc288673A92477CF63F28aF4', // CAKE
  //   },
  //   contractAddress: {
  //     97: '0xF08d05d91426A63aB35Ef7f4bBC6E8717B59e838',
  //     56: '0x88d2fb892c9577Ecb542EF6860AF13524e668b02', // SmartChef
  //   },
  //   rewardTokenAddress: {
  //     97: '0xec5dcb5dbf4b114c9d0f65bccab49ec54f6a0867', // DAI
  //     56: '0x790be81c3ca0e53974be2688cdb954732c9862e1', // BREW
  //   },
  //   poolCategory: PoolCategory.COMMUNITY,
  //   projectLink: 'https://cafeswap.finance/',
  //   harvest: true,
  //   tokenPerBlock: '0.005006944444',
  //   sortOrder: 6,
  //   isFinished: true,
  //   tokenDecimals: 18,
  //   burnFee: 0,
  // },
  // {
  //   sousId: 6,
  //   tokenName: 'BUSD',
  //   stakingTokenName: QuoteToken.CAKE,
  //   stakingTokenAddress: {
  //     97: '0x85582d24455caaf44fc4f914bdca2a6cb73e6681',
  //     56: '0x2849b1aE7E04A3D9Bc288673A92477CF63F28aF4', // CAKE
  //   },
  //   contractAddress: {
  //     97: '0xF08d05d91426A63aB35Ef7f4bBC6E8717B59e838',
  //     56: '0x36e3BC1E58B409160A191784E21327ACA6AcBc5C', // SmartChef
  //   },
  //   rewardTokenAddress: {
  //     97: '0xec5dcb5dbf4b114c9d0f65bccab49ec54f6a0867', // DAI
  //     56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // BUSD
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://binance.com/',
  //   harvest: true,
  //   tokenPerBlock: '0.3863194444',
  //   sortOrder: 7,
  //   isFinished: true,
  //   tokenDecimals: 18,
  //   burnFee: 5,
  // },
  // {
  //   sousId: 7,
  //   tokenName: 'BTCB',
  //   stakingTokenName: QuoteToken.CAKE,
  //   stakingTokenAddress: {
  //     97: '0x85582d24455caaf44fc4f914bdca2a6cb73e6681',
  //     56: '0x2849b1aE7E04A3D9Bc288673A92477CF63F28aF4', // CAKE
  //   },
  //   contractAddress: {
  //     97: '0xF08d05d91426A63aB35Ef7f4bBC6E8717B59e838',
  //     56: '0xe2f75e1e327331c41a206D187f4D08F75FA9bF17', // SmartChef
  //   },
  //   rewardTokenAddress: {
  //     97: '0xec5dcb5dbf4b114c9d0f65bccab49ec54f6a0867', // DAI
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c', // BTCB
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://binance.com/',
  //   harvest: true,
  //   tokenPerBlock: '0.000006944444444',
  //   sortOrder: 8,
  //   isFinished: true,
  //   tokenDecimals: 18,
  //   burnFee: 5,
  // },
  // {
  //   sousId: 8,
  //   tokenName: 'CTC',
  //   stakingTokenName: QuoteToken.CAKE,
  //   stakingTokenAddress: {
  //     97: '0xa0286abcdf5ac136cdbea4fecea0f83c093e5107',
  //     56: '0x2849b1aE7E04A3D9Bc288673A92477CF63F28aF4', // CAKE
  //   },
  //   contractAddress: {
  //     97: '0xFD8fa2A7a5DebB757C1CDe08B113DF395A774160', // test ctc
  //     56: '0x85f27A63cFb4Dc5a36d7Eb5EF8620D343817e156', // SmartChef
  //   },
  //   rewardTokenAddress: {
  //     97: '0xAA8Af527961533Ba61CeF965ED750060d459a918', // FAKECTC
  //     56: '0xb7F80a74aaA4FD30a3EE7C03FDe3DC88e6002C12', // CTC
  //   },
  //   poolCategory: PoolCategory.COMMUNITY,
  //   projectLink: 'https://www.cryptocoinctc.org/',
  //   harvest: true,
  //   tokenPerBlock: '0.8680538',
  //   sortOrder: 9,
  //   isFinished: true,
  //   tokenDecimals: 8,
  //   burnFee: 0,
  // },
  // {
  //   sousId: 9,
  //   tokenName: 'BUSD',
  //   stakingTokenName: QuoteToken.CAKE,
  //   stakingTokenAddress: {
  //     97: '0x85582d24455caaf44fc4f914bdca2a6cb73e6681',
  //     56: '0x2849b1aE7E04A3D9Bc288673A92477CF63F28aF4', // CAKE
  //   },
  //   contractAddress: {
  //     97: '0xF08d05d91426A63aB35Ef7f4bBC6E8717B59e838',
  //     56: '0xc44E823f72f6d038BC255cD82A48B3942B00c2Ef', // SmartChef
  //   },
  //   rewardTokenAddress: {
  //     97: '0xec5dcb5dbf4b114c9d0f65bccab49ec54f6a0867', // DAI
  //     56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // BUSD
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://binance.com/',
  //   harvest: true,
  //   tokenPerBlock: '0.1736111111',
  //   sortOrder: 10,
  //   isFinished: true,
  //   tokenDecimals: 18,
  //   burnFee: 10,
  // },
  // {
  //   sousId: 10,
  //   tokenName: 'CTC',
  //   stakingTokenName: QuoteToken.CAKE,
  //   stakingTokenAddress: {
  //     97: '0xa0286abcdf5ac136cdbea4fecea0f83c093e5107',
  //     56: '0x2849b1aE7E04A3D9Bc288673A92477CF63F28aF4', // CAKE
  //   },
  //   contractAddress: {
  //     97: '0xFD8fa2A7a5DebB757C1CDe08B113DF395A774160', // test ctc
  //     56: '0xf1eFc9e49EB1805AEd72917a0479bddFB5560d32', // SmartChef
  //   },
  //   rewardTokenAddress: {
  //     97: '0xAA8Af527961533Ba61CeF965ED750060d459a918', // FAKECTC
  //     56: '0xb7F80a74aaA4FD30a3EE7C03FDe3DC88e6002C12', // CTC
  //   },
  //   poolCategory: PoolCategory.COMMUNITY,
  //   projectLink: 'https://www.cryptocoinctc.org/',
  //   harvest: true,
  //   tokenPerBlock: '0.8680538',
  //   sortOrder: 11,
  //   isFinished: true,
  //   tokenDecimals: 8,
  //   burnFee: 0,
  // },
  // {
  //   sousId: 11,
  //   tokenName: 'CAKE',
  //   stakingTokenName: QuoteToken.CAKE,
  //   stakingTokenAddress: {
  //     97: '0x85582d24455caaf44fc4f914bdca2a6cb73e6681',
  //     56: '0x2849b1aE7E04A3D9Bc288673A92477CF63F28aF4', // CAKE
  //   },
  //   contractAddress: {
  //     97: '0x9FcA113B2D4E64462229E107A8F4Aa7359D055F5',
  //     56: '0x0A30d83b4396F34b25EB1956a79FabB5d3BaB931', // SmartChef
  //   },
  //   rewardTokenAddress: {
  //     97: '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee', // BUSD, didnt find CAKE
  //     56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82', // CAKE
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://pancakeswap.finance/',
  //   harvest: true,
  //   tokenPerBlock: '0.003681388889',
  //   sortOrder: 12,
  //   isFinished: true,
  //   tokenDecimals: 18,
  //   burnFee: 15,
  // },
  // {
  //   sousId: 12,
  //   tokenName: 'WBNB',
  //   stakingTokenName: QuoteToken.CAKE,
  //   stakingTokenAddress: {
  //     97: '0x85582d24455caaf44fc4f914bdca2a6cb73e6681',
  //     56: '0x2849b1aE7E04A3D9Bc288673A92477CF63F28aF4', // CAKE
  //   },
  //   contractAddress: {
  //     97: '0xF08d05d91426A63aB35Ef7f4bBC6E8717B59e838',
  //     56: '0xA5e2C1ABc73F411180e0a2371a3A546B402A96F9', // SmartChef
  //   },
  //   rewardTokenAddress: {
  //     97: '0xec5dcb5dbf4b114c9d0f65bccab49ec54f6a0867', // DAI, didnt had WBNB
  //     56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', // WBNB
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://binance.com/',
  //   harvest: true,
  //   tokenPerBlock: '0.00005541666667',
  //   sortOrder: 13,
  //   isFinished: true,
  //   tokenDecimals: 18,
  //   burnFee: 15,
  // },
  // {
  //   sousId: 13,
  //   tokenName: 'BLUE',
  //   stakingTokenName: QuoteToken.SALTBLUE,
  //   stakingTokenAddress: {
  //     97: '0x85582d24455caaf44fc4f914bdca2a6cb73e6681',
  //     56: '0xc7953f27b4b7049e41c3c10354e995870cb8e109', // CAKE-BLUE
  //   },
  //   contractAddress: {
  //     97: '0xF08d05d91426A63aB35Ef7f4bBC6E8717B59e838',
  //     56: '0xdF62141c12f54B17B7e6F158eD36629856E74C97', // SmartChef
  //   },
  //   rewardTokenAddress: {
  //     97: '0xec5dcb5dbf4b114c9d0f65bccab49ec54f6a0867', // DAI, didnt had WBNB
  //     56: '0x36C0556c2B15aED79F842675Ff030782738eF9e8', // BLUE
  //   },
  //   poolCategory: PoolCategory.COMMUNITY,
  //   projectLink: 'https://blueswap.finance/',
  //   harvest: true,
  //   tokenPerBlock: '0.005787037037',
  //   sortOrder: 14,
  //   isFinished: true,
  //   tokenDecimals: 18,
  //   burnFee: 0,
  // },
  // {
  //   sousId: 14,
  //   tokenName: 'SLME',
  //   stakingTokenName: QuoteToken.SALTSLME,
  //   stakingTokenAddress: {
  //     97: '0x85582d24455caaf44fc4f914bdca2a6cb73e6681',
  //     56: '0xbea4674a61cccc6b735999511ba9a8ba3aa26a85', // CAKE-slime
  //   },
  //   contractAddress: {
  //     97: '0xF08d05d91426A63aB35Ef7f4bBC6E8717B59e838',
  //     56: '0xD4A55D437Da5753da2f937518Fd797f5d2211E1c', // SmartChef
  //   },
  //   rewardTokenAddress: {
  //     97: '0xec5dcb5dbf4b114c9d0f65bccab49ec54f6a0867', // DAI, didnt had SLIME
  //     56: '0x4fcfa6cc8914ab455b5b33df916d90bfe70b6ab1', // SLIME
  //   },
  //   poolCategory: PoolCategory.COMMUNITY,
  //   projectLink: 'https://slime.finance/',
  //   harvest: true,
  //   tokenPerBlock: '.002899305556',
  //   sortOrder: 15,
  //   isFinished: true,
  //   tokenDecimals: 18,
  //   burnFee: 30,
  // },
  // {
  //   sousId: 15,
  //   tokenName: 'BUSD',
  //   stakingTokenName: QuoteToken.SALTBUSD,
  //   stakingTokenAddress: {
  //     97: '0x85582d24455caaf44fc4f914bdca2a6cb73e6681',
  //     56: '0x6596f770786915556C47E301cC8290aa14288d99', // CAKE-BUSD
  //   },
  //   contractAddress: {
  //     97: '0xF08d05d91426A63aB35Ef7f4bBC6E8717B59e838',
  //     56: '0x94fcecEdBe1050d079c60b1EDeb1D4D16B3BF76C', // SmartChef
  //   },
  //   rewardTokenAddress: {
  //     97: '0xec5dcb5dbf4b114c9d0f65bccab49ec54f6a0867', // DAI
  //     56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // BUSD
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://binance.com/',
  //   harvest: true,
  //   tokenPerBlock: '0.01261865625',
  //   sortOrder: 16,
  //   isFinished: true,
  //   tokenDecimals: 18,
  //   burnFee: 100,
  // },
  // {
  //   sousId: 16,
  //   tokenName: 'MOMO',
  //   stakingTokenName: QuoteToken.SALTMOMO,
  //   stakingTokenAddress: {
  //     97: '0x85582d24455caaf44fc4f914bdca2a6cb73e6681',
  //     56: '0x2e63a08ca1ab08a3f1eb0ca0d3f0a1a4278dfa8f', // CAKE-MOMO
  //   },
  //   contractAddress: {
  //     97: '0xF08d05d91426A63aB35Ef7f4bBC6E8717B59e838',
  //     56: '0xb72893D5ABFce5940F3f8F401eFCdb2A95E5f7c7', // SmartChef
  //   },
  //   rewardTokenAddress: {
  //     97: '0xec5dcb5dbf4b114c9d0f65bccab49ec54f6a0867', // DAI
  //     56: '0xafb2997fe9a99022e61c7e01b974e0e3d7704b02', // MOMO
  //   },
  //   poolCategory: PoolCategory.COMMUNITY,
  //   projectLink: 'https://momoprotocol.finance/#/',
  //   harvest: true,
  //   tokenPerBlock: '0.01157407407',
  //   sortOrder: 16,
  //   isFinished: false,
  //   tokenDecimals: 18,
  //   burnFee: 5,
  // },
  // {
  //   sousId: 17,
  //   tokenName: 'PALM',
  //   stakingTokenName: QuoteToken.SALTPALM,
  //   stakingTokenAddress: {
  //     97: '0x85582d24455caaf44fc4f914bdca2a6cb73e6681',
  //     56: '0x34951e9ca4891b4264a6cb9850e0b85a850414e5', // CAKE-PALM
  //   },
  //   contractAddress: {
  //     97: '0xF08d05d91426A63aB35Ef7f4bBC6E8717B59e838',
  //     56: '0x42187c7eada603198165c2B95EA237865036BEd1', // SmartChef
  //   },
  //   rewardTokenAddress: {
  //     97: '0xec5dcb5dbf4b114c9d0f65bccab49ec54f6a0867', // DAI
  //     56: '0x9768E5b2d8e761905BC81Dfc554f9437A46CdCC6', // PALM
  //   },
  //   poolCategory: PoolCategory.COMMUNITY,
  //   projectLink: 'https://yieldbay.finance',
  //   harvest: true,
  //   tokenPerBlock: '0.00744047619',
  //   sortOrder: 16,
  //   isFinished: true,
  //   tokenDecimals: 18,
  //   burnFee: 10,
  // },
  // {
  //   sousId: 18,
  //   tokenName: 'CAKE',
  //   stakingTokenName: QuoteToken.CAKE,
  //   stakingTokenAddress: {
  //     97: '0x85582d24455caaf44fc4f914bdca2a6cb73e6681',
  //     56: '0x2849b1aE7E04A3D9Bc288673A92477CF63F28aF4', // CAKE
  //   },
  //   contractAddress: {
  //     97: '0x9FcA113B2D4E64462229E107A8F4Aa7359D055F5',
  //     56: '0x59f2B754944e78f849E03db39273da9251ADbF0E', // SmartChef
  //   },
  //   rewardTokenAddress: {
  //     97: '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee', // BUSD, didnt find CAKE
  //     56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82', // CAKE
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://pancakeswap.finance/',
  //   harvest: true,
  //   tokenPerBlock: '0.001191340278',
  //   sortOrder: 17,
  //   isFinished: true,
  //   tokenDecimals: 18,
  //   burnFee: 15,
  // },
  // {
  //   sousId: 19,
  //   tokenName: 'MCH',
  //   stakingTokenName: QuoteToken.SALTMCH,
  //   stakingTokenAddress: {
  //     97: '0x85582d24455caaf44fc4f914bdca2a6cb73e6681',
  //     56: '0xf09a33f69c7f9a19f87c53469b52665ec4e1c97b', // CAKE-MCH
  //   },
  //   contractAddress: {
  //     97: '0x9FcA113B2D4E64462229E107A8F4Aa7359D055F5',
  //     56: '0x01c1e411D447e9d18D95C05408A7e765Ec308D48', // SmartChef
  //   },
  //   rewardTokenAddress: {
  //     97: '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee', // BUSD, didnt find CAKE
  //     56: '0x46483f3a766ae2c0c811ff953ac3dc69a3a20968', // MCH
  //   },
  //   poolCategory: PoolCategory.COMMUNITY,
  //   projectLink: 'https://magnifico-chef-git-main-chefmagnifico.vercel.app/',
  //   harvest: true,
  //   tokenPerBlock: '0.0162037037',
  //   sortOrder: 18,
  //   isFinished: true,
  //   tokenDecimals: 18,
  //   burnFee: 10,
  // },
  {
    sousId: 20,
    tokenName: 'WMATIC',
    stakingTokenName: QuoteToken.GAJ,
    stakingTokenAddress: {
      137: '0xF4B0903774532AEe5ee567C02aaB681a81539e92',
      97: '',
      56: '', // GAJ
    },
    contractAddress: {
      137: '0x5ED37920412415B1d2F0F25e44776F0BE709B4e3',
      97: '',
      56: '', // SmartChef
    },
    rewardTokenAddress: {
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      97: '', // DAI, didnt had WBNB
      56: '', // WMATIC
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://polygon.technology/',
    harvest: true,
    tokenPerBlock: '0.0165343915343915',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    burnFee: 100,
    weeklyroi: '~ 60%'
  }, 
  {
    sousId: 21,
    tokenName: 'ELK',
    stakingTokenName: QuoteToken.GAJ,
    stakingTokenAddress: {
      137: '0xF4B0903774532AEe5ee567C02aaB681a81539e92',
      97: '',
      56: '', // GAJ
    },
    contractAddress: {
      137: '0x85Ac6e29ee5Ab7665701CfdCC443dF50d5E67e74',
      97: '',
      56: '', // SmartChef
    },
    rewardTokenAddress: {
      137: '0xE1C8f3d529BEa8E3fA1FAC5B416335a2f998EE1C', // ELK
      97: '', // DAI, didnt had WBNB
      56: '', // WMATIC
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://elk.finance/',
    harvest: true,
    tokenPerBlock: '0.002662037037037',
    sortOrder: 2,
    isFinished: false,
    tokenDecimals: 18,
    burnFee: 100,
    weeklyroi: 'Starting Saturday 13:30 UTC'
  },
]

export default pools
