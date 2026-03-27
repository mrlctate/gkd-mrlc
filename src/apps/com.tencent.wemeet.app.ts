import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.wemeet.app',
  name: '腾讯会议',
  groups: [
    {
      key: 2,
      name: '评价提示-通话质量评价',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.tencent.wemeet.sdk.meeting.aftermeeting.AfterMeetingFeedbackMeetingExperienceActivity',
          matches: [
            '[text="通话品质如何"]',
            '[vid="closeBtn"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23786665',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-卡片广告',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.tencent.wemeet.sdk.meeting.premeeting.home.HomeActivity',
          matches:
            '@Button[clickable=true][childCount=1] > ImageView[childCount=0][width<80 && height<80] <<n [vid="operatingBannerContainer"]',
          snapshotUrls: 'https://i.gkd.li/i/23786670',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.tencent.wemeet.sdk.meeting.aftermeeting.AfterMeetingPictureActivity',
          matches: '[vid="btnClose"]',
          snapshotUrls: 'https://i.gkd.li/i/23787037',
        },
      ],
    },
  ],
});
