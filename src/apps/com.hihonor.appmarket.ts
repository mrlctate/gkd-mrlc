import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.appmarket',
  name: '荣耀应用市场',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.hihonor.android.launcher.unihome.UniHomeLauncher',
            'com.hihonor.appmarket.module.main.MainActivity',
          ],
          matches: '[id="com.hihonor.appmarket:id/iv_dialog_operation_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13063815',
            'https://i.gkd.li/i/13168440',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-悬浮窗小广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.module.main.MainActivity',
          matches: '[id="com.hihonor.appmarket:id/iv_floating_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13063928',
        },
      ],
    },
  ],
});
