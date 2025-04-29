import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.byfen.market',
  name: '百分网游戏盒子',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.byfen.market.ui.activity.MainActivity',
          matches: '[vid="idIvClose"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/35d2a562-fe30-4bff-b739-96b37dccd05c',
          snapshotUrls: 'https://i.gkd.li/i/13801613',
        },
      ],
    },
  ],
});
