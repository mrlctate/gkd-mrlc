import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tipsoon.android',
  name: '简讯',
  groups: [
    {
      key: 0,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'com.tipsoon.android.activity.MainActivity',
          matches:
            '[id="com.tipsoon.android:id/cardview"] + [id="com.tipsoon.android:id/img_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13426997',
        },
      ],
    },
  ],
});
