export const WarScoreBuff = [
    {
        id: 'war-score-3',
        name: 'First place',
        icon: '../images/war-score-3.png',
        value: 6
    },
    {
        id: 'war-score-2',
        name: 'Second place',
        icon: '../images/war-score-2.png',
        value: 5
    },
    {
        id: 'war-score-1',
        name: 'Third place',
        icon: '../images/war-score-1.png',
        value: 3
    }
]

export const WvwRankBuff = [
    {
        id: 'initiate',
        name: 'WvW Initiate Rank',
        icon: '../images/pip-0.png',
        value: 1
    },
    {
        id: 'bronze',
        name: 'Bronze WvW Rank',
        icon: '../images/pip-1.png',
        value: 2
    },
    {
        id: 'silver',
        name: 'Silver WvW Rank',
        icon: '../images/pip-2.png',
        value: 3
    },
    {
        id: 'gold',
        name: 'Gold WvW Rank',
        icon: '../images/pip-3.png',
        value: 4
    },
    {
        id: 'platinum',
        name: 'Platinum WvW Rank',
        icon: '../images/pip-4.png',
        value: 5
    },
    {
        id: 'mithril',
        name: 'Mithril WvW Rank',
        icon: '../images/pip-5.png',
        value: 6
    },
    {
        id: 'diamond',
        name: 'Diamond WvW Rank',
        icon: '../images/pip-6.png',
        value: 7
    },
    {
        id: 'god',
        name: 'God of WvW',
        icon: '../images/pip-7.png',
        value: 8
    }
]

export const CommanderBuff = {
    id: 'commander',
    name: 'Commander',
    icon: '../images/pip-commander.png',
    value: 1
}

export const PublicCommanderBuff = {
    id: 'public-commander',
    name: 'Public commander',
    icon: '../images/pip-public-commander.png',
    value: 3
}

export const CommitmentBuff = {
    id: 'commitment',
    name: 'Commitment',
    icon: '../images/pip-commitment.png',
    value: 1
}

export const WvwTick = {
    durationMs: 5 * 60 * 1000,
    get durationSeconds() {
        return this.durationMs / 1000;
    },
    get durationMinutes() {
        return this.durationMs / (60 * 1000);
    },
    toString() {
        return `${this.durationMinutes} minutes`;
    }
}

export const SkirmishRewardTrack = [
    { chest: "Wood Chest", pipsPerTier: 25, tiers: 4 },
    { chest: "Bronze Chest", pipsPerTier: 30, tiers: 4 },
    { chest: "Silver Chest", pipsPerTier: 35, tiers: 5 },
    { chest: "Gold Chest", pipsPerTier: 40, tiers: 5 },
    { chest: "Platinum Chest", pipsPerTier: 45, tiers: 5 },
    { chest: "Mithril Chest", pipsPerTier: 50, tiers: 6 },
    { chest: "Diamond Chest", pipsPerTier: 55, tiers: 6 }
];