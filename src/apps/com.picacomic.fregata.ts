import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.picacomic.fregata',
  name: 'PicACG',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[id="com.picacomic.fregata:id/imageButton_popup_close"]',
          exampleUrls:
            'https://m.gkd.li/83610194/2a9a1179-3a50-4317-900a-42c8197517ed',
          snapshotUrls: 'https://i.gkd.li/i/13422624',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-漫画详情页广告',
      desc: '点击卡片广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'com.picacomic.fregata.activities.MainActivity',
          matches: '[id="com.picacomic.fregata:id/imageButton_banner_close"]',
          exampleUrls:
            'https://m.gkd.li/83610194/92feb979-d75a-4ee5-a880-da2e4250d1e3',
          snapshotUrls: 'https://i.gkd.li/i/13423009',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-自动签到',
      desc: '切换到个人页面时自动签到，并确定',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.picacomic.fregata.activities.MainActivity',
      rules: [
        {
          key: 0,
          matches:
            '[id="com.picacomic.fregata:id/textView_profile_punch_in"][text="打嗶卡"]',
          exampleUrls:
            'https://m.gkd.li/83610194/d53cc0cb-2a3e-4398-a415-3b8083edd328',
          snapshotUrls: 'https://i.gkd.li/i/13422844',
        },
        {
          preKeys: [0],
          key: 1,
          matches:
            '[id="com.picacomic.fregata:id/button_dialog_custom_positive"][text="確定"]',
          exampleUrls:
            'https://m.gkd.li/83610194/90048fce-fe89-4ac7-9ae6-fe3d7b99aeaf',
          snapshotUrls: 'https://i.gkd.li/i/13422874',
        },
      ],
    },
    {
      key: 5,
      name: '功能类-流量提醒弹窗',
      desc: '弹出流量提醒弹窗时自动点击“确定”',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'com.picacomic.fregata.activities.ComicViewerActivity',
          matches:
            'RelativeLayout > Button[text="確定"][id="com.picacomic.fregata:id/button_dialog_custom_positive"]',
          snapshotUrls: 'https://i.gkd.li/i/13466492',
        },
      ],
    },
  ],
});
