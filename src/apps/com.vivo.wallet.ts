import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.vivo.wallet',
  name: '钱包',
  groups: [
    {
      key: 0,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds: '.HomeActivity',
          matches: ['[text^="新功能"]', '[desc="暂不开启"][clickable=true]'],
          snapshotUrls: 'https://i.gkd.li/i/19372365',
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
