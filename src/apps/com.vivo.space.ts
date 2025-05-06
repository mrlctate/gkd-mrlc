import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.vivo.space',
  name: 'vivo 官网',
  groups: [
    {
      key: 3,
      name: '全屏广告-活动广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.vivo.space.ui.VivoSpaceTabActivity',
          matches:
            'View[childCount=2] > @[index=1][clickable=true][visibleToUser=true][childCount=0] <<n [id="com.vivo.space:id/floating_window_web"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13218155',
            'https://i.gkd.li/i/13292907',
          ],
        },
      ],
    },
  ],
});
