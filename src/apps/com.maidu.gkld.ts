import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.maidu.gkld',
  name: '公考雷达',
  groups: [
    {
      key: 2,
      name: '局部广告-首页右侧悬浮广告',
      rules: [
        {
          activityIds: 'com.maidu.gkld.ui.main.MainActivity',
          matches:
            '[id="com.maidu.gkld:id/fl_float"] + [id="com.maidu.gkld:id/close_image_view"]',
          snapshotUrls: 'https://i.gkd.li/i/12715291',
        },
      ],
    },
  ],
});
