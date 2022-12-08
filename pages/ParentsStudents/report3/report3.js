// pages/ParentsStudents/report3/report3.js
import request from '../../../utils/request'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        childMessage: [],
        ismeImg: {},
        friendImg: [],
        currentIndex: 0,
        currentIndex1: 0,

        reports: [],
        listViewScrollTop: 0,
        cateAreaHeight: [0],
        cateListActiveIndex: 0
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options.childMessage)
        let reports = [{
            "title": "这就是我",
            "enTitle": "THIS IS ME",
            "image": "/profile/static/images/016.png"
        },
        {
            "title": "我和我的伙伴",
            "enTitle": "MY PARTNER AND I",
            "image": "/profile/static/images/019.png"
        },
        {
            "title": "我写的字",
            "enTitle": "THE WORDS I WRITE",
            "image": "/profile/static/images/23.png"
        },
        {
            "title": "我的作业",
            "enTitle": "MYHOMEWORK",
            "image": "/profile/static/images/25.png"
        },
        {
            "title": "我的作文",
            "enTitle": "MY COMPOSITION",
            "image": "/profile/static/images/034.png"
        },
        {
            "title": "我的试卷",
            "enTitle": "MY PAPER",
            "image": "/profile/static/images/036.png"
        },
        {
            "title": "参加的活动",
            "enTitle": "ACTMTIES I PARTICIPATED",
            "image": "/profile/static/images/042.png"
        },
        {
            "title": "报告单",
            "enTitle": "SCHOOL REPORT",
            "image": "/profile/static/images/46.png"
        },
        {
            "title": "老师寄语",
            "enTitle": "TEACHER'S MESSAGE",
            "image": "/profile/static/images/048.png"
        },
        {
            "title": "小伙伴的话",
            "enTitle": "FROM A FPIEND",
            "image": "/profile/static/images/019.png"
        },
        {
            "title": "我的荣誉",
            "enTitle": "MY HONER",
            "image": "/profile/static/images/53.png"
        },
        {
            "title": "学期小结",
            "enTitle": "MY TERM SUMMARY",
            "image": "/profile/static/images/55.png"
        },
        {
            "title": "十佳成长目录",
            "enTitle": "MY LIST OF TEN TALENTS",
            "image": "/profile/static/images/64.png"
        },
        {
            "title": "个性",
            "enTitle": "PERSONALITY",
            "image": "/profile/static/images/65.png"
        },
        ]
        let childMessage = options.childMessage ? JSON.parse(options.childMessage) : []
        console.log(childMessage)
        // console.log(childMessage[0].stuId)
        this.setData({
            reports,
            childMessage,
            studentId: childMessage.length > 0 ? childMessage[0].stuId : ""
        }, () => this.setReportListAreaHeight())
        console.log(this.data.studentId)
        // console.log(this.data.childMessage, "this.data.childMessage")
        // console.log(this.data.studentId, "this.data.studentId")
    },
    async cChildMessage(e) {
        let item = e.currentTarget.dataset.item
        this.setData({
            studentId: item.stuId,
            currentIndex: e.currentTarget.dataset.index
        })
        // console.log(this.data.studentId)
    },
    goReport1() {
        wx.navigateTo({
            url: '/pages/ParentsStudents/report1/report1',
        })
    },

    async pageRedirectFunc(e) {
        let itemKey = e.currentTarget.dataset.itemkey
        console.log(itemKey)
        let studentId = this.data.studentId
        console.log(studentId)
        let getHistoryItem = await request('/business/growthItem/getHistoryItems', {
            studentId,
            itemKey
        })
        console.log(getHistoryItem)
        let pageUrls = {
            "这就是我": "/pages/ParentsStudents/isMe1/isMe1?ismeImg=",
            "我和我的伙伴": "/pages/ParentsStudents/friend2/friend?friendImg=",
            "我写的字": "/pages/ParentsStudents/word2/word?wordImg=",
            "我的作业": "/pages/ParentsStudents/work2/work?workImg=",
            "我的作文": "/pages/ParentsStudents/thing2/thing?thingImg=",
            "我的试卷": "/pages/ParentsStudents/paper2/paper?paperImg=",
            "参加的活动": "/pages/ParentsStudents/activity2/activity?activeImg=",
            "报告单": "/pages/ParentsStudents/result2/result?suzhiReportList=",
            "老师寄语": "/pages/ParentsStudents/send2/send?send=",
            "小伙伴的话": "/pages/ParentsStudents/friendWords2/friendWords?friendWordImg=",
            "我的荣誉": "/pages/ParentsStudents/honour2/honour?honorImg=",
            "学期小结": "/pages/ParentsStudents/sum2/sum?sumImg=",
            "十佳成长目录": "/pages/ParentsStudents/contents2/contents?growImg=",
            "个性": "/pages/ParentsStudents/specific2/specific?personImg=",
        }
        let data = getHistoryItem.data
        console.log(data)
        if ((getHistoryItem.data instanceof Array)) {
            data = JSON.stringify(getHistoryItem.data)
        }
        wx.navigateTo({
            url: pageUrls[itemKey] + data,
        })
        console.log(data)
    },

    // 初始化列表项高度
    setReportListAreaHeight() {
        let that = this;
        let query = wx.createSelectorQuery();

        // 报告项item的高度
        query.select('.cate').boundingClientRect(function (rect) {
            that.setData({
                eleCateHeight: rect.height
            })
        }).exec();

        // 把报告项列表每个分类的区间高度计算，并放进数组
        // 上面获取元素的高度可能不是同步的，所以把下面的放在setTimeout里面
        let cateAreaHeight = [0]
        let heightCount = 0
        setTimeout(() => {
            this.data.reports.forEach((item, index) => {
                heightCount += this.data.eleCateHeight
                cateAreaHeight.push(heightCount)
            })
            console.log(cateAreaHeight, "cateAreaHeight");
            this.setData({
                cateAreaHeight
            })
        }, 250)

    },

    // 定位到报告项列表
    scrollToCategory(e) {
        let idx = e.currentTarget.dataset.index
        // let catecount = e.currentTarget.dataset.catecount
        this.setData({
            listViewScrollTop: this.data.cateAreaHeight[idx]
        })
    },

    // 列表滚动事件
    cateListScrolling(event) {
        let scrollTop = event.detail.scrollTop
        let cateAreaHeight = this.data.cateAreaHeight
        cateAreaHeight.forEach((item, index) => {
            if (scrollTop >= (cateAreaHeight[index] - 1) && scrollTop <= cateAreaHeight[index + 1]) {
                this.setData({
                    cateListActiveIndex: index
                })
            }
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})