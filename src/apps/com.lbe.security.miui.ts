import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lbe.security.miui',
  name: '权限管理服务',
  groups: [
    {
      key: 1,
      name: '功能类-权限授予弹窗',
      desc: '自动点击"仅在使用中允许"',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          matches: '[text="仅在使用中允许"]',
          snapshotUrls: 'https://i.gkd.li/i/13761264',
        },
      ],
    },
  ],
});
