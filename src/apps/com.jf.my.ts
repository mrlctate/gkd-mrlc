import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jf.my',
  name: '蜜源',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.jf.my.main.ui.dialog.HomeRedPackageDialog',
          matches: '[id="com.jf.my:id/iv_back"]',
          snapshotUrls: 'https://i.gkd.li/i/12840619',
        },
      ],
    },
  ],
});
