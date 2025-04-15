import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.mail',
  name: '网易邮箱大师',
  groups: [
    {
      key: 2,
      name: '全屏广告-邮件列表广告',
      activityIds: 'com.netease.mail.biz.main.MainITabActivity',
      fastQuery: true,
      rules: [
        {
          key: 0,
          matches: '[id="com.netease.mail:id/ad_vip"]',
          snapshotUrls: 'https://i.gkd.li/i/12999833',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[id="com.netease.mail:id/ll_delete"]',
          snapshotUrls: 'https://i.gkd.li/i/12999841',
        },
      ],
    },
    {
      key: 5,
      name: '其他-获得成就弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          matches:
            'TextView[text="恭喜您获得以下成就"] - @TextView[clickable=true][text=""] <<n [vid="browser_fragment_container"]',
          snapshotUrls: 'https://i.gkd.li/i/13876817',
        },
      ],
    },
  ],
});
