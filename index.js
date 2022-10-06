// ==UserScript==
// @name         ⚡️ 最新CSDN优化插件 独家UI排版 更方便您的阅读📖 去广告🪧 免登录复制 一键复制 劫持剪贴板 持续更新 🆓免费代下载资源
// @namespace    https://github.com/wandou-cc/blog-ui
// @version      1.1.6
// @description  ⚡️ 最新CSDN优化插件｜💫全新布局｜🫥去掉一些花里胡哨的组件，阅读更加清晰｜🐯基本实现显示部分由用户自己定制｜🌈直接一键复制 不在需要登录｜✨展开所有折叠代码，简化操作｜支持移动端PC端通通优化｜对于积分会员下载联系群主免费下载｜入口支持拖拽放置
// @author       wandou-cc
// @include      *://*.csdn.net/*

// @resource css https://cdn.jsdelivr.net/gh/wandou-cc/blog-ui@20220924_V1/index.css
// @require      https://unpkg.com/better-scroll@latest/dist/better-scroll.min.js

// @icon         data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAUDc8RjwyUEZBRlpVUF94yIJ4bm549a+5kcj////////////////////////////////////////////////////bAEMBVVpaeGl464KC6//////////////////////////////////////////////////////////////////////////AABEIA/IDmAMBIgACEQEDEQH/xAAZAAEAAwEBAAAAAAAAAAAAAAAAAgMEAQX/xAAtEAEAAgECBAUFAQEBAQEBAAAAAQIDETEEEiFRMjNBYXETIlKBkUKhFCNisf/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAcEQEBAQEBAQEBAQAAAAAAAAAAARExQSECElH/2gAMAwEAAhEDEQA/AJgMMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIZL8lJszznyT66fpoyU56TVmnDkj/KzFh9fJ+X/ABKOJt6xEq5paN6zH6RXFa656W36fKxgTx5bUnp1jsmGNohS9bxrH8TRkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARmtbbxEpAKL8PE9adPZntWazpMaS3oZMdckaTv6SsqyslbTS2sNmO8XrrDFas1tMTvCeG/Jf2ndbFrYAyyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAp4imteaN4ZW68xFZm2zC1Go2Yb82OO8dFjDS80nWFv/AKbdoSxMaRknPkn10/SE5Lzvaf6YY2zMRvOiM5KR/qGIMXGuc+OPXX9OTxNfSJZRcMaP/T2p/wBcnibelYUOxEztBkMWzxF/b+I/Xyd/+IxS87Vt/HfpZPwn+C479bJ+Tn1b/lLv0cn4y79DJ+P/AFTEfqX/ACn+n1L/AJT/AFL/AM+Tt/0/8+T8f+hiP1L/AJT/AE+rf8pS+hk/H/rn0Mn4/wDQw+tk/J36+TvH8c+jk/Fz6OT8ZBOOIv2h2OJn1rH9VzjvH+LfxGYmN4mEwxojia+tZSjiMc94/TIGRMbYyUna0JbsDsTMbSmGN4xRlvG1pTjiLRvESYmNQpjiKzvEwsretvDMSmCQAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACFstK72j9AmM9uJj/Nf6rtmvb10+Fxca5mI3mI+UJzUj11+GTXVxcXGieJ/Gv9QtnvPrp8Kkox3ttWTFxyZmd5mXF0cNed9IWRwsf6tM/CmMo2xgxx/nX5Tita7ViP0mrjDFLTtWZ/ScYMk+mnzLYGmMscLb1tEJxwtfW0yvAxVHD449Jn5lOMWOP8R/EgVyK1jasfx0AAAAAAAAAAAAAcmtZ3rE/pGcOOf8x+kwFM8NSdpmEJ4WfS0T8tIJjFbBkr/nX4QmNN3oOTWLbxEmmPPGy3D0naJj4VW4a0eGYlTEK5r19dfldTiKz4uks1q2rP3RMOJjON8TExrE6w6w1tas61nRfj4iJ6X6T3SxMXjm+zqIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAja9aeKQSGe3E/jH7lTbJa28yuLjVbLSu86/Cq3Ez/mNPlQ7ETM6RGq4uO2va29plFbXh723jT5W14aseKZlVxlTrivbastlcdK7ViEk1cZa8NafFMQsrw1I31lcBjlaVrtWIdAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmIneNVV+HpbaNJ9loDHfBevprHsqeiryYK36x0nuJjLTJak9J6dmnHlrk9p7Mt6WpbS0ORMxOsFms2N4pw5uf7beL/8Aq5lkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHJmIjWZ0hTfiIjpWNTBcrvnpXbrPsz3yWvvKC41i2+e9vXSPZUlWlrz9sTK+nDet5/UNLjPvssrgvb00j3aq0rTwxokmrimvDVjxTMra1isaREQ6CgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOXrF40tGrHlxTjnvE7S2uWrFqzEx0EYGrDl540nxR/wBZ8lJx20nb0RrM1tExvBZqWN4jW0WrFo9UmWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAc2VZOIiOles9wWzMRGszpCm/ERHSka+8qLXtedbTqi1jWJWta062nVFZTDe/XTSO8tFMFK9Z+6fdVxnpivfaOneV9OHrXxfdK4RcIiIjSOgAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACvNTnp7xsxPRYs9eXLMek9SJVnDW3r+4aGPDOmWrYlYoAiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOTMRGszpAOq8mWtOm89lWTPM9KdI7qFkWRO+S1956dkHa1m06VjWWnHw8R1v1ns01iimO156R07tOPBWnWfulbEabCLgAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM3Fx91Z9mlm4vxVj2EqmvS8fLcwVjW0R7t6VigCIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqy5YpGkdbAlkyVxx137Mt8lrz127IzM2nWZ1l2tZtOlY1lqTGpEV2PBa3W3SF2LBFOtutlo1jlaVpGlY0dAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY+ItzZZ9ujXe0UpNp9GCZ1mZneSJUsMa5a/Laz8LXrNv00JWKAIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACrNl5I0jxSDmbLyfbXxf/AMZpnWdZJnWdZWYcU5J69K92uNyOY8U5J6dI9Za6UrjjSsft2sRWNIjSHRQAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABXmyfTp7zsCnicmtuSNo3Um67h8es807RscZXY68lIj+pgywAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5MxEazsCOS8Y66zv6Mdpm0zM7ylkvN7a+no5Sk3tFYakxqRLDinJb2jdtiIrGkRpEOUrFKxEbOjQAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5a0VjWZ0gC1opWZnZhyXm9tZSy5ZyW7R6QrGUsdOe8VbYiIiIjaGXh50ydfWGtKzQBEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGfib/wCI/a+08tZmfRhtM2tMz6rFjjbgx8lNZ8U7qOHpzX1naGta3AAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABXlzVx+89gSveKRraWTLknJPXb0hG95vbWzlazadIjWRk32dtS1Y1mJhqxYoxx3t3TmItExO0mprDHSWzFfnpr6+rLkpNLzH8dw35L+07l+lbAGWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFPE20pp3ZV/Ez98R2hTEazENRqNmCvLijvPVYbQDYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATOm6GTLXHv1nsy5Mtsm+3YTVuXiPSn9Z993FuLDN+s9KqiFKTedIhrx44xx039ZdrWKxpWNEmbWbQBEVZ6c9NY3hkegyZ6ct9Y2lZWot4fJzV5Z3jZcwVtNbRMejdW0WrEx6liV0BEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZOI839IY/Mr8ws4mPvifZVWdLRPZqcaj0AgGwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJmIjWZ0hRk4mI6UjX3Bda0VjW06Qz5OImelOnuotabTradZcE13ciJtOkRrK2mC1utukNFKVpGlYLWdVY8ER1v1nsudGWQAAABG9YvSaykAwTGkzE7wu4a+k8k+uxxNNJ549d1MTpMTG8Nda63iNLc9ItCTLIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACjia60iezM32iLVmJ9WG0TW0xPo1Go2YL82OO8dFjHgycl+u07tg1AAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEb5K08UqL8TO1I095Bom0VjWZ0hTfiYjpSNfeWe1ptOtp1RE1K17XnW06orK4b2jXTT5RtWaTpaNFQpWb2iserXTHWm0de7JS3JaLR6NsTExExtLNSugIyAAAAAAAAjasWrMT6sVomszE7w3s/E02vHxKyrEeHvpblnaWpg2bMduekSUqYCIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKOIx80c0bxuvAee0YM2mlLbekuZsOn3V29Y7KGutvRGXFnmv226x37NMTFo1idYGnQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmYiNZnRVbiKV2nX4BaTMRGszoy24m0+GIhTa02nW0zJia124ildvulRfiL22+2PZUKmuu1ra06VjVLDj+pbrtG7XEREaRGkJalqivDflP6hbXHWm0JjOporzU56e8bLAR57Rw1/wDE/pHiKctuaNpVRMxMTG8Nda63iNLc1YtHqkyyAAAAAAAAOWrFqzE+roDBMTEzE+i7hr6W5Z2k4mmlotHqpidJiY9GuxrreI0tzVi0eqTLIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAz5cH+qR+mgFYHaXtSday1ZMUX67W7slomszE7w1LrUrXjz1t0t9srXnJ0y3ptPTsYutwppxNZ8UaStratvDMSK6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAACM3rXe0QCQptxNI21lXbibT4YiBNakbXrXxWiGO2W9t7SgYa124mseGJlVbiLztpClKKWttWZVNcm02nWZmXHbVms6WjRwHa1m06VjVdXh5nxTouxViuONOybNrOqZ4evLOmurK9BhvGl5j3WLGjhvLn5XKOGn7JjtK9mpQAQABG9eekwxTGk6N7LxFNL80bSsWO8NfrNJ+YaWCszWYmPRurMWrEx6lK6AiAAAAAAAAI5K89Jhi2b2TiK8uTX0nqsWJ8NfrNZ+YaGGluW0T2bYnWNYKV0BEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGTiJics6NN7ctZtPoxTOs6z6rFjiU0tEazWVvDU1tzT6NK2ra892J02bLYqW3j+KrcN+Nv6aahXPkr66/KyvFflX+KbYr13rKCrrbXPjn10+U4mJ2mJ+Hnu66bJi69AYYy3ja0pxxGSN9J+YMNaxmjip9a/yUo4qnrEhq8VRxGPvMfp2M+Of9CrBH6tPzj+n1KfnX+gkI/Up+df6fUp+df6CQj9Sn51/p9Wn5x/QSEPq4/zg+tj/KATFf18f5f8c/8ATj9/4C0Uf+qvpWXJ4rtT/omtAyzxVvSIRniMk+sR+jDWwYZy5J/3KMzM7zMmGt05KRvaP6hPEY49Zn4hjDDWmeKj/Nf6hPEZJ20j4hVEa7JRivP+ZVNcte1t7TKLsxMTpO5EazpAOOxWZ2iZaqYa1jrGs+6zZNTWWuC8+mnynXhvyt/GgTU1CuKldq/1MERVnrzY5nt1ZG+0a1mO8MDUajbhnXFVNTw0/ZMdpXM1KMWXplt8trHn82ywifDT98x3hpZOHn/6w1lKAIgAAhlrz0mPX0TAee08NbWs17Ks1eXJMek9XMVuXJEtX602gMsgAAAAAAACrPXmx6+sdVrgMDXw9uamnrDNevLea9k8FuXJHaejVarWAyyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5MxETM7QCjib7Uj5lQ7a02tMz6rOHpzX19Ia5GuNGOvJSISBlkAARtStt6xKQCmeHpO2sITw0+lon5aQ1dZJwZI9Nf2hNLxvWf43C6awON++7k0pP+Y/hq6wjb9LHP+YR+hj7f9XTWQa//AD09/wCuf+aneTTWUaf/ADV/KT/zR+U/w2Gsw0/+aPyl3/zV7ybDWUav/PTvLv0Mfaf6aayDVbBTlnTpLKuqOxEztC3h6Ra0zPXRpS1LWKMd5/zP8SjDkn/LYJqayxw9530hKOG72/40BpqmOHpG8zKcYqRtWP2mJprkREbRo6AjHn82zmGNctXMk65LT7p8PH/1j4a8aawGWQAAABhyRpktHu3MeeNMsrFifCz90x3hpZOHn/6w1lKMefzrNjHn86xCGDzqtjHg86rYUoAiAAAAKOJrrWLdmZuvXmpMd4YWo1G3HbmxxKbPwtuk1/bQzUqGS01jpvKut7RPWdVmWNa69lDUWNLqGKdafCbLIAAAAADPxNesW/TO25a82OY/bE1Go3UtzUiUlHDW6TXt1Xs1KACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACjib6Viseq5iyW57zKxYi2YqcmOI9Z6yz4Kc+SO0dWwq0ARkAAAAAAAAAAAAAAAAAAABy3hn4YG6/gt8MKxqNPC7WXqOF8Nvlel6lABAAAAByZ0iZdV5p5cU+/QGNfwsfdM9oUNXDRpSZ7y1eNVcAyyAAAAMvE+ZHw1M3FeOPhYsV4Z0y1+W1hx+ZX5huKUYss65bfLaw3nW9p9yET4fzYa2XhvMn4ailAEQAAAAYsteXJaG1m4qPuie8LFiGCdMse/RsYInSYns3ROsalKM9o0tMNKrNHWJIRHFOltO69mjpOrRE6xqUroCIAAAAMWSvLkmG1n4mu1v0sWK8NuXJE/psee3Y7c1Ikq1IBGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFXEX5aaessizNfmyT2jo5jrz3iGp8ajRgpy49fWeq1x1lkAAAAAAAABTltPNp6EVcKcVuuk+q4oACAAAAAAAAIZp0xW+GJr4idMXzLI1Go1cNH/wA/2uQxRpirHsmzUoAIAAAAM/FT0rX9tDFltz5Jn0WLEG7HXlpWPZkxV5skQ2lWgCMgAAADNxXir8NLLxXjj4WLFdPHX5bmHH5lfluKVyZ0rM9mBszTpisxrFjRwseKWhTw0aY9e8rmalABAAAABTxMa44ntK5DLGuK3wRYxNuKdcVfhiauGnXHp2lqrVyGSNaT7JuMssy/HOtI9lM9J0WYZ3hqtVaAyyAAAAIZa82OYTAee08Nb7Zr26qcleXJMJcPbTLHv0avGq1gMsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACGW3JjmfX0TZuJtraK9iLFDTw1dIm3fozxGsxEerbWvLWIj0aq1IBlkAAAAAAAAVZo2la5aOaswRYzxOk6tETrGrMuxTrXTs1VqwBlkAAAAAAABn4q3Wtf2oiNZiO6WW3NkmUuHrrkie3Vrka8aojSNHQZZAAAAAAV5rcuOZ9Z6QxreIvzX0jaFcRMzERvLUajRw1ek2/UL0a15axEeiTNSgAgAAAAy8TP8A9PiGpjzzrlssWOYuuWvy2snDxrlj2aylUcTb7Yr36sy3iJ1yaduiFK814jvKzixrxxy46x7JgyyAAAAAAOWjWsx7OgPPaOFnpaFExpMwu4WfvmPZq8arSAyyz5I0vLuKfvdy+P8ASNJ0vHy14140AMsgAAAAAM3E16xb9KYnSYns1Z41xT7dWRqNRvidY1dV4Lc2KPbosZZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcmdI1lhtPNaZn1auIty49O/RkajUXcPXW+vZqVYK8uOO89VrNSgAgAAAAAAAAACjJGl59zFOl/lLNHSJVxOkxLXjXjSAyyAAAAAAIZb8lJn19E2TPfnvpG0EWKmrh66U19ZZ6V57RWPVtiNI0j0aq10BlkAAAAQy35KTPrOyUzERMztDHkvN7a+nosiyINHDU/3P6U46Te0RDbERWIiNoW1a6AyyAAAAAAMN51vM95bLzpS0+zCsai/hY+60+zRM6Rqq4aNMcz3lbaOasx3gvUvWG081pnut4aut5ntCFsV6zpyz+mnDTkp13lbxasAZZAAAAAAAAYcnmW+VnDeZ+kMvmW+UuH82PhrxrxrAZZU5t4QjeFmbeFbU41ONIDLIAAAAADkxrEx3YZjSdG9jzxpln36rFizhZ8UftoZOHnTLHv0aylAEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAByZ0jUGbiLa5NOyulea8R3ctPNaZ7ruGrrabdmuRpodBlkAAAAAAAAAAABDJGtJUNNutZ+GZqNRopOtY+EkMU/YmzWQAAAAFGXNp9tN+4GfLpHLWevqzC3Di551nwx/1rjXFvD4+WOad52XAyyAAAAAAzcTeebkjaN1LVlwxedYnSXMWGKTrM6y1rWpYcfJXrvO6wGWQAAAAAAAFXETpj+ZZG69YvXSVVeHiLazbWOyytSrMUcuOseyYIyAAAAAAAAAAAAx5vNs7w/mwty4eedYnSXcWGMc6zOsrvxrVoCMqc28K1mbxR8IRvDU43ONIDLAAAAAAAzcVHWs/ppU8TGuPXtJFjPSeW0T2luee3Y55sdZ9lq1IBGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAABXnty4p9+ixm4qeta/sixQ14K8uKPfqyxGsxHduiNI07NVa6AyyAAAAAAAAAAAAMzSzTvKxqLcPhn5WKsPqtSpQAQABn4i8xMVjp06s7XlxfU666TDlOHis62nX2WVrVWLDN+s9K/wD9aoiIjSNh1LdTQAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABRknW8uU63hyZ1mZTxR92vs1434uBG9uWurLDk5KxOmqUTExrDMsw66z2WxrFwCMgACGSNcdo9k3N4Bga+HnXF8Syz0lfws9LQ1eNVoAZZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGPNPNlt/GuZ0iZ7MM9ZWLE8Ea5Y9urYz8LHit+mgpQBEAAAAAAAAAAAAGad5aWZY1FmH1WqsO0rUvUoAIAAAAAAAAAAAACNrRWPunRz6tPyFxMciYmNY6uiAAAAAAAAAAAAAAAAAAAAI2tFY1lRbPaZ+3pDma3NfT0hWsjciyM143mJ/S/Hki8dOk9mR2tpraJgxbG0cidYiY9XUcwABG86UmUkMvgIqhdhj7ZnupaaxpWIaq11TlnW2nZbM6RqzzOs6pEjjRSvLWIU0jW8NBVoAjIAAADFkjTJaPdPhp0yTHeHOIjTLLmGdMtWvGvGwBlkAAAAAAAAAAAAAAAAAAAAAAAAAAAAABXnnTFb+MbTxM/bEd5Zmo1Gvh40xR7rUccaY6x7JM1kAAAAByZiN50B0R5693PqV7mGJiMXrPrCQAAAAOW6Vn4Zl+SdKT7qGo1F2LwftYjSNKQkzUoAIAAAAAAAAAAIZL8ldfX0TZs9tb6diLJquZm06zOsuA06J0vNJ6bdmqJiYiY2liaOHt0mvbqlZ/UXAIwAAAAAAAAAAAAAAAAOTOkTPZ1G/gt8SDGA06gANPDzrj07StU8PtZczXO9ABBx0BGKVidYhIAQyTpSVC7NtClqNRbhjeVqvF4f2sZqUAEAAAAZeJ8yPhVWdLRPaV/FR1rLO1ONR6A5WdaxPeHWWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGbip+6I9lMRrMR3WcROuX4hHFGuWvy1ONeNoDLIAAja0V3cvfl6eqmZmZ1lZFkTtkmduiG7jsRM7Rq004J/Tt2Pp27GmoJRaa7STW0bxKILq5YnxdE2Zfi8DNjNiYCIqzTtCuI1mITy+IxRrbXs1414uAZZAAAAAAAAAAAAGPJ5lvlsY8nmW+VjX5RAVsW4J/+n6VLeHj/AOnxBUvGkBlzAAAAAAAAAAAAAAAAHLRrWY7w6AwieWvLee09UGnUB2Os6QDRgjTHr3lajWOWsR2SZc6ACAAAAKs3oqW5vRU1ONRfi8CaGLwJs1KACAAAAKOK8NflmaeK8NflmanGo3Y/Lr8Qkjj8uvxCTLIAAAAAAAAAAAAAAAAAAAAAAAAAAAAADHm82xg82HMvmW+UuH839NeNeNYDLIje3LGqSjJbW3tBFiMzrOsuC3FT/U/prjRTH62/iyOmzozrOgAgjNazvCQCv6VfdOI0jSHQAAHJiJ3jUiIjaHQAAAAAAAAAAAAAABlzxpkn3aleanPXpvBFl+soDToL+HjpM/pTETM6Ru10ry1iErP6qQCMAAAAAAAAAAAAAAAAAAIZKReunr6M1qWrPWGwNalxiiNdl+HFMTzW39IWuml/QAMgAAAAAK83hj5Ur8nglQ1Gouw+GflYqwzvC1mpQAQAAABRxXgj5ZmnivBHyzNTjUbsfl1+ISRx+XX4hJlkAAAAAAAAAAAAAAAAAAAAAAAAAAAAABhyeZb5lPhvM/SOXzLfKXD+b+mvGvGsBllG06VmWdbmnpEKmo1EqV5raNCvFHTXusSpQBEByZiI1lXOXtH9MXFoqjLOvWP4siYmNYMMdAEAAAAAAAAAAAAAAAAAAAAV3xVv12lD/wA//wCv+Lw1dqFMdabdZ7pgIAAAAAAAAAACN7xWPdX9We0GLi4RraLR0SEAAAAAAAAAAAAAAAAAActGtZj2ZmpmmNJmFjUSxT9/yvZ6TpaGgqUARAAAAFHFeGvyzNHFb1hQ1ONRtp4K/EJORGkRDrLIAAAAAAAAAAAAAAAAAAAAAAAAAAAAADHm6ZbGDzYd4iNMvzCOKdMtflrxrxtAZZUZZ1v8IJX63n5crGtohptorGlYh0GWByZiI1l1TltrbT0gkWI3tNp9kQbaF+KJiiNMevW38Ws2paAIyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAryU5usbwpalWWI6SsrUquJmJ1hfW3NXVnWYZ6zC0q4BlkAAAAAAB2I1FcdiqWmjq43Pyjyw7yw6Li5EeWDlSDDIrmJgTcmvZMZv5/xFRkjS8r1OaPuiSMxW0xOsRLM0Y51pBVqQCMgAAAMvEz/wDSPhDFGuSse7uedctneHjXLr2hrxrxrAZZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZuKjrWVMTpMS08TGuPXtLK1ONRvjrGrqGKebFWf0myyzTvLuPxw5O8u4/HDbbQAwwMzSzWjS0wsajiVI1vEIpVnltEtK0DjrDAAAAAAAAAAAAADtY1Fk1yImUorDrq43PzI5pA6K04aQ6AhNezixyY1TGb+f8AEAEcwAAAAAAAAAAABTltrOkei2dujOsWOLcMdJlCtZtOi+I0jSFtWugMsgAAAAACcbIJVnosa/PUgFdAAAAAHAQndXm2iVk9ZQy+BmdcvVC7D4f2pW4fVqrVoDLIAA46rzW5cU/wGS062me7RwsdLW/TM24Y5cVf61WqmAyyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjeOakx3hhegxZa8uSYWNRdw1vtmvZeyYLcuSPfo1lSs9vFPy5WdLRPulkjS8oNNNQjWdaxKTDAry11jmj0WAMonenLPTZBttditrHKsU4qzrr6LmKzQAQAAAAAAAAAASrsi7WfQjX5v1MBp0AAAAAcmdARtu4TOsjLlegAgAAAAAAAAAAjNazvCQDkREbQ6AAAAAAAAAAAJRbu6gLrc/SwQ5pOaTV/qJiHNLmsyaf1E5mIQmdQTWb+rRG/glJG3hn4GWdZh8U/CtZh8U/DVbq4BlgAAZ+JttX9r5nSNZYr25rzbusWFK814ju2s/DV6zbt0aSlAEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZ+Jr0i36loRvXmrNe5FjE20tzUie7FMaTpK7hr9ZpPrs1Vq3NHSJUtMxrEwzzExOkkInit15ZXMy6l+aPdLCxMBGRHlr+MfxIAAAAAAAAAAAAAAAAB2JmHYtEohrU/Vibqs1ldX+1jmqGoaf2lNuyMzqCM22gAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjfwT8JIZPBIKFmHxT8K1uH1ardWgMsAI2tFazMgq4i+leWN5Zkr2m1ptPqnw9Oa+s7Q1xrjRiryUiPX1TBlkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABl4imluaNpVRM1mJjeG29YvWayxTExMxO8NRqNtLResTHq5kpzRrG6jh8nLblnaWpnicZXYmYnWF18cW6xupmJidJal1rVtckT0npKxlSre1dpSxMaBVGXvH8SjJWfVMTExzmr3g1jvAjo5rHc1jvAOjmsd4dAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHJmI3nQB0AAAAAAAAAAABXmnpELFGSdb/CxYguxR9nypaKxpWIWrUgc2ZZGXNk57aR4YdzZub7a7d+6lqRqR2ImZ0jeW3HSKUiFeDHyxzTvK5LUtAEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUcRj1++P2vc3gisDXgyc9dJ8UKMuP6dvadkK2msxMbw11et7k1i0dYRx3i9dY39YTZZU2xT/mdUJiY3hpcXV1mGiaVn0RnFHpMrq6pFn0p7wfSt7GrqsWfSt7OTjtEdzTUF2K2vSVLtZ5bRJStI5E6xrDrLAAAAAAAAAAAAAAAAAAAAAAAACvJeY6Qri9o9ZSyxMW19JVtRqLq5Y/10TiYnZmdiZjaTDGkUxlmN+qcZazv0ZxMTEYtWfWEhAHNYjeQdEJyVj1RnL2j+mLiyZ03V2y+lf6rm0zvLjWLjszMzrKWO2loj0lBZjprOs7QVauAZYAAAAAAAAAARtPLWZZ1mW2s6RtCtqNRKkc1ohoV4q6Rr3cyZq06R1lL9SrLWisazOkMuXLN+kdKoXva862lFZFkGjBi/wB2/UGLB/q8fpoS0tAEZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARvSL10ljtWa2mJbleXHGSPeNpWVZWWl5pbWGylovXWGKYms6T0mEsd5pbWP4tmrY2iNLxeusJMsgAAAAAKctdJ5oVtMxrGks9o5Z0lqVqVZit/mf0tZonSdYX1tzRqliWJAIgAAAAAAAAAAAAAAAAAAAAADm+6FsUT4eiwFZ7Vmu8ItSE46z6afC6uqBZOKfSdUZpaPSV1dRAUdcAAdiJnaEox2n2BB2KzO0LYxRG/VOOiamoVxxHW3VYDLIAAAAAAAAAAhkvyxpG7t7xWPdRMzM6ysiyOJUrzW09HIjWdIX0ryxotq2u215Z0306MLehOOkzrNY1SVJWWmO19o/bTjxVp13num6WmgCIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAry4oyR2t3ZLVms6TGkt6GTHGSNJ37rKsrJW00nWJaseWLx2nszXpak6TH7R2XNXreM2PPp0v8A1oZxHQBAABDJTmj3TAZna2ms6p5Ka/dH7VNdb60xMTGsOs9LzWfZfExMawzYzY6AIAAAAAAAAAAAAAAAAAAAAAAAAAA4csdo/joCPLX8Y/jukR6Q6AAAAAAAAAAAAAA5M6R1B1C94r0jdG+T0r/VSyNSOzMzOshEazpC6lOXrO624ulKcsdd0wZYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcmImNJjWGfJgmOtOsdmkJV1g0nXRsxRNcdYndJ1bdLQBEAAAAFWSnrH7haEqsqVbTWeiy+PXrXdVPRrrXV9bxb57JMyyuX0t/UsZsWjkTEx0l1EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcmYjedAdcV2y/jCFrTbeVxcWWyxG3VVNptvLjsRrsuNY4lWs2nonXF62/iyI02LUtcrWKx0SBlkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARtSLb790gGe1Jrvsi0oWxRO3RZWtVRMxPSVlcv5Qrms13hxeq0xMTtLrNE6bJxltG/VMZxcIRkrO/RKJidp1RHQAAAAAAAAAAAAAAAAAAAAAAAAAByZiN50RnJWPXUExVOXtCM5LT6/xcXF0zEbyhOWsbdVTi4uJzktO3RHXXcSjHafY4qDsRM7LYxRG/VOIiNjU1VXFM79FlaxXaEhnU0AEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAc3QtiiduiwBRalo9NUGpGaxO8LrWs7qycXaf6jOO0en8XV1yL2j1TjL3hW4YYvjLX3h2LVnaYZwxMahmiZjZ3nt3lMMaBR9S3d36tu0GJi4U/VntDv1v/AM/9TDFoq+rHZ36sdjDFgq+r7H1v/wA/9Mpi0VfVns59W3suGLhR9S3dznt3kwxocZ9Z7y4YuNHNWPWHPqV7qBcMXTljtLk5e0KgwxOctp7Q5NrTvMouxEztEiuCcY7T7JRi7yaaqdiJnaNV0Y6x6f1JNTVMYrTv0TjFHrOqwTU1yIiNodAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAByYid41RnHWfRMBXOKPSUfpT3hcGrqj6duznLbtLQLprNpPZxqcNXWYadI7Q5y1/GP4aazjRyV7Qcle0LprONHJXtByV7QaazjRy1/GP47pHaE01md0ntLSGms/JbtLv07dl4amqfpW9iMU+swuDTVcYo9Zl2MdY9ExNNcisRtEOgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACPPWP8AUHPX8oBIR56/lBz1/KASEeev5Qc9fyj+gkOOgAAAAAAAAAAAAAAAAAAAAAAAAAAA4Do5rHd0AAAAAAAHNY7wDo4h9WvuCwcrMWjWHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZb+O3yilfx2+V2Hy2m9ZxrE1NZBscmIneDTWWJmNp0WUzTHS3X3WWx1n00+FN8c094PlPlaImJjWHWbHfln2lpSxLMAQ+rTuImOROsaw6AAAAAAAAAAAAAAAAAAAAArzeX+1ivN5f7IsUU8cfLWy08cfLUtWgCMgAAADJO8tbJO8rGo0YvLhnneWjD5cM87yQjRi8uE0MXlwmlSgAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLfx2+V2Hy1N/Hb5XYfLW8avFgCMgADkxrExLoDJMaTMdmjFOtI9uinL5krMHhn5W8avFrJPilrZJ8UkI008EfCSNPBHwkjIAAAAAAAAAAAAAAAAAAAArzeX+1ivN5f7IsU08cfLUy08cfLUtWgCMgAAADJO8tbJO8rGo0YfLhnnxT8tGHy4Z58U/JCdaMXlwmhi8uE0qUAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZb+O3yuw+Wpv47fK7D5a3jV4sARkAABDJflj3kFGSdbzK3BH2TPuo3aqxy1iFrVSZJ8UtbJPikhGmngj4SRp4I+EkZAQtkrXffsCYonNPpEQ59a3suLjQKa5o/1H8WxMTGsTqhjoAgAADgOjm7oAAAAAACvN5f7WK83l/sixTTxx8tTLTxx8tS1aAIyAAAAMk7y1sk7ysajRh8uGefFPy0YfLhnnxT8kJ1oxeXCaGLy4TSpQAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABlv47fKePJWtdJ1Qv47fLkVmdomWm1/wBavufWr7qeS34z/Dkt+M/xMiZF31q+59avup5LfjP8c5bfjP8ADIZFls0z4Y0VzMzOsuO1nlnWFVdix6fdP6Wq6ZIt02lYzWaMk+KWtknxSsWNNPBHwkjTwR8OZLctfedkRHLk0+2u6mIm06R1kiJtbSN5aaUikaQvF4rrh/Kf479CO8rRNTWe2K1eu8I1tNZ1hqU5cf8AqP2sqyrK2i0awkzY78tvb1aUsSwcmYrGsus2S/Pb29CQk122WZ8PSEJmZ3lPHi5us7LorWNohdxdkZUue35S0zWJ3iFWTFpGtf4aar+pf8pPqX/KXI3XxjpMRMRuq34rx3tN4iZloRilYnWI6pM1mgAgrzeX+1ivN5f7IsU08cfLUy08cfLUtWgCMgAAADJO8tbJO8rGo0YfLhnnxT8tGHy4Z58U/JCdaMXlwmhi8uE0qUAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZb+O3yuw+Wpv47fK7D5a3jV4sARkAByYid41V3wxPWvSey0F1k6xPuvxX5o0neHM1NY5o3hTWeW0S11etbJbeWpltvKQjTTwV+FOa2t9Oy6ngj4ZpnWZkhF2CvTm7rUaRpSI9kkqUAEHHQGW9eW0wuxW1pHt0Qzx1iXcE9ZhfGrxPLOlJ9+iilea0Qtz+CPlDD5n6JwnF7oIyAAzZa8t+m0rME/bMdnM/wDlzBvK+NeLwEZAAFeby/2sV5vL/ZFimnjj5amWnjj5alq0ARkAAAAZJ3lrZJ3lY1GjD5cM8+Kflow+XDPO8/JCdaMXlwmhi8uE0qUAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZb+O3yuw+Wpv47fK7D5a3jV4sARkAAAByY1iYZGxkneVjUaMc644Z7by0YvLhnneSEaa+XHwytVPBHwzT0nQhGp1ys61ifZ1GQAAAFOfaHMHjn4dzz1iHMEdZlfGvFmWNaT/Wes8tolrZstOW3TaSEaInWNYdZseSadJ6wujJWfX+piWJiM3rH+oVZMvN0r0gwxHLbmv02hZgjSuvdVSk3nRpiNI0hatdARkAAV5vL/AGsV5vLkixTTxx8tTJWdLRPu1rVoAjIAAAAyTvLWyTusajRi8uGed5aMXlwzzvPyQjRi8uE0MXlwmlSgAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLfx2+V2Hy1N/Hb5XYfLW8avFgCMgAAAOWnSsyyLc19ftj9oY681ohY1PjRSNKRHszW3lrZJ3khGmngr8KMsaXn36r6eCvwjlrzV6bwTqTrmG2tdOy1lraa21hpraLRrBSx0BEAVZb6RyxvIqrJbmvMrsMaU17qaV5rRDTstWus2S3Nee3o0W8M/DIQicYrTXWP45NLRvWWnaHTTWSK2naJWVwzPi6QvDU1ytYrGkOgiAAAACNo1rMJAMbVSeakSoy15ba+ku4r8s6TtLV+tX60DjrLIAAACN50pMsq3NfWeWNoRxV5r+0LGp8jRWNKxDLO8tbJPikhGjF5cJoYvLhNKlABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGW/jt8rcMxFOswqv47fKLTbXzV/KP6c1fyj+sgmJjXzV/KP65zV/KGUMMaJy1j11+Fd8s26R0hCK2naJTrhtO/Q+Q+RCImZ0hopSKR7+rtaxWOiRaloyTvLWyT4pIsaaeCPhJGngj4SRlRlx6fdX9oVtNZ1hqV3xRbrHSVlalcjNWd+iX1ad1M4rx6a/Dn07/jJkMids0z0rGnuriJtOkdZWVwzO86La1isdINw2RylIpHv6pgjLjNes1tpLTMxG86OWrFo0klWVTTNMRpMarPrV7SjOCfSf6j9K/aP6vxfiz61fd36tO6n6d+zn07/jJkMjRF6z/qEmSYmN4mHa3tXaenYwxqEa2i1dYSRkAAABG1YtXSWa1ZrOktaNqxaNJglWVRTJNem8Lq5Kz66fKq2G0bdYQmJjeGvlXJWrWJ2kZBMMapvWN5hVfLM9K9IVJ1xWnfpHuYZIjETM6Q00ryV0/pSkUjp/Ui1LRknxS1sk+KSLGjF5cJoYvLhNKlABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHNI7GkdnQHNI7GkdnQHNI7GkdnQAAAABzR0AAAAAAAAAABTnnpEOYNeaevR3PHWJcwT90wvjXi8BGQAHFGasVmJjaWhnzWi1tI2hYsSwT1mFynBG8rkpQAQAAAAc3dAR5Kz/AJj+HJX8YSAciIjaHQAAAQ+nX8UwHIiIjSNnQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHJXnrp6s3Ws9phrQvji++/dZVlQrm/KP4nGSk+qqcNo26ozS0f5kyLkaPqU/KEZy1jbqo5bdp/jsY7z/kyGRK+WbdI6QjSs2nSFlcP5T/FsRERpEGmlYisaQ6CMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @license      MIT License
// @note         1.1.6 居中 ｜ 白色背景 ｜ 锁定目录 
// @noframes

// ==/UserScript==

(function () {
    // @include      *://juejin.cn/*
    GM_addStyle(GM_getResourceText("css"));
    const VERSION = '1.1.6'
    const TITLE = 'BLOGUI'
    const PRDTAR = '20220924_V1'

    let ISH5 = null
    let CURRENTPAGES = null

    const CSDNCONFIG = {
        2: {
            pc: [
                {
                    title: "查看模式",
                    children: [
                        { type: "radio", for: "CsdnRadioC", label: "居中显示", checked: true, getEvent: 'csdnRadioC' },
                        { type: "radio", for: "CsdnRadioP", label: "铺平展示", checked: false, getEvent: 'csdnRadioP' },
                    ]
                },
                {
                    title: "右侧选项",
                    children: [
                        // 左侧
                        { type: "checked", domId: "#asideProfile", for: "CsdnAuthorInfo", label: "作者信息", checked: true },
                        { type: "checked", domId: "#asidedirectory", for: "CsdnDirectory", label: "目录", checked: false, getEvent: 'csdnDirectory' },
                        { type: "checked", domId: "#asideSearchArticle", for: "CsdnSerch", label: "搜索博主文章", checked: false },
                        { type: "checked", domId: "#asideRank", for: "CsdnAsideRank", label: "是否入选", checked: false },
                        { type: "checked", domId: "#asideHotArticle", for: "CsdnHotPage", label: "热门文章", checked: false },
                        { type: "checked", domId: "#asideCategory", for: "CsdnCategory", label: "分类专栏", checked: false },
                        { type: "checked", domId: "#asideNewComments", for: "CsdnComments", label: "最新评论", checked: false },
                        { type: "checked", domId: "#asideNewNps", for: "CsdnNewNps", label: "推荐博客", checked: false },
                        { type: "checked", domId: "#asideArchive", for: "CsdnArchive", label: "最新文章", checked: false },
                    ]
                },
                {
                    title: "文章底部",
                    children: [
                        { type: "checked", domId: ".recommend-box", for: "CsdnRecommend", label: "底部相关推荐", checked: false },
                        { type: "checked", domId: "#pcCommentBox", for: "CsdnpcCommentBox", label: "评论", checked: false },
                        { type: "checked", domId: "#blogExtensionBox", for: "CsdnblogExtensionBox", label: "引流信息", checked: false },
                        { type: "checked", domId: "#treeSkill", for: "CsdntreeSkill", label: "知识档案匹配", checked: false },
                    ]
                }, {
                    title: "顶部导航",
                    children: [
                        { type: "checked", domId: "", for: "Csdn2top", label: "顶部导航信息", checked: false, getEvent: 'removeTopbar' },
                    ]
                }, {
                    title: "右下角悬浮",
                    children: [
                        { type: "checked", domId: "", for: "CsdnSideToolbar", label: "侧边悬浮(略有延迟)", checked: false, getEvent: 'removeSideToolbar' },
                    ]
                }, {
                    title: "其他",
                    children: [
                        { type: "checked", domId: "", for: "whiteBack", label: "白色背景(对于暗色主题兼容并不好)", checked: false, getEvent: 'whiteBack' },
                    ]
                },
                {
                    title: "操作",
                    children: [
                        { type: "button", class: "buttoncolor1", label: "初始化当前页面配置", getEvent: 'clearCache("CSDNCONFIG", "2")' }
                    ]
                }
            ],
            h5: [
                {
                    title: "底部",
                    children: [
                        // 底部相关推荐
                        { type: "checked", domId: "#recommend", for: "CsdnH5Recommend", label: "底部相关推荐", checked: false },
                        { type: "checked", domId: "#comment", for: "CsdnH5Comment", label: "底部登录", checked: false },
                        { type: "checked", domId: "#blogExtensionBox", for: "CsdnH5blogExtensionBox", label: "引流信息", checked: false },
                        { type: "checked", domId: "", for: "CsdnH5operate", label: "底部操作是否固定", checked: false, getEvent: 'operate' }
                    ]
                }, {
                    title: "顶部",
                    children: [
                        { type: "checked", domId: ".openApp", for: "CsdnH5openApp", label: "打开App", checked: false }
                    ]
                },
                {
                    title: "操作",
                    children: [
                        { type: "button", class: "buttoncolor1", label: "初始化当前页面配置", getEvent: 'clearCache("CSDNCONFIG", "2")' }
                    ]
                }
            ]
        },
        3: {
            pc: [
                {
                    title: "顶部导航",
                    children: [
                        { type: "checked", domId: "", for: "Csdn3top", label: "顶部导航信息", checked: false, getEvent: 'removeTopbar' },
                        { type: "checked", domId: ".blog-nps", for: "CsdnBlogNps", label: "推荐CSDN", checked: false }
                    ]
                }, {
                    title: "右侧",
                    children: [
                        { type: "checked", domId: ".blog-slide-box .template", for: "Csdntemplate", label: "热门推荐/作者推荐", checked: true },
                        { type: "checked", domId: ".blog-slide-box .blogTree", for: "CsdnblogTree", label: "技能树", checked: true },
                    ]
                },
                {
                    title: "其他",
                    children: [
                        { type: "checked", domId: "", for: "CsdnblogNav", label: "平铺显示", getEvent: 'blogNav' }
                    ]
                },
                {
                    title: "操作",
                    children: [
                        { type: "button", class: "buttoncolor1", label: "初始化当前页面配置", getEvent: 'clearCache("CSDNCONFIG", "3")' }
                    ]
                }
            ]
        },
        4: {
            pc: [
                {
                    title: "顶部导航",
                    children: [
                        { type: "checked", domId: "", for: "Csdn4top", label: "顶部导航信息", checked: false, getEvent: 'removeTopbar' }
                    ]
                },
                {
                    title: "右侧",
                    children: [
                        { type: "checked", domId: ".main-rt .so-questionnaire-body", for: "Csdnquestionnaire", label: "推荐CSDN", checked: false },
                        { type: "checked", domId: ".main-rt .so-hot-words", for: "Csdnhot-words", label: "相关搜索", checked: false },
                        { type: "checked", domId: ".main-rt .wrap-hot", for: "Csdnwrap-hot", label: "猜你想搜", checked: false },
                        { type: "checked", domId: ".main-rt .so-items-taglist", for: "Csdntaglist", label: "相关标签", checked: false }
                    ]
                },
                {
                    title: "其他",
                    children: [
                        { type: "checked", domId: "", for: "CsdnSoNav", label: "平铺显示(请勿与其他同用)", getEvent: 'soPc' }
                    ]
                },
                {
                    title: "操作",
                    children: [
                        { type: "button", class: "buttoncolor1", label: "初始化当前页面配置", getEvent: 'clearCache("CSDNCONFIG", "4")' }
                    ]
                }
            ]
        },
        5: {
            pc: [
                {
                    title: "顶部",
                    children: [
                        { type: "checked", label: "顶部操作", for: "JuejinTop", checked: false, getEvent: 'JuejinTop' }
                    ]
                },
                {
                    title: "右边栏",
                    children: [
                        { type: "checked", domId: ".sidebar-block", for: "JuejinAuthor", label: "作者信息", checked: true },
                        { type: "checked", domId: ".sticky-block-box", for: "JuejinSticky", label: "目录", checked: true },
                        { type: "checked", domId: ".sidebar-bd-entry", for: "JuejinSidebar", label: "挑战", checked: false },
                        { type: "checked", domId: ".next-article", for: "JuejinNext-article", label: "下一篇", checked: false },
                        { type: "checked", domId: ".related-entry-sidebar-block", for: "JuejinRelated", label: "相关文章", checked: false },
                    ]
                },
                {
                    title: "底部",
                    children: [
                        { type: "checked", domId: ".column-container", for: "JuejinContainer", label: "收录", checked: false },
                        { type: "checked", domId: ".extension-banner", for: "JuejinExtension-banner", label: "插件", checked: false },
                        { type: "checked", domId: ".category-course-recommend", for: "JuejiCategory", label: "相关课程", checked: false },
                        { type: "checked", domId: ".comment-list-box", for: "JuejinComment", label: "评论", checked: false },
                        { type: "checked", domId: ".recommended-area", for: "JuejinRecommended", label: "相关推荐", checked: false },
                    ]
                },
                {
                    title: "操作",
                    children: [
                        { type: "button", class: "buttoncolor1", label: "初始化当前页面配置", getEvent: 'clearCache("CSDNCONFIG", "5")' }
                    ]
                }
            ]
        },
    }
    let asideWidth = '0px'

    // ---------- 通用方法 ------------

    // 通过当前地址获取现在是那个网站
    function initUrl() {
        let url = window.location.href
        let urlResList = [
            { platform: 'CSDN', reg: /.*blog.csdn.net.*\/details\/.*/, title: 'CSDN详情优化', key: 2 },
            { platform: 'CSDN', reg: /.*blog.csdn.net\/nav.*/, title: 'CSDN文章类型列表优化', key: 3 },
            // { platform: 'CSDN', reg: /.*blog.csdn.net\.*/, title: 'CSDN文章类型推荐优化', key: 3.1 },
            { platform: 'CSDN', reg: /.*so.csdn.net\/.*/, title: 'CSDN搜索页面', key: 4 },
            { platform: 'Juejin', reg: /juejin.cn\/post\/.*/, title: '掘金文章详情', key: 5 },
        ]

        for (let i = 0; i < urlResList.length; i++) {
            if (urlResList[i].reg.test(url)) {
                CURRENTPAGES = urlResList[i].key
                return urlResList[i]
            }
        }
    }

    // 外链跳转
    function jumpLink() {
        let url = document.URL
        let target_url = ''
        let flag = false

        if (url.match(/jianshu.com\/go-wild/)) {
            flag = true
            target_url = url.split("url=")[1]
        } else if (url.match(/c\.pc\.qq\.com\/.*?\.html\?pfurl=/)) {
            flag = true
            target_url = url.split("pfurl=")[1]
            target_url = target_url.split("&pfuin=")[0]
        } else if (/https:\/\/link\.csdn\.net\/.*/.test(url)) {
            flag = true
            target_url = url.split("target=")[1]
            setTimeout(() => {
                let github = getElement('.loading-btn-github')
                flag = github && github.length !== 0 ? false : true
                getElement('.loading-topic span')[0].innerText = flag ? 'Blog-UI 正在跳转到: ' : '当前链接可以使用github加速请自行选择: '
                if (flag) {
                    target_url = decodeURIComponent(target_url) // 编码
                    setTimeout(() => {
                        window.location.href = target_url;
                    }, 500)
                }
            }, 100)
        }
    }

    function addEvent(className, eventType, callback) {
        let dom = getElement(className)[0]
        dom.addEventListener(eventType, callback)
    }

    // 设置缓存更改 配置文件
    function generalCetch() {
        let parentConfig = CSDNCONFIG[CURRENTPAGES][ISH5 ? 'h5' : 'pc']
        if (parentConfig.length !== 0) {
            // 设置缓存中的内容 并更新 源配置文件
            parentConfig.forEach((item) => {
                item.children.forEach((childrenItem, index, arr) => {
                    // 如果没有for 就证明不需要缓存
                    if (!childrenItem.for) {
                        return
                    }
                    if (GM_listValues().includes(childrenItem.for)) {
                        arr[index].checked = GM_getValue(childrenItem.for)
                    } else {
                        GM_setValue(childrenItem.for, childrenItem.checked)
                    }
                })
            })
            addMain(CSDNCONFIG[CURRENTPAGES][ISH5 ? 'h5' : 'pc'], 'CSDN')  // 生成虚拟节点
        }
    }

    // 生成虚拟节点
    function addMain(config, type) {

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

        parentDom.appendChild(parentVDom)
        let itemDom = getElement('.blog-ui-csdn-main')[0]

        config.forEach((configItem, index) => {
            let vDom = render({
                tag: 'div',
                prop: { class: "blog-ui-item" },
                children: [
                    {
                        tag: 'div',
                        prop: { class: "blog-ui-config-title" },
                        children: configItem.title
                    },
                    {
                        tag: 'div',
                        prop: { class: "blog-ui-config-center", parentIndex: index },
                        children: actionDom(configItem.children, type)
                    }
                ]
            })
            itemDom.appendChild(vDom)
        })
    }

    // 操作区
    function actionDom(configItem, type) {
        let actionDom = []
        for (let i = 0; i < configItem.length; i++) {
            let checkObj = null
            if (configItem[i].type === 'checked') {
                checkObj = checkBox(configItem[i], type)
            } else if (configItem[i].type === 'button') {
                checkObj = buttonBox(configItem[i])
            } else if (configItem[i].type === 'radio') {
                checkObj = radioBox(configItem[i])
            }
            actionDom.push(checkObj)

        }
        return actionDom
    }

    function csdnDirectory(checkedFlag, domId) {
        CSDNEvent(domId, checkedFlag)
        if (checkedFlag && domId) {
            csdnSetMenuHeight()
        }
    }

    function csdnSetMenuHeight() {
        setTimeout(() => {
            let asidedirectory = getElement('#asidedirectory')[0]
            if (asidedirectory) {
                let blog_container_aside = Array.from(getElement('.blog_container_aside')[0].children)
                let height = 0
                blog_container_aside.forEach((item) => {
                    height += item.offsetHeight
                })
                height = height - asidedirectory.offsetHeight
                GM_setValue('CSDNMenuHeight', height)
                let CSDNMenuHeight = GM_getValue("CSDNMenuHeight")
                csdnScrollMenu(asidedirectory, CSDNMenuHeight)
                window.onscroll = (e) => {
                    csdnScrollMenu(asidedirectory, CSDNMenuHeight)
                }
            }
        }, 1000)
    }


    function csdnScrollMenu(asidedirectory, CSDNMenuHeight) {
        let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
        if (scrollTop > CSDNMenuHeight) {
            asidedirectory.classList.add('default-menu')
        } else {
            asidedirectory.classList.remove('default-menu')
        }
    }

    // 生成多选框
    function checkBox(item, type) {
        let checkObj = {
            tag: "input",
            prop: {
                "type": "checkbox",
                "id": item.for,
                "domId": item.domId,
                "index": item.index,
                "event": item.getEvent,
                "on": {
                    change: (e) => {
                        var target = e.target,
                            targetTag = target.tagName;
                        if (targetTag === "INPUT") {
                            if (GM_listValues().includes(target.id)) {
                                GM_setValue(target.id, target.checked)
                            }

                            var event = target.getAttribute('event')
                            event != 'undefined' ? eval(`${event}(${target.checked}, '${target.attributes.domId.value}')`) : setDomEvent(target, type)

                        }
                    }
                }
            }
        }

        if (item.checked) {
            checkObj.prop.checked = true
        }

        let currentDom = {
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
        }
        return currentDom
    }

    // 生成按钮
    function buttonBox(item) {
        return {
            tag: "button",
            prop: {
                class: item.class,
                "on": {
                    click: (e) => {
                        var target = e.target,
                            targetTag = target.tagName;
                        if (targetTag == 'BUTTON') {
                            eval(`${item['getEvent']}`)
                        }
                    }
                }
            },
            children: item.label
        }
    }

    // 生成单选
    function radioBox(item) {
        let radio = {
            tag: "input",
            prop: {
                'type': item.type,
                'name': 'radio',
                "id": item.for,
                "on": {
                    change: (e) => {
                        var target = e.target,
                            targetTag = target.tagName;

                        if (targetTag == 'INPUT') {
                            eval(`${item['getEvent']}()`)
                        }
                    }
                }
            }
        }

        if (item.checked) {
            radio.prop.checked = true
        }

        let radioVdom = {
            tag: 'div',
            prop: {
                class: 'radio-item'
            },
            children: [
                radio,
                {
                    tag: 'span',
                    prop: { class: 'radio-label' },
                    children: item.label
                }
            ]
        }
        return radioVdom
    }

    function csdnRadioP() {
        GM_setValue('CsdnRadioC', false)
        GM_setValue('CsdnRadioP', true)

        getElement('.main_father')[0].style = `height: 100%; width: 99vw; justify-content: unset;`
        getElement('.container')[0].style = `display: flex;width: 99vw;`
    }

    function csdnRadioC() {
        GM_setValue('CsdnRadioP', false)
        GM_setValue('CsdnRadioC', true)

        getElement('.main_father')[0].style = `height: 100%; width: 99vw; justify-content: center;`
        getElement('.container')[0].style = `display: flex;width:70vw;`
    }

    // 初始化当前页面配置
    function clearCache(plat, key) {
        let config = eval(`${plat}[${key}]`)
        config[ISH5 ? 'h5' : 'pc'].forEach(item => {
            item.children.forEach(detailItem => {
                if (detailItem.for && GM_listValues().includes(detailItem.for)) {
                    GM_deleteValue(detailItem.for)
                }
            })
        })
        location.reload();
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
                            <a href="https://github.com/wandou-cc/blog-ui" target="_blank"> Blog-UI 设置界面</a>
                        </div>
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
    function displayDom(domNode, type) {
        if (!domNode) {
            return
        }
        // 对于一些动态加载的节点 如果没有查到就加入 一个错误队列中 每100毫秒查找一次
        let dom = getElement(domNode)
        let errorList = []
        if (dom && dom.length > 0) {
            dom.forEach(item => {
                item.style['display'] = type ? 'block' : 'none'
            })
        } else {
            errorList.push({
                domNode,
                type
            })
        }

        if (errorList.length !== 0) {
            let i = 0
            let interval = setInterval(() => {
                if (i <= 10) {
                    errorList.forEach(item => {
                        let errorDom = getElement(domNode)
                        if (errorDom && errorDom.length > 0) {
                            errorDom.forEach(item => {
                                item.style['display'] = type ? 'block' : 'none'
                            })
                        }
                    })
                    i++
                } else {
                    clearInterval(interval)
                }
            }, 100)
        }
    }

    // 输出
    function log(message, type = 'log') {
        console[type](message)
    }

    // 创建dom 元素
    function render(Vnode) {
        let { tag, prop, children } = Vnode
        let el = document.createElement(tag)
        Object.keys(prop).forEach(item => {
            el.setAttribute(item, prop[item]);
            if (item === 'on') {
                let eventObject = prop[item]
                Object.keys(eventObject).forEach(eventItem => {
                    el.addEventListener(eventItem, (e) => eventObject[eventItem](e))
                })
            }
        })

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
        let domId = e.attributes.domid.value
        switch (type) {
            case 'CSDN': CSDNEvent(domId, checkedFlag)
        }
    }

    // 初始化滚动条
    function initScrool() {
        // setTimeout(() => {
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
        // }, 1000)
    }

    // 添加外部样式
    function addCss(className, query) {
        let dom = getElement(className)[0]
        Object.keys(query).forEach(item => {
            dom.style[item] = query[item]
        })
    }

    // 添加其他内容
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
                <a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=KBoDLbs7o7cLxBwKbBij0RNdNPslJ-HS&jump_from=webapi&authKey=zBON7pCcMJkpGoufA4QHOBHFNVYrJ6exGexad89wzgTpSLozInSnoGgQSEGhgMEp">
                    <p class='blog-ui-addQQ'> 
                        有问题可以进qq群交流,下载资源也可以找群主免费
                        <br>
                        <img src="https://cdn.jsdelivr.net/gh/wandou-cc/blog-ui@${PRDTAR}/icon/QQ.jpeg" width='250px'/>
                    </p>
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
                        1.对CSDN下载资源对优化<br>
                        2.添加博客园 掘金 知乎 简书 思否 等技术论坛等优化<br>
                        3.可以对文章主要部分进行打印 PDF 获取<br>
                        4.目前只想到这些吧 其他的 想起来在写
                </div>
                <br>
            </div>
        `
        let parentDom = getElement('.blog-ui-csdn')[0]
        let createDom = document.createElement('div')
        createDom.innerHTML = html
        parentDom.appendChild(createDom)
    }

    function initMainEvent() {
        // 设置鼠标移入svg 显示主菜单
        addEvent('#blog-ui-main', 'mouseenter', (e) => {
            addCss('#blog-main', { display: 'inherit' })
            if (getElement('.bscroll-vertical-scrollbar').length !== 0) {
                getElement('.bscroll-vertical-scrollbar')[0].remove()
            }
            getElement('.blog-ui-csdn')[0].style.transform = 'translateX(0px) translateY(0px) translateZ(1px)'
            initScrool()
        })

        addEvent('#blog-main', 'mouseleave', () => {
            addCss('#blog-main', { display: 'none' })
        })

        var screen_width = document.body.offsetWidth;
        var screen_height = window.innerHeight;

        let father = getElement('#blogUiApp')[0]
        if (GM_getValue('x')) {
            father.style.top = GM_getValue('y')
            father.style.left = GM_getValue('x')
        }

        addEvent('#blog-ui-main', 'mousedown', (e) => {
            var x = e.pageX - father.offsetLeft
            var y = e.pageY - father.offsetTop
            function move(e) {
                let Py = e.pageY - y
                let Px = e.pageX - x
                father.style.top = Py + 'px'
                father.style.left = Px + 'px'

                if (Py < 20) {
                    father.style.top = 20 + 'px'
                } else if (Py > (screen_height - 50)) {
                    father.style.top = screen_height - 50 + 'px'
                }

                if (Px < 5) {
                    father.style.left = 5 + 'px'
                } else if (Px > (screen_width - 50)) {
                    father.style.left = screen_width - 50 + 'px'
                    getElement('#blog-ui-main')[0].style.reight = '5px'
                }

                GM_setValue('x', father.style.left)
                GM_setValue('y', father.style.top)
            }
            document.addEventListener('mousemove', move)
            document.addEventListener('mouseup', function () {
                document.removeEventListener('mousemove', move)
            })
        })
    }

    // ------- 掘金专区 ---------
    function JuejinIsH5OrPC() {
        return false
    }

    function JuejinOptimiz() {
        // setTimeout(() => {
        //     addCss('.main-container', {
        //         "width": '90vw',
        //         'max-width': '90vw'
        //     })
        // }, 500)
        // 没有登陆的时候 顶部的处理
        let noLoginDisplay = ['.creator-item', '.vip-entry']
        let isLogin = getElement('.login-button')[0]
        noLoginDisplay.forEach(item => {
            getElement(item)[0].style.display = isLogin ? 'none' : 'block'
        })

        window.onscroll = (e) => {
            let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
            // 如果卷曲高度 》 前面几个元素的和 那就设置目录的类名
            // if(scrollTop == )
        }


    }

    // 掘金顶部数据处理
    function JuejinTop(checked) {
        let topList = getElement('.phone-hide .nav-item')
        topList.forEach((item, index) => {
            if (index != 0) {
                if (item.getAttribute('tag') == 'li') {
                    item.style.display = checked ? 'flex' : 'none'
                } else {
                    item.style.display = checked ? 'block' : 'none'
                }
            }
        })
    }

    // ----------- CSDN 专区 ----------

    function CSDNIsH5OrPC(id) {
        // h5 移动端端时候的主元素ID
        let dom = getElement(id)
        if (dom && dom.length > 0) {
            return true
        } else {
            return false
        }
    }

    // csdn 点击操作区部分触发的事件
    function CSDNEvent(domId, checked) {
        displayDom(domId, checked);
        (!ISH5 && CURRENTPAGES == 2) ? setAside() : '' // 点击之后进行判断是不是没有右侧的侧边栏了
        csdnSetMenuHeight()
    }

    // -------- csdn 通用 ---------
    // 处理顶部
    function removeTopbar(checked) {
        setTimeout(() => {
            // 处理左侧
            getElement('.toolbar-menus li').forEach(item => {
                let dataType = item.getAttribute('title')
                if (['高价值源码课程分享', '简单高效优惠的云服务', '程序员的如意兵器', '找到志同道合的伙伴', '系统学习·问答·比赛', '开源代码托管'].includes(dataType)) {
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
        }, 500)
    }

    function whiteBack(checked) {
        if (checked) {
            getElement('body')[0].classList.add('bodyWhite')
        } else {
            getElement('body')[0].classList.remove('bodyWhite')
        }
    }

    // 优化开始
    function CSDNOoptimiz(key) {
        if (!ISH5) {
            let removeDom = ['#recommendNps', '.template-box', '.blog-footer-bottom', '#csdn-copyright-footer']
            // 删除可以直接通类名进行获取的元素
            removeDom.forEach(item => {
                displayDom(item, false)
            })
        }

        // getElement('.passport-login-container')[0].style.display = 'none'


        // 点击登录注册按钮进行展示登录页面
        let loginShow = ['.toolbar-btn-login', '.unlogin-comment-bt']
        loginShow.forEach(item => {
            let loginDom = getElement(item)
            loginDom && loginDom.length != 0 && loginDom[0].addEventListener('click', () => {
                setTimeout(() => { getElement('.passport-login-container')[0].style.display = 'block' }, 500)
            })
        })

        if (key === 2) {
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
            ISH5 ? csdnDeatilH5() : csdnDeatilPc()
        }
    }

    // -----------详情页面处理方法------
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

    // operate 底部操作是否固定
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
        let recommendList = getElement('.container-fluid')
        recommendList.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation()
                window.open(e.currentTarget.attributes['data-url'].nodeValue)
            })
        })

        let readall_box = getElement('.readall_box')
        if (readall_box) {
            readall_box[0].remove()
            getElement('.article_content')[0].style.height = 'inherit'
        }
    }

    // 详情页面处理PC
    function csdnDeatilPc() {
        setAside() // 判断右侧是否有悬浮

        let mainDom = getElement('.main_father')[0]
        mainDom.classList.remove('justify-content-center')
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

        // 设置底部关注一栏
        let toolbar = getElement('.left-toolbox')[0]
        toolbar.classList.add('observeToolbar')

        let observeToolbar = new MutationObserver((list) => {
            list.forEach(item => {
                item.target.classList.add('observeToolbar')
                observeToolbar.disconnect();
            })
        })
        observeToolbar.observe(toolbar, { attributes: true })

        // 去除剪贴板劫持
        csdn.copyright.textData = ''

        // 删除原始的右侧
        let rightDom = getElement('.recommend-right')
        rightDom && rightDom[0].remove()

        // 关注博主才能查看
        let focusUP = getElement('.hide-article-box')
        if (focusUP && focusUP.length !== 0) {
            focusUP[0].remove()
            getElement('#article_content')[0].style.height = 'inherit'
        }
    }

    // ------处理搜索列表---------
    // 列表页是否平铺展示
    function blogNav(checked) {

        if (checked) {
            getElement('.home_wrap')[0].style.width = '95vw'
            getElement('.blog-content')[0].style.width = '75vw'
        } else {
            getElement('.home_wrap')[0].style.width = '70vw'
            getElement('.blog-content')[0].style.width = '50vw'
        }
    }

    function soPc(checked) {
        setTimeout(() => {
            let mainDom = getElement('.clearfix')[0]
            checked ? mainDom.classList.remove('main') : mainDom.setAttribute('class', 'main clearfix')
        }, 100)
    }

    function diyIntercept() {
        document.body.onmouseout = (e) => {
            console.log(e.target.clientHeight)
            console.log(e.target.clientWidth)
        }
    }

    // -------- 主函数 -------------
    function mainInit() {
        // 获取url地址 判断是那个网站
        let urlObject = initUrl()
        jumpLink()

        if (!urlObject) {
            return
        }

        // 不同平台是不是H5
        switch (urlObject.platform) {
            case 'CSDN': ISH5 = CSDNIsH5OrPC('.csdn-toolbar'); break;
            case 'Juejin': ISH5 = JuejinIsH5OrPC(); break;
        }

        if (CURRENTPAGES && !CSDNCONFIG[CURRENTPAGES][ISH5 ? 'h5' : 'pc']) {
            log(`当前页面无优化，如果需要请联系作者`)
            return
        }
        // 生成主窗口
        domHtml()
        generalCetch()


        // 进行刷新这之后的设置
        CSDNCONFIG[CURRENTPAGES][ISH5 ? 'h5' : 'pc'].forEach(configItem => {
            configItem.children.forEach(item => {

                // 如果有事件那就去单独执行 否则就是 默认隐藏
                if (item.getEvent && !['button'].includes(item.type)) {
                    if (item.type === 'radio' && !item.checked) {
                        return
                    } else {
                        eval(`${item.getEvent}(${item.checked}, '${item.domId}')`)
                    }
                } else {
                    displayDom(item.domId, item.checked)
                }
            })
        })

        switch (urlObject.platform) {
            case 'CSDN': CSDNOoptimiz(urlObject.key); break;
            case 'Juejin': JuejinOptimiz(urlObject.key); break;
        }
        // 生成附加信息
        appendDom()
        initMainEvent()

        log(`当前正在优化 ${urlObject.title}  使用愉快！有问题请联系作者`)

    }

    log(`脚本启动成功, 欢迎使用${TITLE} 版本:${VERSION}`)

    mainInit()

})();
