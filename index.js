
(function () {

    const VERSION = '1.0.0'
    const TITLE = 'BLOGUI'

    const CSDNCONFIG = {
        // 后续进行优化首页 等其他页面
        pc: {
            key: "1.0.0",
            webBlogTitle: "CSDN设置(pc)",
            children: [
                // 左侧
                { domId: "#asideProfile", for: "CsdnAuthorInfo", label: "作者信息", checked: true, type: 'aside' },
                { domId: "#asidedirectory", for: "CsdnDirectory", label: "目录", checked: true, type: 'aside' },
                { domId: "#asideSearchArticle", for: "CsdnSerch", label: "搜索博主文章", checked: false, type: 'aside' },
                { domId: "#asideRank", for: "CsdnAsideRank", label: "是否入选", checked: false, type: 'aside' },
                { domId: "#asideHotArticle", for: "CsdnHotPage", label: "热门文章", checked: false, type: 'aside' },
                { domId: "#asideCategory", for: "CsdnCategory", label: "分类专栏", checked: false, type: 'aside' },
                { domId: "#asideNewComments", for: "CsdnComments", label: "最新评论", checked: false, type: 'aside' },
                { domId: "#asideNewNps", for: "CsdnNewNps", label: "推荐博客", checked: false, type: 'aside' },
                { domId: "#asideArchive", for: "CsdnArchive", label: "最新文章", checked: false, type: 'aside' },
                // /  底部相关推荐
                { domId: ".recommend-box", for: "CsdnRecommend", label: "底部相关推荐", checked: false, type: 'foot' },
                { domId: "#pcCommentBox", for: "CsdnpcCommentBox", label: "评论", checked: true, type: 'foot' },
                { domId: "#blogExtensionBox", for: "CsdnblogExtensionBox", label: "引流信息", checked: false },
                { domId: "#treeSkill", for: "CsdntreeSkill", label: "知识档案匹配", checked: false },

                // 顶部信息
                { domId: "", for: "Csdntop", label: "顶部导航信息", checked: false, getEvent: removeTopbar },
                { domId: "", for: "CsdnSideToolbar ", label: "侧边悬浮(略有延迟)", checked: false, getEvent: removeSideToolbar },
            ]
        },
        h5: {
            webBlogTitle: "CSDN设置(h5)",
            children: [
                // 底部相关推荐
                { domId: "#recommend", for: "CsdnH5Recommend", label: "底部相关推荐", checked: false },
                { domId: "#comment", for: "CsdnH5Comment", label: "底部登录", checked: false },
                { domId: "#blogExtensionBox", for: "CsdnH5blogExtensionBox", label: "引流信息", checked: false },
                { domId: "", for: "CsdnH5operate", label: "底部操作是否固定", checked: false, getEvent: operate }
            ]
        }
    }

    let asideWidth = '0px'


    // ---------- 通用方法 -------------

    // 通过当前地址获取现在是那个网站 
    function initUrl() {
        let url = window.location.href
        let urlResList = [
            { platform: 'CSDN', reg: /https\:\/\/www.csdn.net\/*/, title: 'CSDN首页优化', key: 1 },
            { platform: 'CSDN', reg: /.*blog.csdn.net.*\/details\/.*/, title: 'CSDN详情优化', key: 2 },
            { platform: 'CSDN', reg: /.*blog.csdn.net.*/, title: 'CSDN文章列表优化', key: 3 },
        ]

        for (let i = 0; i < urlResList.length; i++) {
            if (urlResList[i].reg.test(url)) {
                return urlResList[i]
            }
        }
    }

    function addEvent(className, eventType, callback) {
        let dom = getElement(className)[0]
        dom.addEventListener(eventType, callback)
    }

    // 添加复选框
    function addCheckBoxDom(config, type) {
        let title = config.webBlogTitle
        let configArr = config.children
        let parentDom = getElement('.blog-ui-setting')[0]

        let parentVDom = render({
            tag: 'div',
            prop: { class: "blog-ui-csdn" },
            children: [
                {
                    tag: 'div',
                    prop: { class: "blog-ui-csdn-main" },
                }
            ]
        })

        // let currentTitle = render({
        //     tag: 'p',
        //     prop: { class: "blog-ui-item-title" },
        //     children: title
        // })

        // parentDom.appendChild(currentTitle)
        parentDom.appendChild(parentVDom)

        let itemDom = getElement('.blog-ui-csdn-main')[0]

        configArr.forEach((item, index) => {
            item.index = index
            let checkObj = {
                tag: "input",
                prop: {
                    "type": "checkbox",
                    "id": item.for,
                    "domId": item.domId,
                    "index": item.index,
                    "on": {
                        change: (e) => {
                            var target = e.target,
                                targetTag = target.tagName;
                            if (targetTag === "INPUT") {


                                if (GM_listValues().includes(target.id)) {
                                    GM_setValue(target.id, target.checked)
                                }

                                var index = target.getAttribute('index');
                                configArr[index].getEvent ? configArr[index]['getEvent'](target.checked) : setDomEvent(target, type)
                            }
                        }
                    }
                }
            }

            if (item.checked) {
                checkObj.prop.checked = true
            }

            let currentDom = render({
                tag: 'div',
                prop: {
                    "class": "setting-item"
                },
                children: [
                    checkObj,
                    {
                        tag: "label",
                        prop: {
                            "class": "form-check-label",
                            "for": item.for,
                            "domId": item.domId
                        },
                        children: item.label
                    }
                ]
            })
            itemDom.appendChild(currentDom)
        })
    }

    // 添加主页面
    function domHtml() {
        let DomHtml =
            ` 
                <div class='position'> 
                    <svg t="1661751782189" id="blog-ui-main" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1727">
                        <path
                            d="M392.2432 477.3376H244.0192c-49.3056 0-89.2928-39.9872-89.2928-89.2928V239.8208c0-49.3056 39.9872-89.2928 89.2928-89.2928h148.224c49.3056 0 89.2928 39.9872 89.2928 89.2928v148.224c0 49.3056-39.9872 89.2928-89.2928 89.2928zM392.2432 868.3008H244.0192c-49.3056 0-89.2928-39.9872-89.2928-89.2928V630.784c0-49.3056 39.9872-89.2928 89.2928-89.2928h148.224c49.3056 0 89.2928 39.9872 89.2928 89.2928v148.224c0 49.3056-39.9872 89.2928-89.2928 89.2928zM785.0496 868.3008h-148.224c-49.3056 0-89.2928-39.9872-89.2928-89.2928V630.784c0-49.3056 39.9872-89.2928 89.2928-89.2928h148.224c49.3056 0 89.2928 39.9872 89.2928 89.2928v148.224c0 49.3056-39.9872 89.2928-89.2928 89.2928zM647.7824 467.0464l-90.0096-90.0096c-34.8672-34.8672-34.8672-91.4432 0-126.3104l90.0096-90.0096c34.8672-34.8672 91.4432-34.8672 126.3104 0l90.0096 90.0096c34.8672 34.8672 34.8672 91.4432 0 126.3104l-90.0096 90.0096c-34.9184 34.8672-91.4432 34.8672-126.3104 0z"
                            fill="#31cdac" p-id="1728">
                        </path>
                    </svg>
                    <div id="blog-main">
                        <div class="blog-main-title">
                            <a href="https://github.com/adlered/CSDNGreener" target="_blank"> Blog-UI 设置界面</a>
                        </div>
                      
                        <div class="blog-ui-setting"></div>
                    </div>
                </div>
            `
        //   // <div class="blog-ui-introduction"> 拒绝花里胡哨的操作, 还一个干净的页面给你！ </div>
        let app = document.createElement('div')
        app.setAttribute('id', 'blogUiApp')
        document.querySelectorAll('body')[0].appendChild(app)
        app.innerHTML = DomHtml
    }

    // 获取元素
    function getElement(className) {
        let domList = document.querySelectorAll(className)
        if (!domList || domList.length === 0) {
            return ''
        } else {
            return domList
        }
    }

    // 初始化一个弹用于消息提示
    function initDialog(parentDom, title) {
        let oldDialog = getElement('.dialog-dom')[0]
        if (oldDialog) {
            oldDialog.remove()
        }
        let dialogVDom = document.createElement('div')
        dialogVDom.setAttribute('class', 'dialog-dom')
        dialogVDom.innerText = title
        setTimeout(() => {
            dialogVDom.setAttribute('style', 'opacity: 1; transition: all 1s;')
        }, 0)
        let parentVDom = getElement(parentDom)[0]
        parentVDom.appendChild(dialogVDom)

        setTimeout(() => {
            dialogVDom.setAttribute('style', 'opacity: 0; transition: all 1s;')
        }, 2000)
    }

    // 设置隐藏显示
    async function displayDom(domNode, type) {
        let dom = await getElement(domNode)
        dom && dom.length > 0 && dom.forEach(item => {
            item.style['display'] = type ? 'block' : 'none'
        })
    }

    // 输出
    function log(message, type = 'log') {
        console[type](message)
    }

    // 创建dom 元素
    function render(Vnode) {
        let { tag, prop, children } = Vnode
        let el = document.createElement(tag)
        for (key in prop) {
            el.setAttribute(key, prop[key]);
            if (key === "on") {
                incident = prop[key]
                for (k in incident) {
                    el.addEventListener(k, e => incident[k](e))
                }
            }
        }
        if (children instanceof Array) {
            children.forEach((item) => {
                el.appendChild(render(item));
            });
        } else {
            el.textContent = children
        }
        return el
    }

    // 设置点击事件 在这里需要进行分发
    function setDomEvent(e, type) {
        let checkedFlag = e.checked
        // let forName = e.id
        let domId = e.attributes.domid.value

        switch (type) {
            case 'CSDN': CSDNEvent(domId, checkedFlag)
        }
    }

    // 初始化滚动条
    function initScrool() {
        setTimeout(() => {
            let wrapper = getElement('.blog-ui-setting')[0]
            BetterScroll.createBScroll(wrapper, {
                probeType: 3,
                pullUpLoad: true,
                mouseWheel: true,
                scrollY: true,
                scrollX: false,
                scrollbar: {
                    fade: true,
                    interactive: true,
                    scrollbarTrackClickable: true
                }
            })
        }, 1000)
    }

    // 添加外部样式
    function addCss(className, query) {
        let dom = getElement(className)[0]
        Object.keys(query).forEach(item => {
            dom.style[item] = query[item]
        })
    }

    // ----------- CSDN 专区 ----------

    function appendDom() {
        let html =
            `
            <div class='bottom-tip'>
                <p class='gotogithub'>
                    <a  target="_blank" href="https://github.com/wandou-cc/blog-ui">
                        <svg t="1663318093270"  viewBox="0 0 3786 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4682" width="100" height="50"><path d="M729.176289 438.294072H410.703618c-7.882987 0-14.977675 6.30639-14.977675 14.977675v155.294843c0 7.882987 6.30639 14.977675 14.977675 14.977675h123.762895v193.133179s-27.590454 9.459584-104.843726 9.459584c-90.654349 0-217.570439-33.108545-217.570439-312.166281s132.43418-316.107775 256.197075-316.107775c107.208622 0 153.718245 18.919169 182.885296 28.378752 9.459584 3.153195 18.13087-6.30639 18.13087-14.977675l35.473441-150.56505c0-3.941493-1.576597-8.671286-5.518091-11.82448C687.396459 40.991532 614.872979 0 430.411085 0 217.570439 0 0 90.654349 0 525.006928c0 434.352579 249.102386 498.993072 459.578137 498.993072 174.214011 0 279.846035-74.100077 279.846035-74.100077 4.729792-2.364896 4.729792-8.671286 4.729793-11.036182V453.271747c0-8.671286-7.094688-14.977675-14.977676-14.977675zM2368.837567 52.027714c0-7.882987-6.30639-14.977675-14.977675-14.977676h-178.943803c-7.882987 0-14.977675 6.30639-14.977675 14.977676v346.063125h-279.057737V52.027714c0-7.882987-6.30639-14.977675-14.977675-14.977676H1686.959199c-7.882987 0-14.977675 6.30639-14.977675 14.977676v937.287144c0 7.882987 6.30639 14.977675 14.977675 14.977675h178.943803c7.882987 0 14.977675-7.094688 14.977675-14.977675V588.070824H2159.938414l-0.788299 401.244034c0 7.882987 6.30639 14.977675 14.977676 14.977675h179.732101c7.882987 0 14.977675-7.094688 14.977675-14.977675V52.027714z" fill="#d4237a" p-id="4683"></path><path d="M1067.356428 175.002309c0-64.640493-52.027714-116.668206-115.879908-116.668206s-115.091609 52.027714-115.091609 116.668206c0 64.640493 52.027714 116.668206 115.091609 116.668207 63.852194 0 115.879908-52.027714 115.879908-116.668207zM1054.743649 791.451886V358.675905c0-7.882987-6.30639-14.977675-14.977675-14.977676h-178.943803c-7.882987 0-15.765974 8.671286-15.765974 16.554273v619.602771c0 18.13087 11.036182 23.648961 26.013857 23.648961h160.812933c17.342571 0 22.072363-8.671286 22.072363-23.648961 0.788299-33.108545 0.788299-163.177829 0.788299-188.403387z" fill="#d4237a" p-id="4684"></path><path d="M3049.139338 345.274827h-177.367206c-7.882987 0-14.977675 7.094688-14.977675 14.977675V819.830639s-44.933025 33.108545-109.573518 33.108545c-63.852194 0-81.194765-29.167052-81.194765-92.230947V360.252502c0-7.882987-6.30639-14.977675-14.977675-14.977675h-180.5204c-7.882987 0-14.977675 7.094688-14.977676 14.977675v431.199384c0 186.038491 104.055427 231.759815 246.737491 231.759815 117.456505 0 212.052348-64.640493 212.052348-64.640492s4.729792 33.896844 6.306389 37.838337c2.364896 3.941493 7.094688 7.882987 13.401078 7.882987l115.091609-0.788299c7.882987 0 14.977675-7.094688 14.977675-14.977675V359.464203c0-7.094688-6.30639-14.189376-14.977675-14.189376zM3535.51963 324.779061c-100.902232 0-169.484219 44.933025-169.484218 44.933025V52.027714c0-7.882987-6.30639-14.977675-14.977675-14.977676h-179.732102c-7.882987 0-14.977675 6.30639-14.977675 14.977676v937.287144c0 7.882987 6.30639 14.977675 14.977675 14.977675h124.551193c5.518091 0 10.247883-3.153195 12.612779-7.882987 3.153195-4.729792 7.882987-43.356428 7.882987-43.356428s73.311778 69.370285 212.840647 69.370285c163.177829 0 256.985373-82.771363 256.985373-372.076983-0.788299-288.517321-149.776751-325.56736-250.678984-325.567359z m-70.158583 527.371824c-61.487298-1.576597-103.267129-29.95535-103.267129-29.95535V525.795227s40.991532-25.225558 92.230947-29.95535c63.852194-5.518091 125.339492 13.401078 125.339492 166.331024-0.788299 160.812933-28.378753 193.133179-114.30331 189.979984zM1569.502694 343.698229h-134.010777V166.331024c0-7.094688-3.153195-10.247883-11.036182-10.247883h-182.885296c-7.094688 0-11.036182 3.153195-11.036182 10.247883v183.673595s-91.442648 22.072363-97.749038 23.648961c-6.30639 1.576597-11.036182 7.882987-11.036181 14.189376v115.091609c0 8.671286 6.30639 14.977675 14.977675 14.977675h93.807544v277.48114c0 205.745958 144.258661 226.241724 242.007698 226.241724 44.933025 0 97.749038-14.189376 106.420324-17.342571 5.518091-1.576597 8.671286-7.094688 8.671285-13.401078v-126.916089c0-7.882987-7.094688-14.977675-14.977675-14.977675-7.882987 0-27.590454 3.153195-48.874519 3.153194-66.21709 0-88.289453-30.743649-88.289453-70.158583V518.700539h134.010777c7.882987 0 14.977675-6.30639 14.977676-14.977675V358.675905c-0.788299-7.882987-7.094688-14.977675-14.977676-14.977676z" fill="teal" p-id="4685"></path></svg>
                    </a>
                </p>
                <p class='blog-ui-version'> 当前版本号: ${VERSION}</p>
                <a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=RYQVnUPuE_KUnJqOztGM40OWHmiVd74g&jump_from=webapi">
                    <p class='blog-ui-addQQ'> 点击加入QQ群: 731428117 </p>
                </a>
                
                <p class='blog-ui-issues'>
                    <a target="_blank" href="https://github.com/wandou-cc/blog-ui/issues?q=🌟提交个建议">
                        <svg t="1663321961162" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7079" width="30" height="30"><path d="M409.556305 832.886311c-3.039219 0.001023-6.04774-1.347694-8.065699-3.927449-43.106774-55.093782-78.364789-109.137653-104.792695-160.631444-21.252023-41.409109-36.894282-81.309864-46.490847-118.594025-16.241916-63.098083-9.721409-97.682763-9.122775-100.570533 12.328793-62.99166 39.591717-104.664781 81.030501-123.856889 72.586179-33.615609 160.732751 14.868639 164.449399 16.949021 4.931313 2.76088 6.691399 8.995885 3.931542 13.927197-2.759857 4.929266-8.990768 6.689353-13.920034 3.935636l0 0c-0.822738-0.458441-82.886779-45.469588-145.933697-16.207124-35.121915 16.302291-58.500369 53.057403-69.484537 109.244077-0.014326 0.072655-0.028653 0.144286-0.044002 0.215918-0.056282 0.273223-6.478552 32.732495 9.444093 93.297896 14.762215 56.154951 52.257178 148.524708 147.051147 269.676999 3.482311 4.451382 2.697435 10.882861-1.752924 14.365172C413.983127 832.17716 411.76153 832.886311 409.556305 832.886311z" p-id="7080" fill="#1396cd"></path><path d="M207.895399 632.868835c-1.817392 0.001023-3.657296-0.484024-5.322216-1.500167-50.776454-30.993898-72.890101-66.422805-82.499969-90.686419-10.69662-27.00812-8.852622-46.824445-8.769734-47.65537 0.566912-5.623068 5.600555-9.714246 11.208273-9.155521 5.605671 0.564865 9.69685 5.553483 9.160637 11.155061-0.033769 0.412392-1.277086 16.805758 7.902994 39.294958 12.30935 30.15888 37.781488 57.675584 73.661673 79.57843 4.823865 2.944052 6.347568 9.241478 3.403516 14.065344C214.710618 631.126144 211.343941 632.868835 207.895399 632.868835z" p-id="7081" fill="#1396cd"></path><path d="M380.752282 675.731038c-3.63683 0-7.157004-1.942235-9.009188-5.365194-2.689249-4.970198-0.840134-11.180644 4.131087-13.869892 14.629185-7.942903 36.0828-24.222681 37.987173-35.55682 0.937348-5.572926 6.219655-9.335622 11.787464-8.395204 5.573949 0.936325 9.332553 6.212492 8.396227 11.787464-4.304026 25.618471-43.927465 47.729048-48.431036 50.164516C384.064724 675.332972 382.396735 675.731038 380.752282 675.731038z" p-id="7082" fill="#1396cd"></path><path d="M701.772646 599.410815c-22.321378 54.713113-53.872978 103.923908-94.227058 93.166913-52.372811-13.950733-62.85249-80.855516-50.41011-145.056724-66.695005-1.539053-136.792503-32.289404-140.636041-86.457094-3.824095-54.041824 30.737048-95.990215 89.455381-109.313661-16.511046-59.700707 5.770424-121.118522 55.450916-144.189983 47.982828-22.288632 100.192933 18.546402 132.837424 72.27714C743.255433 196.395996 843.566046 266.516006 843.566046 266.516006s117.051903 79.908958 3.183506 167.383218c58.414411 41.73145 71.975265 113.865327 36.265972 163.690106" p-id="7083" fill="#1396cd"></path><path d="M618.92987 704.354959c-4.622274 0-9.29162-0.62831-14.019295-1.890047-27.812439-7.407714-47.423079-28.414143-56.710606-60.745503-6.770194-23.567765-7.824199-53.222155-3.110851-84.528162-67.760267-4.853541-134.718261-37.925774-138.796136-95.402837-2.061962-29.143761 6.087649-55.81726 23.568788-77.138868 15.322987-18.688641 37.232996-32.489972 63.780629-40.272215-13.000082-62.190411 12.694113-122.525568 63.454194-146.098449 25.437345-11.815093 53.729715-8.987698 81.817424 8.181333 19.770276 12.085246 39.140439 31.30703 55.555294 54.952566 12.870122-16.153912 29.014824-26.425859 48.15986-30.602995 50.725288-11.069103 103.932094 25.323758 106.756419 27.288506 2.911306 1.997494 55.861262 39.078017 57.361429 92.592838 0.821715 29.323862-13.829983 57.207933-43.586704 83.025948 25.921369 21.974477 42.827411 50.779523 48.053436 82.300424 5.192256 31.315216-1.867534 62.401212-19.87977 87.533612-3.290953 4.592598-9.683547 5.649674-14.278191 2.356674-4.593622-3.291976-5.649674-9.68457-2.356674-14.278191 14.823614-20.684088 20.620643-46.348608 16.32378-72.263837-5.004991-30.18344-22.840194-57.57837-50.221822-77.139891-2.63706-1.883907-4.226255-4.906753-4.282536-8.148587-0.057305-3.240811 1.426489-6.317892 3.997034-8.292873 31.089066-23.882943 46.488801-48.954969 45.771463-74.519204-1.219781-43.532469-48.019667-75.975369-48.492434-76.29771-0.030699-0.021489-0.062422-0.042979-0.093121-0.064468-0.471744-0.327458-48.571229-33.341363-90.783633-24.082488-18.10024 3.970428-32.854269 15.476483-43.852764 34.198893-1.823532 3.105734-5.145184 5.02341-8.747221 5.050016-0.024559 0-0.051165 0-0.075725 0-3.572362 0-6.887874-1.863441-8.745175-4.920056-16.347317-26.90579-36.681434-48.651047-57.258075-61.228503-22.282492-13.622252-43.318598-16.003486-62.522985-7.081279-44.394093 20.61655-65.379033 76.206636-49.898457 132.181485 0.74599 2.695389 0.355087 5.579065-1.080611 7.979742-1.435699 2.400676-3.791349 4.108574-6.51846 4.727675-53.720505 12.190647-84.953857 49.976228-81.512479 98.611925 3.412726 48.100508 69.868277 75.546603 130.663922 76.949556 3.012613 0.068562 5.842055 1.463328 7.733125 3.810792 1.89107 2.346441 2.651386 5.408173 2.077312 8.366551-10.351766 53.414537-5.302773 120.355135 42.998303 133.222187 34.704406 9.251711 63.814398-42.281989 82.118276-87.143733 2.133593-5.233188 8.107655-7.745405 13.33982-5.608741 5.233188 2.134617 7.744381 8.107655 5.608741 13.33982C683.843298 670.447708 652.841214 704.354959 618.92987 704.354959z" p-id="7084" fill="#1396cd"></path></svg>
                        &nbsp;&nbsp;<span> '差评' 去提交个建议 </span>
                    </a>
                    <a target="_blank" href="https://github.com/wandou-cc/blog-ui">
                        <svg t="1663322550847" viewBox="0 0 1051 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21206" width="20" height="20"><path d="M766.083422 783.058824m-206.990374 0a206.990374 206.990374 0 1 0 413.980749 0 206.990374 206.990374 0 1 0-413.980749 0Z" fill="#1396cd" p-id="21207"></path><path d="M892.029947 997.167914H386.053476c-98.019251 0-193.300535-136.350802-240.941177-217.394652-6.571123-10.951872-2.737968-25.189305 8.213904-31.760428 10.951872-6.571123 25.189305-2.737968 31.760428 8.213904 70.639572 119.922995 147.850267 194.395722 200.966845 194.395722h505.976471c21.35615 0 38.331551-16.975401 38.33155-38.331551V481.882353c0-21.35615-16.975401-38.331551-38.33155-38.331551h-94.73369c-74.472727 0-153.873797-49.283422-153.873797-123.208556v-3.285562l20.260962-148.945454c-0.547594-39.426738-19.165775-66.806417-58.044919-83.234225-20.260963-8.761497-80.496257 1.095187-91.448129 10.404278C436.979679 162.635294 357.57861 381.125134 356.483422 383.315508l-5.475935 14.785027-15.880214 0.547593c-1.095187 0-90.900535 3.833155-130.327273 9.309091-31.212834 4.380749-62.425668 24.641711-83.234225 54.211765-21.35615 30.665241-29.02246 67.354011-21.356149 102.947594 4.928342 21.903743 14.785027 50.37861 28.474866 83.234224 4.928342 12.047059-0.547594 25.736898-12.047059 30.665241-12.047059 4.928342-25.736898-0.547594-30.66524-12.047059-15.33262-35.045989-25.736898-66.806417-31.212835-91.448128-9.309091-49.831016 0.547594-99.114439 29.570054-140.183958 27.927273-39.974332 70.639572-67.354011 114.994652-73.37754 31.760428-4.380749 90.900535-7.66631 119.375401-8.761497 20.260963-52.568984 90.900535-227.79893 165.373262-292.414973 26.284492-22.451337 106.233155-32.855615 140.731551-17.522995 55.854545 24.641711 85.972193 68.449198 85.972193 127.589305v3.285561l-20.808557 147.850268c1.095187 44.35508 56.949733 75.020321 107.328343 75.020321h94.73369c46.545455 0 84.877005 37.783957 84.877005 84.877005v430.408556c0 47.093048-38.331551 84.877005-84.877005 84.877005z" fill="#1396cd" p-id="21208"></path></svg>
                        &nbsp;&nbsp;&nbsp;<span>&nbsp;&nbsp;'好评' 给作者点个赞 </span>
                    </a>
                </p> 
                <div class='blog-ui-advertis'>
                    <p class='advertis-warn'> 广告警告🪧 </p>

                    <p> 也不算广告啦 也是之前作者写的VScode插件 </p>
                    <a target="_blank" href="https://github.com/wandou-cc/exclusive-translation">
                            <img src='https://github.com/wandou-cc/exclusive-translation/blob/master/icon.png?raw=true' />
                            ⬅️ 叫做 'exclusive-translation' 专属翻译
                            <br />
                            🌟可以直接vscode搜索 '百度翻译'安装 可以直接中英翻译🌟
                    </a>
                </div>


                <div class='blog-ui-prompt'>
                    如果有问题或者建议可以及时联系群主或者github提issues, 我也很希望大家能提提意见, 我看到后会及时内回复各位, 祝各位使用愉快
                </div>

                <div class='statement'>
                     未来版本将要更新的功能：<br>
                        1.将要对CSDN继续优化首页文章列表页<br>
                        2.对CSDN下载资源对优化<br>
                        3.添加博客园 掘金 知乎 简书 思否 等技术论坛等优化<br>
                        4.可以对文章主要部分进行打印 PDF 获取<br>
                        5.目前只想到这些吧 其他的 想起来在写
                </div>
                <br>
            </div>
        `
        let parentDom = getElement('.blog-ui-csdn')[0]
        let createDom = document.createElement('div')
        createDom.innerHTML = html
        parentDom.appendChild(createDom)


    }

    function isH5OrPC() {
        // h5 移动端端时候的主元素ID
        let dom = getElement('#article')
        return dom && dom[0]
    }

    // csdn 事件
    function CSDNEvent(domId, checked) {
        displayDom(domId, checked)
        let isH5 = isH5OrPC()
        isH5 ? '' : setAside() // 点击之后进行判断是不是没有右侧的侧边栏了
    }

    // 初始化csdn配置
    function initCSDN(key) {
        // console.log(GM_listValues())
        let isH5 = isH5OrPC()
        if (!isH5) {
            let removeDom = ['#recommendNps', '.template-box', '.blog-footer-bottom', '#csdn-copyright-footer']
            // 删除可以直接通类名进行获取的元素
            removeDom.forEach(item => {
                displayDom(item, false)
            })
        }
        // 设置缓存中的内容 并更新 源配置文件
        CSDNCONFIG[isH5 ? 'h5' : 'pc'].children.map(item => {
            if (GM_listValues().includes(item.for)) {
                return item.checked = GM_getValue(item.for)
            } else {
                GM_setValue(item.for, item.checked)
            }
        })
        addCheckBoxDom(CSDNCONFIG[isH5 ? 'h5' : 'pc'], 'CSDN')  // 设置复选框
        CSDNOoptimiz(key) // 进优化操作
    }

    // 判断右侧 的 侧边栏是不是全都有display：none 如果有就进行全屏显示
    function setAside() {
        let blog_container_aside = getElement('.blog_container_aside')[0]
        setTimeout(() => {
            let domList = []
            getElement('.blog_container_aside .aside-box').forEach(item => {
                domList.push(item.style.display)
            })
            if (domList.filter(item => {
                return item == 'block'
            }).length == 0) {
                asideWidth = '0px'
            } else {
                asideWidth = '300px'
            }
            blog_container_aside.style.width = asideWidth
        })
    }

    // 处理左侧悬浮
    function removeSideToolbar(checked) {
        setTimeout(() => {
            // 删除侧边悬浮
            getElement('.csdn-side-toolbar')[0].style = ''
            getElement('.csdn-side-toolbar .option-box').forEach(item => {
                let dataType = item.getAttribute('data-type')
                if (['search', 'guide', 'cs'].includes(dataType)) {
                    item.style.display = checked ? 'flex' : 'none'
                }
                if (['show', 'hide'].includes(dataType)) {
                    item.remove()
                }
            })
        }, 1000)
    }

    // 处理顶部
    function removeTopbar(checked) {

        // 处理左侧
        getElement('.toolbar-menus li').forEach(item => {
            let dataType = item.getAttribute('title')
            if (['高价值源码课程分享', '简单高效优惠的云服务', '程序员的如意兵器'].includes(dataType)) {
                item.style.display = checked ? 'inline-block' : 'none'
            }
        })

        // 判断是否登录
        let loginDom = getElement('.toolbar-btn-loginfun')
        // 已经登录
        if (!loginDom) {
            return
        }

        // 删除顶部右侧
        ['.toolbar-btn-vip', '.toolbar-btn-collect', '.toolbar-dynamic-box', '.toolbar-mp-menubox', '.toolbar-btn-write'].forEach(item => {
            displayDom(item, checked)
        })

    }

    // operate
    function operate(checked) {
        let operateDom = getElement('#operate')
        if (operateDom && operateDom.length !== 0) {
            setTimeout(() => {
                operateDom[0].style.bottom = '0px'
                operateDom[0].style.position = checked ? 'fixed' : 'inherit'
            })
        }
    }

    // 详情页面处理H5
    function csdnDeatilH5() {
        // let loginDom = getElement('.passport-login-container')
    }

    // 详情页面处理PC
    function csdnDeatilPc() {
        setAside() // 判断右侧是否有悬浮

        let mainDom = getElement('.main_father')[0]
        mainDom.classList.remove('justify-content-center')

        let hideArticleBox = getElement('.hide-article-box')
        hideArticleBox && hideArticleBox.length > 0 && hideArticleBox[0].remove()

        addCss('.main_father', {
            "width": '99vw',
            "height": '100%'
        })

        // 设置展示文章元素
        addCss('.container', {
            "display": "flex",
            "width": "99vw"
        })

        addCss('main', {
            "flex": "1",
            "margin-right": "10px"
        })

        // 设置右侧边栏
        let blog_container_aside = getElement('.blog_container_aside')[0]
        var observe = new MutationObserver((list) => {
            blog_container_aside.style['position'] = 'relative'
            blog_container_aside.style['left'] = '0'
            blog_container_aside.style['width'] = asideWidth
        })
        observe.observe(blog_container_aside, { attributes: true });
        let toolbar = getElement('.left-toolbox')[0]
        toolbar.setAttribute('style', 'position: relative; z-index: 99;bottom: 0px;width: 100%;')

        // 滚动设置右侧的侧边栏
        window.onscroll = () => {
            toolbar.setAttribute('style', 'position: relative; z-index: 99;bottom: 0px;width: 100%;')
        }

        // 去除剪贴板劫持
        csdn.copyright.textData = ''

        // 删除原始的右侧
        getElement('.recommend-right')[0].remove()
        // 点击登录注册按钮进行展示登录页面
        let loginShow = ['toolbar-btn-login', 'unlogin-comment-bt']
        loginShow.forEach(item => {
            let loginDom = getElement('.' + item)
            loginDom && loginDom.length != 0 && loginDom[0].addEventListener('click', () => {
                setTimeout(() => { getElement('.passport-login-container')[0].style.display = 'block' }, 500)
            })
        })
    }


    // 优化开始
    function CSDNOoptimiz(key) {
        let isH5 = isH5OrPC()
        if (key === 2) {

            // 进行刷新这之后的设置
            CSDNCONFIG[isH5 ? 'h5' : 'pc'].children.forEach(item => {
                // 如果有事件那就去单独执行 否则就是 默认隐藏
                if (item.getEvent) {
                    item['getEvent'](item.checked)
                } else {
                    displayDom(item.domId, item.checked)
                }
            })

            // 解除点击全选
            let hljdButton = getElement(".hljs-button")
            if (hljdButton && hljdButton.length !== 0) {
                hljdButton.forEach(item => {
                    item.setAttribute('data-title', '免登录复制')
                    item.addEventListener('click', (event) => {
                        const parentPreBlock = event.target.closest("pre");
                        let code = parentPreBlock.querySelectorAll('code')[0]
                        navigator.clipboard.writeText(code.innerText)
                        item.setAttribute('data-title', '复制成功')
                        setTimeout(() => { item.setAttribute('data-title', '免登录复制') }, 3000)
                    })
                })
            }
            // 展开code 折叠
            document.querySelectorAll('.hide-preCode-bt').forEach(item => { item.click() })

            // 处理H5
            if (isH5) {
                csdnDeatilH5()
                return
            } else {
                csdnDeatilPc()
            }

        }
    }

    // -------- 主函数 -------------
    function mainInit() {
        // 获取url地址 判断是那个网站
        let urlObject = initUrl()
        if (!urlObject.title) {
            return
        }
        let tipString = `当前正在优化 ${urlObject.title}  使用愉快！有问题请联系作者`
        // 初始化一个弹窗
        initDialog('body', tipString)
        log(tipString)
        domHtml()

        switch (urlObject.platform) {
            case 'CSDN': initCSDN(urlObject.key)
        }
    }

    log(`脚本启动成功, 欢迎使用${TITLE} 版本:${VERSION}`)
    mainInit()
    appendDom()


    // 设置鼠标移入svg 显示主菜单
    addEvent('#blog-ui-main', 'mouseenter', () => {
        addCss('#blog-main', { display: 'inherit' })
        initScrool()
    })


    addEvent('#blog-main', 'mouseleave', () => {
        addCss('#blog-main', { display: 'none' })
    })


})();

