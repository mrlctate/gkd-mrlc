import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.systemAdSolution',
  name: '智能服务',
  groups: [
    {
      key: 2,
      name: '分段广告-为什么不希望看到这条推广',
      desc: '点击"不感兴趣"',
      fastQuery: true,
      activityIds: [
        'com.xiaomi.ad.feedback',
        'com.android.thememanager.module.detail.view.ThemeDetailActivity',
        'com.android.thememanager.ThemeResourceProxyTabActivity',
      ],
      rules: [
        {
          key: 0,
          matches: '[text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13227328',
            'https://i.gkd.li/i/13255751',
            'https://i.gkd.li/i/14946925',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[text="广告密集"]',
          snapshotUrls: ['https://i.gkd.li/i/19636920'],
        },
      ],
    },
  ],
});
