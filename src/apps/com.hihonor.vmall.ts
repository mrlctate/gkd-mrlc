import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.vmall',
  name: '荣耀商城',
  groups: [
    {
      key: 1,
      name: '全屏广告-应用内弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.vmall.client.base.fragment.VmallWapActivity',
            'com.vmall.client.splash.fragment.SplashActivity',
          ],
          matches: '[id="com.hihonor.vmall:id/gift_close_iv"]',
          snapshotUrls: 'https://i.gkd.li/i/13060881',
        },
      ],
    },
  ],
});
