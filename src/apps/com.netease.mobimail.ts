import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.mobimail',
  name: '网易邮箱',
  groups: [
    {
      key: 1,
      name: '局部广告-邮件列表页面广告条目',
      rules: [
        {
          activityIds: 'com.netease.mail.biz.main.MainITabActivity',
          matches:
            '[id="com.netease.mobimail:id/ad_vip" || id="com.netease.mobimail:id/ll_delete"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12683488',
            'https://i.gkd.li/i/12683511',
          ],
        },
      ],
    },
  ],
});
