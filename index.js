
(function () {

    const VERSION = '0.0.1'
    const TITLE = 'BLOGUI'


    // GM_listValues().forEach(item=>{
    //     GM_deleteValue(item)
    // })
    // console.log(GM_listValues())
    // debugger

    // @match        *://*blog.csdn.net/*
    // @match        *://*.cnblogs.com/*


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
                { domId: "", for: "CsdnSideToolbar ", label: "侧边悬浮", checked: false, getEvent: removeSideToolbar },
            ]
        },
        h5: {
            webBlogTitle: "CSDN设置(h5)",
            children: [
                // 底部相关推荐
                { domId: "#recommend", for: "CsdnH5Recommend", label: "底部相关推荐", checked: false },
                { domId: "#comment", for: "CsdnH5Comment", label: "底部登录", checked: false },
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

        let currentTitle = render({
            tag: 'p',
            prop: { class: "blog-ui-item-title" },
            children: title
        })

        parentDom.appendChild(currentTitle)
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
                        <div class="blog-ui-introduction"> 拒绝花里胡哨的操作, 还一个干净的页面给你！ </div>
                        <div class="blog-ui-setting"></div>
                    </div>
                </div>
            `

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
            case 'CSDN': CSDNEvent( domId, checkedFlag)
        }
    }

    // 初始化滚动条
    function initScrool() {
        setTimeout(() => {
            let wrapper = getElement('.blog-ui-csdn')[0]
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
            
        `
    }

    function isH5OrPC() {
        // h5 移动端端时候的主元素ID
        let dom = getElement('#article')
        return dom && dom[0]
    }

    // csdn 事件
    function CSDNEvent(domId, checked) {
        displayDom(domId, checked)
        setAside() // 点击之后进行判断是不是没有右侧的侧边栏了
    }

    // 初始化csdn配置
    function initCSDN(key) {
        // console.log(GM_listValues())
        let isH5 = isH5OrPC()
        if(!isH5) {
            let removeDom = ['#recommendNps', '.template-box', '.blog-footer-bottom', '#csdn-copyright-footer']
            // 删除可以直接通类名进行获取的元素
            removeDom.forEach(item=>{
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
        setTimeout(()=>{
            let domList = []
            getElement('.blog_container_aside .aside-box').forEach(item => {
                domList.push(item.style.display)
            })
            if(domList.filter(item=>{
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
                if(['show', 'hide'].includes(dataType)) {
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
        if(!loginDom) {
            return
        }

        // 删除顶部右侧
        ['.toolbar-btn-vip', '.toolbar-btn-collect', '.toolbar-dynamic-box', '.toolbar-mp-menubox', '.toolbar-btn-write'].forEach(item=>{
            displayDom(item, checked)
        })

    } 

    // 优化开始
    function CSDNOoptimiz(key) {
        let isH5 = isH5OrPC()
        if (key === 2) {
            setAside() // 判断右侧是否有悬浮

            let mainDom = getElement('.main_father')[0]
            mainDom.classList.remove('justify-content-center')

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
            
            // 进行刷新这之后的设置
            CSDNCONFIG[isH5 ? 'h5' : 'pc'].children.forEach(item => {
                // 如果有事件那就去单独执行 否则就是 默认隐藏
                if(item.getEvent) {
                    item['getEvent'](item.checked)
                } else {
                    displayDom(item.domId, item.checked)
                }
            })
            
            // 去除剪贴板劫持
            csdn.copyright.textData = ''
            
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
                        setTimeout(()=>{item.setAttribute('data-title', '免登录复制')},3000)
                    })
                })
            }
            // 展开code 折叠
            document.querySelectorAll('.hide-preCode-bt').forEach(item => { item.click() })
            // 删除原始的右侧
            getElement('.recommend-right')[0].remove()
            // 点击登录注册按钮进行展示登录页面
            let loginShow = ['toolbar-btn-login', 'unlogin-comment-bt']
            loginShow.forEach(item => {
                let loginDom = getElement('.'+item)
                loginDom && loginDom.length != 0 && loginDom[0].addEventListener('click',()=>{
                   setTimeout(()=>{ getElement('.passport-login-container')[0].style.display = 'block'}, 500)
                })
            })
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
    initScrool()



    // // 设置鼠标移入svg 显示主菜单
    // addEvent('#blog-ui-main', 'mouseenter', () => {
    //     addCss('#blog-main', { display: 'inherit' })
    // })


    // addEvent('#blog-main', 'mouseleave', () => {
    //     addCss('#blog-main', { display: 'none' })
    // })


})();

