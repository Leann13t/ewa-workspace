(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_bf43fe._.js", {

"[project]/app/context/avatarState.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "AvatarStateContext": (()=>AvatarStateContext),
    "AvatarStateProvider": (()=>AvatarStateProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
/**
 * Initial state for Avatar Builder.
 * - `activeIcon` - Name correlates to the currently selected icon in the sidebar, and should match
 *                  a pattern in the artboard name from the `.riv` file
 *                  (i.e. `BodyColor` for `BodyColorIcon` artboard)
 * - `riveAvatarSelections` - Object that holds the current selection for each character feature. The
 *                            number correlates to the state machine input value for `numOption` input
 *                            for the option button state machines in the `.riv` file
 *
 */ const initialState = {
    activeIcon: "BodyColor",
    riveAvatarSelections: {
        BodyColor: 0,
        BodyFace: 0,
        BackgroundColor: 0
    }
};
const actions = {
    SET_ACTIVE_ICON: "SET_ACTIVE_ICON",
    SET_RIVE_AVATAR_SELECTION: "SET_RIVE_AVATAR_SELECTION"
};
/**
 * Reducer function that updates state given a specific action and payload
 */ const reducer = (state, action)=>{
    switch(action.type){
        case actions.SET_ACTIVE_ICON:
            return {
                ...state,
                activeIcon: action.activeIcon
            };
        case actions.SET_RIVE_AVATAR_SELECTION:
            return {
                ...state,
                riveAvatarSelections: {
                    ...state.riveAvatarSelections,
                    [action.feature]: action.featureValue
                }
            };
        default:
            return state;
    }
};
const AvatarStateContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
const AvatarStateProvider = ({ children })=>{
    _s();
    const [state, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(reducer, initialState);
    /**
   * Sets the active icon in the state when a user clicks a character feature icon
   */ const setActiveIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AvatarStateProvider.useCallback[setActiveIcon]": (activeIcon)=>{
            let splicedIconName = activeIcon.replace("Icon", "");
            dispatch({
                type: actions.SET_ACTIVE_ICON,
                activeIcon: splicedIconName
            });
        }
    }["AvatarStateProvider.useCallback[setActiveIcon]"], [
        dispatch
    ]);
    /**
   * Sets a selection of a character feature in the state when a user clicks on one of the
   * multiple options for that feature (i.e. Mustache for Facial hair)
   */ const setRiveAvatarSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AvatarStateProvider.useCallback[setRiveAvatarSelection]": (feature, featureValue)=>{
            dispatch({
                type: actions.SET_RIVE_AVATAR_SELECTION,
                feature,
                featureValue
            });
        }
    }["AvatarStateProvider.useCallback[setRiveAvatarSelection]"], []);
    const value = {
        state,
        setActiveIcon,
        setRiveAvatarSelection
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarStateContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/context/avatarState.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
};
_s(AvatarStateProvider, "i/eqEXal/Jh8sg6FyD6Yi/hG4cM=");
_c = AvatarStateProvider;
var _c;
__turbopack_refresh__.register(_c, "AvatarStateProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/RiveAvatarComponent.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>RiveAvatarComponent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@rive-app/react-canvas/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$avatarState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/context/avatarState.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
// @refresh reset
const STATE_MACHINE_NAME = "State Machine 1";
function RiveAvatarComponent() {
    _s();
    const { rive, RiveComponent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRive"])({
        src: "./ewa.riv",
        artboard: "Avatar",
        stateMachines: [
            STATE_MACHINE_NAME
        ],
        layout: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layout"]({
            alignment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alignment"].TopCenter
        }),
        autoplay: true
    });
    const { state: { riveAvatarSelections } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$avatarState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarStateContext"]);
    const numBodyColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"])(rive, STATE_MACHINE_NAME, "numBodyColor");
    const numBodyFace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"])(rive, STATE_MACHINE_NAME, "numBodyFace");
    const numBackgroundColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"])(rive, STATE_MACHINE_NAME, "numBackgroundColor");
    const changesTrigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"])(rive, STATE_MACHINE_NAME, "changes");
    /**
   * Set new user-selected character features on the state machine and fire a trigger input
   * to visually show the new selection on the avatar
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RiveAvatarComponent.useEffect": ()=>{
            if (rive && numBodyColor && numBodyFace && numBackgroundColor && changesTrigger) {
                numBodyColor.value = riveAvatarSelections["BodyColor"];
                numBodyFace.value = riveAvatarSelections["BodyFace"];
                numBackgroundColor.value = riveAvatarSelections["BackgroundColor"];
                changesTrigger.fire();
            }
        }
    }["RiveAvatarComponent.useEffect"], [
        rive,
        numBodyColor,
        numBodyFace,
        riveAvatarSelections,
        numBackgroundColor,
        changesTrigger
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RiveComponent, {
        className: "bg-[#090909] w-full h-full shadow-[10px_0_#000]"
    }, void 0, false, {
        fileName: "[project]/components/RiveAvatarComponent.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_s(RiveAvatarComponent, "lSh6qCwxxlaBHxruNH/lwoWLtk4=", true, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRive"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"]
    ];
});
_c = RiveAvatarComponent;
var _c;
__turbopack_refresh__.register(_c, "RiveAvatarComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/RiveIconButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>RiveIconButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@rive-app/react-canvas/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$avatarState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/context/avatarState.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const STATE_MACHINE_NAME = "State Machine 1";
function RiveIconButton({ artboardName }) {
    _s();
    const { state: { activeIcon, riveAvatarSelections }, setActiveIcon } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$avatarState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarStateContext"]);
    const { rive, RiveComponent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRive"])({
        src: "./ewa.riv",
        artboard: artboardName,
        stateMachines: [
            STATE_MACHINE_NAME
        ],
        autoplay: true,
        shouldDisableRiveListeners: true
    });
    const strippedDownName = artboardName.replace("Icon", "");
    const isHovered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"])(rive, STATE_MACHINE_NAME, "isHover");
    const isIconActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"])(rive, STATE_MACHINE_NAME, "isIconActive", activeIcon === strippedDownName);
    const numOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"])(rive, STATE_MACHINE_NAME, `num${strippedDownName}`);
    /**
   * The icon graphic should update to reflect the chosen feature option for that icon
   * and so this listens for user selections in the options and updates accordingly
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RiveIconButton.useEffect": ()=>{
            if (rive && numOption) {
                numOption.value = riveAvatarSelections[strippedDownName];
            }
        }
    }["RiveIconButton.useEffect"], [
        rive,
        numOption,
        riveAvatarSelections,
        strippedDownName
    ]);
    /**
   * When a user clicks on an icon, we want to set the isIconActive flag on the state machine input
   * to true for that icon, and false for all other icons
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RiveIconButton.useEffect": ()=>{
            if (rive && isIconActive) {
                if (activeIcon === strippedDownName) {
                    isIconActive.value = true;
                } else {
                    isIconActive.value = false;
                }
            }
        }
    }["RiveIconButton.useEffect"], [
        rive,
        activeIcon,
        isIconActive,
        strippedDownName
    ]);
    const onFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RiveIconButton.useCallback[onFocus]": ()=>{
            if (rive && isHovered) {
                isHovered.value = true;
            }
        }
    }["RiveIconButton.useCallback[onFocus]"], [
        rive,
        isHovered
    ]);
    const onBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RiveIconButton.useCallback[onBlur]": ()=>{
            if (rive && isHovered) {
                isHovered.value = false;
            }
        }
    }["RiveIconButton.useCallback[onBlur]"], [
        rive,
        isHovered
    ]);
    const onClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RiveIconButton.useCallback[onClick]": ()=>{
            if (rive && isIconActive) {
                isIconActive.value = true;
                setActiveIcon(artboardName);
            }
        }
    }["RiveIconButton.useCallback[onClick]"], [
        rive,
        isIconActive,
        artboardName,
        setActiveIcon
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "aspect-square h-full",
        onFocus: onFocus,
        onBlur: onBlur,
        onClick: onClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RiveComponent, {}, void 0, false, {
            fileName: "[project]/components/RiveIconButton.tsx",
            lineNumber: 99,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/RiveIconButton.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s(RiveIconButton, "zmZUG1p9pvwYKINUd/i0VdLUnz8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRive"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"]
    ];
});
_c = RiveIconButton;
var _c;
__turbopack_refresh__.register(_c, "RiveIconButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/RiveIconsContainer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>RiveIconsContainer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RiveIconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/RiveIconButton.tsx [app-client] (ecmascript)");
;
;
const getArtboardName = (artboardName)=>{
    if (artboardName === "BackgroundColor") {
        return `${artboardName}Icon`;
    }
    return `Body${artboardName}Icon`;
};
function RiveIconsContainer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "md:gap-x-4 gap-x-2 w-full h-14 md:h-20 lg:h-24 bg-[#1D1D1D] flex md:justify-between justify-center md:p-4 px-[12px] py-[4px] rounded-[16px] md:mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RiveIconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                artboardName: getArtboardName("Color")
            }, void 0, false, {
                fileName: "[project]/components/RiveIconsContainer.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RiveIconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                artboardName: getArtboardName("Face")
            }, void 0, false, {
                fileName: "[project]/components/RiveIconsContainer.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RiveIconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                artboardName: getArtboardName("BackgroundColor")
            }, void 0, false, {
                fileName: "[project]/components/RiveIconsContainer.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/RiveIconsContainer.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = RiveIconsContainer;
var _c;
__turbopack_refresh__.register(_c, "RiveIconsContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/RiveOptionsButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>RiveOptionButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@rive-app/react-canvas/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$avatarState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/context/avatarState.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const STATE_MACHINE_NAME = "State Machine 1";
function RiveOptionButton({ artboardName, optionIdx }) {
    _s();
    const mainName = artboardName.replace("Button", "");
    const { state: { riveAvatarSelections }, setRiveAvatarSelection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$avatarState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarStateContext"]);
    const selectionValue = riveAvatarSelections[mainName];
    const { rive, RiveComponent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRive"])({
        src: "./ewa.riv",
        artboard: artboardName,
        stateMachines: [
            STATE_MACHINE_NAME
        ],
        autoplay: true,
        shouldDisableRiveListeners: true
    });
    const isHovered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"])(rive, STATE_MACHINE_NAME, "isBoxHover");
    const isIconActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"])(rive, STATE_MACHINE_NAME, "isIconActive", selectionValue === optionIdx);
    const numOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"])(rive, STATE_MACHINE_NAME, "numOption", optionIdx);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RiveOptionButton.useEffect": ()=>{
            if (rive && numOption && isIconActive) {
                isIconActive.value = selectionValue === numOption.value;
            }
        }
    }["RiveOptionButton.useEffect"], [
        selectionValue,
        rive,
        numOption,
        isIconActive
    ]);
    const onFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RiveOptionButton.useCallback[onFocus]": ()=>{
            if (rive && isHovered) {
                isHovered.value = true;
            }
        }
    }["RiveOptionButton.useCallback[onFocus]"], [
        rive,
        isHovered
    ]);
    const onBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RiveOptionButton.useCallback[onBlur]": ()=>{
            if (rive && isHovered) {
                isHovered.value = false;
            }
        }
    }["RiveOptionButton.useCallback[onBlur]"], [
        rive,
        isHovered
    ]);
    const onClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RiveOptionButton.useCallback[onClick]": ()=>{
            if (rive && numOption) {
                setRiveAvatarSelection(mainName, numOption.value);
            }
        }
    }["RiveOptionButton.useCallback[onClick]"], [
        rive,
        numOption,
        setRiveAvatarSelection,
        mainName
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `exp-option-button aspect-[21/16] min-w-[150px] opacity-100`,
        onFocus: onFocus,
        onBlur: onBlur,
        onClick: onClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RiveComponent, {}, void 0, false, {
            fileName: "[project]/components/RiveOptionsButton.tsx",
            lineNumber: 91,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/RiveOptionsButton.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_s(RiveOptionButton, "YzqbCBfu3nNELDHvaXdyAEhC01w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRive"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"]
    ];
});
_c = RiveOptionButton;
var _c;
__turbopack_refresh__.register(_c, "RiveOptionButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/RiveOptionsContainer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>RiveOptionsContainer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RiveOptionsButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/RiveOptionsButton.tsx [app-client] (ecmascript)");
;
;
const getArtboardName = (artboardName)=>{
    if (artboardName === "BackgroundColor") {
        return `${artboardName}Button`;
    }
    return `Body${artboardName}Button`;
};
function RiveOptionsContainer({ buttonCollectionName, numOptions }) {
    const optionButtons = [];
    for(let i = 0; i < numOptions; i++){
        optionButtons.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RiveOptionsButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            artboardName: getArtboardName(buttonCollectionName),
            optionIdx: i
        }, `RiveOptionButton-${buttonCollectionName}-${i}`, false, {
            fileName: "[project]/components/RiveOptionsContainer.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-h-[50vh] md:max-h-[100%] h-[calc(100%-3.5rem)] md:h-[calc(100%-6rem)] mx-auto md:p-3 py-3",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-fit gap-x-1 gap-y-px grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))]",
            children: optionButtons.map((buttonComp)=>buttonComp)
        }, void 0, false, {
            fileName: "[project]/components/RiveOptionsContainer.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/RiveOptionsContainer.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c = RiveOptionsContainer;
var _c;
__turbopack_refresh__.register(_c, "RiveOptionsContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/RiveMainEntry.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>RiveMainEntry)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RiveAvatarComponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/RiveAvatarComponent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RiveIconsContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/RiveIconsContainer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$avatarState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/context/avatarState.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RiveOptionsContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/RiveOptionsContainer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
function RiveMainEntry({ localData }) {
    _s();
    const { state: { activeIcon } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$avatarState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarStateContext"]);
    const trimmedActiveIcon = activeIcon === "BackgroundColor" ? activeIcon : activeIcon.split("Body")[1];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "md:flex md:flex-row md:justify-center md:px-0 block min-h-[50vh] h-fit md:absolute md:left-0 md:right-0 md:top-1/2 md:-translate-y-1/2 md:mx-3 md:border-solid md:rounded-[24px] md:border-2 md:border-[#5B5B5B] bg-[#090909]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-fit-content flex md:flex-row flex-col md:p-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-[50vh] flex flex-col justify-start md:justify-between md:max-w-[40%] md:h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "block sm:text-4xl md:hidden bg-[#090909] md:py-12 md:px-8 text-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "md:text-4xl lg:text-5xl text-6xl text-center py-3 text-white font-sans",
                                children: "Avatar Creator"
                            }, void 0, false, {
                                fileName: "[project]/components/RiveMainEntry.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/RiveMainEntry.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-[calc(100%-84px)] w-full md:aspect-square",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RiveAvatarComponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/RiveMainEntry.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/RiveMainEntry.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:block bg-[#090909] md:py-12 md:px-8 text-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "md:text-4xl lg:text-5xl text-6xl text-center py-3 text-white",
                                children: "Avatar Creator"
                            }, void 0, false, {
                                fileName: "[project]/components/RiveMainEntry.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/RiveMainEntry.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/RiveMainEntry.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-[50vh] md:h-full relative mx-auto overflow-x-hidden bg-[#090909] p-3 md:p-0 md:pl-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RiveIconsContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/RiveMainEntry.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RiveOptionsContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            buttonCollectionName: trimmedActiveIcon,
                            numOptions: localData[trimmedActiveIcon].numOptions
                        }, void 0, false, {
                            fileName: "[project]/components/RiveMainEntry.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/RiveMainEntry.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/RiveMainEntry.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/RiveMainEntry.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(RiveMainEntry, "u5XzMNcSETPKT1rnnGEovi1he3k=");
_c = RiveMainEntry;
var _c;
__turbopack_refresh__.register(_c, "RiveMainEntry");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_bf43fe._.js.map