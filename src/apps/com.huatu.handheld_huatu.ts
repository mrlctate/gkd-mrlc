import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huatu.handheld_huatu',
  name: '华图在线',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.huatu.handheld_huatu.view.MainPopDialog',
            'com.huatu.handheld_huatu.business.main.MainTabActivity',
          ],
          matches:
            '[id="com.huatu.handheld_huatu:id/main_img_adv_bg"] + [id="com.huatu.handheld_huatu:id/main_img_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12715702',
            'https://i.gkd.li/i/12744973',
          ],
        },
      ],
    },
  ],
});
