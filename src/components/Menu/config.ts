import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Buy GAJ',
    icon: 'TradeIcon',
    href: 'https://quickswap.exchange/#/swap?inputCurrency=0xf4b0903774532aee5ee567c02aab681a81539e92'
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
    label: 'Roadmap',
    icon: 'RoadmapIcon',
    href: 'https://docs.polygaj.finance/roadmap',
  },
]

export default config
