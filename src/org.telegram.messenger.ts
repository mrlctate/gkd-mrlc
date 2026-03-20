import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'org.telegram.messenger',
  name: 'Telegram',
  groups: [
    {
      key: 2,
      name: '其他-添加生日提示',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'org.telegram.ui.LaunchActivity',
          matches: '@ImageView[clickable=true] - * >2 [text^="添加您的生日"]',
          snapshotUrls: 'https://i.gkd.li/i/22971075',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-拍卖提示',
      rules: [
        {
          fastQuery: true,
          activityIds: 'org.telegram.ui.LaunchActivity',
          matches:
            '@ImageView[clickable=true][width<140 && height<140] - * >2 [text$="Auction is live!"]',
          snapshotUrls: 'https://i.gkd.li/i/23725025',
        },
      ],
    },
  ],
});
