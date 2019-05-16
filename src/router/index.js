import Pattern from '../page/Pattern/index';
import Login from '../page/Login/index';
import Home from '../page/Container/Home';
import User from '../page/Container/User';
import {Bizcharts,ReactCropImg,IconPage} from '../page/Current';
import { FileImg , Upload } from '../page/File';
const routeMenu = [
    {
        path: "/lay",
        component: Pattern,
        icon: '',
        name: 'antd管理系统',
        children: [{
                path: '/lay/current',
                component: Home,
                name: '通用',
                icon: 'alert',
                children: [{
                        path: '/lay/current/react-crop-img',
                        component: ReactCropImg,
                        name: '图片裁剪'
                    },{
                        path: '/lay/current/bizcharts',
                        component: Bizcharts,
                        name: 'Bizcharts'
                    },  {
                        path: '/lay/current/1',
                        component: User,
                        name: 'Button按钮'
                    },
                    {
                        path: '/lay/current/icon',
                        component: IconPage,
                        name: 'Icon图标'
                    },
                ]
            },
            {
                path: '/lay/file',
                component: Home,
                name: '上传',
                icon: 'red-envelope',
                children: [{
                        path: '/lay/file/img',
                        component: FileImg,
                        name: '图片上传'
                    },{
                        path: '/lay/file/upload',
                        component: Upload,
                        name: '上传'
                    },
                ]
            },
            {
                path: '/lay/layout/user',
                component: User,
                name: '布局',
                icon: 'red-envelope',
                children: [{
                        path: '/lay/layout/home/1',
                        component: User,
                        name: 'Grid栅格'
                    },
                    {
                        path: '/lay/layout/home/2',
                        component: Home,
                        name: 'Layout布局'
                    },
                ]
            },
            {
                path: '/lay/nav/home',
                component: User,
                name: '导航',
                icon: 'gift',
                children: [{
                        path: '/lay/nav/home/1',
                        component: User,
                        name: 'Affix固钉'
                    },
                    {
                        path: '/lay/nav/home/2',
                        component: Home,
                        name: 'Breadcrumb面包屑'
                    },
                    {
                        path: '/lay/nav/home/3',
                        component: User,
                        name: 'Dropdown下拉菜单'
                    },
                    {
                        path: '/lay/nav/home/4',
                        component: User,
                        name: 'Menu导航菜单'
                    },
                    {
                        path: '/lay/nav/home/5',
                        component: User,
                        name: 'Pagination分页'
                    },
                    {
                        path: '/lay/nav/home/6',
                        component: User,
                        name: 'PageHeader页头'
                    },
                    {
                        path: '/lay/nav/home/7',
                        component: User,
                        name: 'Steps步骤条'
                    },
                ]
            },
            // {
            //     path: '/data/home',
            //     component: User,
            //     name: '数据录入',
            //     icon: 'coffee',
            //     children: [{
            //             path: '/data/home/1',
            //             component: User,
            //             name: 'AutoComplete自动完成'
            //         },
            //         {
            //             path: '/data/home/2',
            //             component: Home,
            //             name: 'Cascader级联选择'
            //         },
            //         {
            //             path: '/data/home/3',
            //             component: User,
            //             name: 'Checkbox多选框'
            //         },
            //         {
            //             path: '/data/home/4',
            //             component: Home,
            //             name: 'DatePicker日期选择框'
            //         },
            //         {
            //             path: '/data/home/5',
            //             component: User,
            //             name: 'Form表单'
            //         },
            //         {
            //             path: '/data/home/6',
            //             component: Home,
            //             name: 'Input输入框'
            //         },
            //         {
            //             path: '/data/home/7',
            //             component: User,
            //             name: 'InputNumber数字输入框'
            //         },
            //         {
            //             path: '/data/home/8',
            //             component: Home,
            //             name: 'Mention提及'
            //         },
            //         {
            //             path: '/data/home/9',
            //             component: User,
            //             name: 'Radio单选框'
            //         },
            //         {
            //             path: '/data/home/10',
            //             component: Home,
            //             name: 'Rate评分'
            //         },
            //         {
            //             path: '/data/home/11',
            //             component: User,
            //             name: 'Select选择器'
            //         },
            //         {
            //             path: '/data/home/12',
            //             component: Home,
            //             name: 'Slider滑动输入条'
            //         },
            //         {
            //             path: '/data/home/13',
            //             component: User,
            //             name: 'Switch开关'
            //         },
            //         {
            //             path: '/data/home/14',
            //             component: Home,
            //             name: 'Transfer穿梭框'
            //         },
            //         {
            //             path: '/data/home/15',
            //             component: User,
            //             name: 'TimePicker时间选择框'
            //         },
            //         {
            //             path: '/data/home/16',
            //             component: Home,
            //             name: 'TreeSelect树选择'
            //         },
            //         {
            //             path: '/data/home/17',
            //             component: User,
            //             name: 'Upload上传'
            //         }
            //     ]
            // },
            // {
            //     path: '/show/home',
            //     component: User,
            //     name: '数据展示',
            //     icon: 'trophy',
            //     children: [{
            //             path: '/show/home/1',
            //             component: User,
            //             name: 'Avatar头像'
            //         },
            //         {
            //             path: '/show/home/2',
            //             component: Home,
            //             name: 'Badge徽标数'
            //         },
            //         {
            //             path: '/show/home/3',
            //             component: User,
            //             name: 'Calendar日历'
            //         },
            //         {
            //             path: '/show/home/4',
            //             component: Home,
            //             name: 'Card卡片'
            //         },
            //         {
            //             path: '/show/home/5',
            //             component: User,
            //             name: 'Carousel走马灯'
            //         },
            //         {
            //             path: '/show/home/6',
            //             component: Home,
            //             name: 'Collapse折叠面板'
            //         },
            //         {
            //             path: '/show/home/7',
            //             component: User,
            //             name: 'Comment评论'
            //         },
            //         {
            //             path: '/show/home/8',
            //             component: Home,
            //             name: 'Empty空状态'
            //         },
            //         {
            //             path: '/show/home/9',
            //             component: User,
            //             name: 'List列表'
            //         },
            //         {
            //             path: '/show/home/10',
            //             component: Home,
            //             name: 'Popover气泡卡片'
            //         },
            //         {
            //             path: '/show/home/11',
            //             component: User,
            //             name: 'Statistic统计数值'
            //         },
            //         {
            //             path: '/show/home/12',
            //             component: Home,
            //             name: 'Tooltip文字提示'
            //         },
            //         {
            //             path: '/show/home/13',
            //             component: User,
            //             name: 'Table表格'
            //         },
            //         {
            //             path: '/show/home/14',
            //             component: Home,
            //             name: 'Tabs标签页'
            //         },
            //         {
            //             path: '/show/home/15',
            //             component: User,
            //             name: 'Tag标签'
            //         },
            //         {
            //             path: '/show/home/16',
            //             component: Home,
            //             name: 'Timeline时间轴'
            //         },
            //         {
            //             path: '/show/home/17',
            //             component: User,
            //             name: 'Tree树形控件'
            //         },
            //     ]
            // },
            // {
            //     path: '/feedback/user',
            //     component: User,
            //     name: '反馈',
            //     icon: 'usergroup-delete',
            //     children: [{
            //             path: '/feedback/home/1',
            //             component: User,
            //             name: 'Alert警告提示'
            //         },
            //         {
            //             path: '/feedback/home/2',
            //             component: Home,
            //             name: 'Drawer抽屉'
            //         },
            //         {
            //             path: '/feedback/home/3',
            //             component: Home,
            //             name: 'Modal对话框'
            //         },
            //         {
            //             path: '/feedback/home/4',
            //             component: User,
            //             name: 'Message全局提示'
            //         },
            //         {
            //             path: '/feedback/home/5',
            //             component: Home,
            //             name: 'Notification通知提醒框'
            //         },
            //         {
            //             path: '/feedback/home/6',
            //             component: User,
            //             name: 'Progress进度条'
            //         },
            //         {
            //             path: '/feedback/home/7',
            //             component: Home,
            //             name: 'Popconfirm气泡确认框'
            //         },
            //         {
            //             path: '/feedback/home/8',
            //             component: User,
            //             name: 'Spin加载中'
            //         },
            //         {
            //             path: '/feedback/home/9',
            //             component: Home,
            //             name: 'Skeleton骨架屏'
            //         },
            //     ]
            // },
            // {
            //     path: '/order/home',
            //     component: User,
            //     name: '其他',
            //     icon: 'global',
            //     children: [{
            //             path: '/order/home/1',
            //             component: User,
            //             name: 'Anchor锚点'
            //         },
            //         {
            //             path: '/order/home/2',
            //             component: User,
            //             name: 'BackTop回到顶部'
            //         },
            //         {
            //             path: '/order/home/3',
            //             component: User,
            //             name: 'Divider分割线'
            //         },
            //         {
            //             path: '/order/home/4',
            //             component: User,
            //             name: 'ConfigProvider全局化配置'
            //         },
            //         {
            //             path: '/order/home/5',
            //             component: Home,
            //             name: 'LocaleProvider国际化'
            //         },
            //     ]
            // },
        ]
    },
    {
        path: "/login",
        component: Login,
        icon: '',
        name: '登录'
    }
]
export default routeMenu