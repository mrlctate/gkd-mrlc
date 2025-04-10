import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cebbank.mobile.cemb',
  name: '光大银行',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.view.CustomizedDialog',
          matches: '@[text="不再提示"] +2 [text="立即更新"]',
          snapshotUrls: 'https://i.gkd.li/i/12727241',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.cebbank.mobile.cemb.ui.activity.SplashActivity',
            'com.cebbank.mobile.cemb.ui.activity.HomeActivity',
          ],
          matches:
            '[id="com.cebbank.mobile.cemb:id/home_advertising_iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12727248',
            'https://i.gkd.li/i/13471080',
          ],
        },
      ],
    },
  ],
});
