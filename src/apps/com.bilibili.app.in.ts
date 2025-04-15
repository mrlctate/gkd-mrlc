import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bilibili.app.in',
  name: 'bilibili',
  groups: [
    {
      key: 4,
      name: '通知提示-全程赛程',
      desc: '点击关闭',
      fastQuery: true,
      activityIds: 'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3',
      rules: [
        {
          key: 1,
          matches: '@[vid="iv_close"] - LinearLayout >2 [text^="一键预约"]',
          snapshotUrls: ['https://i.gkd.li/i/18300934'],
        },
        {
          key: 2,
          matches: '[vid="live_multiview_dropview"] > [text="收起"]',
          snapshotUrls: ['https://i.gkd.li/i/18300934'],
        },
        {
          key: 3,
          matches: '[text="订阅"] < LinearLayout + [vid="match_close"]',
          snapshotUrls: ['https://i.gkd.li/i/18300934'],
        },
        {
          key: 4,
          matches: '[text^="关注主播"] +2 [vid="iv_close"]',
          snapshotUrls: ['https://i.gkd.li/i/18300949'],
        },
      ],
    },
    {
      key: 5,
      name: '评价提示-评论区满意度评价',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      activityIds: 'com.bilibili.video.story.StoryVideoActivity',
      rules:
        '[text="对当前的评论区满意吗？"] + [id="com.bilibili.app.in:id/close"]',
      snapshotUrls: 'https://i.gkd.li/i/13115189',
    },
    {
      key: 6,
      name: '评价提示-APP评分',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'tv.danmaku.bili.MainActivityV2',
          matches: '[id="com.bilibili.app.in:id/cancel"][text="下次再说"]',
          snapshotUrls: 'https://i.gkd.li/i/13180746',
        },
      ],
    },
    {
      key: 7,
      name: '通知提示-订阅感兴趣的通知',
      desc: '点击"暂不开启"',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: ['[text="订阅感兴趣的通知"]', '[text="暂不开启"]'],
          snapshotUrls: 'https://i.gkd.li/i/13399195',
        },
      ],
    },
    {
      key: 8,
      name: '权限提示-通知权限',
      desc: '自动点击"暂不"',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'tv.danmaku.bili.MainActivityV2',
          matches: ['[text="打开推送通知"]', '[text="暂不"]'],
          snapshotUrls: 'https://i.gkd.li/i/15907493',
        },
      ],
    },
  ],
});
