import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.example.raylink_flutter',
  name: 'RayLink',
  groups: [
    {
      key: 2,
      name: '功能类-退出软件时点击"退出程序"',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.example.raylink_flutter.MainActivity',
          matches: '[vid="raylink_desktop_dialog_msg_bottombtn_left_tv"]',
          snapshotUrls: 'https://i.gkd.li/i/14047538',
        },
      ],
    },
  ],
});
