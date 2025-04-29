import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wacai365',
  name: '挖财记账',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.wacai365.HomeActivity',
          matches: '[id^="com.wacai365:id/promote_banner_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13249666',
        },
      ],
    },
  ],
});
