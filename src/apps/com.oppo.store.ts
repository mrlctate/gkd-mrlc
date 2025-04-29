import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.oppo.store',
  name: 'OPPO商城',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.oppo.store.MainActivity',
          matches:
            'ImageView[id="com.oppo.store:id/dialog_delete"][desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/13295201',
        },
      ],
    },
  ],
});
