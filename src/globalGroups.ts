import { defineGkdGlobalGroups } from '@gkd-kit/define';
import * as appList from './globalDefaultApps';

export const OPEN_AD_ORDER = -10; // 开屏广告
export const UPDATE_PROMPT_ORDER = -9; // 更新提示
export const NOTIFICATION_PROMPT = -6; // 通知提示

const CommonPrefix =
  '[childCount=0][visibleToUser=true][height>0&&width>0&&top>0&&left>0]';

// 更新提示
const UpdatePromptText = `[text!*="自动" && text!*="自動" && text!*="成功" && text!*="失败" && text!*="失敗" && text!*="检查更新" && text!*="检测更新" && text!*="卸载"]${CommonPrefix}`;
const UpdatePromptImpose = `[name!$=".CheckBox"&&name!$=".EditText"]${CommonPrefix}`;
const UpdatePromptId =
  'id*="close" || id*="Close" || id*="cancel" || id*="Cancel" || id*="update" || id*="Update"';

export default defineGkdGlobalGroups([
  {
    key: 0,
    name: '开屏广告',
    desc: '关闭打开应用时的开屏广告',
    disableIfAppGroupMatch: '开屏广告',
    order: OPEN_AD_ORDER,
    fastQuery: true,
    actionMaximum: 1,
    resetMatch: 'app',
    actionMaximumKey: 0,
    matchTime: 3800,
    priorityTime: 3800,
    rules: [
      {
        key: 0,
        // 防止在应用的搜索页面误触
        excludeMatches:
          '[text^="温馨" || text*="搜索" || text^="猜你" || text="历史记录" || text$="在搜" && text.length>3 && text.length<6]',
        action: 'clickCenter',
        anyMatches: [
          `[text*="跳过" || text*="跳過" || text*="skip" && text.length<10][width<200]${CommonPrefix}`,
          '@View[clickable=true && width=height] +(1,2) TextView[index=parent.childCount.minus(1) && clickable=true] -(2,3,4) FrameLayout >(7,8,9) TextView[index=parent.childCount.minus(1) && text*="跳转"]', // 字节SDK
          '@ImageView[clickable=true] - [text$="s"] + [text="|"]',
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
    name: '更新提示',
    desc: '关闭应用的更新弹窗',
    disableIfAppGroupMatch: '更新提示',
    order: UPDATE_PROMPT_ORDER,
    fastQuery: true,
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    rules: [
      {
        key: 0,
        matches: [
          `[text*="更新" || text*="新版" || desc*="新版" || text*="升级" || text*="体验" || text*="内测" || text*="测试版" || text*="內測" || text*="測試版" || text*="體驗" || text*="update" || text*="Update" || text*="Upgrade" || text*="Experience"]${UpdatePromptText}`,
          `[text$="不再提醒" || text="不感兴趣" || text$="再说" || text$="拒绝" || desc*="关闭" || text$="再想想" || text*="再看看" || text*="忽略" || text^="暂不" || text^="放弃" || text^="取消" || desc="取消" || text$="不要" || text$="再說" || text$="暫不" || text$="拒絕" || text*="稍后" || text^="下次" || text="No" || text$="Later" || text^="Ignore" || text^="Not now" || text^="Cancel" || ${UpdatePromptId}][top>360]${UpdatePromptImpose}`,
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
    name: '通知提示',
    desc: '关闭应用的通知提示',
    disableIfAppGroupMatch: '通知提示',
    order: NOTIFICATION_PROMPT,
    fastQuery: true,
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    actionMaximumKey: 0,
    rules: [
      {
        key: 0,
        matches: [
          `[text*="通知" || text*="公告" || text*="使用" || text*="代理" || text*="定位" || text*="内容" || text*="赞助" || text$="提示" || desc$="提示" || desc*="下载" || desc*="官网" || text*="交流" || desc*="谢谢理解"]${CommonPrefix}`,
          `[text^="暂不" || text$="知道了" || text$="继续使用" || desc$="知道了" || text^="我已知晓" || text^="不再" || text="下次再说" || text="取消" || text="确定" || text="收到" || text="隐藏" || vid$="close"]${CommonPrefix}`,
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
