import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmcc.cmvideo',
  name: '咪咕视频',
  groups: [
    {
      key: 2,
      name: '局部广告-右下角小广告',
      fastQuery: true,
      activityIds: 'com.cmcc.cmvideo.main.application.CompatibleMainActivity',
      rules: '[id="com.cmcc.cmvideo:id/iv_right_bottom_close"]',
      snapshotUrls: 'https://i.gkd.li/i/12498315',
    },
    {
      key: 5,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matchRoot: true,
          activityIds:
            'com.cmcc.cmvideo.main.application.CompatibleMainActivity',
          matches: '[vid="iv_big_close"]',
          exampleUrls: 'https://e.gkd.li/ece7eb54-9b9b-40e2-9402-fc350f4734bb',
          snapshotUrls: 'https://i.gkd.li/i/16503612',
        },
      ],
    },
  ],
});
