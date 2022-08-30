(function () {

    const CSDNCONFIG = {
        webBlogTitle: "CSDN设置",
        children: [
            // 左侧
            { domId: "#asideProfile", for: "CsdnAuthorInfo", label: "作者信息", checked: true },
            { domId: "#asideSearchArticle", for: "CsdnSerch", label: "搜索博主文章", checked: false },
            { domId: "#asideHotArticle", for: "CsdnHotPage", label: "热门文章", checked: false },
            { domId: "#asideCategory", for: "CsdnCategory", label: "分类专栏", checked: false },
            { domId: "#asideNewComments", for: "CsdnComments", label: "最新评论", checked: false },
            { domId: "#asideNewNps", for: "CsdnNewNps", label: "推荐博客", checked: false },
            { domId: "#asideArchive", for: "CsdnArchive", label: "最新文章", checked: false },
            { domId: "#asidedirectory", for: "CsdnDirectory", label: "目录", checked: true },
            // 右侧
            { domId: "#groupfile", for: "CsdnGroupfile", label: "右侧目录", checked: false },
            { domId: ".kind_person", for: "CsdnKind", label: "右侧分类", checked: false },
            { domId: "#recommend-right", for: "CsdnKindRight", label: "右侧分类专栏", checked: false, observe: true },
            // 底部相关推荐
            { domId: ".recommend-box", for: "CsdnRecommend", label: "底部相关推荐", checked: false },
            { domId: "#recommendNps", for: "CsdnRecommendNps", label: "底部是否有帮助", checked: false },
            { domId: ".template-box", for: "CsdnBQ", label: "底部版权", checked: false },
            { domId: ".blog-footer-bottom", for: "CsdnFoot", label: "底部声明", checked: false },
        ]
    }

    const BKYCONFIG = {
        webBlogTitle: "博客园设置",
        children: [
            { domId: "#asideProfile", for: "CsdnAuthorInfo", label: "博客园", checked: false },
        ]
    }

    let infoNumber = -1
    const SUMBLOGCONFIG = [CSDNCONFIG, BKYCONFIG]



    const CSSURL = [
        // 'https://cdn.staticfile.org/twitter-bootstrap/5.1.1/css/bootstrap.min.css',
        'https://cdn.jsdelivr.net/gh/wandou-cc/blog-ui@1.1/index.css'
    ]

    // 引入外部css
    function importCss() {
        CSSURL.forEach(item => {
            let style = document.createElement('link')
            style.href = item
            let header = document.querySelector('head')
            style.rel = "stylesheet"
            style.type = "text/css"
            header.appendChild(style)
        })
    }


    // 检查是否有该元素
    function getElement(className) {
        let dom = document.querySelectorAll(className)
        if (!dom || dom.length === 0) {
            // throw new Error('为查询到Dom节点')
            console.log('节点没有查询到 跳过')
        } else {
            return dom
        }
    }

    // // 检查时候传了classname 或 id
    // function checkClass(className) {
    //     if (!className) {
    //         throw new Error('务必传入class 或 id')
    //     } else {
    //         return true
    //     }
    // }

    // 检查是否是对象
    function checkObject(obj) {
        let flag = Object.prototype.toString.call(obj) === '[object Object]'
        if (!flag) {
            throw new Error('当前传入非对象')
        } else {
            if (Object.keys(obj).length === 0) {
                throw new Error('当前对象为空')
            } else {
                return true
            }
        }
    }

    // 添加事件
    // function addEvent(className, eventType, callback) {
    //     checkClass(className)
    //     let dom = getElement(className)
    //     dom.addEventListener(eventType, callback)
    // }

    // 添加行内样式
    // function addCss(className, query) {
    //     checkObject(query) // 检查是否是对象
    //     checkClass(className) // 检查是否有当前类名ID
    //     let dom = getElement(className)
    //     Object.keys(query).forEach(item => {
    //         dom.style[item] = query[item]
    //     })
    // }

    // 创建dom 元素
    function render(Vnode) {
        checkObject(Vnode)
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

    // 添加复选框
    function addCheckBoxDom(config) {

        let title = config.webBlogTitle
        let configArr = config.children
        let parentDom = getElement('.blog-ui-setting')[0]

        let parentVDom = render({
            tag: 'div',
            prop: { class: "blog-ui-csdn" },
            children: [
                {
                    tag: 'p',
                    prop: { class: "blog-ui-item-title" },
                    children: title
                },
                {
                    tag: 'div',
                    prop: { class: "form-check form-switch blog-ui-csdn-main" },
                }
            ]
        })
        parentDom.appendChild(parentVDom)
        let itemDom = getElement('.blog-ui-csdn-main')[0]
        configArr.forEach(item => {
            let checkObj = {
                tag: "input",
                prop: {
                    "class": "form-check-input",
                    "type": "checkbox",
                    "id": item.for,
                    "domId": item.domId,
                    "on": {
                        change: (e) => {
                            setDomEvent(e)
                        }
                    }
                }
            }

            if (item.observe) {
                domMution(item.domId, item.for)
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

    function domMution(dom,domId) {

        var observe = new MutationObserver((list)=>{
            let flag  = /.*display:\s+?none*/.test(list[0].target.style.cssText)
            console.log(getElement('#' + domId)[0].checked)
            if(!flag && !getElement('#' + domId)[0].checked) {
                list[0].target.setAttribute('class','dis-none')
            }
            
        });
        observe.observe(getElement(dom)[0], {attributes: true});// 后面介绍config的配置
    }


    function setDomEvent(e) {
        let checkedFlag = e.target.checked
        let domId = e.target.attributes.domid.value
        displayDom(domId, checkedFlag)
    }

    async function displayDom(domNode, type) {
        let dom = await getElement(domNode)
        dom.forEach(item => {
            item.style['display'] = type ? 'block' : 'none'
        })
    }

    // 添加主页面
    function domHtml() {
        let DomHtml = ` <svg t="1661751782189" id="blog-ui-main" class="icon" viewBox="0 0 1024 1024" version="1.1"
        xmlns="http://www.w3.org/2000/svg" p-id="1727">
        <path
            d="M392.2432 477.3376H244.0192c-49.3056 0-89.2928-39.9872-89.2928-89.2928V239.8208c0-49.3056 39.9872-89.2928 89.2928-89.2928h148.224c49.3056 0 89.2928 39.9872 89.2928 89.2928v148.224c0 49.3056-39.9872 89.2928-89.2928 89.2928zM392.2432 868.3008H244.0192c-49.3056 0-89.2928-39.9872-89.2928-89.2928V630.784c0-49.3056 39.9872-89.2928 89.2928-89.2928h148.224c49.3056 0 89.2928 39.9872 89.2928 89.2928v148.224c0 49.3056-39.9872 89.2928-89.2928 89.2928zM785.0496 868.3008h-148.224c-49.3056 0-89.2928-39.9872-89.2928-89.2928V630.784c0-49.3056 39.9872-89.2928 89.2928-89.2928h148.224c49.3056 0 89.2928 39.9872 89.2928 89.2928v148.224c0 49.3056-39.9872 89.2928-89.2928 89.2928zM647.7824 467.0464l-90.0096-90.0096c-34.8672-34.8672-34.8672-91.4432 0-126.3104l90.0096-90.0096c34.8672-34.8672 91.4432-34.8672 126.3104 0l90.0096 90.0096c34.8672 34.8672 34.8672 91.4432 0 126.3104l-90.0096 90.0096c-34.9184 34.8672-91.4432 34.8672-126.3104 0z"
            fill="#31cdac" p-id="1728"></path>
    </svg>
    <div id="blog-main">
        <div class="blog-main-title">
            <a href="https://github.com/adlered/CSDNGreener" target="_blank"> blog-ui 设置界面</a>
        </div>
        <div class="blog-ui-introduction"> 对于面向cv编程的我,每天都游离于各个博客 </div>
        <div class="blog-ui-setting"></div>
    

    </div>
    `
        /*        <div class="blog-ui-foot">
                <div class="blog-ui-button">
                    <button class="blog-ui-button-confirm"> 确定 </button>
                </div>
            </div>*/
        let app = document.createElement('div')
        app.setAttribute('id', 'blogUiApp')
        document.body.appendChild(app)
        app.innerHTML = DomHtml
    }


    function initUrl() {
        let url = window.location.href
        let regList = [/.*\.csdn\.net*/, /.*cnblogs*/]
        for (let i = 0; i < regList.length; i++) {
            if (regList[i].test(url)) {
                infoNumber = i
                return
            }
        }
    }

    function mainInit() {
        initUrl()
        if (infoNumber !== -1) {
            domHtml()
            importCss()
            addCheckBoxDom(SUMBLOGCONFIG[infoNumber])
            let children = SUMBLOGCONFIG[infoNumber].children
            for (let i = 0; i < children.length; i++) {
                displayDom(children[i].domId, children[i].checked)
            }
        }
    }
    mainInit()
    // // 设置鼠标移入svg 显示主菜单
    // addEvent('#blog-ui-main', 'mouseenter', () => {
    //     addCss('#blog-main', { display: 'inherit' })
    // })


    // addEvent('#blog-main', 'mouseleave', () => {
    //     addCss('#blog-main', { display: 'none' })
    // })




})();

