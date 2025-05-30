import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coloros.phonemanager',
  name: 'OPPO手机管家',
  groups: [
    {
      key: 4,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.coloros.phonemanager.clear.ClearMainActivity',
          matches: '[vid="ad_close"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/4d8b27a4-f129-479e-871b-bc6f664072ae',
          snapshotUrls: 'https://i.gkd.li/i/14317524',
        },
      ],
    },
    {
      key: 5,
      name: '其他-风险应用提示',
      desc: '点击忽略',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.oplus.phonemanager.virusdetect.VirusDialogActivity',
          matches: [
            '[text$="风险应用"][visibleToUser=true]',
            '[text="忽略"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/19749344',
        },
      ],
    },
  ],
});
