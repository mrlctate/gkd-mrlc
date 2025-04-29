import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qt.qtl',
  name: '掌上英雄联盟',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.tencent.zone.main.MainZoneHomeActivity',
          matches: '[vid="notice_close_pic"]',
          exampleUrls: 'https://e.gkd.li/d1747892-c416-4877-a706-fb3c16e5b049',
          snapshotUrls: 'https://i.gkd.li/i/16581606',
        },
      ],
    },
  ],
});
