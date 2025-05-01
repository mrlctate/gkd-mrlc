import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fenbi.android.solar',
  name: '小猿搜题',
  groups: [
    {
      key: 3,
      name: '全屏广告-年卡广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          matches: '[id="com.fenbi.android.solar:id/v_firework_close"]',
          exampleUrls: 'https://e.gkd.li/874cdabf-8e49-4c6d-8fd0-48effd6e44e9',
          snapshotUrls: 'https://i.gkd.li/i/16759322',
        },
      ],
    },
  ],
});
