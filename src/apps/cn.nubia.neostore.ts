import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.nubia.neostore',
  name: '应用中心',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击跳过',
      fastQuery: true,
      rules: [
        {
          key: 0,
          position: {
            left: 'width * 0.9169',
            top: 'width * 0.0798',
          },
          matches:
            '[vid="splashParent"][childCount=2][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/21760226',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.UpgradeActivity',
          matches:
            '[vid="iv_ad_popup"][visibleToUser=true] + [vid="iv_ad_close"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23218862',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      desc: '点击取消',
      rules: [
        {
          fastQuery: true,
          activityIds: '.UpgradeActivity',
          matches:
            '[vid="footer_container"][visibleToUser=true] >2 @[text="取消"][clickable=true] + [text="立即安装"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23218862',
        },
      ],
    },
  ],
});
