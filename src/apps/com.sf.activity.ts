import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sf.activity',
  name: '顺丰速运',
  groups: [
    {
      key: 2,
      name: '其他-专属月报弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.sf.activity.MainActivity',
          matches: '[id="MonthReportDialogCloseBtn"] > ImageView',
          exampleUrls:
            'https://m.gkd.li/57941037/83023ed5-f143-4355-9fff-e078011dfa4a',
          snapshotUrls: 'https://i.gkd.li/i/12642441',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'com.sf.activity.MainActivity',
          matches:
            '@Button[id="BmsAdDialogViewCloseButton"] <2 ViewGroup < ViewGroup <2 ViewGroup < ViewGroup <2 ViewGroup < ViewGroup < FrameLayout < [vid="rnRootLayout"]',
          exampleUrls: 'https://e.gkd.li/3be50f7b-5696-47c9-95cc-ef46f8531967',
          snapshotUrls: [
            'https://i.gkd.li/i/14502128',
            'https://i.gkd.li/i/17869485',
          ],
        },
      ],
    },
  ],
});
