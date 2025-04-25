import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sjm.luobo',
  name: '追剧达人',
  groups: [
    {
      key: 6,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          matches:
            '@ImageView[width=height] < FrameLayout <3 FrameLayout <2 FrameLayout < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13723963',
        },
      ],
    },
  ],
});
