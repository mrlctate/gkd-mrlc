import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.vivo.wallet',
  name: '钱包',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.StartPageActivity',
          matches: 'TextView[text^="跳过"][text.length<=6][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/18919206',
        },
      ],
    },
    {
      key: 1,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.bookkeep.activity.BookKeepMainActivity',
          matches: '@[clickable=true] > [text="取消"]',
          snapshotUrls: 'https://i.gkd.li/i/13440881',
        },
      ],
    },
  ],
});
