import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bbk.appstore',
  name: 'vivo应用商店',
  groups: [
    {
      key: 2,
      name: '全屏广告-热门应用推荐',
      desc: '点击[跳过，进入首页]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.upgrade.UpgradeNecessaryActivity',
          matches: '[text="跳过，进入首页"]',
          exampleUrls: 'https://e.gkd.li/eb96ca80-2e68-4f41-ac0f-3c82092034d7',
          snapshotUrls: 'https://i.gkd.li/i/13198101',
        },
      ],
    },
  ],
});
