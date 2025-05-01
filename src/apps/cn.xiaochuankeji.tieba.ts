import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.xiaochuankeji.tieba',
  name: '最右',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          anyMatches: [
            '@View[clickable=true && text=null] + TextView[index=parent.childCount.minus(1) && clickable=true && text=null] <(3,4,5) FrameLayout[childCount>2] >(8,9,10) TextView[index=parent.childCount.minus(1) && text*="跳转"]', // 字节SDK
          ],
        },
        {
          key: 1,
          position: {
            left: 'width * 0.8824',
            top: 'width * 0.1333',
          },
          matches:
            '@[vid="contentView"] > TextView[index=parent.childCount.minus(1) && text*="跳转"]',
          snapshotUrls: 'https://i.gkd.li/i/19762870',
        },
      ],
    },
    {
      key: 3,
      name: '分段广告-评论区卡片广告',
      activityIds:
        'cn.xiaochuankeji.tieba.ui.post.postdetail.PostDetailActivity',
      rules: [
        {
          key: 1,
          matches:
            '[id="cn.xiaochuankeji.tieba:id/hh_hermes_ad_tag"] + [id="cn.xiaochuankeji.tieba:id/iv_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12661011',
        },
        {
          preKeys: [1],
          key: 2,
          matches:
            '[id="cn.xiaochuankeji.tieba:id/iv_dislike_reason"] + LinearLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/12661028',
        },
      ],
    },
  ],
});
