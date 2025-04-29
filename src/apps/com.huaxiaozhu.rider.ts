import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huaxiaozhu.rider',
  name: '花小猪打车',
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
          activityIds: 'com.huaxiaozhu.sdk.app.MainActivity',
          matches: '[vid="popClose"]',
          exampleUrls:
            'https://m.gkd.li/57941037/1555a2be-92cb-4360-b50f-019f30955a22',
          snapshotUrls: 'https://i.gkd.li/i/14233488',
        },
      ],
    },
  ],
});
