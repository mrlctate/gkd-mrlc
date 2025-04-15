import { batchImportApps } from '@gkd-kit/tools';
import { RawApp } from '@gkd-kit/api';

const apps = await batchImportApps(`${import.meta.dirname}/apps`);

// 全局规则黑名单
// 在一些非系统应用中禁用所有全局规则
export const blackListAppIDs: string[] = [
  'com.tencent.mm', // 微信
  'li.songe.gkd', // GKD
  'com.eg.android.AlipayGphone', //支付宝
  'com.tencent.wetype', // 微信输入法
  'com.tmri.app.main', // 交管12123
  'com.github.android', // GitHub
  'org.telegram.messenger', // Telegram
  'com.twitter.android', // X(推特)
  'com.aistra.hail', // 雹
  'com.heyanle.easybangumi4', // 纯纯看番
  'com.perol.pixez', // PixEz
  'com.perol.play.pixez', // PixEz Google Play版
  'com.magicalstory.videos', // 奇妙影视
  'com.magicalstory.installer', // 奇妙安装程序
  'com.guozhigq.pilipala', // PiliPala
  'com.salt.music', // Salt Player
  'com.xuncorp.qinalt.music', // 青盐云听
  'com.github.wgh136.pica_comic', // Pica Comic
  'com.yenaly.han1meviewer', // Han1meViewer
  'ru.zdevs.zarchiver', // ZArchiver
  'ru.zdevs.zarchiver.pro', // ZArchiver Pro
  'me.zhanghai.android.files', // 质感文件
  'com.xjcheng.musictageditor', // 音乐标签
  'com.lalilu.lmusic', // LMusic
  'com.ktls.fileinfo', // 存储空间清理
  'idm.internet.download.manager', // 1DM
  'idm.internet.download.manager.plus', // 1DM+
  'com.mxtech.videoplayer', // MX播放器
  'com.mxtech.videoplayer.pro', // MX播放器专业版
  'com.github.kr328.clash', // Clash for Android
  'com.x8bit.bitwarden', // Bitwarden
  'org.localsend.localsend_app', // LocalSend
  'moe.shizuku.privileged.api', // Shizuku
  'com.ktls.automation', // 自动点击工具
  'com.deepl.mobiletranslator', // DeepL
  'com.accessibilitymanager', // 无障碍管理器
  'me.tasy5kg.cutegif', // 小萌GIF
  'com.absinthe.libchecker', // LibChecker
  'com.github.metacubex.clash.meta', // Clash Meta for Android
  'io.github.jd1378.otphelper', // 短信验证码自动复制
  'com.valvesoftware.android.steam.community', // Steam
  'io.legado.app.release', // 阅读
  'com.getsurfboard', // Surfboard
  'moe.nb4a', // NekoBox
  'com.v2ray.ang', // v2rayNG
  'com.xiaoyv.bangumi', // Bangumi for Android
  'com.funny.translation', // 译站
  'com.looker.droidify', // Droid-ify
  'app.eleven.com.fastfiletransfer', // 文件闪传
  'com.idaodan.clean.master', // 雪豹速清
  'com.samsung.agc.gcam84', // 相机
  'com.wsw.cospa', // 异次元
  'app.mihon', // Mihon
  'com.rosan.installer.x', // installerX
  'app.rikka.savecopy', // 保存副本
  'com.rosan.dhizuku', // Dhizuku
  'com.rosan.accounts', // Accounts
  'com.dv.adm', // ADM
  'com.assistant.ongoingclear', // 固定通知隐藏
  'org.koitharu.kotatsu', // Kotatsu
  'me.ash.reader', // Read You
  'com.huanchengfly.tieba.post', // 贴吧Lite
  'com.example.c001apk', // c001apk
  'dev.anilbeesetti.nextplayer', // Next Player
  'org.kde.kdeconnect_tp', // KDE Connect
  'xyz.adproqwq.GKDTool', // GKDTool
  'com.alibaba.wireless', // 阿里巴巴
  'com.alibaba.aliyun', // 阿里云
  'com.alicloud.databox', // 阿里云盘 开屏广告在 https://i.gkd.li/i/15144565 误触导致自动签到规则执行中断
  'xyz.nextalone.nagram', // Nagram
  'com.openai.chatgpt', // ChatGPT
  'org.telegram.group', // Turrit
  'com.android.chrome', // Chrome
  'org.mozilla.firefox', // Firefox
  'org.mozilla.firefox_beta', // Firefox Beta
  'org.mozilla.fenix', // Firefox Nightly
  'org.mozilla.focus', // Firefox Focus
  'com.google.android.youtube', // YouTube 开屏广告在 https://i.gkd.li/i/15765176 误触
  'com.xunmeng.pinduoduo', // 拼多多
  'com.byyoung.setting', //爱玩机工具箱
  'com.mixplorer', // MiX文件管理器
  'com.xjs.ehviewer', // Ehviewer
  'rikka.appops', // App Ops
  'com.vrem.wifianalyzer', // WiFiAnalyzer
  'remix.myplayer', // APlayer
  'com.arn.scrobble', // Pano Scrobbler
  'org.videolan.vlc', // VLC
  'org.geogebra.android.calculator.suite', // GeoGebra
  'com.azure.authenticator', // Microsoft Authenticator
  'com.microsoft.office.officehub', // Microsoft Office
  'com.microsoft.office.officehubrow', // Microsoft Office (Google Play版)
  'com.microsoft.office.outlook', // Microsoft Outlook
  'com.microsoft.office.onenote', // Microsoft OneNote
  'com.sonkins.tguitar', // Guitar Tuner
  'com.eumlab.android.prometronome', // Pro Metronome
  'cn.edu.buaa.wxwork', // 智慧北航
  'io.github.muntashirakon.AppManager', // App Manager
  'moe.shizuku.redirectstorage', // 存储空间隔离
  'web1n.stopapp', // 小黑屋
  'com.shatyuka.zhiliao', // 知了
  'com.adobe.reader', // Adobe Acrobat
  'org.wikipedia', // 维基百科
  'org.kiwix.kiwixmobile', // Kiwix
  'com.brakefield.painter', // Infinte Painter
  'me.iacn.biliroaming', // 哔哩漫游
  'com.termux', // Termux
  'oss.krtirtho.spotube', // Spotube
  'com.merxury.blocker', // Blocker
  'moe.minamigo.miuigms', // MIUIGMS
  'mufanc.tools.applock', // AppLock
  'com.gankes.tsbattery', // TSBattery
  'com.oasisfeng.nevo.xposed', // 女娲石
  'com.reddit.frontpage', // Reddit
  'com.ghostflying.locationreportenabler', // LocationReportEnabler
  'com.zyc.zcontrol', // ZControl
  'org.nobody.multitts', // MultiTTS
  'deltazero.amarok', // Amarok 更新提示在 https://i.gkd.li/i/17812411 误触

  'com.canghai.haoka',
  'com.xy.td',
  'com.bug.hookvip',
  'one.yufz.hmspush',
  'io.github.huskydg.magisk',
  'xzr.konabess',
  'org.lsposed.manager',
  'bin.mt.plus',
  'tw.nekomimi.nekogram',
  'io.github.qauxv',
  'com.rezvorck.tiktokplugin',
  'com.zhiliaoapp.musically',
  'com.github.tianma8023.xposed.smscode',
  'Han.GJZS',
  'org.adblockplus.adblockplussbrowser',
  'com.viewblocker.jrsen',
  'com.tsng.hidemyapplist',
  'com.pittvandewitt.wavelet',
  'one.yufz.onebox',
  'com.Wecrane.Scar.pubg',
  'me.bmax.apatch',
  'com.tubevpn.client',
  'github.tornaco.android.thanos.pro',
  'com.omarea.vtools',
  'com.litebyte.samhelper',
  'com.nurke.perfectone',
  'qlenlen.OneDesign',
  'icu.nullptr.nativetest',
  'io.github.vvb2060.mahoshojo',
  'com.samsung.android.memoryguardian',
  'com.music.khkj',
  'Hook.JiuWu.Xp',
  'me.weishu.kernelsu',
  'com.franco.kernel',
  'com.samsung.android.themedesigner',
  'com.samsung.android.game.gamehome',
  'com.tencent.tmgp.sgame',
  'com.yangyanghuzhou.heijuan',
  'com.sec.android.app.sbrowser',
  'com.samsung.android.game.gamelab',
  'com.Twilight.tools',
  'com.miui.securitymanager',
  'com.google.android.documentsui',
  'com.android.settings',
  'com.miui.creation',
  'com.xiaomi.scanner',
  'com.miui.gallery',
  'com.yozo.office',
  'com.miui.video',
  'com.xiaomi.wpslauncher',
  'com.sevtinge.hyperceiler',
  'com.dna.tools',
  'flar2.devcheck',
  'com.gstarmc.android',
  'com.github.capntrips.kernelflasher',
  'com.google.android.googlequicksearchbox',
  'qyz.onedesign',
  'com.samsung.android.app.repaircal',
  'com.yhchat.app',
  'com.skyhand.sinahelper',
  'com.rong862.bear',
  'be.mygod.vpnhotspot',
  'com.samsung.android.bixby.agent',

  // 系统自带非系统应用
  // 小米
  'com.miui.huanji', // 小米换机
  'com.miui.weather2', // 天气
  'com.miui.calculator', // 计算器
  'com.android.soundrecorder', // 录音机
  'com.android.email', // 电子邮件
  'com.miui.screenrecorder', // 屏幕录制
  'com.android.deskclock', // 时钟 https://github.com/gkd-kit/gkd/issues/560
  'com.miui.newmidrive', // 小米云盘
  'cn.wps.moffice_eng.xiaomi.lite', // 小米文档查看器
  'com.miui.mediaeditor', // 小米相册-编辑
  'com.miui.notes', // 笔记
  'com.miui.cleanmaster', // 垃圾清理
  'com.miui.compass', // 指南针
  'com.duokan.phone.remotecontroller', // 万能遥控
  'com.mfashiongallery.emag', // 小米画报
  'com.miui.thirdappassistant', // 三方应用异常分析
  'com.xiaomi.wpslauncher', // WPS Office PC
  'com.xiaomi.cajlauncher', // CAJViewer PC
  'com.mi.car.padapp', // 小米汽车扩展屏
  'com.android.calendar', // 日历

  // 三星
  'com.samsung.android.app.cameraassistant',
  'com.samsung.android.app.galaxyraw',
  'com.samsung.android.appbooster',
  'com.android.samsung.utilityapp',
  'com.samsung.android.goodlock',
  'com.samsung.android.thermalguardian',
  'com.samsung.android.calendar',
  'com.samsung.android.app.notes',
  'com.jv.samsungeshop',
  'com.samsung.android.app.sreminder',
  'com.samsung.android.app.watchmanager',
  'com.samsung.android.app.reminder',
  'com.adguard.android.contentblocker',
  'com.sec.android.app.music',
  'com.sec.android.app.voicenote',
  'com.futuremark.dmandroid.application',
  'com.sec.android.app.clockpackage',

  // https://github.com/gkd-kit/gkd/issues/451
  'mark.via', // via浏览器
  'mark.via.gp', // via浏览器Google Play版
  'com.mmbox.xbrowser', // X浏览器
  'com.mmbox.xbrowser.pro', // X浏览器Google Play版
  'com.mycompany.app.soulbrowser', // soul浏览器
];

// 如果某应用的规则中已有全局规则中的某一类的规则, 则在此应用禁用对应全局规则
function filterAppsByGroup(apps: RawApp[], groupNamePrefix: string): string[] {
  return apps
    .filter(
      (a) =>
        a.groups.filter((g: { name: string }) =>
          g.name.startsWith(groupNamePrefix),
        ).length > 0,
    )
    .map((a) => a.id);
}

// 在应用中单独禁用某个全局规则F
// 开屏广告黑名单
export const openAdBlackListAppIDs = new Set([
  ...blackListAppIDs,
  'com.taptap', // TapTap
  'com.sankuai.meituan', // 美团 误触 https://i.gkd.li/i/17827264
  ...filterAppsByGroup(apps, '开屏广告'),
]);

// 更新提示黑名单
export const updateBlackListAppIDs = new Set([
  ...blackListAppIDs,
  'info.muge.appshare', // AppShare
  ...filterAppsByGroup(apps, '更新提示'),
]);

// 青少年模式黑名单
export const yongBlackListAppIDs = new Set([
  ...blackListAppIDs,
  'xxx.pornhub.fuck', // JavDB
  'com.netease.cloudmusic', // 网易云音乐 全局规则在 https://i.gkd.li/i/14931708 误触
  'com.zhihu.android', // 知乎 全局规则在 https://i.gkd.li/i/14964990 误触
  'com.luna.music', // 汽水音乐 全局规则在 https://i.gkd.li/i/15124801 误触
  ...filterAppsByGroup(apps, '青少年模式'),
]);

// 全局规则白名单（由于系统应用默认禁用全局规则，所以对系统应用启用白名单模式）

// 在一些软件中启用开屏广告规则
export const openAdwhiteListAppIDs: string[] = [
  'com.hihonor.appmarket', // 荣耀应用市场
  'com.bbk.appstore', // vivo应用商店
  'com.vivo.browser', // vivo浏览器
  'com.vivo.wallet', // vivo钱包
  'com.miui.player', // 小米音乐
  'com.tencent.southpole.appstore', // 黑鲨应用市场
  'com.heytap.browser', // 一加浏览器
  'com.huawei.android.thememanager', // 华为主题
  'com.heytap.themestore', // oppo主题商店
  'com.mipay.wallet', // 钱包
  'com.huawei.health', // 华为运动健康
  'com.huawei.himovie', // 华为视频
  'com.huawei.browser', // 华为浏览器
  'com.huawei.hwread.dz', // 华为阅读
  'com.kuaishou.nebula', // 快手极速版
  'ctrip.android.view', // 携程旅行
  'com.zhihu.android', // 知乎
  'com.netease.mobimail', // 网易邮箱
  'com.zmzx.college.search', // 大学搜题酱
  'com.autonavi.minimap', // 高德地图
  'com.hihonor.android.thememanager', // 主题
  'com.bbk.theme', // i 主题
  'com.cctv.cctv5ultimate', // 央视体育
  'com.cctv.yangshipin.app.androidp', // 央视频
  'com.ct.client', // 中国电信
  'com.greenpoint.android.mc10086.activity', // 中国移动
  'com.baidu.input_huawei', // 百度输入法定制版
  'com.ifeng.news2', // 凤凰新闻
  'com.mci.smagazine', // 三是阅读
  'com.sf.activity', // 顺丰速运
  'com.ss.android.article.news', // 今日头条
  'com.ss.android.article.video', // 西瓜视频
  'com.ss.android.ugc.aweme', // 抖音
  'com.taobao.movie.android', // 淘票票
  'com.taou.maimai', // 脉脉
  'com.tencent.djcity', // 掌上道聚城
  'com.tencent.qt.qtl', // 掌上英雄联盟
  'com.tipsoon.android', // 简讯
  'com.tencent.qqlive', // 腾讯视频
  'app.esou', // 闪电侠
  'cn.cty.hbzw', // 鄂汇办
  'cn.lezhi.speedtest', // 网速管家
  'cn.soulapp.android', // Soul
  'cn.wsds.gamemaster', // '迅游手游加速器
  'com.android.bankabc', // 中国农业银行
  'com.android.mediacenter', // 华为音乐
  'com.anshibo.activity', // 车e兴
  'com.app.lantt.xs', // 蓝豚豚
  'com.babytree.apps.pregnancy', // 宝宝树孕育
  'com.baidu.duer.superapp', // 小度
  'com.baidu.input', // 百度输入法
  'com.baidu.netdisk.samsung', // 百度网盘-三星版本
  'com.baidu.tieba', // 百度贴吧
  'com.black.unique', // 全球购骑士特权
  'com.byfen.market', // 百分网游戏盒子
  'com.cebbank.mobile.cemb', // 光大银行
  'com.chunqiu.ah', // AH视频
  'com.craftvpn.craft', // 小牛加速器
  'com.cyl.musiccy.ou', // OMOFUN
  'com.delicloud.app.smartoffice', // 得力e+
  'com.didapinche.booking', // 嘀嗒出行
  'com.excean.na', // 99手游加速器
  'com.handsgo.jiakao.android', // 驾考宝典
  'com.miui.systemAdSolution', // 智能服务
  'com.vgjump.jump', // Jump
  'com.xiachufang', // 下厨房
  'com.xyhui', // PU口袋校园
  'com.hanweb.android.sdzwfw.activity', // 爱山东
  'com.hihonor.baidu.browser', // 荣耀浏览器
  'com.luna.music', // 汽水音乐
  'com.mfcloudcalculate.networkdisk', // 123云盘
  'com.mxchip.petmarvel', // 滴宠生活
  'com.mygolbs.mybus', // 掌上公交
  'com.mymoney', // 随手记
  'com.njh.biubiu', // biubiu加速器
  'com.nowcoder.app.florida', // 牛客
  'com.oneshareclap.malaysian', // 水果派
  'com.paokeji.yiqu', // 喵趣漫画
  'com.qq.reader', // QQ阅读
  'com.tencent.qqmusic', // QQ音乐
  'com.tencent.qqsports', // 腾讯体育
  'net.csdn.csdnplus', // CSDN
  'tv.danmaku.bilibilihd', // 哔哩哔哩HD
  'cn.xiaochuankeji.zuiyouLite', // 皮皮搞笑
  'com.ximalaya.ting.android', // 喜马拉雅
  'com.zhishan.washer', // 悠洗
  'com.zhongduomei.rrmj.society', // 人人视频
  'com.zjwh.android_wh_physicalfitness', // 运动世界校园
  'com.jihuanshe', // 集换社
  'com.kuaiduizuoye.scan', // 快对
  'com.kuangxiangciweimao.novel', // 刺猬猫阅读
  'com.learn.team.congrong', // 卓聚
  'com.leixun.taofen8', // 淘粉吧
  'com.lofter.android', // LOFTER
  'com.manmanbuy.bijia', // 慢慢买
  'com.realtech.xiaocan', // 小蚕霸王餐
  'com.skyworthdigital.picamera', // 创维智慧云
  'com.sup.android.superb', // 皮皮虾
  'com.superrhino.rarering', // Nico
  'com.fan.app', // 十六番旅行
  'com.feeyo.vz.pro.cdm', // 飞常准业内版
  'com.firebear.androil', // 小熊油耗
  'com.flyersoft.seekbooks', // 搜书大师
  'com.fzfengzheng.fzboyp', // 风筝影评
  'com.uanmi.miaojiaccount', // 熊猫记账
  'com.upupoo.apu.mobile', // UPUPOO动态壁纸
  'com.wacai365', // 挖财记账
  'com.waimaiii.waimaiii', // 歪麦霸王餐
  'com.wwwscn.yuexingbao', // 悦通行
  'com.xiaoenai.app', // 小恩爱
  'com.xpx365.projphoto', // 工程相机
  'com.yoloho.dayima', // 大姨妈
  'com.yunzhi.tiyu', // 云运动
  'com.zlfcapp.batterymanager', // 电池容量检测管理
  'io.iftech.android.box', // 小组件盒子
  'make.more.r2d2.cellular_z', // Cellular-Z
  'moc.nauxuoyoaixoaix.www', // 晓晓优选
  'com.diershoubing.erbing', // 二柄
  'com.dongqiudi.news', // 懂球帝
  'com.ecellsz.watch.guard', // 乐康守护
  'com.ksf.yyx', // OMOFUN
  'cn.xiaochuankeji.tieba', // 最右
  'com.netease.mail', // 网易邮箱大师
  'com.jd.app.reader', // 京东读书
  'info.muge.appshare', // AppShare
  'me.zhouzhuo810.zznote', // 小周便签
];

// 在应用中单独启用某个全局规则
// 开屏广告白名单
export const openAdWhiteListAppIDs = new Set([...openAdwhiteListAppIDs]);

// 更新提示白名单
export const updateWhiteListAppIDs = new Set([
  'com.hihonor.phoneservice', // 我的荣耀
]);

// 青少年模式白名单
export const yongWhiteListAppIDs = new Set([
  'com.ss.android.ugc.aweme', // 抖音
  'com.sup.android.superb', // 皮皮虾
  'com.tencent.qqlive', // 腾讯视频
  'com.upupoo.apu.mobile', // UPUPOO动态壁纸
  'com.taptap', // TapTap
]);
