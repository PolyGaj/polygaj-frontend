import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Buy',
        href: '/buy',
      },
      {
        label: 'Liquidity',
        href: '/liquidity',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },

  {
    label: 'Jungle Pools',
    icon: 'PoolIcon',
    href: '/junglepools',
  },
  {
    label: 'Launchpad (IDO)',
    icon: 'IfoIcon',
    href: '/ido',
  },
  {
    label: 'NFT Marketplace',
    icon: 'NftIcon',
    href: '/nft',
  },
  {
    label: 'King of Elephants',
    icon: 'NftIcon',
    href: '/kingofelephants'
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'QuickSwap Chart',
        href: 'https://info.quickswap.exchange/token/0xF4B0903774532AEe5ee567C02aaB681a81539e92',
      },
      {
        label: 'Polygon Explorer',
        href: 'https://explorer-mainnet.maticvigil.com/tokens/0xF4B0903774532AEe5ee567C02aaB681a81539e92',
      },
      {
        label: 'Dapp Radar',
        href: 'https://dappradar.com/polygon/defi/polygaj-finance'
      },
      {
        label: 'Dapp.com',
        href: 'https://www.dapp.com/app/polygaj-network'
      },
      {
        label: 'GAJ Chart',
        href: 'https://quickchart.app/token/0xF4B0903774532AEe5ee567C02aaB681a81539e92'
      }
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/polygaj",
      },
      {
        label: "Blog",
        href: "https://polygaj.medium.com",
      },
      {
        label: "Docs",
        href: "https://docs.polygaj.finance/",
      },
    ],
  },
  {
    label: "Roadmap",
    icon: "RoadmapIcon",
    href: 'https://docs.polygaj.finance/roadmap',
  },
  {
    label: "Collab",
    icon: "HandshakeIcon",
    href: 'https://t.me/polygajhead',
  }
]

export default config
