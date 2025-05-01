import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.newsreader.activity',
  name: '网易新闻',
  groups: [
    {
      key: 4,
      name: '分段广告-首页信息流广告',
      desc: '点击卡片广告x关闭按钮-关闭反馈理由弹窗',
      activityIds: 'com.netease.nr.phone.main.MainActivity',
      rules: [
        {
          key: 1,
          matches:
            'FrameLayout[childCount=1] >5 TextView[text="广告"] +2 ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12639751',
        },
        {
          preKeys: [1],
          name: '首页信息流广告-反馈理由',
          matches: '[text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/12639752',
        },
      ],
    },
  ],
});
