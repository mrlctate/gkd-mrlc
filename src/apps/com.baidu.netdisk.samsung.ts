import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.netdisk.samsung',
  name: '百度网盘-三星版本',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: '[id="com.baidu.netdisk.samsung:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12738331',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches:
            '[id="com.baidu.netdisk.samsung:id/buy_product_root"] > [id="com.baidu.netdisk.samsung:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12738388',
        },
        {
          key: 1,
          activityIds: 'com.baidu.netdisk.ui.MainActivity',
          matches:
            'View[childCount=2] > @TextView[text=""][clickable=true] + TextView[text="专属福利"][clickable=false]',
          snapshotUrls: 'https://i.gkd.li/i/12738404',
        },
        {
          key: 2,
          activityIds: 'com.baidu.netdisk.ui.MainActivity',
          matches:
            '@TextView[text=""][clickable=true] - TextView[text="去使用"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12738449',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'com.baidu.netdisk.ui.transfer.TransferListTabActivity',
          matches:
            '[vid="close_probationary_guide_layout"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/ab41b402-c4d0-439a-96f3-23029434aec4',
          snapshotUrls: 'https://i.gkd.li/i/16423129',
        },
        {
          key: 4,
          fastQuery: true,
          activityIds: 'com.baidu.netdisk.ui.transfer.TransferListTabActivity',
          matches: '[vid="youa_guide_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/ab41b402-c4d0-439a-96f3-23029434aec4',
          snapshotUrls: 'https://i.gkd.li/i/16423129',
        },
      ],
    },
    {
      key: 6,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[vid="dialog_cancel"]',
          exampleUrls:
            'https://m.gkd.li/57941037/06ae328b-f852-407b-83ab-ec295d41baa4',
          snapshotUrls: 'https://i.gkd.li/i/14893280',
        },
      ],
    },
    {
      key: 7,
      name: '功能类-[上新【专辑】功能]弹窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.baidu.netdisk.filealbum.ui.activity.FileAlbumListActivity',
          matches: '[vid="add_widget_dialog_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/256b5cad-a5ad-48e3-ba72-9c84447f2cac',
          snapshotUrls: 'https://i.gkd.li/i/14893285',
        },
      ],
    },
  ],
});
