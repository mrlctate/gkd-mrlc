import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coolapk.market',
  name: '酷安',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      excludeActivityIds: [
        '.view.search.', // 在搜索页面禁用
        '.view.feed.', // 在动态页面禁用
        '.view.node.DynamicNodePageActivity',
      ],
      rules: [
        {
          key: 0,
          anyMatches: [
            '@View[clickable=true && text=null] + TextView[index=parent.childCount.minus(1) && clickable=true && text=null] <(3,4,5) FrameLayout[childCount>2] >(8,9,10) TextView[index=parent.childCount.minus(1) && text*="跳转"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12503773',
            'https://i.gkd.li/i/13247610',
            'https://i.gkd.li/i/13264779',
            'https://i.gkd.li/i/13826359',
            'https://i.gkd.li/i/13827095',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          matches:
            '[!(id="com.coolapk.market:id/item_view") && !(vid="card_view")] > [text*="跳过"][text.length<10][width<400 && height<200][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12917990',
            'https://i.gkd.li/i/13211392',
            'https://i.gkd.li/i/23097140',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/13247733',
            'https://i.gkd.li/i/13296816',
            'https://i.gkd.li/i/18245546',
          ],
        },
      ],
    },
    {
      key: 0,
      name: '分段广告-信息流广告',
      fastQuery: true,
      activityIds: [
        '.view.feed.FeedDetailActivityV8',
        '.view.main.MainActivity',
        '.view.node.DynamicNodePageActivity',
        '.view.base.SimpleAlphaActivity',
        '.view.search.SuperSearchResultActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            '@[vid="close_view"] <<n [vid="coolapk_card_view"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/19004644',
            'https://i.gkd.li/i/19004652',
            'https://i.gkd.li/i/19004663',
            'https://i.gkd.li/i/19005176',
            'https://i.gkd.li/i/20776874',
            'https://i.gkd.li/i/21693917',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/14996359',
            'https://i.gkd.li/i/15159886',
            'https://i.gkd.li/i/15587119',
            'https://i.gkd.li/i/20768037',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          anyMatches: [
            '@[clickable=true] >(1,2) [text="不感兴趣"][visibleToUser=true]',
            '[text="不感兴趣"][clickable=true][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/19004649',
            'https://i.gkd.li/i/19643258',
            'https://i.gkd.li/i/19643262',
            'https://i.gkd.li/i/19534649',
            'https://i.gkd.li/i/20776872',
            'https://i.gkd.li/i/21693916',
            'https://i.gkd.li/i/23046625',
          ],
        },
        {
          preKeys: [0, 1], // 疑似酷安旧版本bug，点击不感兴趣后会再出现一个弹窗
          matches: '[text="不感兴趣"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/21036817',
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          matches:
            '[text^="酷安-"][visibleToUser=true] +3 View[clickable=true] > [text="取消"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/12882371',
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-[大家还下载了]应用推荐',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.view.search.SuperSearchResultActivity',
            '.view.node.DynamicNodePageActivity',
          ],
          matches: '[text="大家还下载了"] + [vid="close_view"]',
          exampleUrls: 'https://e.gkd.li/0cfa8038-dc74-46c3-9e06-998965d73711',
          snapshotUrls: [
            'https://i.gkd.li/i/16448265',
            'https://i.gkd.li/i/16448385',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '局部广告-信息流广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.view.search.SuperSearchResultActivity',
          matches: '@[desc="关闭"] <<n [vid="item_view" && clickable=true]',
          exampleUrls: 'https://e.gkd.li/efd366d9-1c66-4c35-b164-6f91a623e2f2',
          snapshotUrls: 'https://i.gkd.li/i/19643150',
        },
      ],
    },
  ],
});
