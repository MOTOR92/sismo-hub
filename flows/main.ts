import {
  hydraS1AccountboundAttester,
  hydraS1AccountboundBadges,
} from "@badges-metadata/main/hydra-s1-accountbound";
import { mainFactoryFlows } from "@flows/factory/main-factory";
import { Network } from "topics/attester";
import { Flow } from "topics/flow";

const gamejutsuCommon = {
  attester: hydraS1AccountboundAttester.name,
  networks: [Network.Goerli, Network.Mumbai],
  attesterType: "hydra-s1",
  badgesCollection: hydraS1AccountboundBadges,
  logoUrl: null,
  onboardingDescription:
    "Access gated GameJutsu channel and become an active member of the ChainHackers state channel gamers", // hype your users !
  ctaLabel: "Access gated channels",
  ctaUrl: "https://discord.gg/a5E9vWbp9R",
  congratulationTexts: ["Welcome to the miracle!"],
};

export const mainFlows: Flow[] = [
  ...mainFactoryFlows,
  {
    path: "masquerade",
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Polygon, Network.Gnosis, Network.Goerli, Network.Mumbai],
    attesterType: "hydra-s1",
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [3],
    title: "",
    logoUrl: null,
    subtitle: "Get your ticket",
    onboardingDescription:
      "Prove you followed Sismo and Masquerade before July 6 2022 to get a chance to access the Masquerade party.",
    ctaLabel: "Access gated channel",
    ctaUrl: "https://discord.gg/sismo",
    congratulationTexts: ["1. Access #masquerade-gate", "2. Provide feedback on Sismo"],
  },
  {
    path: "ethereum-power-users",
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Polygon, Network.Gnosis, Network.Goerli, Network.Mumbai],
    attesterType: "hydra-s1",
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [4],
    title: "",
    logoUrl: null,
    subtitle: "Join Ethereum Power Users community",
    onboardingDescription:
      "Prove you are one of the biggest Ethereum users and access the governance around the badge on snapshot.",
    ctaLabel: "Access gated channel",
    ctaUrl: "https://discord.gg/sismo",
    congratulationTexts: ["Provide feedback on Discord", "Join Snapshot Space"],
  },
  {
    path: "proof-of-humanity",
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Polygon, Network.Gnosis, Network.Goerli, Network.Mumbai],
    attesterType: "hydra-s1",
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [8],
    title: "Proof of Humanity",
    logoUrl: null,
    subtitle: "Prove you are a human with privacy",
    onboardingDescription:
      "This ZK Badge is an attestation proving that you are a human. It is used by diverse applications (e.g Lens) as a sybil resistant tool",
    ctaLabel: "See your badge",
    ctaUrl: "",
    congratulationTexts: [
      "You can now prove that you are a human",
      "and access human-gated services!",
    ],
  },
  {
    path: "proof-of-lepak-member",
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Goerli, Network.Mumbai],
    attesterType: "hydra-s1",
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [9],
    title: "Proof of Lepak Member",
    logoUrl: null,
    subtitle: "Prove you are a member from Lepak DAO",
    onboardingDescription:
      "This ZK Badge is an attestation proving that you are a Lepak Member. After getting your zkBadge, you are eligible for voting in Lepak DAO",
    ctaLabel: "See your badge",
    ctaUrl: "",
    congratulationTexts: ["You can now prove that you are a Lepak Member"],
  },
  {
    path: "circularmerch-lens-followers",
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Goerli, Network.Mumbai],
    attesterType: "hydra-s1",
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [10],
    title: "CircularMerch",
    logoUrl: null,
    subtitle: "Get your ticket",
    onboardingDescription: "Prove you follow Circlemerch",
    ctaLabel: "See your badges",
    ctaUrl: "",
    congratulationTexts: ["1. Congratulation"],
  },
  {
    path: "lens-50-best-followed",
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Goerli, Network.Mumbai],
    attesterType: "hydra-s1",
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [11],
    title: "50 most Followed",
    logoUrl: null,
    subtitle: "Get your ticket",
    onboardingDescription: "Prove you are 50 most followed",
    ctaLabel: "See your badges",
    ctaUrl: "",
    congratulationTexts: ["1. Congratulation"],
  },
  {
    path: "top-100-ens",
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Polygon, Network.Gnosis, Network.Goerli, Network.Mumbai],
    attesterType: "hydra-s1",
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [12],
    title: "Top 100 ENS",
    logoUrl: null,
    subtitle: "Prove that you are across the top 100 ENS names by number of followers on Twitter",
    onboardingDescription:
      "This ZK Badge is an attestation that you are part of the top 100 ENS accounts by followers on Twitter. It can be used across different platform as a proof-of-reputation tool",
    ctaLabel: "See your badges",
    ctaUrl: "",
    congratulationTexts: ["1. Congratulation"],
  },
  {
    ...gamejutsuCommon,
    badgesInternalCollectionsIds: [13],
    path: "gamejutsu-bronze-winner",
    title: "White Belt Winner",
    subtitle: "Attest your first win at gamejutsu.app",
  },
  {
    ...gamejutsuCommon,
    badgesInternalCollectionsIds: [14],
    path: "gamejutsu-silver-winner",
    title: "Green Belt Winner",
    subtitle: "Attest your fifth repetitive win at gamejutsu.app",
  },
  {
    ...gamejutsuCommon,
    badgesInternalCollectionsIds: [15],
    path: "gamejutsu-gold-winner",
    title: "Black Belt Winner",
    subtitle: "Attest your 10th repetitive win at gamejutsu.app",
  },
  {
    ...gamejutsuCommon,
    badgesInternalCollectionsIds: [16],
    path: "gamejutsu-bronze-loser",
    title: "White Belt Loser",
    subtitle: "Attest your first lose at gamejutsu.app",
  },
  {
    ...gamejutsuCommon,
    badgesInternalCollectionsIds: [17],
    path: "gamejutsu-silver-loser",
    title: "Green Belt Loser",
    subtitle: "Attest your fifth repetitive lose at gamejutsu.app",
  },
  {
    ...gamejutsuCommon,
    badgesInternalCollectionsIds: [18],
    path: "gamejutsu-gold-loser",
    title: "Black Belt Loser",
    subtitle: "Attest your 10th repetitive lose at gamejutsu.app",
  },
  {
    ...gamejutsuCommon,
    badgesInternalCollectionsIds: [19],
    path: "gamejutsu-bronze-draw",
    title: "White Belt Peacemonger",
    subtitle: "Attest your first draw at gamejutsu.app",
  },
  {
    ...gamejutsuCommon,
    badgesInternalCollectionsIds: [20],
    path: "gamejutsu-silver-draw",
    title: "Green Belt Peacemonger",
    subtitle: "Attest your fifth repetitive draw at gamejutsu.app",
  },
  {
    ...gamejutsuCommon,
    badgesInternalCollectionsIds: [21],
    path: "gamejutsu-gold-draw",
    title: "Black Belt Peacemonger",
    subtitle: "Attest your 10th repetitive draw at gamejutsu.app",
  },
  {
    ...gamejutsuCommon,
    badgesInternalCollectionsIds: [22],
    path: "gamejutsu-bronze-cheater",
    title: "White Belt In Cheating",
    subtitle: "Attest your first cheat at gamejutsu.app",
  },
  {
    ...gamejutsuCommon,
    badgesInternalCollectionsIds: [23],
    path: "gamejutsu-silver-cheater",
    title: "Green Belt In Cheating",
    subtitle: "Attest your fifth repetitive cheat at gamejutsu.app",
  },
  {
    ...gamejutsuCommon,
    badgesInternalCollectionsIds: [24],
    path: "gamejutsu-gold-cheater",
    title: "Black Belt In Cheating",
    subtitle: "Attest your 10th repetitive cheat at gamejutsu.app",
  },
  {
    path: "gr15",
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Polygon, Network.Gnosis, Network.Goerli, Network.Mumbai],
    attesterType: "hydra-s1",
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [25],
    title: "GR15",
    logoUrl: null,
    subtitle: "Prove that you supported the Ethereum ecosystem",
    onboardingDescription:
      "This ZK Badge is an attestation that you are an active supporter of the Ethereum ecosystem",
    ctaLabel: "See my badge",
    ctaUrl: "",
    congratulationTexts: [
      "You can now prove that you are an active",
      "supporter of the Ethereum ecosystem",
    ],
  },
  {
    path: "martingbz-sismo-thread-1-lens-mirrorers",
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Gnosis, Network.Goerli, Network.Mumbai],
    attesterType: "hydra-s1",
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [26],
    title: "martingbz.lens",
    logoUrl: null,
    subtitle: "Join the community of content interactors of martingbz.lens",
    onboardingDescription:
      "Prove you interacted (follow, mirror, collect etc...) on martingbz.lens profile",
    ctaLabel: "See your badge",
    ctaUrl: "",
    congratulationTexts: ["1. Congratulation"],
  },
  {
    path: "lilnouns-proplot-contributors",
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Polygon, Network.Gnosis, Network.Goerli, Network.Mumbai],
    attesterType: "hydra-s1",
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [27, 28],
    title: "LilNouns Proplot Contributors",
    logoUrl: null,
    subtitle: "Attest your contributions on LilNouns's PropLot",
    onboardingDescription: "Become an active participant on PropLot",
    ctaLabel: "Become an Active Contributor",
    ctaUrl: "https://lilnouns.wtf/ideas",
    congratulationTexts: ["Keep contributing on PropLot!"],
  },
  {
    path: "proof-of-attendance",
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Polygon, Network.Gnosis, Network.Goerli, Network.Mumbai],
    attesterType: "hydra-s1",
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [29],
    title: "POAP",
    logoUrl: null,
    subtitle: "Prove that you attended Ethereum events",
    ctaLabel: "See my badge",
    ctaUrl: "",
    congratulationTexts: ["You can now prove that you", "attended Ethereum events"],
  },
  {
    path: "nft-collector",
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Goerli, Network.Mumbai],
    attesterType: "hydra-s1",
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [30],
    title: "NFT Collector",
    logoUrl: null,
    subtitle: "Attest you are a major NFT Collector",
    onboardingDescription:
      "You your NFT Collector ZK Badge proof to  increase privacy while providing the reputations",
    ctaLabel: "",
    ctaUrl: "https://twitter.com/Web3PON",
    congratulationTexts: ["Congrats!"],
  },
  {
    path: "ens-supporter",
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Polygon, Network.Gnosis, Network.Goerli, Network.Mumbai],
    attesterType: "hydra-s1",
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [33],
    title: "ENS & Hive.one",
    logoUrl: null,
    subtitle: "Prove that you are a ENS supporter",
    ctaLabel: "See my badge",
    ctaUrl: "",
    congratulationTexts: [
      "You can now prove that you are part of",
      "the most reputable ENS domain accounts on Twitter",
    ],
  },
  {
    path: "madfi-lens-followers-s01",
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Gnosis, Network.Goerli, Network.Mumbai],
    attesterType: "hydra-s1", // choose your attester
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [34], // choose your badge id here
    title: "ClubSpace by Mad Finance ZK Badge", // choose your title
    logoUrl: null,
    subtitle:
      "Show that you were an early supporter of Mad Finance, and get early access to ClubSpace - a live music NFT experience", // choose your subtitle
    onboardingDescription:
      "Mad Finance builds tools for creators to monetize their content in web3 social.", // hype your users !
    ctaLabel: "Join ClubSpace",
    ctaUrl: "https://joinclubspace.xyz", // provide a link to your users. If you does not have a link you can add "" this will redirect to the sismo explorer.
    congratulationTexts: ["You've got the badge!", "Follow us on social for launch info."],
  },
  {
    path: "tuto-ens-contributors",
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Goerli, Network.Mumbai],
    attesterType: "hydra-s1",
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [35],
    title: "ENS",
    logoUrl: null,
    subtitle: "Show that you are an early contributor to ENS.",
    onboardingDescription: "Mint this badge to show that you are an early ENS contributor",
    ctaLabel: "Go to ENS discord",
    ctaUrl: "<https://discord.gg/sismo>",
    congratulationTexts: ["Congratulations"],
  },
  {
    path: "sismo-stargazer",
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Polygon, Network.Gnosis, Network.Goerli, Network.Mumbai],
    attesterType: "hydra-s1",
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [36],
    title: "",
    logoUrl: null,
    subtitle: "Prove that you starred the Sismo Protocol on GitHub",
    ctaLabel: "See my badge",
    ctaUrl: "",
    congratulationTexts: [
      "You can now prove with privacy that",
      "you starred the Sismo Protocol on GitHub",
    ],
  },
  {
    path: "ben-friends", // choose your frontend path
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Goerli, Network.Mumbai],
    attesterType: "hydra-s1", // choose your attester
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [37], // choose your badge id here
    title: "Ben's friend", // choose your title
    logoUrl: null,
    subtitle:
      "Show that your are Ben's Friend and that you have registered on the Goerli tesnet smart contract called BenFriend", // choose your subtitle
    onboardingDescription: "Mint this badge to show that you are Ben's friend", // hype your users !
    ctaLabel: "Go to ben's website",
    ctaUrl: "https://www.anoufa.dev", // provide a link to your users. If you does not have a link you can add "" this will redirect to the sismo explorer.
    congratulationTexts: ["Congratulations"],
  },
  {
    path: "twitter-ethereum-influencers",
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Polygon, Network.Gnosis, Network.Goerli, Network.Mumbai],
    attesterType: "hydra-s1",
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [38],
    title: "Hive.one",
    logoUrl: null,
    subtitle: "Prove that you are an Ethereum Influencer on Twitter",
    ctaLabel: "See my badge",
    ctaUrl: "",
    congratulationTexts: ["You can now prove that you are", "an Ethereum Influencer on Twitter"],
  },
  {
    path: "the-merge-contributor",
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Mainnet],
    attesterType: "hydra-s1",
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [39],
    title: "Mergooor Pass",
    logoUrl: null,
    subtitle: "Prove that you are a contributor to The Merge",
    ctaLabel: "See my badge",
    ctaUrl: "Destination (Vault settings)",
    congratulationTexts: ["You can now prove that you are", "a contributor to The Merge"],
  },
  {
    path: "aztec-connect-depositors",
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Gnosis, Network.Goerli, Network.Mumbai],
    attesterType: "hydra-s1",
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [69],
    title: "Aztec Active User",
    logoUrl: null,
    subtitle: "Prove that you are an active Aztec user with at least 3 deposits.",
    onboardingDescription: "Mint this badge to show that you're an Active Aztec user",
    ctaLabel: "Use badge to join ZKPay's private discord channel",
    ctaUrl: "https://discord.gg/C96BBnQU8A",
    congratulationTexts: ["Congratulations you're an Active Aztec user!"],
  },
  {
    path: "nounsdao-voters-tier1",
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Gnosis, Network.Goerli, Network.Mumbai],
    attesterType: "hydra-s1",
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [87],
    title: "Nouns DAO",
    logoUrl: "https://nouns.wtf/static/media/logo.f217962c.svg",
    subtitle: "Prove that you participated in Nouns governance",
    onboardingDescription:
      "This ZK Badge is an attestation that you are an active supporter of the Nouns ecosystem",
    ctaLabel: "See my badge",
    ctaUrl: "",
    congratulationTexts: [
      "You can now prove that you are an active",
      "supporter of the Nouns ecosystem",
    ],
  },
  {
    path: "rhino.fi-power-users",
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Polygon, Network.Gnosis, Network.Goerli, Network.Mumbai],
    attesterType: "hydra-s1",
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [88],
    title: "Rhino.Fi",
    logoUrl: "https://rhino.fi/wp-content/uploads/2021/10/rhino.fi_Primary_Logo_Grad-1.svg",
    subtitle: "Prove you are a Rhino.Fi power user ",
    onboardingDescription: "Show your friends you're an OG with Validium ZK rollups and Rhino.Fi",
    ctaLabel: "Enter rhinofi Discord",
    ctaUrl: "https://discord.gg/26sXx2KAhy",
    congratulationTexts: ["Congratulations you're a Rhino.Fi Power User!"],
  },
  {
    path: "nft-legendary-traders",
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Polygon, Network.Gnosis, Network.Goerli, Network.Mumbai],
    attesterType: "hydra-s1",
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [201],
    title: "WIW",
    logoUrl: "https://static.wiw.io/image/logo.png",
    subtitle: "Prove you are one of the NFT Legendary Traders.",
    onboardingDescription: "You have claimed the NFT Legendary Trader ZK Badge!",
    ctaLabel: "Explore WIW",
    ctaUrl: "<https://wiw.io>",
    congratulationTexts: ["You have claimed the NFT Legendary Trader ZK Badge!"],
  },
  {
    path: "timeswap-lens-followers",
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Gnosis, Network.Goerli, Network.Mumbai],
    attesterType: "hydra-s1",
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [420],
    title: "TimeswapLabs Early Follower",
    logoUrl: null,
    subtitle: "An early follower of TimeswapLabs on Lens",
    onboardingDescription: "",
    ctaLabel: "Go to Timeswap Discord",
    ctaUrl: "https://discord.gg/YTUtTJfc6S",
    congratulationTexts: ["Congratulations you're an early follower of TimeswapLabs on Lens!"],
  },
  {
    path: "digger-lens-followers",
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Gnosis, Network.Goerli, Network.Mumbai],
    attesterType: "hydra-s1",
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [421],
    title: "0xDigger Early Follower",
    logoUrl: null,
    subtitle: "An early follower of OxDigger on Lens",
    onboardingDescription: "",
    ctaLabel: "See my badge",
    ctaUrl: "",
    congratulationTexts: ["Congratulations you're an early follower of 0xDigger on Lens!"],
  },
  {
    path: "ziki-pass-testnets",
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Goerli],
    attesterType: "hydra-s1",
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [514],
    title: "",
    logoUrl: null,
    subtitle: "Get your zikiPass ZK Badge",
    onboardingDescription: "",
    ctaLabel: "",
    ctaUrl: "",
    congratulationTexts: ["Congrats!"],
  },
  {
    path: "sardine-enthusiasts",
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Goerli, Network.Mumbai],
    attesterType: "hydra-s1",
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [777],
    title: "DEENZ",
    logoUrl: null,
    subtitle: "ZK Badge owned by the most dedicated sardine eaters", // choose your subtitle
    onboardingDescription: "",
    ctaLabel: "",
    ctaUrl: "https://deenz.dev",
    congratulationTexts: ["gottem"],
  },
  {
    path: "996-icu-fighters",
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Polygon, Network.Gnosis, Network.Goerli, Network.Mumbai],
    attesterType: "hydra-s1",
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [996],
    title: "996.ICU",
    logoUrl: null,
    subtitle: "Show that you are a fighter against 996.",
    onboardingDescription: "Mint this badge to show that you are a fighter against 996",
    ctaLabel: "Go to 996.ICU homepage",
    ctaUrl: "https://996.icu",
    congratulationTexts: ["Congratulations you're a fighter against 996!"],
  },
  {
    path: "cowswap",
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Goerli, Network.Mumbai],
    attesterType: "hydra-s1",
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [1234, 1235, 1236, 1237, 1238],
    title: "CoW Swap",
    logoUrl: "https://cow.fi/images/hero-image.svg",
    subtitle: "Show that you are a special CoW, claim your trader badge!",
    onboardingDescription: "Mint this badge to show that you are a unique CoW Swap trader",
    ctaLabel: "What are you waiting for? Trade today at swap.cow.fi",
    ctaUrl: "https://cow.fi/",
    congratulationTexts: ["Moooooo-d work CoW"],
  },
  {
    path: "sismo-contributor",
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Polygon, Network.Gnosis, Network.Goerli, Network.Mumbai],
    attesterType: "hydra-s1",
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [5151110],
    title: "",
    logoUrl: null,
    subtitle: "Join Sismo Contributors Community",
    onboardingDescription:
      "This ZK Badge is an attestation that you are part of Sismo. You will be able to use it in Sismo Governance to voice your opinion and become owner of the project.",
    ctaLabel: "Join our discord",
    ctaUrl: "https://discord.gg/sismo",
    congratulationTexts: ["Thank you so much! We hope to see", "you further involved in Sismo"],
  },
  {
    path: "uniswap-contributors",
    attester: hydraS1AccountboundAttester.name,
    networks: [Network.Goerli, Network.Mumbai], 
    attesterType: "hydra-s1",
    badgesCollection: hydraS1AccountboundBadges,
    badgesInternalCollectionsIds: [5555555],
    title: "Uniswap",
    logoUrl: null,
    subtitle: "Show that you are an early contributor to Uniswap.",
    onboardingDescription: "Mint this badge to show that you are an early Uniswap contributor",
    ctaLabel: "Go to Uniswap discord",
    ctaUrl: "<https://discord.com/invite/FCfyBSbCU5>",
    congratulationTexts: ["Congratulations"],
  },

  // {
  //   path: "synaps-liveness",
  //   attester: "pythia-1-simple",
  //   networks: [Network.Goerli, Network.Mumbai],
  //   attesterType: "pythia-1",
  //   badgesCollection: pythia1SimpleBadges,
  //   badgesInternalCollectionsIds: [0],
  //   title: "Synaps",
  //   logoUrl: null,
  //   subtitle: "Prove you are not a bot",
  //   onboardingDescription:
  //     "This ZK Badge is an attestation that you are a human and not a bot. It is used by diverse applications (e.g Lens) as a sybil resistant tool.",
  //   ctaLabel: "See your badge",
  //   ctaUrl: "",
  //   congratulationTexts: [
  //     "You can now prove that you are",
  //     "not a bot by showing this badge!",
  //   ],
  // },
];
