import { defineGkdGlobalGroups } from '@gkd-kit/define';
import * as appList from './globalDefaultApps';

export const OPEN_AD_ORDER = -10; // 开屏广告
export const UPDATE_PROMPT_ORDER = -9; // 更新提示
export const NOTIFICATION_PROMPT = -6; // 通知提示

const CommonPrefix =
  '[childCount=0][visibleToUser=true][height>0&&width>0&&top>0&&left>0]';

// 一些公共限制条件
const CommonIdPostfix = 'id!$="name" && id!$="Name" && text!^="@"';

// 更新提示
const UpdatePromptText = `[text!*="自动" && text!*="自動" && text!*="成功" && text!*="失败" && text!*="失敗" && text!*="检查更新" && text!*="检测更新" && text!*="卸载"]${CommonPrefix}`;
const UpdatePromptImpose = `[name!$=".CheckBox"&&name!$=".EditText"]${CommonPrefix}`;
const UpdatePromptId =
  'id*="close" || id*="Close" || id*="cancel" || id*="Cancel" || id*="update" || id*="Update"';

// 通知提示
// const InformId =
//   '(id*="close" || id$="Close" || id*="cancel" || id*="delete") && width<120 && top>200';

export default defineGkdGlobalGroups([
  {
    key: 0,
    name: '开屏广告-全局关闭应用的开屏广告',
    desc: '用于关闭大部分的应用开屏广告，勿关',
    disableIfAppGroupMatch: '开屏广告',
    order: OPEN_AD_ORDER,
    fastQuery: true,
    matchTime: 5000,
    priorityTime: 5000,
    actionMaximum: 1,
    resetMatch: 'app',
    actionMaximumKey: 0,
    rules: [
      {
        key: 0,
        // 停止如下页面触发
        excludeMatches:
          '[text*="搜索" || desc*="搜索" || text^="猜你" || text="历史记录" || text$="在搜"][childCount=0][text.length<6][visibleToUser=true]',
        action: 'clickCenter',
        anyMatches: [
          '[(text*="跳过" || text*="跳過" || text*="skip" || text*="Skip") && text.length<10 && width<300][visibleToUser=true]',
          '[(id*="skip" || id*="Skip" || id*="jump" || vid="btn_close") && text.length=null && width<300][visibleToUser=true]',
          '@View[clickable=true && width=height] +(1,2) TextView[index=parent.childCount.minus(1) && clickable=true] -(2,3,4) FrameLayout >(7,8,9) TextView[index=parent.childCount.minus(1) && text*="跳转"]', // 字节SDK
          '@ImageView[clickable=true] - [text="|"] - [text$="s"]',
        ],
      },
    ],
    apps: [...appList.openAdBlackListAppIDs]
      .map((id) => ({ id, enable: false }))
      .concat(
        [...appList.openAdWhiteListAppIDs].map((id) => ({ id, enable: true })),
      ),
  },
  {
    key: 1,
    name: '更新提示-全局关闭应用的更新弹窗',
    desc: '关闭应用的更新弹窗；如有误触请反馈',
    disableIfAppGroupMatch: '更新提示',
    order: UPDATE_PROMPT_ORDER,
    fastQuery: true,
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    rules: [
      {
        key: 0,
        // 停止如下页面触发
        excludeMatches:
          '[text^="动态"][childCount=0][text.length<6][visibleToUser=true]',
        matches: [
          `[text*="更新" || text*="新版" || desc*="新版" || text*="升级" || text*="体验" || text*="内测" || text*="测试版" || text*="內測" || text*="測試版" || text*="體驗" || text*="update" || text*="Update" || text*="Upgrade" || text*="Experience"]${UpdatePromptText}`,
          `[(text$="不再提醒" || text="不感兴趣" || text$="再说" || text$="拒绝" || desc*="关闭" || text$="再想想" || text*="再看看" || text*="忽略" || text^="暂不" || text^="放弃" || text^="取消" || desc^="取消" || text$="不要" || text$="再說" || text$="暫不" || text$="拒絕" || text*="稍后" || text^="下次" || text="No" || text$="Later" || text^="Ignore" || text^="Not now" || text^="Cancel")&&${CommonIdPostfix}&&text.length<6 || ${UpdatePromptId}][top>360]${UpdatePromptImpose}`,
        ],
      },
    ],
    apps: [...appList.updateBlackListAppIDs]
      .map((id) => ({ id, enable: false }))
      .concat(
        [...appList.updateWhiteListAppIDs].map((id) => ({ id, enable: true })),
      ),
  },
  {
    key: 2,
    name: '通知提示-全局关闭应用的弹窗提示',
    desc: '关闭通知提示,权限提示,评价提示;如有问题请反馈',
    disableIfAppGroupMatch: '通知提示',
    order: NOTIFICATION_PROMPT,
    fastQuery: true,
    actionMaximum: 3,
    resetMatch: 'app',
    actionMaximumKey: 0,
    rules: [
      {
        key: 0,
        // 停止如下页面触发
        // https://i.gkd.li/i/20348505
        excludeMatches:
          '[text^="我已阅读" || text*="登录" || text*="退款" || text="应用管理"][childCount=0][visibleToUser=true]',
        matches: [
          `[text*="通知" || text*="权限" || text*="公告" || text="广告" || text$="模式" || text$="签到" || text*="喜欢" || text*="是否满意" || text*="好评" || desc*="好评" || text*="评分" || text*="评价" || text*="获取" || text*="消息" || text*="使用" || text*="推荐" || text*="发现" || text*="推送" || text*="第一时间" || text*="免费" || text*="立即" || text*="剪贴板" || text*="开启" || text="去设置" || text*="使用" || text*="定位" || text*="位置" || text*="内容" || text*="调研" || text*="赞助" || text$="提示" || desc$="提示" || desc*="官网" || text*="交流" || text*="链接" || id$="image"]${CommonPrefix}`,
          `[(text^="暂不" || text^="暂时" || text$="继续使用" || text$="知道了" || desc$="知道了" || (text="取消"&&top>200) || text="关闭" || text^="我已知晓" || text*="拒绝" || text*="忽略" || text^="不再" || text$="再说" || text="不允许" || text*="不了" || text^="下次" || text="不，谢谢" || text="考虑一下" || text="没兴趣" || text="我没空" || text="關閉" || text="确定" || text="收到" || text="隐藏" || text="否" || text="返回")&&${CommonIdPostfix}&&text.length<6]${CommonPrefix}`,
        ],
      },
    ],
    apps: [...appList.notificationBlackListAppIDs]
      .map((id) => ({ id, enable: false }))
      .concat(
        [...appList.notificationWhiteListAppIDs].map((id) => ({
          id,
          enable: true,
        })),
      ),
  },
]);
