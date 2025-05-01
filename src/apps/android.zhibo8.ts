import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'android.zhibo8',
  name: '直播吧',
  groups: [
    {
      key: 1,
      name: '分段广告-信息流广告',
      desc: '点击[关闭]-点击[不感兴趣]',
      fastQuery: true,
      activityIds: [
        'android.zhibo8.ui.contollers.main.MainActivity',
        'android.zhibo8.ui.contollers.detail.DetailActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击关闭',
          matches: '[vid="iv_tip"][clickable=true][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13786148',
            'https://i.gkd.li/i/14428863',
            'https://i.gkd.li/i/15443198',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击不感兴趣',
          matches: '@[clickable=true] >3 [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/14428912',
        },
      ],
    },
  ],
});
