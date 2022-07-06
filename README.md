1) `yarn run babel-transfrom`
2) `yarn run jsxToHtml`

error:

```
"C:\Program Files\nodejs\node.exe" C:\drafts\jsx-new\build\index.js
C:\drafts\jsx-new\node_modules\jsxte\dist\html-parser\jsx-elem-to-html.js:17
        const subElem = element.tag(element.props);
                                ^

TypeError: element.tag is not a function
    at jsxElemToHtmlSync (C:\drafts\jsx-new\node_modules\jsxte\dist\html-parser\jsx-elem-to-html.js:17:33)
    at renderToHtml (C:\drafts\jsx-new\node_modules\jsxte\dist\html-parser\render-to-html.js:10:53)       
    at file:///C:/drafts/jsx-new/build/index.js:8:14
    at ModuleJob.run (node:internal/modules/esm/module_job:197:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:337:24)
    at async loadESM (node:internal/process/esm_loader:88:5)
    at async handleMainPromise (node:internal/modules/run_main:61:12)

Process finished with exit code 1
```
