exports.id = 337;
exports.ids = [337];
exports.modules = {

/***/ 742:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6665))

/***/ }),

/***/ 6665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.tsx","import":"Quicksand","arguments":[{"weight":["500","700"],"preload":false}],"variableName":"font"}
var layout_tsx_import_Quicksand_arguments_weight_500_700_preload_false_variableName_font_ = __webpack_require__(318);
var layout_tsx_import_Quicksand_arguments_weight_500_700_preload_false_variableName_font_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Quicksand_arguments_weight_500_700_preload_false_variableName_font_);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(9817);
;// CONCATENATED MODULE: ./src/lib/registry.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function StyledComponentsRegistry({ children }) {
    // Only create stylesheet once with lazy initial state
    // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
    const [styledComponentsStyleSheet] = (0,react_.useState)(()=>new styled_components_cjs.ServerStyleSheet());
    (0,navigation.useServerInsertedHTML)(()=>{
        const styles = styledComponentsStyleSheet.getStyleElement();
        // @ts-ignore
        styledComponentsStyleSheet.instance.clearTag();
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: styles
        });
    });
    if (false) {}
    return /*#__PURE__*/ jsx_runtime_.jsx(styled_components_cjs.StyleSheetManager, {
        sheet: styledComponentsStyleSheet.instance,
        children: children
    });
}

// EXTERNAL MODULE: ./node_modules/styled-reset/lib/index.js
var lib = __webpack_require__(5830);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
;// CONCATENATED MODULE: ./src/styles/GlobalStyle.ts


const GlobalStyle = styled_components_cjs.createGlobalStyle`
    ${(lib_default())};
    * {
        box-sizing: border-box;
    }
    body {
        overflow-x: hidden;
    }
    a {
        all: unset;
    }
    input, textarea {
        outline: none;
        border: none;
    }
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;             
        margin: 0;         
    }
    button {
        cursor: pointer;
        outline: none;
        border: none;
        background-color: inherit;
        &:disabled {
            cursor: not-allowed;
        }
    }
`;

;// CONCATENATED MODULE: ./src/styles/theme.ts
const colors = {
    white: "#ffffff",
    black: "#000000",
    gray: "#fbfbfb"
};
const theme = {
    colors,
    textColor: "#343A40"
};

;// CONCATENATED MODULE: ./src/app/layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: `${(layout_tsx_import_Quicksand_arguments_weight_500_700_preload_false_variableName_font_default()).className}`,
            children: /*#__PURE__*/ jsx_runtime_.jsx(StyledComponentsRegistry, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styled_components_cjs.ThemeProvider, {
                    theme: theme,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GlobalStyle, {}),
                        children
                    ]
                })
            })
        })
    });
}


/***/ }),

/***/ 6721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ CSideBar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/GitHub.js
var GitHub = __webpack_require__(7251);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/LinkedIn.js
var LinkedIn = __webpack_require__(3990);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Email.js
var Email = __webpack_require__(9182);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(9817);
;// CONCATENATED MODULE: ./src/components/c-social-button/page.styled.ts

const Container = styled_components_cjs["default"].div.withConfig({
    componentId: "sc-b57591b5-0"
})`
    display: flex;
    padding: 0.5rem;
    cursor: pointer;
    margin-bottom: 5px;
`;
const Icon = styled_components_cjs["default"].div.withConfig({
    componentId: "sc-b57591b5-1"
})`
    padding-right: 6px;
    font-size: 6px;
`;
const Title = styled_components_cjs["default"].p.withConfig({
    componentId: "sc-b57591b5-2"
})`
    display: flex;
    align-items: center;
    font-size: 15px;
`;

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/c-social-button/index.tsx



function CSocialButton({ title, icon, href }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        target: "_blank",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                    children: icon
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                    children: title
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 207 modules
var motion = __webpack_require__(3855);
;// CONCATENATED MODULE: ./src/components/c-nav-button/page.styled.ts

const Button = styled_components_cjs["default"].button.withConfig({
    componentId: "sc-9afa394d-0"
})`
    color: ${({ $isActive })=>$isActive ? 0 : 2}px solid #ced0db;
    display: flex;
    padding: 12px;
    font-weight: 300;
    transition-duration: 1s;
    color: rgba(0, 0, 0, 0.25);

    &:hover {
        color: #000;
    }
`;
const page_styled_Icon = styled_components_cjs["default"].div.withConfig({
    componentId: "sc-9afa394d-1"
})`
    margin-right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const page_styled_Title = styled_components_cjs["default"].p.withConfig({
    componentId: "sc-9afa394d-2"
})`
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
`;

;// CONCATENATED MODULE: ./src/components/c-nav-button/index.tsx



const buttonVariants = {
    transition: {
        opacity: 1,
        type: "spring",
        duration: 0.5,
        bounce: 0.5,
        delayChildren: 0.3,
        staggerChildren: 0.2
    }
};
function CNavButton({ title, isActive, clickEvent }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: buttonVariants,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Button, {
            $isActive: isActive,
            onClick: ()=>{
                if (clickEvent) clickEvent();
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(page_styled_Title, {
                children: title
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/components/c-hamburger-icon/page.styled.ts

const page_styled_Container = styled_components_cjs["default"].div.withConfig({
    componentId: "sc-4be79006-0"
})`
    @media screen and (min-width: 1260px) {
        display: none;
    }
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    float: right;
    z-index: 9990;
    position: absolute;
    top: 30px;
    left: 20px;
`;
const barSettings = ($active)=>styled_components_cjs.css`
    ${$active && styled_components_cjs.css`
        &:nth-child(1),
        &:nth-child(4) {
            opacity: 0;
        }
        &:nth-child(2) {
            transform: rotate(45deg);
            top: 12px;
        }
        &:nth-child(3) {
            transform: rotate(-45deg);
            top: 12px;
        }
    `}

    ${!$active && styled_components_cjs.css`
        &:nth-child(1) {
            top: 0;
        }
        &:nth-child(2),
        &:nth-child(3) {
            top: 12px;
        }
        &:nth-child(4) {
            top: 24px;
        }
    `}
`;
const Bar = styled_components_cjs["default"].span.withConfig({
    componentId: "sc-4be79006-1"
})`
    position: absolute;
    height: 6px;
    border-radius: 3px;
    width: 100%;
    background-color: #111111;
    top: 0;
    transition: 0.2s;
    ${({ $active })=>barSettings($active)}
`;

;// CONCATENATED MODULE: ./src/components/c-hamburger-icon/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

function CHamburgerIcon({ active, clickEvent }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(page_styled_Container, {
        onClick: clickEvent,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Bar, {
                $active: active
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Bar, {
                $active: active
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Bar, {
                $active: active
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Bar, {
                $active: active
            })
        ]
    });
}

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/components/c-sidebar/page.styled.ts


const Wrapper = styled_components_cjs["default"].div.withConfig({
    componentId: "sc-37150b3-0"
})`
    position: relative;
`;
const c_sidebar_page_styled_Container = (0,styled_components_cjs["default"])(motion/* motion */.E.nav).withConfig({
    componentId: "sc-37150b3-1"
})`
    width: 320px;
    height: 100vh;
    max-height: 100vh;
    position: fixed;
    background-color: aliceblue;
    flex-direction: column;
    z-index: 2;
    top: 0;
    left: 0;
    padding: 30px 20px 20px 20px;

    @media screen and (max-width: 1260px) {
        display: block;
        border-right: 1px solid black;
    }
`;
const Logo = styled_components_cjs["default"].div.withConfig({
    componentId: "sc-37150b3-2"
})`
    font-weight: 900;
    margin-top: 40px;
    letter-spacing: -0.05em;
`;
const c_sidebar_page_styled_Title = styled_components_cjs["default"].p.withConfig({
    componentId: "sc-37150b3-3"
})`
    font-size: 2.7rem;
    line-height: 1;
    transition-duration: 1s;
    color: rgba(0, 0, 0, 0.8);
`;
const SubTitle = styled_components_cjs["default"].p.withConfig({
    componentId: "sc-37150b3-4"
})`
    font-size: 0.8rem;
    line-height: 1;
    margin-left: 3px;
`;
const NavContainer = styled_components_cjs["default"].div.withConfig({
    componentId: "sc-37150b3-5"
})`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    margin-top: 50px;
`;
const SocialContainer = styled_components_cjs["default"].div.withConfig({
    componentId: "sc-37150b3-6"
})`
    margin-top: 100px;
`;

;// CONCATENATED MODULE: ./src/components/c-sidebar/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 








function CSideBar() {
    const [active, setActive] = (0,react_.useState)(true);
    const toggleSideBar = ()=>setActive((prev)=>!prev);
    const handleResize = ()=>{
        if (window.innerWidth >= 1260) {
            setActive(true);
        } else {
            setActive(false);
        }
    };
    const variants = {
        open: {
            opacity: 1,
            x: 0
        },
        closed: {
            opacity: 0,
            x: "-100%"
        }
    };
    (0,react_.useEffect)(()=>{
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(CHamburgerIcon, {
                active: active,
                clickEvent: toggleSideBar
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(c_sidebar_page_styled_Container, {
                $active: active,
                animate: active ? "open" : "closed",
                variants: variants,
                transition: {
                    duration: 0.6
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Logo, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(c_sidebar_page_styled_Title, {
                                children: "TaehoChoi"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SubTitle, {
                                children: "태호의 스케치북"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavContainer, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(CNavButton, {
                                title: "About",
                                isActive: true
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(CNavButton, {
                                title: "Experience",
                                isActive: true
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(CNavButton, {
                                title: "Project",
                                isActive: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SocialContainer, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(CSocialButton, {
                                title: "@taehoya",
                                icon: /*#__PURE__*/ jsx_runtime_.jsx(GitHub/* default */.Z, {}),
                                href: "https://www.github.com/Taehoya"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(CSocialButton, {
                                title: "/in/taehoya",
                                icon: /*#__PURE__*/ jsx_runtime_.jsx(LinkedIn/* default */.Z, {}),
                                href: "https://www.linkedin.com/in/taehoya/"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(CSocialButton, {
                                title: "taeho.choi6809@gmail.com",
                                icon: /*#__PURE__*/ jsx_runtime_.jsx(Email/* default */.Z, {}),
                                href: "mailto:taeho.choi6809@gmail.com"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 4053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/tchoi/Desktop/dev/portfolio-v2/src/app/layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ })

};
;