import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xtc.watch',
  name: '小天才',
  groups: [
    {
      key: 3,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'com.xtc.widget.phone.popup.activity.CustomActivity13',
          matches: [
            '[text*="开启消息通知"]',
            '[id="com.xtc.watch:id/iv_close"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13063274',
        },
        {
          key: 1,
          activityIds: '.view.home.activity.XtcHomeActivity',
          matches: '[id="com.xtc.watch:id/iv_notify_permission_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13059965',
        },
      ],
    },
  ],
});
