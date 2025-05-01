import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dep.biguo',
  name: '自考笔果题库',
  groups: [
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.dep.biguo.dialog',
          matches:
            '[id="com.dep.biguo:id/imageView"] + [id="com.dep.biguo:id/closeView"]',
          snapshotUrls: 'https://i.gkd.li/i/12708756',
        },
      ],
    },
  ],
});
