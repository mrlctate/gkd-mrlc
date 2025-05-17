import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bilibili.app.in',
  name: '哔哩哔哩-国际版',
  groups: [
    {
      key: 3,
      name: '功能类-关闭弹幕',
      desc: '点击关闭',
      fastQuery: true,
      activityIds: 'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
      rules: [
        {
          key: 0,
          matches: '[desc="关闭弹幕" && clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/19787124',
        },
      ],
    },
    {
      key: 4,
      name: '通知提示-全程赛程',
      desc: '点击关闭',
      fastQuery: true,
      activityIds: 'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3',
      rules: [
        {
          key: 2,
          matches: '[vid="live_multiview_dropview"] > [text="收起"]',
          snapshotUrls: 'https://i.gkd.li/i/18300934',
        },
        {
          key: 3,
          matches: '[text="订阅"] < LinearLayout + [vid="match_close"]',
          snapshotUrls: 'https://i.gkd.li/i/18300934',
        },
        {
          key: 4,
          matches: '[text^="关注主播"] +2 [vid="iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/18300949',
        },
        {
          key: 5,
          matches:
            '[text="天选时刻"] > View > View > TextView[clickable=true][index=1]',
          snapshotUrls: 'https://i.gkd.li/i/19958881',
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
  ],
});
