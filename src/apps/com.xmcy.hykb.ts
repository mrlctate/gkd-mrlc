import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xmcy.hykb',
  name: '好游快爆',
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
          activityIds: 'com.xmcy.hykb.app.ui.main.MainActivity',
          matches: '[id="com.xmcy.hykb:id/dialog_home_notice_image_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13259427',
        },
      ],
    },
  ],
});
