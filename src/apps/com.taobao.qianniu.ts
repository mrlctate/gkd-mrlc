import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.qianniu',
  name: '千牛',
  groups: [
    {
      key: 1,
      name: '功能类-自动评价',
      desc: '点击评论',
      fastQuery: true,
      resetMatch: 'app',
      activityIds: '.deal.ui.BaseDealActivity',
      rules: [
        {
          key: 1,
          matches:
            'ViewGroup[index=0] > LinearLayout > [vid="rateReplyBtn"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/18776645',
        },
        {
          preKeys: [1],
          key: 2,
          matches: '[vid="templates"] > FrameLayout > [vid="text"]',
          snapshotUrls: 'https://i.gkd.li/i/18776648',
        },
        {
          preKeys: [2],
          key: 3,
          matches: '[vid="left"] + [vid="right"]',
          snapshotUrls: 'https://i.gkd.li/i/18776648',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      rules: [
        {
          key: 1,
          matches:
            'LinearLayout[childCount=2] > [vid="img_pic"] + [vid="btn_close"]',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-自动选中发送原图',
      actionMaximum: 1,
      rules: [
        {
          activityIds:
            'com.taobao.taopai.business.image.album.ImageGalleryActivity',
          matches:
            '[text="预览"] + [text="原图"][clickable=true][width!=height]',
          snapshotUrls: 'https://i.gkd.li/i/19126601',
        },
      ],
    },
  ],
});
