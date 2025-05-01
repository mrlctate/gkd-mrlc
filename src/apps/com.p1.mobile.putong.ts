import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.p1.mobile.putong',
  name: '探探',
  groups: [
    {
      key: 2,
      name: '更新提示',
      desc: '点击[取消]',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.core.newui.main.NewMainAct',
          matches:
            '@[vid="buttonDefaultNeutral"][clickable=true] > [text="取消"]',
          exampleUrls:
            'https://m.gkd.li/57941037/2326365c-b31e-429a-9357-765d1c58da4c',
          snapshotUrls: 'https://i.gkd.li/i/14445054',
        },
      ],
    },
  ],
});
