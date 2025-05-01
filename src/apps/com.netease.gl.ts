import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.gl',
  name: '网易大神',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.netease.gl.ui.activity.welcome.WelcomeActivity',
          matches:
            '@[id="com.netease.gl:id/iv_close"] + [id="com.netease.gl:id/iv_cover"]',
          snapshotUrls: 'https://i.gkd.li/i/12883277',
        },
      ],
    },
  ],
});
