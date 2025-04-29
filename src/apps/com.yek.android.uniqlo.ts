import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yek.android.uniqlo',
  name: '优衣库',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.yek.android.uniqlo.uiux.Home.activity.HomeActivity',
          matches: 'ImageView[id="com.yek.android.uniqlo:id/pop_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13212320',
        },
      ],
    },
  ],
});
