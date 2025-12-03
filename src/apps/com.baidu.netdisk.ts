import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          key: 1,
          activityIds: '.ui.MainActivity',
          matches:
            '[vid="cl_root"][childCount=2][visibleToUser=true] > [vid="iv_close"][width=height][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23483484',
        },
        {
          key: 2,
          activityIds: '.module.sharelink.ChainInfoActivity',
          matches: '[text="为你推荐"] + [desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/18815407',
        },
        {
          key: 3,
          activityIds: [
            '.business.guide.dialog.lifeproduct.LifeV10GuideDialog',
            '.ui.MainActivity',
          ],
          matches: '[id="com.baidu.netdisk:id/iv_close"][clickable=true]',
          excludeMatches: '[text="选择文件"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12642505',
            'https://i.gkd.li/i/12783106',
            'https://i.gkd.li/i/12923937',
            'https://i.gkd.li/i/13806852',
          ],
        },
        {
          key: 4,
          name: '相册页面激活无限空间弹窗',
          activityIds:
            'com.baidu.netdisk.cloudimage.ui.album.AlbumGuideOneImageDialog',
          matches:
            '@ImageView[id="com.baidu.netdisk:id/close_btn"] + ImageView[id="com.baidu.netdisk:id/bg_image"]',
          snapshotUrls: 'https://i.gkd.li/i/12648987',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      activityIds: '.ui.MainActivity',
      rules: [
        {
          key: 0,
          name: '首页特惠广告',
          fastQuery: true,
          matches: '[id="com.baidu.netdisk:id/banner_item_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12706544',
        },
        {
          key: 1,
          name: '首页热门广告',
          fastQuery: true,
          matches:
            '[id="com.baidu.netdisk:id/vf_content"] + [id="com.baidu.netdisk:id/close"]',
          snapshotUrls: 'https://i.gkd.li/i/12706544',
        },
        {
          key: 2,
          name: '[我的]页面限时福利',
          matches: '@TextView + [text="专属福利"]',
          snapshotUrls: 'https://i.gkd.li/i/12706549',
        },
        {
          key: 3,
          name: '续费横幅提示',
          matches: 'View[desc="续费"] + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12924036',
        },
        {
          key: 4,
          name: 'VIP横幅广告',
          fastQuery: true,
          excludeMatches: '[text="删除文件"][visibleToUser=true]',
          matches: [
            '[text*="VIP"]',
            '[id*="close" || id$="Close"][width=height]',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '权限提示-通知权限',
      desc: '自动点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: 'ImageView[id="com.baidu.netdisk:id/dialog_cancel"]', //单独使用ID会导致误触（例如删除确认https://i.gkd.li/i/13069049）
      snapshotUrls: 'https://i.gkd.li/i/12923936',
    },
    {
      key: 12,
      name: '局部广告-悬浮广告',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'com.baidu.netdisk.ui.MainActivity',
          matches:
            '[vid="float_btn_close"][clickable=true][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/470eec82-ed99-4f50-beba-2587e525cfdf',
          snapshotUrls: 'https://i.gkd.li/i/14278618',
        },
      ],
    },
  ],
});
