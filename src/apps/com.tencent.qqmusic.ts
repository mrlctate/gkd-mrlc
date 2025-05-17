import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqmusic',
  name: 'QQ音乐',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      fastQuery: true,
      activityIds: '.activity.AppStarterActivity',
      rules: [
        {
          key: 1,
          matches:
            '[vid="n3o"] > ViewPager > FrameLayout[childCount=4 || childCount=5] > TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/19235637',
        },
        {
          key: 2,
          action: 'clickCenter',
          matches: '@[desc="关闭"][clickable=true] -(1,2) [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13206534', //歌单页
            'https://i.gkd.li/i/13797001', //我的页
          ],
        },
        {
          key: 3,
          matches:
            '@ImageView - ImageView - RelativeLayout >n [text="听歌入会赢绿钻"||text="摇动点击广告跳转"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13206982',
            'https://i.gkd.li/i/13218134',
          ],
        },
        {
          key: 4,
          matches:
            '@[clickable=true][visibleToUser=true] > [text="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15041019',
            'https://i.gkd.li/i/18227243',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/18219557',
        },
        {
          key: 5,
          matches:
            'RecyclerView > LinearLayout[childCount=3] >5 ViewGroup[childCount=3] > @ViewGroup[clickable=true] >2 ImageView[text=null][desc=null][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15756931',
        },
        {
          key: 6,
          matches:
            '@ImageView[clickable=true] - [text="广告"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17450309',
        },
        {
          key: 7,
          matches: '[text="广告 | 关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/18227204',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      activityIds: [
        '.activity.TranslucentWebViewActivity',
        '.activity.AppStarterActivity',
      ],
      rules: [
        {
          key: 0,
          matches: '[desc^="关闭" || text^="关闭"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15209764',
            'https://i.gkd.li/i/15261116',
            'https://i.gkd.li/i/17459008',
            'https://i.gkd.li/i/17057551',
            'https://i.gkd.li/i/19229689',
          ],
        },
        {
          key: 2,
          matches:
            '@ImageView <3 FrameLayout <2 FrameLayout < FrameLayout < [vid="f61"]',
          exampleUrls: 'https://e.gkd.li/881cddd2-e4ec-472e-8bf8-00f26f61cbc4',
          snapshotUrls: 'https://i.gkd.li/i/18439138',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-签到弹窗',
      fastQuery: true,
      actionMaximum: 1,
      matchTime: 10000,
      activityIds: '.activity.AppStarterActivity',
      rules: [
        {
          key: 1,
          name: '关闭签到弹窗',
          matches:
            '[id="android:id/content"] >3 ViewGroup[childCount=2][clickable=true] >2 ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/19235479',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-免流弹窗',
      desc: '点击[流量够用]',
      fastQuery: true,
      activityIds: [
        '.activity.AppStarterActivity',
        '.business.playernew.view.NewPlayerActivity',
      ],
      rules: [
        {
          matches: '[text="流量够用"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13197868',
            'https://i.gkd.li/i/15285647',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-看广告免费听歌弹窗',
      desc: '点击X',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
          matches:
            '@ViewGroup[desc="关闭按钮"] - [desc^="看广告"] <2 ViewGroup < ViewGroup < FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13806773',
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-VIP弹窗',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches:
            '@ViewGroup[childCount=0][clickable=true] <2 ViewGroup[childCount=2] < FrameLayout < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13806782',
        },
        {
          key: 1,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.activity.AppStarterActivity',
          matches: '[desc$="不再提示"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/e3d904e1-dfe5-4d12-b8c8-b1eead8459c9',
          snapshotUrls: 'https://i.gkd.li/i/18428240',
        },
      ],
    },
    {
      key: 7,
      name: '全屏广告-高品质音质弹窗',
      desc: '点击关闭',
      rules: [
        {
          key: 1,
          activityIds: '.business.playernew.view.NewPlayerActivity',
          matches:
            '@ImageView < FrameLayout <2 FrameLayout < FrameLayout < [vid="exe"]',
          exampleUrls: 'https://e.gkd.li/bde2d326-6b44-4d4d-b8f6-8bfeb97d7e29',
          snapshotUrls: 'https://i.gkd.li/i/16914135',
        },
      ],
    },
    {
      key: 8,
      name: '评价提示-好评弹窗',
      desc: '点击关闭',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.AppStarterActivity',
          matches: '@[vid="close_btn"] - * > [text*="好评"]',
          snapshotUrls: 'https://i.gkd.li/i/14881903',
        },
      ],
    },
    {
      key: 9,
      name: '分段广告-评论区广告',
      desc: '点击右下角展开-点击[不感兴趣]',
      activityIds:
        'com.tencent.qqmusic.activity.base.FragmentActivityWithMinibar',
      rules: [
        {
          key: 0,
          matches:
            'RecyclerView > ViewGroup > ViewGroup[childCount=6] > @ViewGroup[clickable=true][childCount=1] > ViewGroup > View',
          snapshotUrls: 'https://i.gkd.li/i/15010210',
        },
        {
          preKeys: [0],
          key: 99,
          fastQuery: true,
          matches: '@[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/15010226',
        },
      ],
    },
    {
      key: 11,
      name: '其他-播放页广告',
      desc: '点击跳过/关闭',
      fastQuery: true,
      activityIds: '.business.playernew.view.NewPlayerActivity',
      rules: [
        {
          key: 1,
          name: '局部广告-播放页跳过',
          matches:
            '[text^="广告"] + [text="跳过"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13985169',
        },
        {
          key: 2,
          name: '其他-播放页[猜你也会喜欢]推荐',
          matches:
            '@ImageView[childCount=0][clickable=true] -2 [text="猜你也会喜欢"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18410610',
        },
      ],
    },
  ],
});
