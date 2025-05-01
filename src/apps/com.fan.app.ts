import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fan.app',
  name: '十六番旅行',
  groups: [
    {
      key: 1,
      name: '分段广告-卡片广告',
      fastQuery: true,
      activityIds: 'com.mvvm.view.LazyMapStrategyActivity_TengXun',
      rules: [
        {
          key: 0,
          matches:
            '@View[clickable=true][childCount=0] < FrameLayout[desc^="dislike"] + FrameLayout >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13258021',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '@LinearLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13258015',
        },
      ],
    },
  ],
});
