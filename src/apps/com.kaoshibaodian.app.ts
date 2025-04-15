import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kaoshibaodian.app',
  name: '考试宝',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'ksbd.quiz.QuizActivity',
          matches:
            'FrameLayout[childCount=5] > @FrameLayout[childCount=1][text=null] > ImageView[childCount=0][text=null] <<n [vid="ad_layout"]',
          exampleUrls: 'https://e.gkd.li/c55cd473-21fa-4843-9778-89a3f5c8e073',
          snapshotUrls: 'https://i.gkd.li/i/16492043',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'ksbd.quiz.QuizActivity',
          matches: '[vid="close_iv"]',
          exampleUrls: 'https://e.gkd.li/c55cd473-21fa-4843-9778-89a3f5c8e073',
          snapshotUrls: 'https://i.gkd.li/i/16492043',
        },
      ],
    },
  ],
});
