import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.vgjump.jump',
  name: 'Jump',
  groups: [
    {
      key: 2,
      name: '局部广告-信息流广告/卡片广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.ui.game.detail.GameDetailActivity',
            '.ui.content.detail.ContentDetailActivity',
            '.ui.main.MainActivity',
          ],
          matches: '[vid="ivSDKClose"][visibleToUser=true]',
          exampleUrls: [
            'https://e.gkd.li/388a915b-5b91-4a4a-8bd3-330b346b2864',
            'https://e.gkd.li/d68c487b-ce63-4d9f-afc3-cc94b3490a33',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/17949888',
            'https://i.gkd.li/i/17949885',
            'https://i.gkd.li/i/18004837',
          ],
        },
      ],
    },
  ],
});
