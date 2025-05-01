import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mem.MacaoLife',
  name: '澳覓',
  groups: [
    {
      key: 2,
      name: '局部广告-浮窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.mem.life.ui.home.HomeActivity',
          matches: '[id="com.mem.MacaoLife:id/close"]',
          snapshotUrls: 'https://i.gkd.li/i/13350685',
        },
      ],
    },
  ],
});
