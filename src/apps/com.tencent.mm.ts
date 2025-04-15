import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 0,
      name: '分段广告-朋友圈广告',
      desc: '点击/关闭广告',
      fastQuery: true,
      activityIds: [
        '.plugin.sns.ui.improve.ImproveSnsTimelineUI',
        '.plugin.sns.ui.SnsTimeLineUI',
        '.plugin.profile.ui.ContactInfoUI',
      ],
      rules: [
        // 第一段
        {
          key: 0,
          name: '第一段 点击朋友圈广告',
          matches:
            '@LinearLayout[clickable=true && left>850] <2 LinearLayout < LinearLayout - ImageView[desc!=null] < LinearLayout[childCount=2 && index=0]',
          exampleUrls: 'https://e.gkd.li/d1941064-d4e9-4bb2-99ab-ba30e0ce8126',
          snapshotUrls: [
            'https://i.gkd.li/i/13791200',
            'https://i.gkd.li/i/16568338',
            'https://i.gkd.li/i/19644924',
          ],
        },
        // 第二，三段
        {
          key: 1,
          name: '第二，三段 点击[关闭广告]',
          matches:
            '@*[clickable=true && index<3] <<(3,4,6) *[childCount>3] - ImageView[text=null] < LinearLayout[childCount=2 && index=0]',
          snapshotUrls: [
            'https://i.gkd.li/i/13926578', // 第二段
            'https://i.gkd.li/i/15137016', // <<(4)
            'https://i.gkd.li/i/18817451', // <<(6)
            'https://i.gkd.li/i/19650367', // <<(6)
            'https://i.gkd.li/i/19650629', // 第三段
            'https://i.gkd.li/i/12663984', // 直接关闭
            'https://i.gkd.li/i/14207480', // Close the ad
            'https://i.gkd.li/i/12907642', // 关闭该广告
          ],
        },
      ],
    },
    {
      key: 1,
      name: '青少年模式',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: [
            '.plugin.finder.ui.FinderHomeAffinityUI',
            '.plugin.finder.nearby.NearbyUI',
            '.ui.LauncherUI',
          ],
          matches: '[text^="为呵护未成年人健康成长"] +2 Button',
          snapshotUrls: [
            'https://i.gkd.li/i/18769951',
            'https://i.gkd.li/i/14896723',
            'https://i.gkd.li/i/18135103',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '功能类-青少年模式自动点击验证密码',
      desc: '点击“验证密码”以申请临时访问',
      matchTime: 10000,
      actionMaximum: 1,
      fastQuery: true,
      activityIds: [
        '.plugin.webview.ui.tools.MMWebViewUI',
        '.plugin.teenmode.ui.AuthorizationRequestUI',
      ],
      rules: [
        {
          key: 0,
          matches: '@LinearLayout[childCount=2] > TextView[text="验证密码"]',
          snapshotUrls: 'https://i.gkd.li/i/13588338',
        },
        {
          key: 1,
          matches: 'View[desc="验证密码"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13631987',
        },
        {
          key: 2,
          matches:
            'WebView[childCount=6] View[index=4] > [text="验证密码"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14050004',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-电脑端登录微信时自动确认登录',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 2,
      rules: [
        {
          key: 1,
          action: 'clickCenter',
          activityIds: [
            '.plugin.webwx.ui.ExtDeviceWXLoginUI',
            '.ui.LauncherUI',
          ],
          matches:
            'RelativeLayout[id!=null] + LinearLayout[childCount=2] > @Button[clickable=true] + TextView[clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13522577',
            'https://i.gkd.li/i/19245204',
          ],
        },
        {
          key: 2,
          matches: '[text="验证已通过"] +2 [text="确定"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/19243011',
        },
      ],
    },
    {
      key: 5,
      name: '功能类-自动授权微信号信息',
      desc: '自动允许使用头像昵称等',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          key: 1,
          action: 'clickCenter',
          activityIds: ['.plugin.base.stub.UIEntryStub', '.ui.LauncherUI'],
          matches: ['[text^="获取你的"]', '[text="允许"][clickable=true]'],
          snapshotUrls: [
            'https://i.gkd.li/i/12663602',
            'https://i.gkd.li/i/13065462',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '功能类-微信读书网页版扫码登录自动授权',
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: '.plugin.webview.ui.tools.MMWebViewUI',
      rules: [
        {
          key: 1,
          matches: '[text="微信读书网页版"] +3 Button[text="登 录"]',
          snapshotUrls: 'https://i.gkd.li/i/12506197',
        },
        {
          preKeys: [1],
          key: 2,
          action: 'back',
          matches: '[text="登录成功"]',
          snapshotUrls: 'https://i.gkd.li/i/12506201',
        },
      ],
    },
    {
      key: 7,
      name: '功能类-自动领取微信红包',
      desc: '自动领取私聊红包,群聊红包',
      fastQuery: true,
      rules: [
        {
          key: 3,
          name: '点击别人发的红包',
          activityIds: '.ui.LauncherUI',
          matches: '@[vid="b4t"][childCount=2] > LinearLayout[childCount=1]',
          snapshotUrls: 'https://i.gkd.li/i/18134826',
        },
        {
          preKeys: [3],
          key: 4,
          name: '点击红包-开',
          activityIds: '.plugin.luckymoney.ui.LuckyMoneyNotHookReceiveUI',
          action: 'clickCenter',
          matches: '[vid="iyr"] +2 [vid="j6h"]',
          snapshotUrls: 'https://i.gkd.li/i/18134828',
          excludeSnapshotUrls: 'https://i.gkd.li/i/12567698', // 金币动画的快照
        },
        {
          preKeys: [4],
          name: '从红包结算界面返回',
          activityIds: '.plugin.luckymoney.ui.LuckyMoneyDetailUI',
          matches: '@ImageView <3 [vid="izy"]',
          snapshotUrls: [
            'https://i.gkd.li/i/18134829',
            'https://i.gkd.li/i/18135031',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '功能类-自动选中发送原图',
      desc: '自动选中原图，可手动取消勾选',
      fastQuery: true,
      actionMaximum: 1,
      activityIds: '.plugin.gallery.ui.AlbumPreviewUI',
      rules: [
        {
          key: 1, // 8.0.56
          action: 'clickCenter',
          matches:
            '@ImageButton[clickable=true && width!=height] + TextView <2 RelativeLayout[childCount=2 && width!=height] < RelativeLayout[vid!=""] + RelativeLayout[vid!="" && clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/18764301', // 已选中
            'https://i.gkd.li/i/16987145', // 未选中
            'https://i.gkd.li/i/16987141', // 已选中
          ],
          exampleUrls: [
            'https://e.gkd.li/354ca046-80ca-41d0-a31f-931a19a4695f',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '功能类-自动查看原图',
      desc: '自动点击[查看原图]',
      fastQuery: true,
      actionMaximum: 1,
      activityIds: '.ui.LauncherUI',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches: '[text^="查看原图" && clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/19638010',
        },
        {
          preKeys: [0],
          key: 2,
          matches: '[text="我知道了" && clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/19637941',
        },
      ],
    },
    {
      key: 11,
      name: '功能类-网页版文件传输助手扫码后自动打开',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '.ui.LauncherUI',
          matches:
            'TextView + LinearLayout[childCount=2] > @Button[clickable=true] + TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12793745',
        },
      ],
    },
    {
      key: 19,
      name: '功能类-订阅号-展开更早的消息',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds:
            'com.tencent.mm.plugin.brandservice.ui.timeline.BizTimeLineUI',
          matches: '@[clickable=true] > [text="展开更早的消息"]',
          snapshotUrls: 'https://i.gkd.li/i/13790550',
        },
        {
          key: 1,
          matches: '[desc="展开更早的消息"]',
          snapshotUrls: 'https://i.gkd.li/i/13790949',
        },
      ],
    },
    {
      key: 25,
      name: '局部广告-订阅号消息-推荐文章',
      desc: '点击关闭',
      rules: [
        {
          activityIds:
            'com.tencent.mm.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity',
          matches:
            'View[childCount=2] > View[desc$="推​荐​"][childCount=3] > ImageView[index=2][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14392392',
        },
      ],
    },
    {
      key: 26,
      name: '功能类-付款后自动点击完成/返回商家',
      fastQuery: true,
      activityIds: '.framework.app.UIPageFragmentActivity',
      rules: [
        {
          matches:
            'ViewGroup[childCount=1] >2 Button[childCount=2][clickable=true] > ImageView + TextView[text!=null]',
          exampleUrls:
            'https://m.gkd.li/57941037/a5177d9d-6745-443f-baf5-af57153430d8',
          snapshotUrls: [
            'https://i.gkd.li/i/14399355',
            'https://i.gkd.li/i/19250738',
          ],
          // 我的零钱页面
          excludeSnapshotUrls: 'https://i.gkd.li/i/14532946',
        },
      ],
    },
    {
      key: 28,
      name: '分段广告-订阅号消息-视频推荐',
      desc: '点击[X]-点击[不喜欢此类视频]-点击[确定]',
      activityIds:
        'com.tencent.mm.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity',
      rules: [
        {
          key: 0,
          name: '点击[X]',
          matches:
            '[desc="订阅号消息"] +3 View >2 [visibleToUser=true] - View >3 ImageView[index=2][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/b777c0b1-f8ed-4712-afd6-2e1a72243475',
          snapshotUrls: 'https://i.gkd.li/i/14436176',
        },
        {
          preKeys: 0,
          key: 1,
          name: '点击[不喜欢此类视频]',
          matches: '[desc="不喜欢此类视频"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/39e8b378-9b55-4838-92af-b28f04402ca4',
          snapshotUrls: 'https://i.gkd.li/i/14444654',
        },
        {
          preKeys: 1,
          key: 2,
          name: '点击[确定]',
          matches: '[desc="确定"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/590eb619-9987-4edf-98a8-17146ffeda10',
          snapshotUrls: 'https://i.gkd.li/i/14436190',
        },
      ],
    },
    {
      key: 29,
      name: '功能类-解锁 Windows 微信',
      desc: '点击[解锁]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.tencent.mm.plugin.webwx.ui.WebWXUnlockUI',
          matches: '[text="解锁"]',
          exampleUrls:
            'https://m.gkd.li/57941037/85bb6dcd-0d04-46c1-af14-6e4b57ff4dca',
          snapshotUrls: 'https://i.gkd.li/i/14490116',
        },
      ],
    },
    {
      key: 30,
      name: '全屏广告-文档页面-腾讯文档APP弹窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
          matches:
            '@TextView[clickable=true] + * > [visibleToUser=true][text^="使用 APP"] <<n [id="android:id/content"]',
          exampleUrls:
            'https://m.gkd.li/57941037/2228f99e-e0a1-4915-864f-d60e3d8580a6',
          snapshotUrls: 'https://i.gkd.li/i/14533286',
        },
      ],
    },
    {
      key: 31,
      name: '分段广告-订阅号消息-推荐阅读',
      desc: '点击关闭',
      activityIds:
        'com.tencent.mm.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity',
      rules: [
        {
          key: 0,
          matches:
            'View > Button > View[desc$="推​荐​"] > ImageView[index=1][clickable=true][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/101449500/5b815528-1ca2-4016-930e-a3cfb4e5e7ea',
          snapshotUrls: 'https://i.gkd.li/i/14548701',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[desc="不看此类内容"]',
          snapshotUrls: 'https://i.gkd.li/i/14549566',
        },
        {
          preKeys: [1],
          key: 2,
          matches: '[desc="确定"]',
          snapshotUrls: 'https://i.gkd.li/i/14549567',
        },
      ],
    },
    {
      key: 32,
      name: '权限提示-权限申请弹窗',
      desc: '点击取消',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.tencent.mm.pluginsdk.permission.PermissionActivity',
          matches: ['[text="权限申请"]', '[text="取消"]'],
          exampleUrls:
            'https://m.gkd.li/57941037/43632b72-d389-4fe7-9708-dac78e900679',
          snapshotUrls: 'https://i.gkd.li/i/14645385',
        },
      ],
    },
    {
      key: 34,
      name: '功能类-付款时自动点击[支付]',
      fastQuery: true,
      actionMaximum: 1,
      activityIds: 'com.tencent.mm.framework.app.UIPageFragmentActivity',
      rules: [
        {
          key: 0,
          matches:
            'ViewGroup + ViewGroup > ViewGroup > [vid="kinda_button_impl_wrapper"][desc="支付"]',
          snapshotUrls: [
            'https://i.gkd.li/i/15144570',
            'https://i.gkd.li/i/15144571',
            'https://i.gkd.li/i/15360745',
          ],
        },
      ],
    },
    {
      key: 35,
      name: '分段广告-订阅号消息内容-广告',
      desc: '点击下拉框-[关闭此广告]/[不感兴趣]-[与我无关]',
      activityIds: [
        '.plugin.brandservice.ui.timeline.preload.ui.TmplWebView', //调整为TmplWebView, 同时兼容多种ID
        '.plugin.webview.ui.tools.fts.MMSosWebViewUI',
        '.plugin.webview.ui.tools.MMWebViewUI',
      ],
      rules: [
        {
          key: 0,
          excludeMatches: [
            // 防止在第二段、第三段出现时触发，防止在文章末尾广告关闭后触发
            '[text="不感兴趣" || text="与我无关" || text="感谢你的反馈"][visibleToUser=true]',
          ],
          matches:
            '@[clickable=true][visibleToUser=true] > TextView[text^="广告"][visibleToUser=true]', // 某些微信版本上该节点的`clickable=false`
          exampleUrls: [
            'https://e.gkd.li/e73bb653-cc79-455c-958b-38aff6687c37',
            'https://e.gkd.li/5915f80b-66b9-4441-9d36-3caa3fe1be58',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12642232', // ui.TmplWebViewMMUI
            'https://i.gkd.li/i/13199281', // ui.TmplWebViewTooLMpUI
            'https://i.gkd.li/i/14006180', // com.tencent.mm.plugin.webview.ui.tools.fts.MMSosWebViewUI
            'https://i.gkd.li/i/17093010', // com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI
            'https://i.gkd.li/i/16796663', // 内容尾部广告
            'https://i.gkd.li/i/16796725', // 内容中部广告
            'https://i.gkd.li/i/16798663', // clickable=false，使用clickable=true避免误触
            'https://i.gkd.li/i/15198455', // 无id
            'https://i.gkd.li/i/17276697', // text="广告 "，有空格
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/15198464', // 防止在文章末尾广告关闭后误触
          ],
        },
        {
          // 第二段-有“关闭此广告”按钮，则直接关闭该广告
          preKeys: [0],
          key: 20,
          matches: '[text="关闭此广告"][clickable=true][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/16796729', // 内容中部广告
            'https://i.gkd.li/i/17113565', // 在某些情况下，点击“不感兴趣”会导致无法执行下一步操作，因此点击“关闭此广告”
          ],
        },
        {
          // 第二段-无“关闭此广告”按钮，则点击“不感兴趣”，需继续执行第三段
          preKeys: [0],
          key: 25,
          excludeMatches: [
            '[text="感谢你的反馈"][visibleToUser=true]',
            '[text="关闭此广告"][clickable=true][visibleToUser=true]',
          ],
          matches: '[text="不感兴趣"][clickable=true][visibleToUser=true]', // 为确保能够关闭尾部广告，此处点击“不感兴趣”而非“关闭此广告”
          snapshotUrls: [
            'https://i.gkd.li/i/16796666', // 内容尾部广告
            'https://i.gkd.li/i/16798661', // clickable=false，使用clickable=true避免误触
            'https://i.gkd.li/i/15198459', // 无id
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/15061424', // 使用excludeMatches防止在文章末尾广告关闭后误触'
            'https://i.gkd.li/i/16796729', // 内容中部广告，若同时存在“关闭此广告”与“不感兴趣”，则点击前者
          ],
        },
        {
          // 第三段
          preKeys: [25],
          key: 50,
          matches: '[text="与我无关"][clickable=true][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/16796674', // 内容尾部广告
            'https://i.gkd.li/i/16796732', // 内容中部广告
            'https://i.gkd.li/i/16798658', // clickable=false，使用clickable=true避免误触
            'https://i.gkd.li/i/15198461', // 无id
          ],
        },
      ],
    },
    {
      key: 36,
      name: '功能类-自动点击[查看原视频]',
      rules: [
        {
          fastQuery: true,
          action: 'clickCenter',
          activityIds: [
            '.ui.chatting.gallery.ImageGalleryUI',
            '.ui.LauncherUI',
          ],
          matches: '[vid="cna"] > Button',
          exampleUrls: 'https://e.gkd.li/5332aff9-05bb-4b44-b832-5e2d9b1c1270',
          snapshotUrls: 'https://i.gkd.li/i/16833732',
        },
      ],
    },
    {
      key: 38,
      name: '功能类-别人发的语音自动转文字',
      desc: '长按语音后自动转文字',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.LauncherUI',
          matches: '@[clickable=true] >(1,2) [text="转文字"]',
          snapshotUrls: ['https://i.gkd.li/i/19246070'],
        },
      ],
    },
    {
      key: 39,
      name: '开屏广告-微信小程序',
      fastQuery: true,
      matchTime: 10000,
      forcedTime: 10000,
      // actionMaximum: 1, // 经常需要点2次，首次点击过早大概率跳不过
      priorityTime: 10000,
      activityIds: [
        'com.tencent.mm.plugin.appbrand.ui.AppBrandUI',
        'com.tencent.mm.plugin.appbrand.launching.AppBrandLaunchProxyUI',
      ],
      rules: [
        {
          actionDelay: 800, // 过早点击首次大概率跳不过
          matches: [
            '[text="广告"][visibleToUser=true]',
            '[text="跳过"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12785183',
            'https://i.gkd.li/i/13306883',
            'https://i.gkd.li/i/13407275',
            'https://i.gkd.li/i/15108441',
          ],
        },
      ],
    },
    {
      key: 40,
      name: '全屏广告-小程序弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      actionMaximum: 2,
      matchTime: 10000,
      activityIds: '.plugin.appbrand.ui.AppBrandUI00',
      rules: [
        {
          key: 1,
          matches:
            'FrameLayout > TextView + FrameLayout > FrameLayout > ImageView[width=height]',
          exampleUrls: 'https://e.gkd.li/d2b12af6-c204-4da7-8553-4765ef8b8c31',
          snapshotUrls: [
            'https://i.gkd.li/i/13459614',
            'https://i.gkd.li/i/16943989',
            'https://i.gkd.li/i/16920797',
          ],
        },
      ],
    },
  ],
});
