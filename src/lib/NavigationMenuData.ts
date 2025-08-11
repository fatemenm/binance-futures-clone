import type { NavigationMenuItem } from "./Definitions";
import tradersLeagueIcon from "../assets/icons/traders-league.svg";
import LUDUSDTIcon from "../assets/icons/ldusdt.svg";
import futuresMastersArenaIcon from "../assets/icons/futures-masters-arena.svg";
import bfusdIcon from "../assets/icons/bfusd.svg";
import futuresPresentIcon from "../assets/icons/futures-present.svg";

const baseCurrencyUrl =
  "https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons/svg/color";
const baseBinanceFuturesUrl = "https://www.binance.com/en/futures/";

export const navigationMenuData: NavigationMenuItem[] = [
  {
    type: "submenu",
    title: "Futures",
    items: [
      {
        title: "USDT Perpetual",
        items: [
          {
            title: "AAVEUSDT",
            icon: { src: baseCurrencyUrl + "/aave.svg" },
            url: baseBinanceFuturesUrl + "AAVEUSDT",
          },
          {
            title: "ADAUSDT",
            icon: { src: baseCurrencyUrl + "/ada.svg" },
            url: baseBinanceFuturesUrl + "ADAUSDT",
          },
          {
            title: "ATOMUSDT",
            icon: { src: baseCurrencyUrl + "/atom.svg" },
            url: baseBinanceFuturesUrl + "ATOMUSDT",
          },
          {
            title: "AVAXUSDT",
            icon: { src: baseCurrencyUrl + "/avax.svg" },
            url: baseBinanceFuturesUrl + "AVAXUSDT",
          },
          {
            title: "BNBUSDT",
            icon: { src: baseCurrencyUrl + "/bnb.svg" },
            url: baseBinanceFuturesUrl + "BNBUSDT",
          },
          {
            title: "BTCUSDT",
            icon: { src: baseCurrencyUrl + "/btc.svg" },
            url: baseBinanceFuturesUrl + "BTCUSDT",
          },
          {
            title: "CHZUSDT",
            icon: { src: baseCurrencyUrl + "/chz.svg" },
            url: baseBinanceFuturesUrl + "CHZUSDT",
          },
          {
            title: "DOGEUSDT",
            icon: { src: baseCurrencyUrl + "/doge.svg" },
            url: baseBinanceFuturesUrl + "DOGEUSDT",
          },
          {
            title: "DOTUSDT",
            icon: { src: baseCurrencyUrl + "/dot.svg" },
            url: baseBinanceFuturesUrl + "DOTUSDT",
          },
          {
            title: "EOSUSDT",
            icon: { src: baseCurrencyUrl + "/eos.svg" },
            url: baseBinanceFuturesUrl + "EOSUSDT",
          },
          {
            title: "ETHUSDT",
            icon: { src: baseCurrencyUrl + "/eth.svg" },
            url: baseBinanceFuturesUrl + "ETHUSDT",
          },
          {
            title: "FILUSDT",
            icon: { src: baseCurrencyUrl + "/fil.svg" },
            url: baseBinanceFuturesUrl + "FILUSDT",
          },
          {
            title: "ICPUSDT",
            icon: { src: baseCurrencyUrl + "/icp.svg" },
            url: baseBinanceFuturesUrl + "ICPUSDT",
          },
          {
            title: "LINKUSDT",
            icon: { src: baseCurrencyUrl + "/link.svg" },
            url: baseBinanceFuturesUrl + "LINKUSDT",
          },
          {
            title: "LTCUSDT",
            icon: { src: baseCurrencyUrl + "/ltc.svg" },
            url: baseBinanceFuturesUrl + "LTCUSDT",
          },
          {
            title: "MATICUSDT",
            icon: { src: baseCurrencyUrl + "/matic.svg" },
            url: baseBinanceFuturesUrl + "MATICUSDT",
          },
          {
            title: "SANDUSDT",
            icon: { src: baseCurrencyUrl + "/sand.svg" },
            url: baseBinanceFuturesUrl + "SANDUSDT",
          },
          {
            title: "SOLUSDT",
            icon: { src: baseCurrencyUrl + "/sol.svg" },
            url: baseBinanceFuturesUrl + "SOLUSDT",
          },
          {
            title: "THETAUSDT",
            icon: { src: baseCurrencyUrl + "/theta.svg" },
            url: baseBinanceFuturesUrl + "THETAUSDT",
          },
          {
            title: "TRXUSDT",
            icon: { src: baseCurrencyUrl + "/trx.svg" },
            url: baseBinanceFuturesUrl + "TRXUSDT",
          },
          {
            title: "UNIUSDT",
            icon: { src: baseCurrencyUrl + "/uni.svg" },
            url: baseBinanceFuturesUrl + "UNIUSDT",
          },
          {
            title: "XLMUSDT",
            icon: { src: baseCurrencyUrl + "/xlm.svg" },
            url: baseBinanceFuturesUrl + "XLMUSDT",
          },
          {
            title: "XRPUSDT",
            icon: { src: baseCurrencyUrl + "/xrp.svg" },
            url: baseBinanceFuturesUrl + "XRPUSDT",
          },
        ],
      },
      {
        title: "USDC Perpetual",
        items: [
          {
            title: "BTCUSDC",
            icon: { src: baseCurrencyUrl + "/btc.svg" },
            url: baseBinanceFuturesUrl + "BTCUSDC",
          },
          {
            title: "ETHUSDC",
            icon: { src: baseCurrencyUrl + "/eth.svg" },
            url: baseBinanceFuturesUrl + "ETHUSDC",
          },
          {
            title: "XRPUSDC",
            icon: { src: baseCurrencyUrl + "/xrp.svg" },
            url: baseBinanceFuturesUrl + "XRPUSDC",
          },
        ],
      },
      {
        title: "USDT Delivery",
        items: [
          {
            title: "ADAUSDT_240927",
            icon: { src: baseCurrencyUrl + "/ada.svg" },
            url: baseBinanceFuturesUrl + "delivery/ADAUSDT_240927",
          },
          {
            title: "BTCUSDT_240927",
            icon: { src: baseCurrencyUrl + "/btc.svg" },
            url: baseBinanceFuturesUrl + "delivery/BTCUSDT_240927",
          },
          {
            title: "ETHUSDT_240927",
            icon: { src: baseCurrencyUrl + "/eth.svg" },
            url: baseBinanceFuturesUrl + "delivery/ETHUSDT_240927",
          },
        ],
      },
      {
        title: "COIN-M Perpetual",
        items: [
          {
            title: "BNBUSD_PERP",
            icon: { src: baseCurrencyUrl + "/bnb.svg" },
            url: "/futures/BNBUSD_PERP",
          },
          {
            title: "BTCUSD_PERP",
            icon: { src: baseCurrencyUrl + "/btc.svg" },
            url: "/futures/BTCUSD_PERP",
          },
          {
            title: "ETHUSD_PERP",
            icon: { src: baseCurrencyUrl + "/eth.svg" },
            url: "/futures/ETHUSD_PERP",
          },
        ],
      },
      {
        title: "COIN-M Delivery",
        items: [
          {
            title: "BTCUSD_230929",
            icon: { src: baseCurrencyUrl + "/btc.svg" },
            url: "/futures/BTCUSD_230929",
          },
          {
            title: "ETHUSD_230929",
            icon: { src: baseCurrencyUrl + "/eth.svg" },
            url: "/futures/ETHUSD_230929",
          },
        ],
      },
    ],
  },
  {
    type: "submenu",
    title: "Options",
    items: [
      {
        title: "Options Home",
        url: "https://www.binance.com/en/eoptions/home",
      },
      {
        title: "Classic Options",
        items: [
          {
            title: "ADA Options",
            url: "https://www.binance.com/en/options/ADAUSDT",
            icon: { src: baseCurrencyUrl + "/ada.svg" },
          },
          {
            title: "BNB Options",
            url: "https://www.binance.com/en/options/BNBUSDT",
            icon: { src: baseCurrencyUrl + "/bnb.svg" },
          },
          {
            title: "BTC Options",
            url: "https://www.binance.com/en/options/BTCUSDT",
            icon: { src: baseCurrencyUrl + "/btc.svg" },
          },
          {
            title: "ETH Options",
            url: "https://www.binance.com/en/options/ETHUSDT",
            icon: { src: baseCurrencyUrl + "/eth.svg" },
          },
        ],
      },
      {
        title: "Easy Options",
        url: "https://www.binance.com/en/eoptions/easy-mode/ETHUSDT",
      },
      {
        title: "Options RFQ",
        url: "https://www.binance.com/en/vip-portal/OTC-trading-platform?ref=OTC-Option",
      },
      {
        title: "Block",
        url: "https://www.binance.com/en/eoptions/blocktrades/settlement",
      },
    ],
  },
  {
    type: "submenu",
    title: "Trading Bots",
    items: [
      {
        title: "Auto-Invest",
        url: "https://www.binance.com/en/trading-bots/auto-invest/BTCUSDT",
      },
      {
        title: "Futures Grid",
        url: "https://www.binance.com/en/trading-bots/futures/grid/ETHUSDT",
      },
      { title: "Overview", url: "https://www.binance.com/en/trading-bots" },
      {
        title: "Spot Grid",
        url: "https://www.binance.com/en/trading-bots/spot/grid/BTCUSDT",
      },
    ],
  },
  {
    type: "link",
    title: "Copy Trading",
    url: "https://www.binance.com/en/copy-trading",
  },
  {
    type: "link",
    title: "Smart Money",
    url: "https://www.binance.com/en/smart-money",
  },
  {
    type: "custom",
    title: "Campaigns",
    items: [
      {
        title: "Hot Campaigns",
        items: [
          {
            title: "Traders League",
            url: "https://www.binance.com/en/activity/trading-competition/traders-league-june-2025",
            icon: {
              src: tradersLeagueIcon,
            },
            explanation:
              "Compete in Futures Traders League and Win a Share of Up to 3,000,000 USDT in Rewards!",
          },
          {
            title: "LDUSDT",
            url: "https://www.binance.com/en/futures/holderyield/ldusdt",
            icon: {
              src: LUDUSDTIcon,
            },
            explanation:
              "Trade Futures with LDUSDT & Earn APR with USDT Flexible Assets",
          },
          {
            title: "Futures Masters Arena",
            url: "https://www.binance.com/en/futures-activity/futures-arena",
            icon: {
              src: futuresMastersArenaIcon,
            },
            explanation:
              "Climb the Master Ranking and Win up to 450,000 USDT & Multiple Token Rewards!",
          },
        ],
      },
      {
        title: "More Ongoing Campaigns",
        items: [
          {
            title: "BFUSD",
            url: "https://www.binance.com/en/futures/bfusd",
            icon: {
              src: bfusdIcon,
            },
            explanation: "Hold, Trade, and Earn Daily APY Rewards!",
          },
          {
            title: "Futures Present",
            url: "https://www.binance.com/en/futures-present",
            icon: {
              src: futuresPresentIcon,
            },
            explanation: "Pay 1 USDT to Send a 20 USDT Futures Present!",
          },
        ],
      },
    ],
  },
  {
    type: "submenu",
    title: "Data",
    items: [
      {
        title: "Markets",
        url: "https://www.binance.com/en/futures/markets/",
      },
      {
        title: "Futures Data",
        items: [
          {
            title: "Trading Data",
            url: "https://www.binance.com/en/futures/funding-history/4",
          },
          {
            title: "Real-Time Funding Rate",
            url: "https://www.binance.com/en/futures/funding-history/0",
          },
        ],
      },
      {
        title: "Options Data",
        items: [
          {
            title: "Options Data Overview",
            url: "https://www.binance.com/en/eoptions-data/ETHUSDT",
          },
          {
            title: "Open Interest & Volume",
            url: "https://www.binance.com/en/eoptions-data/ETHUSDT/oi-volume",
          },
        ],
      },
      {
        title: "Heatmap",
        url: "https://www.binance.com/en/futures/crypto-heatmap/",
      },
    ],
  },
  {
    type: "submenu",
    title: "More",
    items: [
      {
        title: "FAQ",
        url: "https://www.binance.com/en/support/faq/c-4?navId=4",
      },
      {
        title: "Learn",
        items: [
          {
            title: "Get Started",
            url: "https://www.binance.com/en/trade-get-started/futures",
          },
          {
            title: "Mock Trading",
            url: "https://testnet.binancefuture.com/",
          },
          {
            title: "Responsible Trading",
            url: "https://www.binance.com/en/futures/responsible-trading",
          },
        ],
      },
      {
        title: "Trading Rules",
        url: "/",
      },
      {
        title: "Futures Referral",
        url: "/",
      },
      {
        title: "API Access",
        url: "/",
      },
    ],
  },
];
