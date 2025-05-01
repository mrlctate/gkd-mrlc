import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmi.jegotrip',
  name: '无忧行',
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
          activityIds: '.ui.BottomTabsActivity',
          matches: '[id="com.cmi.jegotrip:id/ig_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13631904',
        },
      ],
    },
  ],
});
