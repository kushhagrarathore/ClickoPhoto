(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/photohub/node_modules/framer-motion/dist/es/components/Reorder/namespace.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/context/ReorderContext.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReorderContext",
    ()=>ReorderContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
const ReorderContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/components/Reorder/utils/check-reorder.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkReorder",
    ()=>checkReorder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/mix/number.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/array.mjs [app-client] (ecmascript)");
;
;
function checkReorder(order, value, offset, velocity) {
    if (!velocity) return order;
    const index = order.findIndex((item)=>item.value === value);
    if (index === -1) return order;
    const nextOffset = velocity > 0 ? 1 : -1;
    const nextItem = order[index + nextOffset];
    if (!nextItem) return order;
    const item = order[index];
    const nextLayout = nextItem.layout;
    const nextItemCenter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(nextLayout.min, nextLayout.max, 0.5);
    if (nextOffset === 1 && item.layout.max + offset > nextItemCenter || nextOffset === -1 && item.layout.min + offset < nextItemCenter) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moveItem"])(order, index, index + nextOffset);
    }
    return order;
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/components/Reorder/Group.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReorderGroup",
    ()=>ReorderGroup,
    "ReorderGroupComponent",
    ()=>ReorderGroupComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$ReorderContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/context/ReorderContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$utils$2f$check$2d$reorder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/components/Reorder/utils/check-reorder.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function ReorderGroupComponent(param, externalRef) {
    let { children, as = "ul", axis = "y", onReorder, values, ...props } = param;
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "ReorderGroupComponent.useConstant[Component]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"][as]
    }["ReorderGroupComponent.useConstant[Component]"]);
    const order = [];
    const isReordering = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(Boolean(values), "Reorder.Group must be provided a values prop", "reorder-values");
    const context = {
        axis,
        registerItem: (value, layout)=>{
            // If the entry was already added, update it rather than adding it again
            const idx = order.findIndex((entry)=>value === entry.value);
            if (idx !== -1) {
                order[idx].layout = layout[axis];
            } else {
                order.push({
                    value: value,
                    layout: layout[axis]
                });
            }
            order.sort(compareMin);
        },
        updateOrder: (item, offset, velocity)=>{
            if (isReordering.current) return;
            const newOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$utils$2f$check$2d$reorder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkReorder"])(order, item, offset, velocity);
            if (order !== newOrder) {
                isReordering.current = true;
                onReorder(newOrder.map(getValue).filter((value)=>values.indexOf(value) !== -1));
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReorderGroupComponent.useEffect": ()=>{
            isReordering.current = false;
        }
    }["ReorderGroupComponent.useEffect"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ...props,
        ref: externalRef,
        ignoreStrict: true,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$ReorderContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReorderContext"].Provider, {
            value: context,
            children: children
        })
    });
}
const ReorderGroup = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(ReorderGroupComponent);
function getValue(item) {
    return item.value;
}
function compareMin(a, b) {
    return a.layout.min - b.layout.min;
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMotionValue",
    ()=>useMotionValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
;
;
;
;
/**
 * Creates a `MotionValue` to track the state and velocity of a value.
 *
 * Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const scale = useMotionValue(1)
 *
 *   return <motion.div style={{ scale }} />
 * }
 * ```
 *
 * @param initial - The initial state.
 *
 * @public
 */ function useMotionValue(initial) {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "useMotionValue.useConstant[value]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(initial)
    }["useMotionValue.useConstant[value]"]);
    /**
     * If this motion value is being used in static mode, like on
     * the Framer canvas, force components to rerender when the motion
     * value is updated.
     */ const { isStatic } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfigContext"]);
    if (isStatic) {
        const [, setLatest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "useMotionValue.useEffect": ()=>value.on("change", setLatest)
        }["useMotionValue.useEffect"], []);
    }
    return value;
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/utils/transform.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transform",
    ()=>transform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$interpolate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/interpolate.mjs [app-client] (ecmascript)");
;
function transform() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    const useImmediate = !Array.isArray(args[0]);
    const argOffset = useImmediate ? 0 : -1;
    const inputValue = args[0 + argOffset];
    const inputRange = args[1 + argOffset];
    const outputRange = args[2 + argOffset];
    const options = args[3 + argOffset];
    const interpolator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$interpolate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"])(inputRange, outputRange, options);
    return useImmediate ? interpolator(inputValue) : interpolator;
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/value/use-combine-values.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCombineMotionValues",
    ()=>useCombineMotionValues
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
;
;
;
function useCombineMotionValues(values, combineValues) {
    /**
     * Initialise the returned motion value. This remains the same between renders.
     */ const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(combineValues());
    /**
     * Create a function that will update the template motion value with the latest values.
     * This is pre-bound so whenever a motion value updates it can schedule its
     * execution in Framesync. If it's already been scheduled it won't be fired twice
     * in a single frame.
     */ const updateValue = ()=>value.set(combineValues());
    /**
     * Synchronously update the motion value with the latest values during the render.
     * This ensures that within a React render, the styles applied to the DOM are up-to-date.
     */ updateValue();
    /**
     * Subscribe to all motion values found within the template. Whenever any of them change,
     * schedule an update.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useCombineMotionValues.useIsomorphicLayoutEffect": ()=>{
            const scheduleUpdate = {
                "useCombineMotionValues.useIsomorphicLayoutEffect.scheduleUpdate": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].preRender(updateValue, false, true)
            }["useCombineMotionValues.useIsomorphicLayoutEffect.scheduleUpdate"];
            const subscriptions = values.map({
                "useCombineMotionValues.useIsomorphicLayoutEffect.subscriptions": (v)=>v.on("change", scheduleUpdate)
            }["useCombineMotionValues.useIsomorphicLayoutEffect.subscriptions"]);
            return ({
                "useCombineMotionValues.useIsomorphicLayoutEffect": ()=>{
                    subscriptions.forEach({
                        "useCombineMotionValues.useIsomorphicLayoutEffect": (unsubscribe)=>unsubscribe()
                    }["useCombineMotionValues.useIsomorphicLayoutEffect"]);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(updateValue);
                }
            })["useCombineMotionValues.useIsomorphicLayoutEffect"];
        }
    }["useCombineMotionValues.useIsomorphicLayoutEffect"]);
    return value;
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/value/use-computed.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useComputed",
    ()=>useComputed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$combine$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/value/use-combine-values.mjs [app-client] (ecmascript)");
;
;
function useComputed(compute) {
    /**
     * Open session of collectMotionValues. Any MotionValue that calls get()
     * will be saved into this array.
     */ __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectMotionValues"].current = [];
    compute();
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$combine$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCombineMotionValues"])(__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectMotionValues"].current, compute);
    /**
     * Synchronously close session of collectMotionValues.
     */ __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectMotionValues"].current = undefined;
    return value;
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTransform",
    ()=>useTransform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$combine$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/value/use-combine-values.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$computed$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/value/use-computed.mjs [app-client] (ecmascript)");
;
;
;
;
function useTransform(input, inputRangeOrTransformer, outputRange, options) {
    if (typeof input === "function") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$computed$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComputed"])(input);
    }
    const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transform"])(inputRangeOrTransformer, outputRange, options);
    return Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([
        input
    ], {
        "useTransform.useListTransform": (param)=>{
            let [latest] = param;
            return transformer(latest);
        }
    }["useTransform.useListTransform"]);
}
function useListTransform(values, transformer) {
    const latest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "useListTransform.useConstant[latest]": ()=>[]
    }["useListTransform.useConstant[latest]"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$combine$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCombineMotionValues"])(values, {
        "useListTransform.useCombineMotionValues": ()=>{
            latest.length = 0;
            const numValues = values.length;
            for(let i = 0; i < numValues; i++){
                latest[i] = values[i].get();
            }
            return transformer(latest);
        }
    }["useListTransform.useCombineMotionValues"]);
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/components/Reorder/Item.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReorderItem",
    ()=>ReorderItem,
    "ReorderItemComponent",
    ()=>ReorderItemComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$ReorderContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/context/ReorderContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function useDefaultMotionValue(value) {
    let defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(value) ? value : (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(defaultValue);
}
function ReorderItemComponent(param, externalRef) {
    let { children, style = {}, value, as = "li", onDrag, layout = true, ...props } = param;
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "ReorderItemComponent.useConstant[Component]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"][as]
    }["ReorderItemComponent.useConstant[Component]"]);
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$ReorderContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReorderContext"]);
    const point = {
        x: useDefaultMotionValue(style.x),
        y: useDefaultMotionValue(style.y)
    };
    const zIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])([
        point.x,
        point.y
    ], {
        "ReorderItemComponent.useTransform[zIndex]": (param)=>{
            let [latestX, latestY] = param;
            return latestX || latestY ? 1 : "unset";
        }
    }["ReorderItemComponent.useTransform[zIndex]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(Boolean(context), "Reorder.Item must be a child of Reorder.Group", "reorder-item-child");
    const { axis, registerItem, updateOrder } = context;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        drag: axis,
        ...props,
        dragSnapToOrigin: true,
        style: {
            ...style,
            x: point.x,
            y: point.y,
            zIndex
        },
        layout: layout,
        onDrag: (event, gesturePoint)=>{
            const { velocity } = gesturePoint;
            velocity[axis] && updateOrder(value, point[axis].get(), velocity[axis]);
            onDrag && onDrag(event, gesturePoint);
        },
        onLayoutMeasure: (measured)=>registerItem(value, measured),
        ref: externalRef,
        ignoreStrict: true,
        children: children
    });
}
const ReorderItem = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(ReorderItemComponent);
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/components/Reorder/namespace.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Group",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReorderGroup"],
    "Item",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$Item$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReorderItem"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$namespace$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/components/Reorder/namespace.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/components/Reorder/Group.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$Item$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/components/Reorder/Item.mjs [app-client] (ecmascript)");
}),
"[project]/photohub/node_modules/framer-motion/dist/es/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$namespace$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/components/Reorder/namespace.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/context/DeprecatedLayoutGroupContext.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeprecatedLayoutGroupContext",
    ()=>DeprecatedLayoutGroupContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
/**
 * Note: Still used by components generated by old versions of Framer
 *
 * @deprecated
 */ const DeprecatedLayoutGroupContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsMounted",
    ()=>useIsMounted
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs [app-client] (ecmascript)");
;
;
function useIsMounted() {
    const isMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useIsMounted.useIsomorphicLayoutEffect": ()=>{
            isMounted.current = true;
            return ({
                "useIsMounted.useIsomorphicLayoutEffect": ()=>{
                    isMounted.current = false;
                }
            })["useIsMounted.useIsomorphicLayoutEffect"];
        }
    }["useIsMounted.useIsomorphicLayoutEffect"], []);
    return isMounted;
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/utils/use-force-update.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useForceUpdate",
    ()=>useForceUpdate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$is$2d$mounted$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs [app-client] (ecmascript)");
;
;
;
function useForceUpdate() {
    const isMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$is$2d$mounted$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMounted"])();
    const [forcedRenderCount, setForcedRenderCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const forceRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useForceUpdate.useCallback[forceRender]": ()=>{
            isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
        }
    }["useForceUpdate.useCallback[forceRender]"], [
        forcedRenderCount
    ]);
    /**
     * Defer this to the end of the next animation frame in case there are multiple
     * synchronous calls.
     */ const deferredForceRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useForceUpdate.useCallback[deferredForceRender]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].postRender(forceRender)
    }["useForceUpdate.useCallback[deferredForceRender]"], [
        forceRender
    ]);
    return [
        deferredForceRender,
        forcedRenderCount
    ];
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/projection/node/group.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nodeGroup",
    ()=>nodeGroup
]);
const notify = (node)=>!node.isLayoutDirty && node.willUpdate(false);
function nodeGroup() {
    const nodes = new Set();
    const subscriptions = new WeakMap();
    const dirtyAll = ()=>nodes.forEach(notify);
    return {
        add: (node)=>{
            nodes.add(node);
            subscriptions.set(node, node.addEventListener("willUpdate", dirtyAll));
        },
        remove: (node)=>{
            nodes.delete(node);
            const unsubscribe = subscriptions.get(node);
            if (unsubscribe) {
                unsubscribe();
                subscriptions.delete(node);
            }
            dirtyAll();
        },
        dirty: dirtyAll
    };
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LayoutGroup",
    ()=>LayoutGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$LayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$DeprecatedLayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/context/DeprecatedLayoutGroupContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$force$2d$update$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-force-update.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$node$2f$group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/projection/node/group.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const shouldInheritGroup = (inherit)=>inherit === true;
const shouldInheritId = (inherit)=>shouldInheritGroup(inherit === true) || inherit === "id";
const LayoutGroup = (param)=>{
    let { children, id, inherit = true } = param;
    const layoutGroupContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$LayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutGroupContext"]);
    const deprecatedLayoutGroupContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$DeprecatedLayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeprecatedLayoutGroupContext"]);
    const [forceRender, key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$force$2d$update$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForceUpdate"])();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const upstreamId = layoutGroupContext.id || deprecatedLayoutGroupContext;
    if (context.current === null) {
        if (shouldInheritId(inherit) && upstreamId) {
            id = id ? upstreamId + "-" + id : upstreamId;
        }
        context.current = {
            id,
            group: shouldInheritGroup(inherit) ? layoutGroupContext.group || (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$node$2f$group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeGroup"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$node$2f$group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeGroup"])()
        };
    }
    const memoizedContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LayoutGroup.useMemo[memoizedContext]": ()=>({
                ...context.current,
                forceRender
            })
    }["LayoutGroup.useMemo[memoizedContext]"], [
        key
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$LayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutGroupContext"].Provider, {
        value: memoizedContext,
        children: children
    });
};
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LazyMotion",
    ()=>LazyMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$LazyContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/context/LazyContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$load$2d$features$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/motion/features/load-features.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
/**
 * Used in conjunction with the `m` component to reduce bundle size.
 *
 * `m` is a version of the `motion` component that only loads functionality
 * critical for the initial render.
 *
 * `LazyMotion` can then be used to either synchronously or asynchronously
 * load animation and gesture support.
 *
 * ```jsx
 * // Synchronous loading
 * import { LazyMotion, m, domAnimation } from "framer-motion"
 *
 * function App() {
 *   return (
 *     <LazyMotion features={domAnimation}>
 *       <m.div animate={{ scale: 2 }} />
 *     </LazyMotion>
 *   )
 * }
 *
 * // Asynchronous loading
 * import { LazyMotion, m } from "framer-motion"
 *
 * function App() {
 *   return (
 *     <LazyMotion features={() => import('./path/to/domAnimation')}>
 *       <m.div animate={{ scale: 2 }} />
 *     </LazyMotion>
 *   )
 * }
 * ```
 *
 * @public
 */ function LazyMotion(param) {
    let { children, features, strict = false } = param;
    const [, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!isLazyBundle(features));
    const loadedRenderer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    /**
     * If this is a synchronous load, load features immediately
     */ if (!isLazyBundle(features)) {
        const { renderer, ...loadedFeatures } = features;
        loadedRenderer.current = renderer;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$load$2d$features$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadFeatures"])(loadedFeatures);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LazyMotion.useEffect": ()=>{
            if (isLazyBundle(features)) {
                features().then({
                    "LazyMotion.useEffect": (param)=>{
                        let { renderer, ...loadedFeatures } = param;
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$load$2d$features$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadFeatures"])(loadedFeatures);
                        loadedRenderer.current = renderer;
                        setIsLoaded(true);
                    }
                }["LazyMotion.useEffect"]);
            }
        }
    }["LazyMotion.useEffect"], []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$LazyContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LazyContext"].Provider, {
        value: {
            renderer: loadedRenderer.current,
            strict
        },
        children: children
    });
}
function isLazyBundle(features) {
    return typeof features === "function";
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionConfig",
    ()=>MotionConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$filter$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
/**
 * `MotionConfig` is used to set configuration options for all children `motion` components.
 *
 * ```jsx
 * import { motion, MotionConfig } from "framer-motion"
 *
 * export function App() {
 *   return (
 *     <MotionConfig transition={{ type: "spring" }}>
 *       <motion.div animate={{ x: 100 }} />
 *     </MotionConfig>
 *   )
 * }
 * ```
 *
 * @public
 */ function MotionConfig(param) {
    let { children, isValidProp, ...config } = param;
    isValidProp && (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$filter$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadExternalIsValidProp"])(isValidProp);
    /**
     * Inherit props from any parent MotionConfig components
     */ config = {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfigContext"]),
        ...config
    };
    /**
     * Don't allow isStatic to change between renders as it affects how many hooks
     * motion components fire.
     */ config.isStatic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "MotionConfig.useConstant": ()=>config.isStatic
    }["MotionConfig.useConstant"]);
    /**
     * Creating a new config context object will re-render every `motion` component
     * every time it renders. So we only want to create a new one sparingly.
     */ const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MotionConfig.useMemo[context]": ()=>config
    }["MotionConfig.useMemo[context]"], [
        JSON.stringify(config.transition),
        config.transformPagePoint,
        config.reducedMotion
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfigContext"].Provider, {
        value: context,
        children: children
    });
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "m",
    ()=>m
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$create$2d$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/components/create-proxy.mjs [app-client] (ecmascript)");
;
const m = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$create$2d$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMotionProxy"])();
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUnmountEffect",
    ()=>useUnmountEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useUnmountEffect(callback) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUnmountEffect.useEffect": ()=>({
                "useUnmountEffect.useEffect": ()=>callback()
            })["useUnmountEffect.useEffect"]
    }["useUnmountEffect.useEffect"], []);
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/render/dom/features-animation.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "domAnimation",
    ()=>domAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/motion/features/animations.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$gestures$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/motion/features/gestures.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$create$2d$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs [app-client] (ecmascript)");
;
;
;
/**
 * @public
 */ const domAnimation = {
    renderer: __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$create$2d$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDomVisualElement"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animations"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$gestures$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gestureAnimations"]
};
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/render/dom/features-max.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "domMax",
    ()=>domMax
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$drag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/motion/features/drag.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$layout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/motion/features/layout.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$features$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/dom/features-animation.mjs [app-client] (ecmascript)");
;
;
;
/**
 * @public
 */ const domMax = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$features$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["domAnimation"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$drag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drag"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$layout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layout"]
};
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/render/dom/features-min.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "domMin",
    ()=>domMin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/motion/features/animations.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$create$2d$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs [app-client] (ecmascript)");
;
;
/**
 * @public
 */ const domMin = {
    renderer: __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$create$2d$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDomVisualElement"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animations"]
};
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMotionValueEvent",
    ()=>useMotionValueEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useMotionValueEvent(value, event, callback) {
    /**
     * useInsertionEffect will create subscriptions before any other
     * effects will run. Effects run upwards through the tree so it
     * can be that binding a useLayoutEffect higher up the tree can
     * miss changes from lower down the tree.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInsertionEffect"])({
        "useMotionValueEvent.useInsertionEffect": ()=>value.on(event, callback)
    }["useMotionValueEvent.useInsertionEffect"], [
        value,
        event,
        callback
    ]);
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/scroll/observe.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "observeTimeline",
    ()=>observeTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
;
function observeTimeline(update, timeline) {
    let prevProgress;
    const onFrame = ()=>{
        const { currentTime } = timeline;
        const percentage = currentTime === null ? 0 : currentTime.value;
        const progress = percentage / 100;
        if (prevProgress !== progress) {
            update(progress);
        }
        prevProgress = progress;
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].preUpdate(onFrame, true);
    return ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(onFrame);
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/resize/handle-element.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resizeElement",
    ()=>resizeElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/is-svg-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs [app-client] (ecmascript)");
;
;
const resizeHandlers = new WeakMap();
let observer;
const getSize = (borderBoxAxis, svgAxis, htmlAxis)=>(target, borderBoxSize)=>{
        if (borderBoxSize && borderBoxSize[0]) {
            return borderBoxSize[0][borderBoxAxis + "Size"];
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGElement"])(target) && "getBBox" in target) {
            return target.getBBox()[svgAxis];
        } else {
            return target[htmlAxis];
        }
    };
const getWidth = /*@__PURE__*/ getSize("inline", "width", "offsetWidth");
const getHeight = /*@__PURE__*/ getSize("block", "height", "offsetHeight");
function notifyTarget(param) {
    let { target, borderBoxSize } = param;
    var _resizeHandlers_get;
    (_resizeHandlers_get = resizeHandlers.get(target)) === null || _resizeHandlers_get === void 0 ? void 0 : _resizeHandlers_get.forEach((handler)=>{
        handler(target, {
            get width () {
                return getWidth(target, borderBoxSize);
            },
            get height () {
                return getHeight(target, borderBoxSize);
            }
        });
    });
}
function notifyAll(entries) {
    entries.forEach(notifyTarget);
}
function createResizeObserver() {
    if (typeof ResizeObserver === "undefined") return;
    observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
    if (!observer) createResizeObserver();
    const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveElements"])(target);
    elements.forEach((element)=>{
        let elementHandlers = resizeHandlers.get(element);
        if (!elementHandlers) {
            elementHandlers = new Set();
            resizeHandlers.set(element, elementHandlers);
        }
        elementHandlers.add(handler);
        observer === null || observer === void 0 ? void 0 : observer.observe(element);
    });
    return ()=>{
        elements.forEach((element)=>{
            const elementHandlers = resizeHandlers.get(element);
            elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.delete(handler);
            if (!(elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.size)) {
                observer === null || observer === void 0 ? void 0 : observer.unobserve(element);
            }
        });
    };
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/resize/handle-window.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resizeWindow",
    ()=>resizeWindow
]);
const windowCallbacks = new Set();
let windowResizeHandler;
function createWindowResizeHandler() {
    windowResizeHandler = ()=>{
        const info = {
            get width () {
                return window.innerWidth;
            },
            get height () {
                return window.innerHeight;
            }
        };
        windowCallbacks.forEach((callback)=>callback(info));
    };
    window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
    windowCallbacks.add(callback);
    if (!windowResizeHandler) createWindowResizeHandler();
    return ()=>{
        windowCallbacks.delete(callback);
        if (!windowCallbacks.size && typeof windowResizeHandler === "function") {
            window.removeEventListener("resize", windowResizeHandler);
            windowResizeHandler = undefined;
        }
    };
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/resize/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resize",
    ()=>resize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$resize$2f$handle$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/resize/handle-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$resize$2f$handle$2d$window$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/resize/handle-window.mjs [app-client] (ecmascript)");
;
;
function resize(a, b) {
    return typeof a === "function" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$resize$2f$handle$2d$window$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resizeWindow"])(a) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$resize$2f$handle$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resizeElement"])(a, b);
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createScrollInfo",
    ()=>createScrollInfo,
    "updateScrollInfo",
    ()=>updateScrollInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/progress.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$velocity$2d$per$2d$second$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/velocity-per-second.mjs [app-client] (ecmascript)");
;
/**
 * A time in milliseconds, beyond which we consider the scroll velocity to be 0.
 */ const maxElapsed = 50;
const createAxisInfo = ()=>({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0
    });
const createScrollInfo = ()=>({
        time: 0,
        x: createAxisInfo(),
        y: createAxisInfo()
    });
const keys = {
    x: {
        length: "Width",
        position: "Left"
    },
    y: {
        length: "Height",
        position: "Top"
    }
};
function updateAxisInfo(element, axisName, info, time) {
    const axis = info[axisName];
    const { length, position } = keys[axisName];
    const prev = axis.current;
    const prevTime = info.time;
    axis.current = element["scroll".concat(position)];
    axis.scrollLength = element["scroll".concat(length)] - element["client".concat(length)];
    axis.offset.length = 0;
    axis.offset[0] = 0;
    axis.offset[1] = axis.scrollLength;
    axis.progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progress"])(0, axis.scrollLength, axis.current);
    const elapsed = time - prevTime;
    axis.velocity = elapsed > maxElapsed ? 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$velocity$2d$per$2d$second$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["velocityPerSecond"])(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time) {
    updateAxisInfo(element, "x", info, time);
    updateAxisInfo(element, "y", info, time);
    info.time = time;
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calcInset",
    ()=>calcInset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$html$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/is-html-element.mjs [app-client] (ecmascript)");
;
function calcInset(element, container) {
    const inset = {
        x: 0,
        y: 0
    };
    let current = element;
    while(current && current !== container){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$html$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(current)) {
            inset.x += current.offsetLeft;
            inset.y += current.offsetTop;
            current = current.offsetParent;
        } else if (current.tagName === "svg") {
            /**
             * This isn't an ideal approach to measuring the offset of <svg /> tags.
             * It would be preferable, given they behave like HTMLElements in most ways
             * to use offsetLeft/Top. But these don't exist on <svg />. Likewise we
             * can't use .getBBox() like most SVG elements as these provide the offset
             * relative to the SVG itself, which for <svg /> is usually 0x0.
             */ const svgBoundingBox = current.getBoundingClientRect();
            current = current.parentElement;
            const parentBoundingBox = current.getBoundingClientRect();
            inset.x += svgBoundingBox.left - parentBoundingBox.left;
            inset.y += svgBoundingBox.top - parentBoundingBox.top;
        } else if (current instanceof SVGGraphicsElement) {
            const { x, y } = current.getBBox();
            inset.x += x;
            inset.y += y;
            let svg = null;
            let parent = current.parentNode;
            while(!svg){
                if (parent.tagName === "svg") {
                    svg = parent;
                }
                parent = current.parentNode;
            }
            current = svg;
        } else {
            break;
        }
    }
    return inset;
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "namedEdges",
    ()=>namedEdges,
    "resolveEdge",
    ()=>resolveEdge
]);
const namedEdges = {
    start: 0,
    center: 0.5,
    end: 1
};
function resolveEdge(edge, length) {
    let inset = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    let delta = 0;
    /**
     * If we have this edge defined as a preset, replace the definition
     * with the numerical value.
     */ if (edge in namedEdges) {
        edge = namedEdges[edge];
    }
    /**
     * Handle unit values
     */ if (typeof edge === "string") {
        const asNumber = parseFloat(edge);
        if (edge.endsWith("px")) {
            delta = asNumber;
        } else if (edge.endsWith("%")) {
            edge = asNumber / 100;
        } else if (edge.endsWith("vw")) {
            delta = asNumber / 100 * document.documentElement.clientWidth;
        } else if (edge.endsWith("vh")) {
            delta = asNumber / 100 * document.documentElement.clientHeight;
        } else {
            edge = asNumber;
        }
    }
    /**
     * If the edge is defined as a number, handle as a progress value.
     */ if (typeof edge === "number") {
        delta = length * edge;
    }
    return inset + delta;
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveOffset",
    ()=>resolveOffset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$edge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs [app-client] (ecmascript)");
;
const defaultOffset = [
    0,
    0
];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
    let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset;
    let targetPoint = 0;
    let containerPoint = 0;
    if (typeof offset === "number") {
        /**
         * If we're provided offset: [0, 0.5, 1] then each number x should become
         * [x, x], so we default to the behaviour of mapping 0 => 0 of both target
         * and container etc.
         */ offsetDefinition = [
            offset,
            offset
        ];
    } else if (typeof offset === "string") {
        offset = offset.trim();
        if (offset.includes(" ")) {
            offsetDefinition = offset.split(" ");
        } else {
            /**
             * If we're provided a definition like "100px" then we want to apply
             * that only to the top of the target point, leaving the container at 0.
             * Whereas a named offset like "end" should be applied to both.
             */ offsetDefinition = [
                offset,
                __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$edge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namedEdges"][offset] ? offset : "0"
            ];
        }
    }
    targetPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$edge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEdge"])(offsetDefinition[0], targetLength, targetInset);
    containerPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$edge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEdge"])(offsetDefinition[1], containerLength);
    return targetPoint - containerPoint;
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollOffset",
    ()=>ScrollOffset
]);
const ScrollOffset = {
    Enter: [
        [
            0,
            1
        ],
        [
            1,
            1
        ]
    ],
    Exit: [
        [
            0,
            0
        ],
        [
            1,
            0
        ]
    ],
    Any: [
        [
            1,
            0
        ],
        [
            0,
            1
        ]
    ],
    All: [
        [
            0,
            0
        ],
        [
            1,
            1
        ]
    ]
};
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveOffsets",
    ()=>resolveOffsets
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$interpolate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/interpolate.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$default$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/clamp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$inset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$offset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$presets$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs [app-client] (ecmascript)");
;
;
;
;
;
const point = {
    x: 0,
    y: 0
};
function getTargetSize(target) {
    return "getBBox" in target && target.tagName !== "svg" ? target.getBBox() : {
        width: target.clientWidth,
        height: target.clientHeight
    };
}
function resolveOffsets(container, info, options) {
    const { offset: offsetDefinition = __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$presets$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollOffset"].All } = options;
    const { target = container, axis = "y" } = options;
    const lengthLabel = axis === "y" ? "height" : "width";
    const inset = target !== container ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$inset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcInset"])(target, container) : point;
    /**
     * Measure the target and container. If they're the same thing then we
     * use the container's scrollWidth/Height as the target, from there
     * all other calculations can remain the same.
     */ const targetSize = target === container ? {
        width: container.scrollWidth,
        height: container.scrollHeight
    } : getTargetSize(target);
    const containerSize = {
        width: container.clientWidth,
        height: container.clientHeight
    };
    /**
     * Reset the length of the resolved offset array rather than creating a new one.
     * TODO: More reusable data structures for targetSize/containerSize would also be good.
     */ info[axis].offset.length = 0;
    /**
     * Populate the offset array by resolving the user's offset definition into
     * a list of pixel scroll offets.
     */ let hasChanged = !info[axis].interpolate;
    const numOffsets = offsetDefinition.length;
    for(let i = 0; i < numOffsets; i++){
        const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$offset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveOffset"])(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
        if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) {
            hasChanged = true;
        }
        info[axis].offset[i] = offset;
    }
    /**
     * If the pixel scroll offsets have changed, create a new interpolator function
     * to map scroll value into a progress.
     */ if (hasChanged) {
        info[axis].interpolate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$interpolate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"])(info[axis].offset, (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$default$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultOffset"])(offsetDefinition), {
            clamp: false
        });
        info[axis].interpolatorOffsets = [
            ...info[axis].offset
        ];
    }
    info[axis].progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(0, 1, info[axis].interpolate(info[axis].current));
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createOnScrollHandler",
    ()=>createOnScrollHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/photohub/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/warn-once.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs [app-client] (ecmascript)");
;
;
;
function measure(container) {
    let target = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : container, info = arguments.length > 2 ? arguments[2] : void 0;
    /**
     * Find inset of target within scrollable container
     */ info.x.targetOffset = 0;
    info.y.targetOffset = 0;
    if (target !== container) {
        let node = target;
        while(node && node !== container){
            info.x.targetOffset += node.offsetLeft;
            info.y.targetOffset += node.offsetTop;
            node = node.offsetParent;
        }
    }
    info.x.targetLength = target === container ? target.scrollWidth : target.clientWidth;
    info.y.targetLength = target === container ? target.scrollHeight : target.clientHeight;
    info.x.containerLength = container.clientWidth;
    info.y.containerLength = container.clientHeight;
    /**
     * In development mode ensure scroll containers aren't position: static as this makes
     * it difficult to measure their relative positions.
     */ if ("TURBOPACK compile-time truthy", 1) {
        if (container && target && target !== container) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warnOnce"])(getComputedStyle(container).position !== "static", "Please ensure that the container has a non-static position, like 'relative', 'fixed', or 'absolute' to ensure scroll offset is calculated correctly.");
        }
    }
}
function createOnScrollHandler(element, onScroll, info) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return {
        measure: (time)=>{
            measure(element, options.target, info);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateScrollInfo"])(element, info, time);
            if (options.offset || options.target) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveOffsets"])(element, info, options);
            }
        },
        notify: ()=>onScroll(info)
    };
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scrollInfo",
    ()=>scrollInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$resize$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/resize/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$on$2d$scroll$2d$handler$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs [app-client] (ecmascript)");
;
;
;
;
const scrollListeners = new WeakMap();
const resizeListeners = new WeakMap();
const onScrollHandlers = new WeakMap();
const getEventTarget = (element)=>element === document.scrollingElement ? window : element;
function scrollInfo(onScroll) {
    let { container = document.scrollingElement, ...options } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!container) return __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
    let containerHandlers = onScrollHandlers.get(container);
    /**
     * Get the onScroll handlers for this container.
     * If one isn't found, create a new one.
     */ if (!containerHandlers) {
        containerHandlers = new Set();
        onScrollHandlers.set(container, containerHandlers);
    }
    /**
     * Create a new onScroll handler for the provided callback.
     */ const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScrollInfo"])();
    const containerHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$on$2d$scroll$2d$handler$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOnScrollHandler"])(container, onScroll, info, options);
    containerHandlers.add(containerHandler);
    /**
     * Check if there's a scroll event listener for this container.
     * If not, create one.
     */ if (!scrollListeners.has(container)) {
        const measureAll = ()=>{
            for (const handler of containerHandlers){
                handler.measure(__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"].timestamp);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].preUpdate(notifyAll);
        };
        const notifyAll = ()=>{
            for (const handler of containerHandlers){
                handler.notify();
            }
        };
        const listener = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].read(measureAll);
        scrollListeners.set(container, listener);
        const target = getEventTarget(container);
        window.addEventListener("resize", listener, {
            passive: true
        });
        if (container !== document.documentElement) {
            resizeListeners.set(container, (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$resize$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resize"])(container, listener));
        }
        target.addEventListener("scroll", listener, {
            passive: true
        });
        listener();
    }
    const listener = scrollListeners.get(container);
    __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].read(listener, false, true);
    return ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(listener);
        /**
         * Check if we even have any handlers for this container.
         */ const currentHandlers = onScrollHandlers.get(container);
        if (!currentHandlers) return;
        currentHandlers.delete(containerHandler);
        if (currentHandlers.size) return;
        /**
         * If no more handlers, remove the scroll listener too.
         */ const scrollListener = scrollListeners.get(container);
        scrollListeners.delete(container);
        if (scrollListener) {
            var _resizeListeners_get;
            getEventTarget(container).removeEventListener("scroll", scrollListener);
            (_resizeListeners_get = resizeListeners.get(container)) === null || _resizeListeners_get === void 0 ? void 0 : _resizeListeners_get();
            window.removeEventListener("resize", scrollListener);
        }
    };
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/render/dom/scroll/utils/get-timeline.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTimeline",
    ()=>getTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$track$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs [app-client] (ecmascript)");
;
;
const timelineCache = new Map();
function scrollTimelineFallback(options) {
    const currentTime = {
        value: 0
    };
    const cancel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$track$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollInfo"])((info)=>{
        currentTime.value = info[options.axis].progress * 100;
    }, options);
    return {
        currentTime,
        cancel
    };
}
function getTimeline(param) {
    let { source, container, ...options } = param;
    const { axis } = options;
    if (source) container = source;
    var _timelineCache_get;
    const containerCache = (_timelineCache_get = timelineCache.get(container)) !== null && _timelineCache_get !== void 0 ? _timelineCache_get : new Map();
    timelineCache.set(container, containerCache);
    var _options_target;
    const targetKey = (_options_target = options.target) !== null && _options_target !== void 0 ? _options_target : "self";
    var _containerCache_get;
    const targetCache = (_containerCache_get = containerCache.get(targetKey)) !== null && _containerCache_get !== void 0 ? _containerCache_get : {};
    var _options_offset;
    const axisKey = axis + ((_options_offset = options.offset) !== null && _options_offset !== void 0 ? _options_offset : []).join(",");
    if (!targetCache[axisKey]) {
        targetCache[axisKey] = !options.target && (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsScrollTimeline"])() ? new ScrollTimeline({
            source: container,
            axis
        }) : scrollTimelineFallback({
            container,
            ...options
        });
    }
    return targetCache[axisKey];
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/render/dom/scroll/attach-animation.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attachToAnimation",
    ()=>attachToAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$scroll$2f$observe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/scroll/observe.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$get$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/dom/scroll/utils/get-timeline.mjs [app-client] (ecmascript)");
;
;
function attachToAnimation(animation, options) {
    const timeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$get$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTimeline"])(options);
    return animation.attachTimeline({
        timeline: options.target ? undefined : timeline,
        observe: (valueAnimation)=>{
            valueAnimation.pause();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$scroll$2f$observe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observeTimeline"])((progress)=>{
                valueAnimation.time = valueAnimation.duration * progress;
            }, timeline);
        }
    });
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/render/dom/scroll/attach-function.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attachToFunction",
    ()=>attachToFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$scroll$2f$observe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/scroll/observe.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$track$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$get$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/dom/scroll/utils/get-timeline.mjs [app-client] (ecmascript)");
;
;
;
/**
 * If the onScroll function has two arguments, it's expecting
 * more specific information about the scroll from scrollInfo.
 */ function isOnScrollWithInfo(onScroll) {
    return onScroll.length === 2;
}
function attachToFunction(onScroll, options) {
    if (isOnScrollWithInfo(onScroll)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$track$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollInfo"])((info)=>{
            onScroll(info[options.axis].progress, info);
        }, options);
    } else {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$scroll$2f$observe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observeTimeline"])(onScroll, (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$get$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTimeline"])(options));
    }
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/render/dom/scroll/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scroll",
    ()=>scroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$attach$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/dom/scroll/attach-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$attach$2d$function$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/dom/scroll/attach-function.mjs [app-client] (ecmascript)");
;
;
;
function scroll(onScroll) {
    let { axis = "y", container = document.scrollingElement, ...options } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!container) return __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
    const optionsWithDefaults = {
        axis,
        container,
        ...options
    };
    return typeof onScroll === "function" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$attach$2d$function$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachToFunction"])(onScroll, optionsWithDefaults) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$attach$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachToAnimation"])(onScroll, optionsWithDefaults);
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScroll",
    ()=>useScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/dom/scroll/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
const createScrollMotionValues = ()=>({
        scrollX: (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(0),
        scrollY: (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(0),
        scrollXProgress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(0),
        scrollYProgress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(0)
    });
const isRefPending = (ref)=>{
    if (!ref) return false;
    return !ref.current;
};
function useScroll() {
    let { container, target, ...options } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])(createScrollMotionValues);
    const scrollAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const needsStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useScroll.useCallback[start]": ()=>{
            scrollAnimation.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scroll"])({
                "useScroll.useCallback[start]": (_progress, param)=>{
                    let { x, y } = param;
                    values.scrollX.set(x.current);
                    values.scrollXProgress.set(x.progress);
                    values.scrollY.set(y.current);
                    values.scrollYProgress.set(y.progress);
                }
            }["useScroll.useCallback[start]"], {
                ...options,
                container: (container === null || container === void 0 ? void 0 : container.current) || undefined,
                target: (target === null || target === void 0 ? void 0 : target.current) || undefined
            });
            return ({
                "useScroll.useCallback[start]": ()=>{
                    var _scrollAnimation_current;
                    (_scrollAnimation_current = scrollAnimation.current) === null || _scrollAnimation_current === void 0 ? void 0 : _scrollAnimation_current.call(scrollAnimation);
                }
            })["useScroll.useCallback[start]"];
        }
    }["useScroll.useCallback[start]"], [
        container,
        target,
        JSON.stringify(options.offset)
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useScroll.useIsomorphicLayoutEffect": ()=>{
            needsStart.current = false;
            if (isRefPending(container) || isRefPending(target)) {
                needsStart.current = true;
                return;
            } else {
                return start();
            }
        }
    }["useScroll.useIsomorphicLayoutEffect"], [
        start
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScroll.useEffect": ()=>{
            if (needsStart.current) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(!isRefPending(container), "Container ref is defined but not hydrated", "use-scroll-ref");
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(!isRefPending(target), "Target ref is defined but not hydrated", "use-scroll-ref");
                return start();
            } else {
                return;
            }
        }
    }["useScroll.useEffect"], [
        start
    ]);
    return values;
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/value/scroll/use-element-scroll.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useElementScroll",
    ()=>useElementScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/photohub/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/warn-once.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
;
;
/**
 * @deprecated useElementScroll is deprecated. Convert to useScroll({ container: ref })
 */ function useElementScroll(ref) {
    if ("TURBOPACK compile-time truthy", 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warnOnce"])(false, "useElementScroll is deprecated. Convert to useScroll({ container: ref }).");
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        container: ref
    });
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/value/scroll/use-viewport-scroll.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useViewportScroll",
    ()=>useViewportScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/photohub/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/warn-once.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
;
;
/**
 * @deprecated useViewportScroll is deprecated. Convert to useScroll()
 */ function useViewportScroll() {
    if ("TURBOPACK compile-time truthy", 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warnOnce"])(false, "useViewportScroll is deprecated. Convert to useScroll().");
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/value/use-motion-template.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMotionTemplate",
    ()=>useMotionTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$combine$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/value/use-combine-values.mjs [app-client] (ecmascript)");
;
;
/**
 * Combine multiple motion values into a new one using a string template literal.
 *
 * ```jsx
 * import {
 *   motion,
 *   useSpring,
 *   useMotionValue,
 *   useMotionTemplate
 * } from "framer-motion"
 *
 * function Component() {
 *   const shadowX = useSpring(0)
 *   const shadowY = useMotionValue(0)
 *   const shadow = useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px 20px rgba(0,0,0,0.3))`
 *
 *   return <motion.div style={{ filter: shadow }} />
 * }
 * ```
 *
 * @public
 */ function useMotionTemplate(fragments) {
    for(var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        values[_key - 1] = arguments[_key];
    }
    /**
     * Create a function that will build a string from the latest motion values.
     */ const numFragments = fragments.length;
    function buildValue() {
        let output = "";
        for(let i = 0; i < numFragments; i++){
            output += fragments[i];
            const value = values[i];
            if (value) {
                output += (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(value) ? value.get() : value;
            }
        }
        return output;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$combine$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCombineMotionValues"])(values.filter(__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"]), buildValue);
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/value/spring-value.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attachSpring",
    ()=>attachSpring,
    "springValue",
    ()=>springValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$JSAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/JSAnimation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
;
;
;
;
/**
 * Create a `MotionValue` that animates to its latest value using a spring.
 * Can either be a value or track another `MotionValue`.
 *
 * ```jsx
 * const x = motionValue(0)
 * const y = transformValue(() => x.get() * 2) // double x
 * ```
 *
 * @param transformer - A transform function. This function must be pure with no side-effects or conditional statements.
 * @returns `MotionValue`
 *
 * @public
 */ function springValue(source, options) {
    const initialValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(source) ? source.get() : source;
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(initialValue);
    attachSpring(value, source, options);
    return value;
}
function attachSpring(value, source, options) {
    const initialValue = value.get();
    let activeAnimation = null;
    let latestValue = initialValue;
    let latestSetter;
    const unit = typeof initialValue === "string" ? initialValue.replace(/[\d.-]/g, "") : undefined;
    const stopAnimation = ()=>{
        if (activeAnimation) {
            activeAnimation.stop();
            activeAnimation = null;
        }
    };
    const startAnimation = ()=>{
        stopAnimation();
        activeAnimation = new __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$JSAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JSAnimation"]({
            keyframes: [
                asNumber(value.get()),
                asNumber(latestValue)
            ],
            velocity: value.getVelocity(),
            type: "spring",
            restDelta: 0.001,
            restSpeed: 0.01,
            ...options,
            onUpdate: latestSetter
        });
    };
    value.attach((v, set)=>{
        latestValue = v;
        latestSetter = (latest)=>set(parseValue(latest, unit));
        __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].postRender(startAnimation);
        return value.get();
    }, stopAnimation);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(source)) {
        const removeSourceOnChange = source.on("change", (v)=>value.set(parseValue(v, unit)));
        const removeValueOnDestroy = value.on("destroy", removeSourceOnChange);
        return ()=>{
            removeSourceOnChange();
            removeValueOnDestroy();
        };
    }
    return stopAnimation;
}
function parseValue(v, unit) {
    return unit ? v + unit : v;
}
function asNumber(v) {
    return typeof v === "number" ? v : parseFloat(v);
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSpring",
    ()=>useSpring
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$spring$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/spring-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
;
;
;
;
;
function useSpring(source) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const { isStatic } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfigContext"]);
    const getFromSource = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(source) ? source.get() : source;
    // isStatic will never change, allowing early hooks return
    if (isStatic) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(getFromSource);
    }
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(getFromSource());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInsertionEffect"])({
        "useSpring.useInsertionEffect": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$spring$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachSpring"])(value, source, options);
        }
    }["useSpring.useInsertionEffect"], [
        value,
        JSON.stringify(options)
    ]);
    return value;
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/utils/use-animation-frame.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAnimationFrame",
    ()=>useAnimationFrame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs [app-client] (ecmascript)");
;
;
;
function useAnimationFrame(callback) {
    const initialTimestamp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const { isStatic } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfigContext"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAnimationFrame.useEffect": ()=>{
            if (isStatic) return;
            const provideTimeSinceStart = {
                "useAnimationFrame.useEffect.provideTimeSinceStart": (param)=>{
                    let { timestamp, delta } = param;
                    if (!initialTimestamp.current) initialTimestamp.current = timestamp;
                    callback(timestamp - initialTimestamp.current, delta);
                }
            }["useAnimationFrame.useEffect.provideTimeSinceStart"];
            __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].update(provideTimeSinceStart, true);
            return ({
                "useAnimationFrame.useEffect": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(provideTimeSinceStart)
            })["useAnimationFrame.useEffect"];
        }
    }["useAnimationFrame.useEffect"], [
        callback
    ]);
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/value/use-time.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTime",
    ()=>useTime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-animation-frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
;
;
function useTime() {
    const time = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationFrame"])({
        "useTime.useAnimationFrame": (t)=>time.set(t)
    }["useTime.useAnimationFrame"]);
    return time;
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/value/use-velocity.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVelocity",
    ()=>useVelocity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
;
;
;
/**
 * Creates a `MotionValue` that updates when the velocity of the provided `MotionValue` changes.
 *
 * ```javascript
 * const x = useMotionValue(0)
 * const xVelocity = useVelocity(x)
 * const xAcceleration = useVelocity(xVelocity)
 * ```
 *
 * @public
 */ function useVelocity(value) {
    const velocity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(value.getVelocity());
    const updateVelocity = ()=>{
        const latest = value.getVelocity();
        velocity.set(latest);
        /**
         * If we still have velocity, schedule an update for the next frame
         * to keep checking until it is zero.
         */ if (latest) __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].update(updateVelocity);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(value, "change", {
        "useVelocity.useMotionValueEvent": ()=>{
            // Schedule an update to this value at the end of the current frame.
            __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].update(updateVelocity, false, true);
        }
    }["useVelocity.useMotionValueEvent"]);
    return velocity;
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * A list of values that can be hardware-accelerated.
 */ __turbopack_context__.s([
    "acceleratedValues",
    ()=>acceleratedValues
]);
const acceleratedValues = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform"
]);
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/value/use-will-change/WillChangeMotionValue.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WillChangeMotionValue",
    ()=>WillChangeMotionValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$accelerated$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs [app-client] (ecmascript)");
;
class WillChangeMotionValue extends __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionValue"] {
    add(name) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformProps"].has(name) || __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$accelerated$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["acceleratedValues"].has(name)) {
            this.isEnabled = true;
            this.update();
        }
    }
    update() {
        this.set(this.isEnabled ? "transform" : "auto");
    }
    constructor(){
        super(...arguments);
        this.isEnabled = false;
    }
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/value/use-will-change/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWillChange",
    ()=>useWillChange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$will$2d$change$2f$WillChangeMotionValue$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/value/use-will-change/WillChangeMotionValue.mjs [app-client] (ecmascript)");
;
;
function useWillChange() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "useWillChange.useConstant": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$will$2d$change$2f$WillChangeMotionValue$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WillChangeMotionValue"]("auto")
    }["useWillChange.useConstant"]);
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReducedMotion",
    ()=>useReducedMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/photohub/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/warn-once.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs [app-client] (ecmascript)");
;
;
;
;
/**
 * A hook that returns `true` if we should be using reduced motion based on the current device's Reduced Motion setting.
 *
 * This can be used to implement changes to your UI based on Reduced Motion. For instance, replacing motion-sickness inducing
 * `x`/`y` animations with `opacity`, disabling the autoplay of background videos, or turning off parallax motion.
 *
 * It will actively respond to changes and re-render your components with the latest setting.
 *
 * ```jsx
 * export function Sidebar({ isOpen }) {
 *   const shouldReduceMotion = useReducedMotion()
 *   const closedX = shouldReduceMotion ? 0 : "-100%"
 *
 *   return (
 *     <motion.div animate={{
 *       opacity: isOpen ? 1 : 0,
 *       x: isOpen ? 0 : closedX
 *     }} />
 *   )
 * }
 * ```
 *
 * @return boolean
 *
 * @public
 */ function useReducedMotion() {
    /**
     * Lazy initialisation of prefersReducedMotion
     */ !__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasReducedMotionListener"].current && (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initPrefersReducedMotion"])();
    const [shouldReduceMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"].current);
    if ("TURBOPACK compile-time truthy", 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warnOnce"])(shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled");
    }
    /**
     * TODO See if people miss automatically updating shouldReduceMotion setting
     */ return shouldReduceMotion;
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion-config.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReducedMotionConfig",
    ()=>useReducedMotionConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
;
;
function useReducedMotionConfig() {
    const reducedMotionPreference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const { reducedMotion } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfigContext"]);
    if (reducedMotion === "never") {
        return false;
    } else if (reducedMotion === "always") {
        return true;
    } else {
        return reducedMotionPreference;
    }
}
;
}),
"[project]/photohub/node_modules/motion-utils/dist/es/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/photohub/node_modules/motion-utils/dist/es/wrap.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrap",
    ()=>wrap
]);
const wrap = (min, max, v)=>{
    const rangeSize = max - min;
    return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};
;
}),
"[project]/photohub/node_modules/motion-utils/dist/es/easing/steps.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "steps",
    ()=>steps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/clamp.mjs [app-client] (ecmascript)");
;
function steps(numSteps) {
    let direction = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "end";
    return (progress)=>{
        progress = direction === "end" ? Math.min(progress, 0.999) : Math.max(progress, 0.001);
        const expanded = progress * numSteps;
        const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(0, 1, rounded / numSteps);
    };
}
;
}),
"[project]/photohub/node_modules/motion-utils/dist/es/easing/utils/get-easing-for-segment.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEasingForSegment",
    ()=>getEasingForSegment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$wrap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/wrap.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$easing$2d$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs [app-client] (ecmascript)");
;
;
function getEasingForSegment(easing, i) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$easing$2d$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEasingArray"])(easing) ? easing[(0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$wrap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrap"])(0, easing.length, i)] : easing;
}
;
}),
"[project]/photohub/node_modules/motion-utils/dist/es/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionGlobalConfig",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionGlobalConfig"],
    "SubscriptionManager",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$subscription$2d$manager$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubscriptionManager"],
    "addUniqueItem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addUniqueItem"],
    "anticipate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anticipate"],
    "backIn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backIn"],
    "backInOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backInOut"],
    "backOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backOut"],
    "circIn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circIn"],
    "circInOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circInOut"],
    "circOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circOut"],
    "clamp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"],
    "cubicBezier",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"],
    "easeIn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeIn"],
    "easeInOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"],
    "easeOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeOut"],
    "easingDefinitionToFunction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$map$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easingDefinitionToFunction"],
    "getEasingForSegment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$get$2d$easing$2d$for$2d$segment$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEasingForSegment"],
    "hasWarned",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasWarned"],
    "invariant",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"],
    "isBezierDefinition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBezierDefinition"],
    "isEasingArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$easing$2d$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEasingArray"],
    "isNumericalString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$is$2d$numerical$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumericalString"],
    "isObject",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$is$2d$object$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"],
    "isZeroValueString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$is$2d$zero$2d$value$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isZeroValueString"],
    "memo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"],
    "millisecondsToSeconds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"],
    "mirrorEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mirrorEasing"],
    "moveItem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moveItem"],
    "noop",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"],
    "pipe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$pipe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"],
    "progress",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progress"],
    "removeItem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"],
    "reverseEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseEasing"],
    "secondsToMilliseconds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"],
    "steps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$steps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["steps"],
    "velocityPerSecond",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$velocity$2d$per$2d$second$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["velocityPerSecond"],
    "warnOnce",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warnOnce"],
    "warning",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warning"],
    "wrap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$wrap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrap"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/array.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/clamp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/global-config.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$is$2d$numerical$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/is-numerical-string.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$is$2d$object$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/is-object.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$is$2d$zero$2d$value$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/is-zero-value-string.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/memo.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$pipe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/pipe.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/progress.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$subscription$2d$manager$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/subscription-manager.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$velocity$2d$per$2d$second$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/velocity-per-second.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/warn-once.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$wrap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/wrap.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/easing/back.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/easing/circ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/easing/ease.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$steps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/easing/steps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$get$2d$easing$2d$for$2d$segment$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/easing/utils/get-easing-for-segment.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$easing$2d$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$map$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/easing/utils/map.mjs [app-client] (ecmascript)");
}),
"[project]/photohub/node_modules/framer-motion/dist/es/animation/hooks/animation-controls.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animationControls",
    ()=>animationControls,
    "setValues",
    ()=>setValues
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$utils$2f$setters$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/utils/setters.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/interfaces/visual-element.mjs [app-client] (ecmascript)");
;
;
;
function stopAnimation(visualElement) {
    visualElement.values.forEach((value)=>value.stop());
}
function setVariants(visualElement, variantLabels) {
    const reversedLabels = [
        ...variantLabels
    ].reverse();
    reversedLabels.forEach((key)=>{
        const variant = visualElement.getVariant(key);
        variant && (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$utils$2f$setters$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTarget"])(visualElement, variant);
        if (visualElement.variantChildren) {
            visualElement.variantChildren.forEach((child)=>{
                setVariants(child, variantLabels);
            });
        }
    });
}
function setValues(visualElement, definition) {
    if (Array.isArray(definition)) {
        return setVariants(visualElement, definition);
    } else if (typeof definition === "string") {
        return setVariants(visualElement, [
            definition
        ]);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$utils$2f$setters$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTarget"])(visualElement, definition);
    }
}
/**
 * @public
 */ function animationControls() {
    /**
     * Track whether the host component has mounted.
     */ let hasMounted = false;
    /**
     * A collection of linked component animation controls.
     */ const subscribers = new Set();
    const controls = {
        subscribe (visualElement) {
            subscribers.add(visualElement);
            return ()=>void subscribers.delete(visualElement);
        },
        start (definition, transitionOverride) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(hasMounted, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
            const animations = [];
            subscribers.forEach((visualElement)=>{
                animations.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateVisualElement"])(visualElement, definition, {
                    transitionOverride
                }));
            });
            return Promise.all(animations);
        },
        set (definition) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(hasMounted, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.");
            return subscribers.forEach((visualElement)=>{
                setValues(visualElement, definition);
            });
        },
        stop () {
            subscribers.forEach((visualElement)=>{
                stopAnimation(visualElement);
            });
        },
        mount () {
            hasMounted = true;
            return ()=>{
                hasMounted = false;
                controls.stop();
            };
        }
    };
    return controls;
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/animation/GroupAnimation.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupAnimation",
    ()=>GroupAnimation
]);
class GroupAnimation {
    get finished() {
        return Promise.all(this.animations.map((animation)=>animation.finished));
    }
    /**
     * TODO: Filter out cancelled or stopped animations before returning
     */ getAll(propName) {
        return this.animations[0][propName];
    }
    setAll(propName, newValue) {
        for(let i = 0; i < this.animations.length; i++){
            this.animations[i][propName] = newValue;
        }
    }
    attachTimeline(timeline) {
        const subscriptions = this.animations.map((animation)=>animation.attachTimeline(timeline));
        return ()=>{
            subscriptions.forEach((cancel, i)=>{
                cancel && cancel();
                this.animations[i].stop();
            });
        };
    }
    get time() {
        return this.getAll("time");
    }
    set time(time) {
        this.setAll("time", time);
    }
    get speed() {
        return this.getAll("speed");
    }
    set speed(speed) {
        this.setAll("speed", speed);
    }
    get state() {
        return this.getAll("state");
    }
    get startTime() {
        return this.getAll("startTime");
    }
    get duration() {
        let max = 0;
        for(let i = 0; i < this.animations.length; i++){
            max = Math.max(max, this.animations[i].duration);
        }
        return max;
    }
    runAll(methodName) {
        this.animations.forEach((controls)=>controls[methodName]());
    }
    play() {
        this.runAll("play");
    }
    pause() {
        this.runAll("pause");
    }
    cancel() {
        this.runAll("cancel");
    }
    complete() {
        this.runAll("complete");
    }
    constructor(animations){
        // Bound to accomadate common `return animation.stop` pattern
        this.stop = ()=>this.runAll("stop");
        this.animations = animations.filter(Boolean);
    }
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/animation/GroupAnimationWithThen.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupAnimationWithThen",
    ()=>GroupAnimationWithThen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$GroupAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/GroupAnimation.mjs [app-client] (ecmascript)");
;
class GroupAnimationWithThen extends __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$GroupAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupAnimation"] {
    then(onResolve, _onReject) {
        return this.finished.finally(onResolve).then(()=>{});
    }
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isDOMKeyframes",
    ()=>isDOMKeyframes
]);
function isDOMKeyframes(keyframes) {
    return typeof keyframes === "object" && !Array.isArray(keyframes);
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/animation/animate/resolve-subjects.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveSubjects",
    ()=>resolveSubjects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$dom$2d$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs [app-client] (ecmascript)");
;
;
function resolveSubjects(subject, keyframes, scope, selectorCache) {
    if (typeof subject === "string" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$dom$2d$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDOMKeyframes"])(keyframes)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveElements"])(subject, scope, selectorCache);
    } else if (subject instanceof NodeList) {
        return Array.from(subject);
    } else if (Array.isArray(subject)) {
        return subject;
    } else {
        return [
            subject
        ];
    }
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/animation/sequence/utils/calc-repeat-duration.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateRepeatDuration",
    ()=>calculateRepeatDuration
]);
function calculateRepeatDuration(duration, repeat, _repeatDelay) {
    return duration * (repeat + 1);
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Given a absolute or relative time definition and current/prev time state of the sequence,
 * calculate an absolute time for the next keyframes.
 */ __turbopack_context__.s([
    "calcNextTime",
    ()=>calcNextTime
]);
function calcNextTime(current, next, prev, labels) {
    if (typeof next === "number") {
        return next;
    } else if (next.startsWith("-") || next.startsWith("+")) {
        return Math.max(0, current + parseFloat(next));
    } else if (next === "<") {
        return prev;
    } else if (next.startsWith("<")) {
        return Math.max(0, prev + parseFloat(next.slice(1)));
    } else {
        var _labels_get;
        return (_labels_get = labels.get(next)) !== null && _labels_get !== void 0 ? _labels_get : current;
    }
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/animation/sequence/utils/edit.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addKeyframes",
    ()=>addKeyframes,
    "eraseKeyframes",
    ()=>eraseKeyframes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/mix/number.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$get$2d$easing$2d$for$2d$segment$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/easing/utils/get-easing-for-segment.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/array.mjs [app-client] (ecmascript)");
;
;
function eraseKeyframes(sequence, startTime, endTime) {
    for(let i = 0; i < sequence.length; i++){
        const keyframe = sequence[i];
        if (keyframe.at > startTime && keyframe.at < endTime) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"])(sequence, keyframe);
            // If we remove this item we have to push the pointer back one
            i--;
        }
    }
}
function addKeyframes(sequence, keyframes, easing, offset, startTime, endTime) {
    /**
     * Erase every existing value between currentTime and targetTime,
     * this will essentially splice this timeline into any currently
     * defined ones.
     */ eraseKeyframes(sequence, startTime, endTime);
    for(let i = 0; i < keyframes.length; i++){
        sequence.push({
            value: keyframes[i],
            at: (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(startTime, endTime, offset[i]),
            easing: (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$get$2d$easing$2d$for$2d$segment$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEasingForSegment"])(easing, i)
        });
    }
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/animation/sequence/utils/normalize-times.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Take an array of times that represent repeated keyframes. For instance
 * if we have original times of [0, 0.5, 1] then our repeated times will
 * be [0, 0.5, 1, 1, 1.5, 2]. Loop over the times and scale them back
 * down to a 0-1 scale.
 */ __turbopack_context__.s([
    "normalizeTimes",
    ()=>normalizeTimes
]);
function normalizeTimes(times, repeat) {
    for(let i = 0; i < times.length; i++){
        times[i] = times[i] / (repeat + 1);
    }
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/animation/sequence/utils/sort.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compareByTime",
    ()=>compareByTime
]);
function compareByTime(a, b) {
    if (a.at === b.at) {
        if (a.value === null) return 1;
        if (b.value === null) return -1;
        return 0;
    } else {
        return a.at - b.at;
    }
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/animation/sequence/create.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAnimationsFromSequence",
    ()=>createAnimationsFromSequence,
    "getValueTransition",
    ()=>getValueTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$default$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$is$2d$generator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$create$2d$generator$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$fill$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/progress.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$get$2d$easing$2d$for$2d$segment$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/easing/utils/get-easing-for-segment.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$resolve$2d$subjects$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/animate/resolve-subjects.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$calc$2d$repeat$2d$duration$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/sequence/utils/calc-repeat-duration.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$calc$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$edit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/sequence/utils/edit.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$normalize$2d$times$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/sequence/utils/normalize-times.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$sort$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/sequence/utils/sort.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const defaultSegmentEasing = "easeInOut";
const MAX_REPEAT = 20;
function createAnimationsFromSequence(sequence) {
    let { defaultTransition = {}, ...sequenceTransition } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, scope = arguments.length > 2 ? arguments[2] : void 0, generators = arguments.length > 3 ? arguments[3] : void 0;
    const defaultDuration = defaultTransition.duration || 0.3;
    const animationDefinitions = new Map();
    const sequences = new Map();
    const elementCache = {};
    const timeLabels = new Map();
    let prevTime = 0;
    let currentTime = 0;
    let totalDuration = 0;
    /**
     * Build the timeline by mapping over the sequence array and converting
     * the definitions into keyframes and offsets with absolute time values.
     * These will later get converted into relative offsets in a second pass.
     */ for(let i = 0; i < sequence.length; i++){
        const segment = sequence[i];
        /**
         * If this is a timeline label, mark it and skip the rest of this iteration.
         */ if (typeof segment === "string") {
            timeLabels.set(segment, currentTime);
            continue;
        } else if (!Array.isArray(segment)) {
            timeLabels.set(segment.name, (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$calc$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcNextTime"])(currentTime, segment.at, prevTime, timeLabels));
            continue;
        }
        let [subject, keyframes, transition = {}] = segment;
        /**
         * If a relative or absolute time value has been specified we need to resolve
         * it in relation to the currentTime.
         */ if (transition.at !== undefined) {
            currentTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$calc$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcNextTime"])(currentTime, transition.at, prevTime, timeLabels);
        }
        /**
         * Keep track of the maximum duration in this definition. This will be
         * applied to currentTime once the definition has been parsed.
         */ let maxDuration = 0;
        const resolveValueSequence = function(valueKeyframes, valueTransition, valueSequence) {
            let elementIndex = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, numSubjects = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
            const valueKeyframesAsList = keyframesAsList(valueKeyframes);
            const { delay = 0, times = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$default$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultOffset"])(valueKeyframesAsList), type = "keyframes", repeat, repeatType, repeatDelay = 0, ...remainingTransition } = valueTransition;
            let { ease = defaultTransition.ease || "easeOut", duration } = valueTransition;
            /**
             * Resolve stagger() if defined.
             */ const calculatedDelay = typeof delay === "function" ? delay(elementIndex, numSubjects) : delay;
            /**
             * If this animation should and can use a spring, generate a spring easing function.
             */ const numKeyframes = valueKeyframesAsList.length;
            const createGenerator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$is$2d$generator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isGenerator"])(type) ? type : generators === null || generators === void 0 ? void 0 : generators[type || "keyframes"];
            if (numKeyframes <= 2 && createGenerator) {
                /**
                 * As we're creating an easing function from a spring,
                 * ideally we want to generate it using the real distance
                 * between the two keyframes. However this isn't always
                 * possible - in these situations we use 0-100.
                 */ let absoluteDelta = 100;
                if (numKeyframes === 2 && isNumberKeyframesArray(valueKeyframesAsList)) {
                    const delta = valueKeyframesAsList[1] - valueKeyframesAsList[0];
                    absoluteDelta = Math.abs(delta);
                }
                const springTransition = {
                    ...remainingTransition
                };
                if (duration !== undefined) {
                    springTransition.duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(duration);
                }
                const springEasing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$create$2d$generator$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGeneratorEasing"])(springTransition, absoluteDelta, createGenerator);
                ease = springEasing.ease;
                duration = springEasing.duration;
            }
            duration !== null && duration !== void 0 ? duration : duration = defaultDuration;
            const startTime = currentTime + calculatedDelay;
            /**
             * If there's only one time offset of 0, fill in a second with length 1
             */ if (times.length === 1 && times[0] === 0) {
                times[1] = 1;
            }
            /**
             * Fill out if offset if fewer offsets than keyframes
             */ const remainder = times.length - valueKeyframesAsList.length;
            remainder > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$fill$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fillOffset"])(times, remainder);
            /**
             * If only one value has been set, ie [1], push a null to the start of
             * the keyframe array. This will let us mark a keyframe at this point
             * that will later be hydrated with the previous value.
             */ valueKeyframesAsList.length === 1 && valueKeyframesAsList.unshift(null);
            /**
             * Handle repeat options
             */ if (repeat) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(repeat < MAX_REPEAT, "Repeat count too high, must be less than 20", "repeat-count-high");
                duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$calc$2d$repeat$2d$duration$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateRepeatDuration"])(duration, repeat);
                const originalKeyframes = [
                    ...valueKeyframesAsList
                ];
                const originalTimes = [
                    ...times
                ];
                ease = Array.isArray(ease) ? [
                    ...ease
                ] : [
                    ease
                ];
                const originalEase = [
                    ...ease
                ];
                for(let repeatIndex = 0; repeatIndex < repeat; repeatIndex++){
                    valueKeyframesAsList.push(...originalKeyframes);
                    for(let keyframeIndex = 0; keyframeIndex < originalKeyframes.length; keyframeIndex++){
                        times.push(originalTimes[keyframeIndex] + (repeatIndex + 1));
                        ease.push(keyframeIndex === 0 ? "linear" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$get$2d$easing$2d$for$2d$segment$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEasingForSegment"])(originalEase, keyframeIndex - 1));
                    }
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$normalize$2d$times$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeTimes"])(times, repeat);
            }
            const targetTime = startTime + duration;
            /**
             * Add keyframes, mapping offsets to absolute time.
             */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$edit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addKeyframes"])(valueSequence, valueKeyframesAsList, ease, times, startTime, targetTime);
            maxDuration = Math.max(calculatedDelay + duration, maxDuration);
            totalDuration = Math.max(targetTime, totalDuration);
        };
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(subject)) {
            const subjectSequence = getSubjectSequence(subject, sequences);
            resolveValueSequence(keyframes, transition, getValueSequence("default", subjectSequence));
        } else {
            const subjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$resolve$2d$subjects$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSubjects"])(subject, keyframes, scope, elementCache);
            const numSubjects = subjects.length;
            /**
             * For every element in this segment, process the defined values.
             */ for(let subjectIndex = 0; subjectIndex < numSubjects; subjectIndex++){
                /**
                 * Cast necessary, but we know these are of this type
                 */ keyframes = keyframes;
                transition = transition;
                const thisSubject = subjects[subjectIndex];
                const subjectSequence = getSubjectSequence(thisSubject, sequences);
                for(const key in keyframes){
                    resolveValueSequence(keyframes[key], getValueTransition(transition, key), getValueSequence(key, subjectSequence), subjectIndex, numSubjects);
                }
            }
        }
        prevTime = currentTime;
        currentTime += maxDuration;
    }
    /**
     * For every element and value combination create a new animation.
     */ sequences.forEach((valueSequences, element)=>{
        for(const key in valueSequences){
            const valueSequence = valueSequences[key];
            /**
             * Arrange all the keyframes in ascending time order.
             */ valueSequence.sort(__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$sort$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareByTime"]);
            const keyframes = [];
            const valueOffset = [];
            const valueEasing = [];
            /**
             * For each keyframe, translate absolute times into
             * relative offsets based on the total duration of the timeline.
             */ for(let i = 0; i < valueSequence.length; i++){
                const { at, value, easing } = valueSequence[i];
                keyframes.push(value);
                valueOffset.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progress"])(0, totalDuration, at));
                valueEasing.push(easing || "easeOut");
            }
            /**
             * If the first keyframe doesn't land on offset: 0
             * provide one by duplicating the initial keyframe. This ensures
             * it snaps to the first keyframe when the animation starts.
             */ if (valueOffset[0] !== 0) {
                valueOffset.unshift(0);
                keyframes.unshift(keyframes[0]);
                valueEasing.unshift(defaultSegmentEasing);
            }
            /**
             * If the last keyframe doesn't land on offset: 1
             * provide one with a null wildcard value. This will ensure it
             * stays static until the end of the animation.
             */ if (valueOffset[valueOffset.length - 1] !== 1) {
                valueOffset.push(1);
                keyframes.push(null);
            }
            if (!animationDefinitions.has(element)) {
                animationDefinitions.set(element, {
                    keyframes: {},
                    transition: {}
                });
            }
            const definition = animationDefinitions.get(element);
            definition.keyframes[key] = keyframes;
            definition.transition[key] = {
                ...defaultTransition,
                duration: totalDuration,
                ease: valueEasing,
                times: valueOffset,
                ...sequenceTransition
            };
        }
    });
    return animationDefinitions;
}
function getSubjectSequence(subject, sequences) {
    !sequences.has(subject) && sequences.set(subject, {});
    return sequences.get(subject);
}
function getValueSequence(name, sequences) {
    if (!sequences[name]) sequences[name] = [];
    return sequences[name];
}
function keyframesAsList(keyframes) {
    return Array.isArray(keyframes) ? keyframes : [
        keyframes
    ];
}
function getValueTransition(transition, key) {
    return transition && transition[key] ? {
        ...transition,
        ...transition[key]
    } : {
        ...transition
    };
}
const isNumber = (keyframe)=>typeof keyframe === "number";
const isNumberKeyframesArray = (keyframes)=>keyframes.every(isNumber);
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/render/object/ObjectVisualElement.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ObjectVisualElement",
    ()=>ObjectVisualElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/projection/geometry/models.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$VisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/VisualElement.mjs [app-client] (ecmascript)");
;
;
function isObjectKey(key, object) {
    return key in object;
}
class ObjectVisualElement extends __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$VisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisualElement"] {
    readValueFromInstance(instance, key) {
        if (isObjectKey(key, instance)) {
            const value = instance[key];
            if (typeof value === "string" || typeof value === "number") {
                return value;
            }
        }
        return undefined;
    }
    getBaseTargetFromProps() {
        return undefined;
    }
    removeValueFromRenderState(key, renderState) {
        delete renderState.output[key];
    }
    measureInstanceViewportBox() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
    }
    build(renderState, latestValues) {
        Object.assign(renderState.output, latestValues);
    }
    renderInstance(instance, param) {
        let { output } = param;
        Object.assign(instance, output);
    }
    sortInstanceNodePosition() {
        return 0;
    }
    constructor(){
        super(...arguments);
        this.type = "object";
    }
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/animation/utils/create-visual-element.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDOMVisualElement",
    ()=>createDOMVisualElement,
    "createObjectVisualElement",
    ()=>createObjectVisualElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/is-svg-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$html$2f$HTMLVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/html/HTMLVisualElement.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$object$2f$ObjectVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/object/ObjectVisualElement.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/store.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$svg$2f$SVGVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/svg/SVGVisualElement.mjs [app-client] (ecmascript)");
;
;
;
;
;
function createDOMVisualElement(element) {
    const options = {
        presenceContext: null,
        props: {},
        visualState: {
            renderState: {
                transform: {},
                transformOrigin: {},
                style: {},
                vars: {},
                attrs: {}
            },
            latestValues: {}
        }
    };
    const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGElement"])(element) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGSVGElement"])(element) ? new __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$svg$2f$SVGVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SVGVisualElement"](options) : new __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$html$2f$HTMLVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTMLVisualElement"](options);
    node.mount(element);
    __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visualElementStore"].set(element, node);
}
function createObjectVisualElement(subject) {
    const options = {
        presenceContext: null,
        props: {},
        visualState: {
            renderState: {
                output: {}
            },
            latestValues: {}
        }
    };
    const node = new __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$object$2f$ObjectVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectVisualElement"](options);
    node.mount(subject);
    __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visualElementStore"].set(subject, node);
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/animation/animate/subject.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animateSubject",
    ()=>animateSubject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/store.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2d$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$create$2d$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/utils/create-visual-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$dom$2d$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$resolve$2d$subjects$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/animate/resolve-subjects.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$single$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/animate/single-value.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
function isSingleValue(subject, keyframes) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(subject) || typeof subject === "number" || typeof subject === "string" && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$dom$2d$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDOMKeyframes"])(keyframes);
}
/**
 * Implementation
 */ function animateSubject(subject, keyframes, options, scope) {
    const animations = [];
    if (isSingleValue(subject, keyframes)) {
        animations.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$single$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateSingleValue"])(subject, (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$dom$2d$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDOMKeyframes"])(keyframes) ? keyframes.default || keyframes : keyframes, options ? options.default || options : options));
    } else {
        const subjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$resolve$2d$subjects$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSubjects"])(subject, keyframes, scope);
        const numSubjects = subjects.length;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(Boolean(numSubjects), "No valid elements provided.", "no-valid-elements");
        for(let i = 0; i < numSubjects; i++){
            const thisSubject = subjects[i];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(thisSubject !== null, "You're trying to perform an animation on null. Ensure that selectors are correctly finding elements and refs are correctly hydrated.", "animate-null");
            const createVisualElement = thisSubject instanceof Element ? __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$create$2d$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDOMVisualElement"] : __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$create$2d$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createObjectVisualElement"];
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visualElementStore"].has(thisSubject)) {
                createVisualElement(thisSubject);
            }
            const visualElement = __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visualElementStore"].get(thisSubject);
            const transition = {
                ...options
            };
            /**
             * Resolve stagger function if provided.
             */ if ("delay" in transition && typeof transition.delay === "function") {
                transition.delay = transition.delay(i, numSubjects);
            }
            animations.push(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2d$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateTarget"])(visualElement, {
                ...keyframes,
                transition
            }, {}));
        }
    }
    return animations;
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/animation/animate/sequence.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animateSequence",
    ()=>animateSequence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/generators/spring/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$create$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/sequence/create.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$subject$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/animate/subject.mjs [app-client] (ecmascript)");
;
;
;
function animateSequence(sequence, options, scope) {
    const animations = [];
    const animationDefinitions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$create$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAnimationsFromSequence"])(sequence, options, scope, {
        spring: __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spring"]
    });
    animationDefinitions.forEach((param, subject)=>{
        let { keyframes, transition } = param;
        animations.push(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$subject$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateSubject"])(subject, keyframes, transition));
    });
    return animations;
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animate",
    ()=>animate,
    "createScopedAnimate",
    ()=>createScopedAnimate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$GroupAnimationWithThen$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/GroupAnimationWithThen.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/array.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$sequence$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/animate/sequence.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$subject$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/animate/subject.mjs [app-client] (ecmascript)");
;
;
;
;
function isSequence(value) {
    return Array.isArray(value) && value.some(Array.isArray);
}
/**
 * Creates an animation function that is optionally scoped
 * to a specific element.
 */ function createScopedAnimate(scope) {
    /**
     * Implementation
     */ function scopedAnimate(subjectOrSequence, optionsOrKeyframes, options) {
        let animations = [];
        if (isSequence(subjectOrSequence)) {
            animations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$sequence$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateSequence"])(subjectOrSequence, optionsOrKeyframes, scope);
        } else {
            animations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$subject$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateSubject"])(subjectOrSequence, optionsOrKeyframes, options, scope);
        }
        const animation = new __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$GroupAnimationWithThen$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupAnimationWithThen"](animations);
        if (scope) {
            scope.animations.push(animation);
            animation.finished.then(()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"])(scope.animations, animation);
            });
        }
        return animation;
    }
    return scopedAnimate;
}
const animate = createScopedAnimate();
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/animation/hooks/use-animate.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAnimate",
    ()=>useAnimate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$unmount$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
;
;
;
function useAnimate() {
    const scope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "useAnimate.useConstant[scope]": ()=>({
                current: null,
                animations: []
            })
    }["useAnimate.useConstant[scope]"]);
    const animate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "useAnimate.useConstant[animate]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScopedAnimate"])(scope)
    }["useAnimate.useConstant[animate]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$unmount$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUnmountEffect"])({
        "useAnimate.useUnmountEffect": ()=>{
            scope.animations.forEach({
                "useAnimate.useUnmountEffect": (animation)=>animation.stop()
            }["useAnimate.useUnmountEffect"]);
            scope.animations.length = 0;
        }
    }["useAnimate.useUnmountEffect"]);
    return [
        scope,
        animate
    ];
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/animation/utils/active-animations.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animationMapKey",
    ()=>animationMapKey,
    "getAnimationMap",
    ()=>getAnimationMap
]);
const animationMaps = new WeakMap();
const animationMapKey = function(name) {
    let pseudoElement = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return "".concat(name, ":").concat(pseudoElement);
};
function getAnimationMap(element) {
    const map = animationMaps.get(element) || new Map();
    animationMaps.set(element, map);
    return map;
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/render/dom/style-computed.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getComputedStyle",
    ()=>getComputedStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$is$2d$css$2d$var$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/render/dom/is-css-var.mjs [app-client] (ecmascript)");
;
function getComputedStyle(element, name) {
    const computedStyle = window.getComputedStyle(element);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$is$2d$css$2d$var$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCSSVar"])(name) ? computedStyle.getPropertyValue(name) : computedStyle[name];
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/animation/waapi/utils/px-values.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pxValues",
    ()=>pxValues
]);
const pxValues = new Set([
    // Border props
    "borderWidth",
    "borderTopWidth",
    "borderRightWidth",
    "borderBottomWidth",
    "borderLeftWidth",
    "borderRadius",
    "radius",
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomRightRadius",
    "borderBottomLeftRadius",
    // Positioning props
    "width",
    "maxWidth",
    "height",
    "maxHeight",
    "top",
    "right",
    "bottom",
    "left",
    // Spacing props
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    // Misc
    "backgroundPositionX",
    "backgroundPositionY"
]);
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/animation/keyframes/utils/apply-px-defaults.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyPxDefaults",
    ()=>applyPxDefaults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$px$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/waapi/utils/px-values.mjs [app-client] (ecmascript)");
;
function applyPxDefaults(keyframes, name) {
    for(let i = 0; i < keyframes.length; i++){
        if (typeof keyframes[i] === "number" && __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$px$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pxValues"].has(name)) {
            keyframes[i] = keyframes[i] + "px";
        }
    }
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/animation/animators/waapi/animate-elements.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animateElements",
    ()=>animateElements
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$active$2d$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/utils/active-animations.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$style$2d$computed$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/render/dom/style-computed.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$fill$2d$wildcards$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$apply$2d$px$2d$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/keyframes/utils/apply-px-defaults.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)");
;
;
function animateElements(elementOrSelector, keyframes, options, scope) {
    const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveElements"])(elementOrSelector, scope);
    const numElements = elements.length;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(Boolean(numElements), "No valid elements provided.", "no-valid-elements");
    /**
     * WAAPI doesn't support interrupting animations.
     *
     * Therefore, starting animations requires a three-step process:
     * 1. Stop existing animations (write styles to DOM)
     * 2. Resolve keyframes (read styles from DOM)
     * 3. Create new animations (write styles to DOM)
     *
     * The hybrid `animate()` function uses AsyncAnimation to resolve
     * keyframes before creating new animations, which removes style
     * thrashing. Here, we have much stricter filesize constraints.
     * Therefore we do this in a synchronous way that ensures that
     * at least within `animate()` calls there is no style thrashing.
     *
     * In the motion-native-animate-mini-interrupt benchmark this
     * was 80% faster than a single loop.
     */ const animationDefinitions = [];
    /**
     * Step 1: Build options and stop existing animations (write)
     */ for(let i = 0; i < numElements; i++){
        const element = elements[i];
        const elementTransition = {
            ...options
        };
        /**
         * Resolve stagger function if provided.
         */ if (typeof elementTransition.delay === "function") {
            elementTransition.delay = elementTransition.delay(i, numElements);
        }
        for(const valueName in keyframes){
            let valueKeyframes = keyframes[valueName];
            if (!Array.isArray(valueKeyframes)) {
                valueKeyframes = [
                    valueKeyframes
                ];
            }
            const valueOptions = {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValueTransition"])(elementTransition, valueName)
            };
            valueOptions.duration && (valueOptions.duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(valueOptions.duration));
            valueOptions.delay && (valueOptions.delay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(valueOptions.delay));
            /**
             * If there's an existing animation playing on this element then stop it
             * before creating a new one.
             */ const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$active$2d$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimationMap"])(element);
            const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$active$2d$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animationMapKey"])(valueName, valueOptions.pseudoElement || "");
            const currentAnimation = map.get(key);
            currentAnimation && currentAnimation.stop();
            animationDefinitions.push({
                map,
                key,
                unresolvedKeyframes: valueKeyframes,
                options: {
                    ...valueOptions,
                    element,
                    name: valueName,
                    allowFlatten: !elementTransition.type && !elementTransition.ease
                }
            });
        }
    }
    /**
     * Step 2: Resolve keyframes (read)
     */ for(let i = 0; i < animationDefinitions.length; i++){
        const { unresolvedKeyframes, options: animationOptions } = animationDefinitions[i];
        const { element, name, pseudoElement } = animationOptions;
        if (!pseudoElement && unresolvedKeyframes[0] === null) {
            unresolvedKeyframes[0] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$style$2d$computed$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(element, name);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$fill$2d$wildcards$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fillWildcards"])(unresolvedKeyframes);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$apply$2d$px$2d$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyPxDefaults"])(unresolvedKeyframes, name);
        /**
         * If we only have one keyframe, explicitly read the initial keyframe
         * from the computed style. This is to ensure consistency with WAAPI behaviour
         * for restarting animations, for instance .play() after finish, when it
         * has one vs two keyframes.
         */ if (!pseudoElement && unresolvedKeyframes.length < 2) {
            unresolvedKeyframes.unshift((0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$style$2d$computed$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(element, name));
        }
        animationOptions.keyframes = unresolvedKeyframes;
    }
    /**
     * Step 3: Create new animations (write)
     */ const animations = [];
    for(let i = 0; i < animationDefinitions.length; i++){
        const { map, key, options: animationOptions } = animationDefinitions[i];
        const animation = new __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAnimation"](animationOptions);
        map.set(key, animation);
        animation.finished.finally(()=>map.delete(key));
        animations.push(animation);
    }
    return animations;
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/animation/animators/waapi/animate-style.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animateMini",
    ()=>animateMini,
    "createScopedWaapiAnimate",
    ()=>createScopedWaapiAnimate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$GroupAnimationWithThen$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/GroupAnimationWithThen.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animators$2f$waapi$2f$animate$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/animators/waapi/animate-elements.mjs [app-client] (ecmascript)");
;
;
const createScopedWaapiAnimate = (scope)=>{
    function scopedAnimate(elementOrSelector, keyframes, options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$GroupAnimationWithThen$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupAnimationWithThen"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animators$2f$waapi$2f$animate$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateElements"])(elementOrSelector, keyframes, options, scope));
    }
    return scopedAnimate;
};
const animateMini = /*@__PURE__*/ createScopedWaapiAnimate();
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/animation/hooks/use-animate-style.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAnimateMini",
    ()=>useAnimateMini
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$unmount$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animators$2f$waapi$2f$animate$2d$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/animators/waapi/animate-style.mjs [app-client] (ecmascript)");
;
;
;
function useAnimateMini() {
    const scope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "useAnimateMini.useConstant[scope]": ()=>({
                current: null,
                animations: []
            })
    }["useAnimateMini.useConstant[scope]"]);
    const animate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "useAnimateMini.useConstant[animate]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animators$2f$waapi$2f$animate$2d$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScopedWaapiAnimate"])(scope)
    }["useAnimateMini.useConstant[animate]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$unmount$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUnmountEffect"])({
        "useAnimateMini.useUnmountEffect": ()=>{
            scope.animations.forEach({
                "useAnimateMini.useUnmountEffect": (animation)=>animation.stop()
            }["useAnimateMini.useUnmountEffect"]);
        }
    }["useAnimateMini.useUnmountEffect"]);
    return [
        scope,
        animate
    ];
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAnimation",
    ()=>useAnimation,
    "useAnimationControls",
    ()=>useAnimationControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$animation$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/hooks/animation-controls.mjs [app-client] (ecmascript)");
;
;
;
/**
 * Creates `LegacyAnimationControls`, which can be used to manually start, stop
 * and sequence animations on one or more components.
 *
 * The returned `LegacyAnimationControls` should be passed to the `animate` property
 * of the components you want to animate.
 *
 * These components can then be animated with the `start` method.
 *
 * ```jsx
 * import * as React from 'react'
 * import { motion, useAnimation } from 'framer-motion'
 *
 * export function MyComponent(props) {
 *    const controls = useAnimation()
 *
 *    controls.start({
 *        x: 100,
 *        transition: { duration: 0.5 },
 *    })
 *
 *    return <motion.div animate={controls} />
 * }
 * ```
 *
 * @returns Animation controller with `start` and `stop` methods
 *
 * @public
 */ function useAnimationControls() {
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])(__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$animation$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animationControls"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])(controls.mount, []);
    return controls;
}
const useAnimation = useAnimationControls;
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence-data.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePresenceData",
    ()=>usePresenceData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$PresenceContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/context/PresenceContext.mjs [app-client] (ecmascript)");
;
;
function usePresenceData() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$PresenceContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresenceContext"]);
    return context ? context.custom : undefined;
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/events/use-dom-event.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDomEvent",
    ()=>useDomEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$add$2d$dom$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/events/add-dom-event.mjs [app-client] (ecmascript)");
;
;
/**
 * Attaches an event listener directly to the provided DOM element.
 *
 * Bypassing React's event system can be desirable, for instance when attaching non-passive
 * event handlers.
 *
 * ```jsx
 * const ref = useRef(null)
 *
 * useDomEvent(ref, 'wheel', onWheel, { passive: false })
 *
 * return <div ref={ref} />
 * ```
 *
 * @param ref - React.RefObject that's been provided to the element you want to bind the listener to.
 * @param eventName - Name of the event you want listen for.
 * @param handler - Function to fire when receiving the event.
 * @param options - Options to pass to `Event.addEventListener`.
 *
 * @public
 */ function useDomEvent(ref, eventName, handler, options) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDomEvent.useEffect": ()=>{
            const element = ref.current;
            if (handler && element) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$add$2d$dom$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDomEvent"])(element, eventName, handler, options);
            }
        }
    }["useDomEvent.useEffect"], [
        ref,
        eventName,
        handler,
        options
    ]);
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/gestures/drag/use-drag-controls.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DragControls",
    ()=>DragControls,
    "useDragControls",
    ()=>useDragControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
;
/**
 * Can manually trigger a drag gesture on one or more `drag`-enabled `motion` components.
 *
 * ```jsx
 * const dragControls = useDragControls()
 *
 * function startDrag(event) {
 *   dragControls.start(event, { snapToCursor: true })
 * }
 *
 * return (
 *   <>
 *     <div onPointerDown={startDrag} />
 *     <motion.div drag="x" dragControls={dragControls} />
 *   </>
 * )
 * ```
 *
 * @public
 */ class DragControls {
    /**
     * Subscribe a component's internal `VisualElementDragControls` to the user-facing API.
     *
     * @internal
     */ subscribe(controls) {
        this.componentControls.add(controls);
        return ()=>this.componentControls.delete(controls);
    }
    /**
     * Start a drag gesture on every `motion` component that has this set of drag controls
     * passed into it via the `dragControls` prop.
     *
     * ```jsx
     * dragControls.start(e, {
     *   snapToCursor: true
     * })
     * ```
     *
     * @param event - PointerEvent
     * @param options - Options
     *
     * @public
     */ start(event, options) {
        this.componentControls.forEach((controls)=>{
            controls.start(event.nativeEvent || event, options);
        });
    }
    /**
     * Cancels a drag gesture.
     *
     * ```jsx
     * dragControls.cancel()
     * ```
     *
     * @public
     */ cancel() {
        this.componentControls.forEach((controls)=>{
            controls.cancel();
        });
    }
    /**
     * Stops a drag gesture.
     *
     * ```jsx
     * dragControls.stop()
     * ```
     *
     * @public
     */ stop() {
        this.componentControls.forEach((controls)=>{
            controls.stop();
        });
    }
    constructor(){
        this.componentControls = new Set();
    }
}
const createDragControls = ()=>new DragControls();
/**
 * Usually, dragging is initiated by pressing down on a `motion` component with a `drag` prop
 * and moving it. For some use-cases, for instance clicking at an arbitrary point on a video scrubber, we
 * might want to initiate that dragging from a different component than the draggable one.
 *
 * By creating a `dragControls` using the `useDragControls` hook, we can pass this into
 * the draggable component's `dragControls` prop. It exposes a `start` method
 * that can start dragging from pointer events on other components.
 *
 * ```jsx
 * const dragControls = useDragControls()
 *
 * function startDrag(event) {
 *   dragControls.start(event, { snapToCursor: true })
 * }
 *
 * return (
 *   <>
 *     <div onPointerDown={startDrag} />
 *     <motion.div drag="x" dragControls={dragControls} />
 *   </>
 * )
 * ```
 *
 * @public
 */ function useDragControls() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])(createDragControls);
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/motion/utils/is-motion-component.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isMotionComponent",
    ()=>isMotionComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$symbol$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/motion/utils/symbol.mjs [app-client] (ecmascript)");
;
/**
 * Checks if a component is a `motion` component.
 */ function isMotionComponent(component) {
    return component !== null && typeof component === "object" && __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$symbol$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionComponentSymbol"] in component;
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/motion/utils/unwrap-motion-component.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unwrapMotionComponent",
    ()=>unwrapMotionComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$is$2d$motion$2d$component$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/motion/utils/is-motion-component.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$symbol$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/motion/utils/symbol.mjs [app-client] (ecmascript)");
;
;
/**
 * Unwraps a `motion` component and returns either a string for `motion.div` or
 * the React component for `motion(Component)`.
 *
 * If the component is not a `motion` component it returns undefined.
 */ function unwrapMotionComponent(component) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$is$2d$motion$2d$component$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionComponent"])(component)) {
        return component[__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$symbol$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionComponentSymbol"]];
    }
    return undefined;
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/projection/use-instant-layout-transition.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInstantLayoutTransition",
    ()=>useInstantLayoutTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$node$2f$HTMLProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs [app-client] (ecmascript)");
;
function useInstantLayoutTransition() {
    return startTransition;
}
function startTransition(callback) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$node$2f$HTMLProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rootProjectionNode"].current) return;
    __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$node$2f$HTMLProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rootProjectionNode"].current.isUpdating = false;
    __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$node$2f$HTMLProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rootProjectionNode"].current.blockUpdate();
    callback && callback();
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/projection/use-reset-projection.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useResetProjection",
    ()=>useResetProjection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$node$2f$HTMLProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs [app-client] (ecmascript)");
;
;
function useResetProjection() {
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useResetProjection.useCallback[reset]": ()=>{
            const root = __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$node$2f$HTMLProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rootProjectionNode"].current;
            if (!root) return;
            root.resetTree();
        }
    }["useResetProjection.useCallback[reset]"], []);
    return reset;
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/utils/use-cycle.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCycle",
    ()=>useCycle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$wrap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/wrap.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
/**
 * Cycles through a series of visual properties. Can be used to toggle between or cycle through animations. It works similar to `useState` in React. It is provided an initial array of possible states, and returns an array of two arguments.
 *
 * An index value can be passed to the returned `cycle` function to cycle to a specific index.
 *
 * ```jsx
 * import * as React from "react"
 * import { motion, useCycle } from "framer-motion"
 *
 * export const MyComponent = () => {
 *   const [x, cycleX] = useCycle(0, 50, 100)
 *
 *   return (
 *     <motion.div
 *       animate={{ x: x }}
 *       onTap={() => cycleX()}
 *      />
 *    )
 * }
 * ```
 *
 * @param items - items to cycle through
 * @returns [currentState, cycleState]
 *
 * @public
 */ function useCycle() {
    for(var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++){
        items[_key] = arguments[_key];
    }
    const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [item, setItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(items[index.current]);
    const runCycle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCycle.useCallback[runCycle]": (next)=>{
            index.current = typeof next !== "number" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$wrap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrap"])(0, items.length, index.current + 1) : next;
            setItem(items[index.current]);
        }
    }["useCycle.useCallback[runCycle]"], // The array will change on each call, but by putting items.length at
    // the front of this array, we guarantee the dependency comparison will match up
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        items.length,
        ...items
    ]);
    return [
        item,
        runCycle
    ];
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "inView",
    ()=>inView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs [app-client] (ecmascript)");
;
const thresholds = {
    some: 0,
    all: 1
};
function inView(elementOrSelector, onStart) {
    let { root, margin: rootMargin, amount = "some" } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveElements"])(elementOrSelector);
    const activeIntersections = new WeakMap();
    const onIntersectionChange = (entries)=>{
        entries.forEach((entry)=>{
            const onEnd = activeIntersections.get(entry.target);
            /**
             * If there's no change to the intersection, we don't need to
             * do anything here.
             */ if (entry.isIntersecting === Boolean(onEnd)) return;
            if (entry.isIntersecting) {
                const newOnEnd = onStart(entry.target, entry);
                if (typeof newOnEnd === "function") {
                    activeIntersections.set(entry.target, newOnEnd);
                } else {
                    observer.unobserve(entry.target);
                }
            } else if (typeof onEnd === "function") {
                onEnd(entry);
                activeIntersections.delete(entry.target);
            }
        });
    };
    const observer = new IntersectionObserver(onIntersectionChange, {
        root,
        rootMargin,
        threshold: typeof amount === "number" ? amount : thresholds[amount]
    });
    elements.forEach((element)=>observer.observe(element));
    return ()=>observer.disconnect();
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInView",
    ()=>useInView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$viewport$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs [app-client] (ecmascript)");
;
;
function useInView(ref) {
    let { root, margin, amount, once = false, initial = false } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const [isInView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            if (!ref.current || once && isInView) return;
            const onEnter = {
                "useInView.useEffect.onEnter": ()=>{
                    setInView(true);
                    return once ? undefined : ({
                        "useInView.useEffect.onEnter": ()=>setInView(false)
                    })["useInView.useEffect.onEnter"];
                }
            }["useInView.useEffect.onEnter"];
            const options = {
                root: root && root.current || undefined,
                margin,
                amount
            };
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$viewport$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inView"])(ref.current, onEnter, options);
        }
    }["useInView.useEffect"], [
        root,
        ref,
        margin,
        once,
        amount
    ]);
    return isInView;
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/utils/use-instant-transition.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "disableInstantTransitions",
    ()=>disableInstantTransitions,
    "useInstantTransition",
    ()=>useInstantTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/global-config.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$use$2d$instant$2d$layout$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/projection/use-instant-layout-transition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$force$2d$update$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-force-update.mjs [app-client] (ecmascript)");
;
;
;
;
;
function useInstantTransition() {
    const [forceUpdate, forcedRenderCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$force$2d$update$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForceUpdate"])();
    const startInstantLayoutTransition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$use$2d$instant$2d$layout$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInstantLayoutTransition"])();
    const unlockOnFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(-1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInstantTransition.useEffect": ()=>{
            /**
         * Unblock after two animation frames, otherwise this will unblock too soon.
         */ __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].postRender({
                "useInstantTransition.useEffect": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].postRender({
                        "useInstantTransition.useEffect": ()=>{
                            /**
             * If the callback has been called again after the effect
             * triggered this 2 frame delay, don't unblock animations. This
             * prevents the previous effect from unblocking the current
             * instant transition too soon. This becomes more likely when
             * used in conjunction with React.startTransition().
             */ if (forcedRenderCount !== unlockOnFrameRef.current) return;
                            __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionGlobalConfig"].instantAnimations = false;
                        }
                    }["useInstantTransition.useEffect"])
            }["useInstantTransition.useEffect"]);
        }
    }["useInstantTransition.useEffect"], [
        forcedRenderCount
    ]);
    return (callback)=>{
        startInstantLayoutTransition(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionGlobalConfig"].instantAnimations = true;
            forceUpdate();
            callback();
            unlockOnFrameRef.current = forcedRenderCount + 1;
        });
    };
}
function disableInstantTransitions() {
    __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionGlobalConfig"].instantAnimations = false;
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/utils/use-page-in-view.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePageInView",
    ()=>usePageInView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function usePageInView() {
    const [isInView, setIsInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePageInView.useEffect": ()=>{
            const handleVisibilityChange = {
                "usePageInView.useEffect.handleVisibilityChange": ()=>setIsInView(!document.hidden)
            }["usePageInView.useEffect.handleVisibilityChange"];
            if (document.hidden) {
                handleVisibilityChange();
            }
            document.addEventListener("visibilitychange", handleVisibilityChange);
            return ({
                "usePageInView.useEffect": ()=>{
                    document.removeEventListener("visibilitychange", handleVisibilityChange);
                }
            })["usePageInView.useEffect"];
        }
    }["usePageInView.useEffect"], []);
    return isInView;
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/animation/optimized-appear/store.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appearAnimationStore",
    ()=>appearAnimationStore,
    "appearComplete",
    ()=>appearComplete
]);
const appearAnimationStore = new Map();
const appearComplete = new Map();
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/animation/optimized-appear/store-id.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appearStoreId",
    ()=>appearStoreId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs [app-client] (ecmascript)");
;
const appearStoreId = (elementId, valueName)=>{
    const key = __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformProps"].has(valueName) ? "transform" : valueName;
    return "".concat(elementId, ": ").concat(key);
};
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/animation/optimized-appear/handoff.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handoffOptimizedAppearAnimation",
    ()=>handoffOptimizedAppearAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/optimized-appear/store.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/optimized-appear/store-id.mjs [app-client] (ecmascript)");
;
;
function handoffOptimizedAppearAnimation(elementId, valueName, frame) {
    var _window_MotionHandoffIsComplete, _window;
    const storeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearStoreId"])(elementId, valueName);
    const optimisedAnimation = __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearAnimationStore"].get(storeId);
    if (!optimisedAnimation) {
        return null;
    }
    const { animation, startTime } = optimisedAnimation;
    function cancelAnimation() {
        var _window_MotionCancelOptimisedAnimation, _window;
        (_window_MotionCancelOptimisedAnimation = (_window = window).MotionCancelOptimisedAnimation) === null || _window_MotionCancelOptimisedAnimation === void 0 ? void 0 : _window_MotionCancelOptimisedAnimation.call(_window, elementId, valueName, frame);
    }
    /**
     * We can cancel the animation once it's finished now that we've synced
     * with Motion.
     *
     * Prefer onfinish over finished as onfinish is backwards compatible with
     * older browsers.
     */ animation.onfinish = cancelAnimation;
    if (startTime === null || ((_window_MotionHandoffIsComplete = (_window = window).MotionHandoffIsComplete) === null || _window_MotionHandoffIsComplete === void 0 ? void 0 : _window_MotionHandoffIsComplete.call(_window, elementId))) {
        /**
         * If the startTime is null, this animation is the Paint Ready detection animation
         * and we can cancel it immediately without handoff.
         *
         * Or if we've already handed off the animation then we're now interrupting it.
         * In which case we need to cancel it.
         */ cancelAnimation();
        return null;
    } else {
        return startTime;
    }
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/animation/optimized-appear/start.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "startOptimizedAppearAnimation",
    ()=>startOptimizedAppearAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$start$2d$waapi$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$data$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/optimized-appear/data-id.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$get$2d$appear$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/optimized-appear/get-appear-id.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$handoff$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/optimized-appear/handoff.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/optimized-appear/store.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/optimized-appear/store-id.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
/**
 * A single time to use across all animations to manually set startTime
 * and ensure they're all in sync.
 */ let startFrameTime;
/**
 * A dummy animation to detect when Chrome is ready to start
 * painting the page and hold off from triggering the real animation
 * until then. We only need one animation to detect paint ready.
 *
 * https://bugs.chromium.org/p/chromium/issues/detail?id=1406850
 */ let readyAnimation;
/**
 * Keep track of animations that were suspended vs cancelled so we
 * can easily resume them when we're done measuring layout.
 */ const suspendedAnimations = new Set();
function resumeSuspendedAnimations() {
    suspendedAnimations.forEach((data)=>{
        data.animation.play();
        data.animation.startTime = data.startTime;
    });
    suspendedAnimations.clear();
}
function startOptimizedAppearAnimation(element, name, keyframes, options, onReady) {
    // Prevent optimised appear animations if Motion has already started animating.
    if (window.MotionIsMounted) {
        return;
    }
    const id = element.dataset[__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$data$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optimizedAppearDataId"]];
    if (!id) return;
    window.MotionHandoffAnimation = __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$handoff$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handoffOptimizedAppearAnimation"];
    const storeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearStoreId"])(id, name);
    if (!readyAnimation) {
        readyAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$start$2d$waapi$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startWaapiAnimation"])(element, name, [
            keyframes[0],
            keyframes[0]
        ], /**
         * 10 secs is basically just a super-safe duration to give Chrome
         * long enough to get the animation ready.
         */ {
            duration: 10000,
            ease: "linear"
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearAnimationStore"].set(storeId, {
            animation: readyAnimation,
            startTime: null
        });
        /**
         * If there's no readyAnimation then there's been no instantiation
         * of handoff animations.
         */ window.MotionHandoffAnimation = __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$handoff$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handoffOptimizedAppearAnimation"];
        window.MotionHasOptimisedAnimation = (elementId, valueName)=>{
            if (!elementId) return false;
            /**
             * Keep a map of elementIds that have started animating. We check
             * via ID instead of Element because of hydration errors and
             * pre-hydration checks. We also actively record IDs as they start
             * animating rather than simply checking for data-appear-id as
             * this attrbute might be present but not lead to an animation, for
             * instance if the element's appear animation is on a different
             * breakpoint.
             */ if (!valueName) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearComplete"].has(elementId);
            }
            const animationId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearStoreId"])(elementId, valueName);
            return Boolean(__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearAnimationStore"].get(animationId));
        };
        window.MotionHandoffMarkAsComplete = (elementId)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearComplete"].has(elementId)) {
                __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearComplete"].set(elementId, true);
            }
        };
        window.MotionHandoffIsComplete = (elementId)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearComplete"].get(elementId) === true;
        };
        /**
         * We only need to cancel transform animations as
         * they're the ones that will interfere with the
         * layout animation measurements.
         */ window.MotionCancelOptimisedAnimation = (elementId, valueName, frame, canResume)=>{
            const animationId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearStoreId"])(elementId, valueName);
            const data = __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearAnimationStore"].get(animationId);
            if (!data) return;
            if (frame && canResume === undefined) {
                /**
                 * Wait until the end of the subsequent frame to cancel the animation
                 * to ensure we don't remove the animation before the main thread has
                 * had a chance to resolve keyframes and render.
                 */ frame.postRender(()=>{
                    frame.postRender(()=>{
                        data.animation.cancel();
                    });
                });
            } else {
                data.animation.cancel();
            }
            if (frame && canResume) {
                suspendedAnimations.add(data);
                frame.render(resumeSuspendedAnimations);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearAnimationStore"].delete(animationId);
                /**
                 * If there are no more animations left, we can remove the cancel function.
                 * This will let us know when we can stop checking for conflicting layout animations.
                 */ if (!__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearAnimationStore"].size) {
                    window.MotionCancelOptimisedAnimation = undefined;
                }
            }
        };
        window.MotionCheckAppearSync = (visualElement, valueName, value)=>{
            var _window_MotionHasOptimisedAnimation, _window, _visualElement_props_values;
            const appearId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$get$2d$appear$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOptimisedAppearId"])(visualElement);
            if (!appearId) return;
            const valueIsOptimised = (_window_MotionHasOptimisedAnimation = (_window = window).MotionHasOptimisedAnimation) === null || _window_MotionHasOptimisedAnimation === void 0 ? void 0 : _window_MotionHasOptimisedAnimation.call(_window, appearId, valueName);
            const externalAnimationValue = (_visualElement_props_values = visualElement.props.values) === null || _visualElement_props_values === void 0 ? void 0 : _visualElement_props_values[valueName];
            if (!valueIsOptimised || !externalAnimationValue) return;
            const removeSyncCheck = value.on("change", (latestValue)=>{
                if (externalAnimationValue.get() !== latestValue) {
                    var _window_MotionCancelOptimisedAnimation, _window;
                    (_window_MotionCancelOptimisedAnimation = (_window = window).MotionCancelOptimisedAnimation) === null || _window_MotionCancelOptimisedAnimation === void 0 ? void 0 : _window_MotionCancelOptimisedAnimation.call(_window, appearId, valueName);
                    removeSyncCheck();
                }
            });
            return removeSyncCheck;
        };
    }
    const startAnimation = ()=>{
        readyAnimation.cancel();
        const appearAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$start$2d$waapi$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startWaapiAnimation"])(element, name, keyframes, options);
        /**
         * Record the time of the first started animation. We call performance.now() once
         * here and once in handoff to ensure we're getting
         * close to a frame-locked time. This keeps all animations in sync.
         */ if (startFrameTime === undefined) {
            startFrameTime = performance.now();
        }
        appearAnimation.startTime = startFrameTime;
        __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearAnimationStore"].set(storeId, {
            animation: appearAnimation,
            startTime: startFrameTime
        });
        if (onReady) onReady(appearAnimation);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearComplete"].set(id, false);
    if (readyAnimation.ready) {
        readyAnimation.ready.then(startAnimation).catch(__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
    } else {
        startAnimation();
    }
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/animation/hooks/use-animated-state.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAnimatedState",
    ()=>useAnimatedState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$use$2d$visual$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/projection/geometry/models.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$VisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/VisualElement.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/interfaces/visual-element.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
const createObject = ()=>({});
class StateVisualElement extends __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$VisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisualElement"] {
    build() {}
    resetTransform() {}
    restoreTransform() {}
    removeValueFromRenderState() {}
    renderInstance() {}
    scrapeMotionValuesFromProps() {
        return createObject();
    }
    getBaseTargetFromProps() {
        return undefined;
    }
    readValueFromInstance(_state, key, options) {
        return options.initialState[key] || 0;
    }
    sortInstanceNodePosition() {
        return 0;
    }
    constructor(){
        super(...arguments);
        this.measureInstanceViewportBox = __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"];
    }
}
const useVisualState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$use$2d$visual$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeUseVisualState"])({
    scrapeMotionValuesFromProps: createObject,
    createRenderState: createObject
});
/**
 * This is not an officially supported API and may be removed
 * on any version.
 */ function useAnimatedState(initialState) {
    const [animationState, setAnimationState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialState);
    const visualState = useVisualState({}, false);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "useAnimatedState.useConstant[element]": ()=>{
            return new StateVisualElement({
                props: {
                    onUpdate: {
                        "useAnimatedState.useConstant[element]": (v)=>{
                            setAnimationState({
                                ...v
                            });
                        }
                    }["useAnimatedState.useConstant[element]"]
                },
                visualState,
                presenceContext: null
            }, {
                initialState
            });
        }
    }["useAnimatedState.useConstant[element]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useAnimatedState.useLayoutEffect": ()=>{
            element.mount({});
            return ({
                "useAnimatedState.useLayoutEffect": ()=>element.unmount()
            })["useAnimatedState.useLayoutEffect"];
        }
    }["useAnimatedState.useLayoutEffect"], [
        element
    ]);
    const startAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "useAnimatedState.useConstant[startAnimation]": ()=>({
                "useAnimatedState.useConstant[startAnimation]": (animationDefinition)=>{
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateVisualElement"])(element, animationDefinition);
                }
            })["useAnimatedState.useConstant[startAnimation]"]
    }["useAnimatedState.useConstant[startAnimation]"]);
    return [
        animationState,
        startAnimation
    ];
}
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/components/AnimateSharedLayout.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimateSharedLayout",
    ()=>AnimateSharedLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs [app-client] (ecmascript)");
;
;
;
;
;
let id = 0;
const AnimateSharedLayout = (param)=>{
    let { children } = param;
    __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "AnimateSharedLayout.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(false, "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations");
        }
    }["AnimateSharedLayout.useEffect"], []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutGroup"], {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
            "AnimateSharedLayout.useConstant": ()=>"asl-".concat(id++)
        }["AnimateSharedLayout.useConstant"]),
        children: children
    });
};
;
}),
"[project]/photohub/node_modules/framer-motion/dist/es/value/use-inverted-scale.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invertScale",
    ()=>invertScale,
    "useInvertedScale",
    ()=>useInvertedScale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionContext$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/context/MotionContext/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
;
;
;
;
;
// Keep things reasonable and avoid scale: Infinity. In practise we might need
// to add another value, opacity, that could interpolate scaleX/Y [0,0.01] => [0,1]
// to simply hide content at unreasonable scales.
const maxScale = 100000;
const invertScale = (scale)=>scale > 0.001 ? 1 / scale : maxScale;
let hasWarned = false;
/**
 * Returns a `MotionValue` each for `scaleX` and `scaleY` that update with the inverse
 * of their respective parent scales.
 *
 * This is useful for undoing the distortion of content when scaling a parent component.
 *
 * By default, `useInvertedScale` will automatically fetch `scaleX` and `scaleY` from the nearest parent.
 * By passing other `MotionValue`s in as `useInvertedScale({ scaleX, scaleY })`, it will invert the output
 * of those instead.
 *
 * ```jsx
 * const MyComponent = () => {
 *   const { scaleX, scaleY } = useInvertedScale()
 *   return <motion.div style={{ scaleX, scaleY }} />
 * }
 * ```
 *
 * @deprecated
 */ function useInvertedScale(scale) {
    let parentScaleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(1);
    let parentScaleY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(1);
    const { visualElement } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionContext$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionContext"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(!!(scale || visualElement), "If no scale values are provided, useInvertedScale must be used within a child of another motion component.");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warning"])(hasWarned, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead.");
    hasWarned = true;
    if (scale) {
        parentScaleX = scale.scaleX || parentScaleX;
        parentScaleY = scale.scaleY || parentScaleY;
    } else if (visualElement) {
        parentScaleX = visualElement.getValue("scaleX", 1);
        parentScaleY = visualElement.getValue("scaleY", 1);
    }
    const scaleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(parentScaleX, invertScale);
    const scaleY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(parentScaleY, invertScale);
    return {
        scaleX,
        scaleY
    };
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/animation/NativeAnimationWrapper.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeAnimationWrapper",
    ()=>NativeAnimationWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs [app-client] (ecmascript)");
;
class NativeAnimationWrapper extends __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAnimation"] {
    constructor(animation){
        super();
        this.animation = animation;
        animation.onfinish = ()=>{
            this.finishedTime = this.time;
            this.notifyFinished();
        };
    }
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/animation/waapi/easing/is-supported.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isWaapiSupportedEasing",
    ()=>isWaapiSupportedEasing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$supported$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/waapi/easing/supported.mjs [app-client] (ecmascript)");
;
;
;
function isWaapiSupportedEasing(easing) {
    return Boolean(typeof easing === "function" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsLinearEasing"])() || !easing || typeof easing === "string" && (easing in __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$supported$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportedWaapiEasing"] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsLinearEasing"])()) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBezierDefinition"])(easing) || Array.isArray(easing) && easing.every(isWaapiSupportedEasing));
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/animation/waapi/supports/partial-keyframes.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supportsPartialKeyframes",
    ()=>supportsPartialKeyframes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/memo.mjs [app-client] (ecmascript)");
;
const supportsPartialKeyframes = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(()=>{
    try {
        document.createElement("div").animate({
            opacity: [
                1
            ]
        });
    } catch (e) {
        return false;
    }
    return true;
});
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "camelToDash",
    ()=>camelToDash
]);
function camelToDash(str) {
    return str.replace(/([A-Z])/g, (match)=>"-".concat(match.toLowerCase()));
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/effects/utils/create-dom-effect.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSelectorEffect",
    ()=>createSelectorEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs [app-client] (ecmascript)");
;
function createSelectorEffect(subjectEffect) {
    return (subject, values)=>{
        const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveElements"])(subject);
        const subscriptions = [];
        for (const element of elements){
            const remove = subjectEffect(element, values);
            subscriptions.push(remove);
        }
        return ()=>{
            for (const remove of subscriptions)remove();
        };
    };
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/effects/MotionValueState.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionValueState",
    ()=>MotionValueState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$maps$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/types/maps/number.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$get$2d$as$2d$type$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs [app-client] (ecmascript)");
;
;
;
class MotionValueState {
    set(name, value, render, computed) {
        let useDefaultValueType = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
        const existingValue = this.values.get(name);
        if (existingValue) {
            existingValue.onRemove();
        }
        const onChange = ()=>{
            const v = value.get();
            if (useDefaultValueType) {
                this.latest[name] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$get$2d$as$2d$type$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValueAsType"])(v, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$maps$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberValueTypes"][name]);
            } else {
                this.latest[name] = v;
            }
            render && __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].render(render);
        };
        onChange();
        const cancelOnChange = value.on("change", onChange);
        computed && value.addDependent(computed);
        const remove = ()=>{
            cancelOnChange();
            render && (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(render);
            this.values.delete(name);
            computed && value.removeDependent(computed);
        };
        this.values.set(name, {
            value,
            onRemove: remove
        });
        return remove;
    }
    get(name) {
        var _this_values_get;
        return (_this_values_get = this.values.get(name)) === null || _this_values_get === void 0 ? void 0 : _this_values_get.value;
    }
    destroy() {
        for (const value of this.values.values()){
            value.onRemove();
        }
    }
    constructor(){
        this.latest = {};
        this.values = new Map();
    }
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/effects/utils/create-effect.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEffect",
    ()=>createEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$MotionValueState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/effects/MotionValueState.mjs [app-client] (ecmascript)");
;
function createEffect(addValue) {
    const stateCache = new WeakMap();
    const subscriptions = [];
    return (subject, values)=>{
        var _stateCache_get;
        const state = (_stateCache_get = stateCache.get(subject)) !== null && _stateCache_get !== void 0 ? _stateCache_get : new __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$MotionValueState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionValueState"]();
        stateCache.set(subject, state);
        for(const key in values){
            const value = values[key];
            const remove = addValue(subject, state, key, value);
            subscriptions.push(remove);
        }
        return ()=>{
            for (const cancel of subscriptions)cancel();
        };
    };
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/effects/attr/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addAttrValue",
    ()=>addAttrValue,
    "attrEffect",
    ()=>attrEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$camel$2d$to$2d$dash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$utils$2f$create$2d$dom$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/effects/utils/create-dom-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$utils$2f$create$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/effects/utils/create-effect.mjs [app-client] (ecmascript)");
;
;
;
function canSetAsProperty(element, name) {
    if (!(name in element)) return false;
    const descriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(element), name) || Object.getOwnPropertyDescriptor(element, name);
    // Check if it has a setter
    return descriptor && typeof descriptor.set === "function";
}
const addAttrValue = (element, state, key, value)=>{
    const isProp = canSetAsProperty(element, key);
    const name = isProp ? key : key.startsWith("data") || key.startsWith("aria") ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$camel$2d$to$2d$dash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["camelToDash"])(key) : key;
    /**
     * Set attribute directly via property if available
     */ const render = isProp ? ()=>{
        element[name] = state.latest[key];
    } : ()=>{
        const v = state.latest[key];
        if (v === null || v === undefined) {
            element.removeAttribute(name);
        } else {
            element.setAttribute(name, String(v));
        }
    };
    return state.set(key, value, render);
};
const attrEffect = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$utils$2f$create$2d$dom$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelectorEffect"])(/*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$utils$2f$create$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEffect"])(addAttrValue));
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/effects/prop/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "propEffect",
    ()=>propEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$utils$2f$create$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/effects/utils/create-effect.mjs [app-client] (ecmascript)");
;
const propEffect = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$utils$2f$create$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEffect"])((subject, state, key, value)=>{
    return state.set(key, value, ()=>{
        subject[key] = state.latest[key];
    }, undefined, false);
});
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/effects/style/transform.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildTransform",
    ()=>buildTransform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs [app-client] (ecmascript)");
;
const translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
};
function buildTransform(state) {
    let transform = "";
    let transformIsDefault = true;
    /**
     * Loop over all possible transforms in order, adding the ones that
     * are present to the transform string.
     */ for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPropOrder"].length; i++){
        const key = __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPropOrder"][i];
        const value = state.latest[key];
        if (value === undefined) continue;
        let valueIsDefault = true;
        if (typeof value === "number") {
            valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
        } else {
            valueIsDefault = parseFloat(value) === 0;
        }
        if (!valueIsDefault) {
            transformIsDefault = false;
            const transformName = translateAlias[key] || key;
            const valueToRender = state.latest[key];
            transform += "".concat(transformName, "(").concat(valueToRender, ") ");
        }
    }
    return transformIsDefault ? "none" : transform.trim();
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/effects/style/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addStyleValue",
    ()=>addStyleValue,
    "styleEffect",
    ()=>styleEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$is$2d$css$2d$var$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/render/dom/is-css-var.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$html$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/is-html-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$utils$2f$create$2d$dom$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/effects/utils/create-dom-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$utils$2f$create$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/effects/utils/create-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$style$2f$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/effects/style/transform.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
const originProps = new Set([
    "originX",
    "originY",
    "originZ"
]);
const addStyleValue = (element, state, key, value)=>{
    let render = undefined;
    let computed = undefined;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformProps"].has(key)) {
        if (!state.get("transform")) {
            // If this is an HTML element, we need to set the transform-box to fill-box
            // to normalise the transform relative to the element's bounding box
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$html$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) && !state.get("transformBox")) {
                addStyleValue(element, state, "transformBox", new __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionValue"]("fill-box"));
            }
            state.set("transform", new __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionValue"]("none"), ()=>{
                element.style.transform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$style$2f$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildTransform"])(state);
            });
        }
        computed = state.get("transform");
    } else if (originProps.has(key)) {
        if (!state.get("transformOrigin")) {
            state.set("transformOrigin", new __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionValue"](""), ()=>{
                var _state_latest_originX;
                const originX = (_state_latest_originX = state.latest.originX) !== null && _state_latest_originX !== void 0 ? _state_latest_originX : "50%";
                var _state_latest_originY;
                const originY = (_state_latest_originY = state.latest.originY) !== null && _state_latest_originY !== void 0 ? _state_latest_originY : "50%";
                var _state_latest_originZ;
                const originZ = (_state_latest_originZ = state.latest.originZ) !== null && _state_latest_originZ !== void 0 ? _state_latest_originZ : 0;
                element.style.transformOrigin = "".concat(originX, " ").concat(originY, " ").concat(originZ);
            });
        }
        computed = state.get("transformOrigin");
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$is$2d$css$2d$var$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCSSVar"])(key)) {
        render = ()=>{
            element.style.setProperty(key, state.latest[key]);
        };
    } else {
        render = ()=>{
            element.style[key] = state.latest[key];
        };
    }
    return state.set(key, value, render, computed);
};
const styleEffect = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$utils$2f$create$2d$dom$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelectorEffect"])(/*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$utils$2f$create$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEffect"])(addStyleValue));
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/effects/svg/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "svgEffect",
    ()=>svgEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/types/numbers/units.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$attr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/effects/attr/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$style$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/effects/style/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$utils$2f$create$2d$dom$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/effects/utils/create-dom-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$utils$2f$create$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/effects/utils/create-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
const toPx = __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"].transform;
function addSVGPathValue(element, state, key, value) {
    __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].render(()=>element.setAttribute("pathLength", "1"));
    if (key === "pathOffset") {
        return state.set(key, value, ()=>element.setAttribute("stroke-dashoffset", toPx(-state.latest[key])));
    } else {
        if (!state.get("stroke-dasharray")) {
            state.set("stroke-dasharray", new __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionValue"]("1 1"), ()=>{
                const { pathLength = 1, pathSpacing } = state.latest;
                element.setAttribute("stroke-dasharray", "".concat(toPx(pathLength), " ").concat(toPx(pathSpacing !== null && pathSpacing !== void 0 ? pathSpacing : 1 - Number(pathLength))));
            });
        }
        return state.set(key, value, undefined, state.get("stroke-dasharray"));
    }
}
const addSVGValue = (element, state, key, value)=>{
    if (key.startsWith("path")) {
        return addSVGPathValue(element, state, key, value);
    } else if (key.startsWith("attr")) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$attr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAttrValue"])(element, state, convertAttrKey(key), value);
    }
    const handler = key in element.style ? __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$style$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addStyleValue"] : __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$attr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAttrValue"];
    return handler(element, state, key, value);
};
const svgEffect = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$utils$2f$create$2d$dom$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelectorEffect"])(/*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$utils$2f$create$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEffect"])(addSVGValue));
function convertAttrKey(key) {
    return key.replace(/^attr([A-Z])/, (_, firstChar)=>firstChar.toLowerCase());
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/stats/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "recordStats",
    ()=>recordStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$animation$2d$count$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/stats/animation-count.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/stats/buffer.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
;
;
;
function record() {
    const { value } = __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"];
    if (value === null) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(record);
        return;
    }
    value.frameloop.rate.push(__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"].delta);
    value.animations.mainThread.push(__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$animation$2d$count$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeAnimations"].mainThread);
    value.animations.waapi.push(__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$animation$2d$count$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeAnimations"].waapi);
    value.animations.layout.push(__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$animation$2d$count$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeAnimations"].layout);
}
function mean(values) {
    return values.reduce((acc, value)=>acc + value, 0) / values.length;
}
function summarise(values) {
    let calcAverage = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : mean;
    if (values.length === 0) {
        return {
            min: 0,
            max: 0,
            avg: 0
        };
    }
    return {
        min: Math.min(...values),
        max: Math.max(...values),
        avg: calcAverage(values)
    };
}
const msToFps = (ms)=>Math.round(1000 / ms);
function clearStatsBuffer() {
    __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"].value = null;
    __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"].addProjectionMetrics = null;
}
function reportStats() {
    const { value } = __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"];
    if (!value) {
        throw new Error("Stats are not being measured");
    }
    clearStatsBuffer();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(record);
    const summary = {
        frameloop: {
            setup: summarise(value.frameloop.setup),
            rate: summarise(value.frameloop.rate),
            read: summarise(value.frameloop.read),
            resolveKeyframes: summarise(value.frameloop.resolveKeyframes),
            preUpdate: summarise(value.frameloop.preUpdate),
            update: summarise(value.frameloop.update),
            preRender: summarise(value.frameloop.preRender),
            render: summarise(value.frameloop.render),
            postRender: summarise(value.frameloop.postRender)
        },
        animations: {
            mainThread: summarise(value.animations.mainThread),
            waapi: summarise(value.animations.waapi),
            layout: summarise(value.animations.layout)
        },
        layoutProjection: {
            nodes: summarise(value.layoutProjection.nodes),
            calculatedTargetDeltas: summarise(value.layoutProjection.calculatedTargetDeltas),
            calculatedProjections: summarise(value.layoutProjection.calculatedProjections)
        }
    };
    /**
     * Convert the rate to FPS
     */ const { rate } = summary.frameloop;
    rate.min = msToFps(rate.min);
    rate.max = msToFps(rate.max);
    rate.avg = msToFps(rate.avg);
    [rate.min, rate.max] = [
        rate.max,
        rate.min
    ];
    return summary;
}
function recordStats() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"].value) {
        clearStatsBuffer();
        throw new Error("Stats are already being measured");
    }
    const newStatsBuffer = __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"];
    newStatsBuffer.value = {
        frameloop: {
            setup: [],
            rate: [],
            read: [],
            resolveKeyframes: [],
            preUpdate: [],
            update: [],
            preRender: [],
            render: [],
            postRender: []
        },
        animations: {
            mainThread: [],
            waapi: [],
            layout: []
        },
        layoutProjection: {
            nodes: [],
            calculatedTargetDeltas: [],
            calculatedProjections: []
        }
    };
    newStatsBuffer.addProjectionMetrics = (metrics)=>{
        const { layoutProjection } = newStatsBuffer.value;
        layoutProjection.nodes.push(metrics.nodes);
        layoutProjection.calculatedTargetDeltas.push(metrics.calculatedTargetDeltas);
        layoutProjection.calculatedProjections.push(metrics.calculatedProjections);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].postRender(record, true);
    return reportStats;
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/utils/stagger.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOriginIndex",
    ()=>getOriginIndex,
    "stagger",
    ()=>stagger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$map$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/easing/utils/map.mjs [app-client] (ecmascript)");
;
function getOriginIndex(from, total) {
    if (from === "first") {
        return 0;
    } else {
        const lastIndex = total - 1;
        return from === "last" ? lastIndex : lastIndex / 2;
    }
}
function stagger() {
    let duration = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0.1, { startDelay = 0, from = 0, ease } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return (i, total)=>{
        const fromIndex = typeof from === "number" ? from : getOriginIndex(from, total);
        const distance = Math.abs(fromIndex - i);
        let delay = duration * distance;
        if (ease) {
            const maxDelay = total * duration;
            const easingFunction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$map$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easingDefinitionToFunction"])(ease);
            delay = easingFunction(delay / maxDelay) * maxDelay;
        }
        return startDelay + delay;
    };
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/value/subscribe-value.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "subscribeValue",
    ()=>subscribeValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
;
function subscribeValue(inputValues, outputValue, getLatest) {
    const update = ()=>outputValue.set(getLatest());
    const scheduleUpdate = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].preRender(update, false, true);
    const subscriptions = inputValues.map((v)=>v.on("change", scheduleUpdate));
    outputValue.on("destroy", ()=>{
        subscriptions.forEach((unsubscribe)=>unsubscribe());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(update);
    });
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/value/transform-value.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transformValue",
    ()=>transformValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$subscribe$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/subscribe-value.mjs [app-client] (ecmascript)");
;
;
/**
 * Create a `MotionValue` that transforms the output of other `MotionValue`s by
 * passing their latest values through a transform function.
 *
 * Whenever a `MotionValue` referred to in the provided function is updated,
 * it will be re-evaluated.
 *
 * ```jsx
 * const x = motionValue(0)
 * const y = transformValue(() => x.get() * 2) // double x
 * ```
 *
 * @param transformer - A transform function. This function must be pure with no side-effects or conditional statements.
 * @returns `MotionValue`
 *
 * @public
 */ function transformValue(transform) {
    const collectedValues = [];
    /**
     * Open session of collectMotionValues. Any MotionValue that calls get()
     * inside transform will be saved into this array.
     */ __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectMotionValues"].current = collectedValues;
    const initialValue = transform();
    __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectMotionValues"].current = undefined;
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(initialValue);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$subscribe$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeValue"])(collectedValues, value, transform);
    return value;
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/value/map-value.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mapValue",
    ()=>mapValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$transform$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/transform-value.mjs [app-client] (ecmascript)");
;
;
/**
 * Create a `MotionValue` that maps the output of another `MotionValue` by
 * mapping it from one range of values into another.
 *
 * @remarks
 *
 * Given an input range of `[-200, -100, 100, 200]` and an output range of
 * `[0, 1, 1, 0]`, the returned `MotionValue` will:
 *
 * - When provided a value between `-200` and `-100`, will return a value between `0` and  `1`.
 * - When provided a value between `-100` and `100`, will return `1`.
 * - When provided a value between `100` and `200`, will return a value between `1` and  `0`
 *
 * The input range must be a linear series of numbers. The output range
 * can be any value type supported by Motion: numbers, colors, shadows, etc.
 *
 * Every value in the output range must be of the same type and in the same format.
 *
 * ```jsx
 * const x = motionValue(0)
 * const xRange = [-200, -100, 100, 200]
 * const opacityRange = [0, 1, 1, 0]
 * const opacity = mapValue(x, xRange, opacityRange)
 * ```
 *
 * @param inputValue - `MotionValue`
 * @param inputRange - A linear series of numbers (either all increasing or decreasing)
 * @param outputRange - A series of numbers, colors or strings. Must be the same length as `inputRange`.
 * @param options -
 *
 *  - clamp: boolean. Clamp values to within the given range. Defaults to `true`
 *  - ease: EasingFunction[]. Easing functions to use on the interpolations between each value in the input and output ranges. If provided as an array, the array must be one item shorter than the input and output ranges, as the easings apply to the transition between each.
 *
 * @returns `MotionValue`
 *
 * @public
 */ function mapValue(inputValue, inputRange, outputRange, options) {
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transform"])(inputRange, outputRange, options);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$transform$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformValue"])(()=>map(inputValue.get()));
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/view/utils/choose-layer-type.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chooseLayerType",
    ()=>chooseLayerType
]);
function chooseLayerType(valueName) {
    if (valueName === "layout") return "group";
    if (valueName === "enter" || valueName === "new") return "new";
    if (valueName === "exit" || valueName === "old") return "old";
    return "group";
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/view/utils/css.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "css",
    ()=>css
]);
let pendingRules = {};
let style = null;
const css = {
    set: (selector, values)=>{
        pendingRules[selector] = values;
    },
    commit: ()=>{
        if (!style) {
            style = document.createElement("style");
            style.id = "motion-view";
        }
        let cssText = "";
        for(const selector in pendingRules){
            const rule = pendingRules[selector];
            cssText += "".concat(selector, " {\n");
            for (const [property, value] of Object.entries(rule)){
                cssText += "  ".concat(property, ": ").concat(value, ";\n");
            }
            cssText += "}\n";
        }
        style.textContent = cssText;
        document.head.appendChild(style);
        pendingRules = {};
    },
    remove: ()=>{
        if (style && style.parentElement) {
            style.parentElement.removeChild(style);
        }
    }
};
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/view/utils/get-layer-info.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getViewAnimationLayerInfo",
    ()=>getViewAnimationLayerInfo
]);
function getViewAnimationLayerInfo(pseudoElement) {
    const match = pseudoElement.match(/::view-transition-(old|new|group|image-pair)\((.*?)\)/);
    if (!match) return null;
    return {
        layer: match[2],
        type: match[1]
    };
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/view/utils/get-view-animations.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getViewAnimations",
    ()=>getViewAnimations
]);
function filterViewAnimations(animation) {
    var _effect_pseudoElement;
    const { effect } = animation;
    if (!effect) return false;
    return effect.target === document.documentElement && ((_effect_pseudoElement = effect.pseudoElement) === null || _effect_pseudoElement === void 0 ? void 0 : _effect_pseudoElement.startsWith("::view-transition"));
}
function getViewAnimations() {
    return document.getAnimations().filter(filterViewAnimations);
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/view/utils/has-target.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasTarget",
    ()=>hasTarget
]);
function hasTarget(target, targets) {
    return targets.has(target) && Object.keys(targets.get(target)).length > 0;
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/view/start.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "startViewAnimation",
    ()=>startViewAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$GroupAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/GroupAnimation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimationWrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/NativeAnimationWrapper.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$map$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$apply$2d$generator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$choose$2d$layer$2d$type$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/view/utils/choose-layer-type.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/view/utils/css.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$get$2d$layer$2d$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/view/utils/get-layer-info.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$get$2d$view$2d$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/view/utils/get-view-animations.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$has$2d$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/view/utils/has-target.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
const definitionNames = [
    "layout",
    "enter",
    "exit",
    "new",
    "old"
];
function startViewAnimation(builder) {
    const { update, targets, options: defaultOptions } = builder;
    if (!document.startViewTransition) {
        return new Promise(async (resolve)=>{
            await update();
            resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$GroupAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupAnimation"]([]));
        });
    }
    // TODO: Go over existing targets and ensure they all have ids
    /**
     * If we don't have any animations defined for the root target,
     * remove it from being captured.
     */ if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$has$2d$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasTarget"])("root", targets)) {
        __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"].set(":root", {
            "view-transition-name": "none"
        });
    }
    /**
     * Set the timing curve to linear for all view transition layers.
     * This gets baked into the keyframes, which can't be changed
     * without breaking the generated animation.
     *
     * This allows us to set easing via updateTiming - which can be changed.
     */ __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"].set("::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*)", {
        "animation-timing-function": "linear !important"
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"].commit(); // Write
    const transition = document.startViewTransition(async ()=>{
        await update();
    // TODO: Go over new targets and ensure they all have ids
    });
    transition.finished.finally(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"].remove(); // Write
    });
    return new Promise((resolve)=>{
        transition.ready.then(()=>{
            const generatedViewAnimations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$get$2d$view$2d$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getViewAnimations"])();
            const animations = [];
            /**
             * Create animations for each of our explicitly-defined subjects.
             */ targets.forEach((definition, target)=>{
                // TODO: If target is not "root", resolve elements
                // and iterate over each
                for (const key of definitionNames){
                    if (!definition[key]) continue;
                    const { keyframes, options } = definition[key];
                    for (let [valueName, valueKeyframes] of Object.entries(keyframes)){
                        if (!valueKeyframes) continue;
                        const valueOptions = {
                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValueTransition"])(defaultOptions, valueName),
                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValueTransition"])(options, valueName)
                        };
                        const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$choose$2d$layer$2d$type$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chooseLayerType"])(key);
                        /**
                         * If this is an opacity animation, and keyframes are not an array,
                         * we need to convert them into an array and set an initial value.
                         */ if (valueName === "opacity" && !Array.isArray(valueKeyframes)) {
                            const initialValue = type === "new" ? 0 : 1;
                            valueKeyframes = [
                                initialValue,
                                valueKeyframes
                            ];
                        }
                        /**
                         * Resolve stagger function if provided.
                         */ if (typeof valueOptions.delay === "function") {
                            valueOptions.delay = valueOptions.delay(0, 1);
                        }
                        valueOptions.duration && (valueOptions.duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(valueOptions.duration));
                        valueOptions.delay && (valueOptions.delay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(valueOptions.delay));
                        const animation = new __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAnimation"]({
                            ...valueOptions,
                            element: document.documentElement,
                            name: valueName,
                            pseudoElement: "::view-transition-".concat(type, "(").concat(target, ")"),
                            keyframes: valueKeyframes
                        });
                        animations.push(animation);
                    }
                }
            });
            /**
             * Handle browser generated animations
             */ for (const animation of generatedViewAnimations){
                if (animation.playState === "finished") continue;
                const { effect } = animation;
                if (!effect || !(effect instanceof KeyframeEffect)) continue;
                const { pseudoElement } = effect;
                if (!pseudoElement) continue;
                const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$get$2d$layer$2d$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getViewAnimationLayerInfo"])(pseudoElement);
                if (!name) continue;
                const targetDefinition = targets.get(name.layer);
                if (!targetDefinition) {
                    /**
                     * If transition name is group then update the timing of the animation
                     * whereas if it's old or new then we could possibly replace it using
                     * the above method.
                     */ const transitionName = name.type === "group" ? "layout" : "";
                    let animationTransition = {
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValueTransition"])(defaultOptions, transitionName)
                    };
                    animationTransition.duration && (animationTransition.duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(animationTransition.duration));
                    animationTransition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$apply$2d$generator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyGeneratorOptions"])(animationTransition);
                    const easing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$map$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapEasingToNativeEasing"])(animationTransition.ease, animationTransition.duration);
                    var _animationTransition_delay;
                    effect.updateTiming({
                        delay: (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])((_animationTransition_delay = animationTransition.delay) !== null && _animationTransition_delay !== void 0 ? _animationTransition_delay : 0),
                        duration: animationTransition.duration,
                        easing
                    });
                    animations.push(new __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimationWrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAnimationWrapper"](animation));
                } else if (hasOpacity(targetDefinition, "enter") && hasOpacity(targetDefinition, "exit") && effect.getKeyframes().some((keyframe)=>keyframe.mixBlendMode)) {
                    animations.push(new __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimationWrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAnimationWrapper"](animation));
                } else {
                    animation.cancel();
                }
            }
            resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$GroupAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupAnimation"](animations));
        });
    });
}
function hasOpacity(target, key) {
    var _target_key;
    return target === null || target === void 0 ? void 0 : (_target_key = target[key]) === null || _target_key === void 0 ? void 0 : _target_key.keyframes.opacity;
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/view/queue.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addToQueue",
    ()=>addToQueue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/array.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$microtask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/frameloop/microtask.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$start$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/view/start.mjs [app-client] (ecmascript)");
;
;
;
let builders = [];
let current = null;
function next() {
    current = null;
    const [nextBuilder] = builders;
    if (nextBuilder) start(nextBuilder);
}
function start(builder) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"])(builders, builder);
    current = builder;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$start$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startViewAnimation"])(builder).then((animation)=>{
        builder.notifyReady(animation);
        animation.finished.finally(next);
    });
}
function processQueue() {
    var _builders_;
    /**
     * Iterate backwards over the builders array. We can ignore the
     * "wait" animations. If we have an interrupting animation in the
     * queue then we need to batch all preceeding animations into it.
     * Currently this only batches the update functions but will also
     * need to batch the targets.
     */ for(let i = builders.length - 1; i >= 0; i--){
        const builder = builders[i];
        const { interrupt } = builder.options;
        if (interrupt === "immediate") {
            const batchedUpdates = builders.slice(0, i + 1).map((b)=>b.update);
            const remaining = builders.slice(i + 1);
            builder.update = ()=>{
                batchedUpdates.forEach((update)=>update());
            };
            // Put the current builder at the front, followed by any "wait" builders
            builders = [
                builder,
                ...remaining
            ];
            break;
        }
    }
    if (!current || ((_builders_ = builders[0]) === null || _builders_ === void 0 ? void 0 : _builders_.options.interrupt) === "immediate") {
        next();
    }
}
function addToQueue(builder) {
    builders.push(builder);
    __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$microtask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["microtask"].render(processQueue);
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/view/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ViewTransitionBuilder",
    ()=>ViewTransitionBuilder,
    "animateView",
    ()=>animateView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$queue$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/view/queue.mjs [app-client] (ecmascript)");
;
;
class ViewTransitionBuilder {
    get(subject) {
        this.currentSubject = subject;
        return this;
    }
    layout(keyframes, options) {
        this.updateTarget("layout", keyframes, options);
        return this;
    }
    new(keyframes, options) {
        this.updateTarget("new", keyframes, options);
        return this;
    }
    old(keyframes, options) {
        this.updateTarget("old", keyframes, options);
        return this;
    }
    enter(keyframes, options) {
        this.updateTarget("enter", keyframes, options);
        return this;
    }
    exit(keyframes, options) {
        this.updateTarget("exit", keyframes, options);
        return this;
    }
    crossfade(options) {
        this.updateTarget("enter", {
            opacity: 1
        }, options);
        this.updateTarget("exit", {
            opacity: 0
        }, options);
        return this;
    }
    updateTarget(target, keyframes) {
        let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        const { currentSubject, targets } = this;
        if (!targets.has(currentSubject)) {
            targets.set(currentSubject, {});
        }
        const targetData = targets.get(currentSubject);
        targetData[target] = {
            keyframes,
            options
        };
    }
    then(resolve, reject) {
        return this.readyPromise.then(resolve, reject);
    }
    constructor(update, options = {}){
        this.currentSubject = "root";
        this.targets = new Map();
        this.notifyReady = __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
        this.readyPromise = new Promise((resolve)=>{
            this.notifyReady = resolve;
        });
        this.update = update;
        this.options = {
            interrupt: "wait",
            ...options
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$queue$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToQueue"])(this);
    }
}
function animateView(update) {
    let defaultOptions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return new ViewTransitionBuilder(update, defaultOptions);
}
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/frameloop/index-legacy.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cancelSync",
    ()=>cancelSync,
    "sync",
    ()=>sync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$order$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/frameloop/order.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
;
;
/**
 * @deprecated
 *
 * Import as `frame` instead.
 */ const sync = __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"];
/**
 * @deprecated
 *
 * Use cancelFrame(callback) instead.
 */ const cancelSync = __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$order$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stepsOrder"].reduce((acc, key)=>{
    acc[key] = (process)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(process);
    return acc;
}, {});
;
}),
"[project]/photohub/node_modules/motion-dom/dist/es/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AsyncMotionValueAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$AsyncMotionValueAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsyncMotionValueAnimation"],
    "DOMKeyframesResolver",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$DOMKeyframesResolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMKeyframesResolver"],
    "GroupAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$GroupAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupAnimation"],
    "GroupAnimationWithThen",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$GroupAnimationWithThen$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupAnimationWithThen"],
    "JSAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$JSAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JSAnimation"],
    "KeyframeResolver",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$KeyframesResolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyframeResolver"],
    "MotionValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionValue"],
    "NativeAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAnimation"],
    "NativeAnimationExtended",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimationExtended$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAnimationExtended"],
    "NativeAnimationWrapper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimationWrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAnimationWrapper"],
    "ViewTransitionBuilder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewTransitionBuilder"],
    "acceleratedValues",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$accelerated$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["acceleratedValues"],
    "activeAnimations",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$animation$2d$count$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeAnimations"],
    "addAttrValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$attr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAttrValue"],
    "addStyleValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$style$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addStyleValue"],
    "alpha",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"],
    "analyseComplexValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyseComplexValue"],
    "animateValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$JSAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateValue"],
    "animateView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateView"],
    "animationMapKey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$active$2d$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animationMapKey"],
    "applyGeneratorOptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$apply$2d$generator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyGeneratorOptions"],
    "applyPxDefaults",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$apply$2d$px$2d$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyPxDefaults"],
    "attachSpring",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$spring$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachSpring"],
    "attrEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$attr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attrEffect"],
    "calcGeneratorDuration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$calc$2d$duration$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcGeneratorDuration"],
    "cancelFrame",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"],
    "cancelMicrotask",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$microtask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelMicrotask"],
    "cancelSync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$index$2d$legacy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelSync"],
    "collectMotionValues",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectMotionValues"],
    "color",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["color"],
    "complex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["complex"],
    "convertOffsetToTimes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertOffsetToTimes"],
    "createGeneratorEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$create$2d$generator$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGeneratorEasing"],
    "createRenderBatcher",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$batcher$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRenderBatcher"],
    "cubicBezierAsString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezierAsString"],
    "defaultEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultEasing"],
    "defaultOffset",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$default$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultOffset"],
    "defaultTransformValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$parse$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultTransformValue"],
    "defaultValueTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$maps$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultValueTypes"],
    "degrees",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"],
    "dimensionValueTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$dimensions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dimensionValueTypes"],
    "fillOffset",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$fill$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fillOffset"],
    "fillWildcards",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$fill$2d$wildcards$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fillWildcards"],
    "findDimensionValueType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$dimensions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findDimensionValueType"],
    "findValueType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$find$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findValueType"],
    "flushKeyframeResolvers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$KeyframesResolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushKeyframeResolvers"],
    "frame",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"],
    "frameData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"],
    "frameSteps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameSteps"],
    "generateLinearEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$linear$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateLinearEasing"],
    "getAnimatableNone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$animatable$2d$none$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimatableNone"],
    "getAnimationMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$active$2d$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimationMap"],
    "getComputedStyle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$style$2d$computed$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"],
    "getDefaultValueType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$maps$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultValueType"],
    "getMixer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$complex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMixer"],
    "getOriginIndex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$stagger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOriginIndex"],
    "getValueAsType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$get$2d$as$2d$type$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValueAsType"],
    "getValueTransition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValueTransition"],
    "getVariableValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$css$2d$variables$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVariableValue"],
    "getViewAnimationLayerInfo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$get$2d$layer$2d$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getViewAnimationLayerInfo"],
    "getViewAnimations",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$get$2d$view$2d$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getViewAnimations"],
    "hex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$hex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hex"],
    "hover",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$hover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hover"],
    "hsla",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$hsla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hsla"],
    "hslaToRgba",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$hsla$2d$to$2d$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hslaToRgba"],
    "inertia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$inertia$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inertia"],
    "interpolate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$interpolate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"],
    "invisibleValues",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$visibility$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invisibleValues"],
    "isCSSVariableName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$css$2d$variable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCSSVariableName"],
    "isCSSVariableToken",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$css$2d$variable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCSSVariableToken"],
    "isDragActive",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragActive"],
    "isDragging",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"],
    "isGenerator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$is$2d$generator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isGenerator"],
    "isHTMLElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$html$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"],
    "isMotionValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"],
    "isNodeOrChild",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$node$2d$or$2d$child$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeOrChild"],
    "isPrimaryPointer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$primary$2d$pointer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPrimaryPointer"],
    "isSVGElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGElement"],
    "isSVGSVGElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGSVGElement"],
    "isWaapiSupportedEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$is$2d$supported$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWaapiSupportedEasing"],
    "keyframes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"],
    "makeAnimationInstant",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$make$2d$animation$2d$instant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeAnimationInstant"],
    "mapEasingToNativeEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$map$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapEasingToNativeEasing"],
    "mapValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$map$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapValue"],
    "maxGeneratorDuration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$calc$2d$duration$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxGeneratorDuration"],
    "microtask",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$microtask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["microtask"],
    "mix",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mix"],
    "mixArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$complex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixArray"],
    "mixColor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColor"],
    "mixComplex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$complex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixComplex"],
    "mixImmediate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$immediate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixImmediate"],
    "mixLinearColor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixLinearColor"],
    "mixNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"],
    "mixObject",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$complex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixObject"],
    "mixVisibility",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$visibility$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixVisibility"],
    "motionValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"],
    "number",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
    "numberValueTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$maps$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberValueTypes"],
    "observeTimeline",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$scroll$2f$observe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observeTimeline"],
    "parseCSSVariable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$css$2d$variables$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseCSSVariable"],
    "parseValueFromTransform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$parse$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseValueFromTransform"],
    "percent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percent"],
    "positionalKeys",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$position$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["positionalKeys"],
    "press",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["press"],
    "progressPercentage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressPercentage"],
    "propEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$prop$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propEffect"],
    "px",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    "readTransformValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$parse$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readTransformValue"],
    "recordStats",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordStats"],
    "resize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$resize$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resize"],
    "resolveElements",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveElements"],
    "rgbUnit",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgbUnit"],
    "rgba",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgba"],
    "scale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"],
    "setDragLock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$set$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDragLock"],
    "setStyle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$style$2d$set$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStyle"],
    "spring",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spring"],
    "springValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$spring$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["springValue"],
    "stagger",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$stagger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stagger"],
    "startWaapiAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$start$2d$waapi$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startWaapiAnimation"],
    "statsBuffer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"],
    "styleEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$style$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styleEffect"],
    "supportedWaapiEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$supported$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportedWaapiEasing"],
    "supportsBrowserAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$supports$2f$waapi$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsBrowserAnimation"],
    "supportsFlags",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$flags$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsFlags"],
    "supportsLinearEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsLinearEasing"],
    "supportsPartialKeyframes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$supports$2f$partial$2d$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsPartialKeyframes"],
    "supportsScrollTimeline",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsScrollTimeline"],
    "svgEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$svg$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["svgEffect"],
    "sync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$index$2d$legacy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sync"],
    "testValueType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$test$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testValueType"],
    "time",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$sync$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"],
    "transform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transform"],
    "transformPropOrder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPropOrder"],
    "transformProps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformProps"],
    "transformValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$transform$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformValue"],
    "transformValueTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$maps$2f$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformValueTypes"],
    "vh",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vh"],
    "vw",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vw"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$AsyncMotionValueAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$GroupAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/GroupAnimation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$GroupAnimationWithThen$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/GroupAnimationWithThen.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$JSAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/JSAnimation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimationExtended$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimationWrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/NativeAnimationWrapper.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$active$2d$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/utils/active-animations.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$css$2d$variables$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/utils/css-variables-conversion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$css$2d$variable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/utils/is-css-variable.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$make$2d$animation$2d$instant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$inertia$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/generators/inertia.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/generators/spring/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$calc$2d$duration$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$create$2d$generator$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$is$2d$generator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$DOMKeyframesResolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$KeyframesResolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$default$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$fill$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$apply$2d$px$2d$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/keyframes/utils/apply-px-defaults.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$fill$2d$wildcards$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/waapi/easing/cubic-bezier.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$is$2d$supported$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/waapi/easing/is-supported.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$map$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$supported$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/waapi/easing/supported.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$start$2d$waapi$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$supports$2f$partial$2d$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/waapi/supports/partial-keyframes.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$supports$2f$waapi$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$accelerated$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$apply$2d$generator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$linear$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$attr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/effects/attr/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$prop$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/effects/prop/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$style$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/effects/style/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$svg$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/effects/svg/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$batcher$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/frameloop/batcher.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$microtask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/frameloop/microtask.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$sync$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/frameloop/sync-time.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$set$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$hover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/gestures/hover.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/gestures/press/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$node$2d$or$2d$child$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$primary$2d$pointer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$parse$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$style$2d$computed$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/render/dom/style-computed.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$style$2d$set$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/render/dom/style-set.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$position$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/render/utils/keys-position.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$resize$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/resize/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$scroll$2f$observe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/scroll/observe.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/stats/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$animation$2d$count$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/stats/animation-count.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/stats/buffer.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$interpolate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/interpolate.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$html$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/is-html-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/is-svg-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/mix/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/mix/color.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$complex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/mix/complex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$immediate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/mix/immediate.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/mix/number.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$visibility$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/mix/visibility.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$stagger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/stagger.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$flags$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/supports/flags.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/utils/transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$map$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/map-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$spring$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/spring-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$transform$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/transform-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/types/color/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$hex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/types/color/hex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$hsla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/types/color/hsla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$hsla$2d$to$2d$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/types/color/rgba.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/types/complex/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$dimensions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/types/dimensions.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$maps$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/types/maps/defaults.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$maps$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/types/maps/number.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$maps$2f$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/types/maps/transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/types/numbers/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/types/numbers/units.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$test$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/types/test.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$animatable$2d$none$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/types/utils/animatable-none.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$find$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/types/utils/find.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$get$2d$as$2d$type$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/view/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$get$2d$layer$2d$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/view/utils/get-layer-info.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$get$2d$view$2d$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/view/utils/get-view-animations.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$index$2d$legacy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/frameloop/index-legacy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
}),
"[project]/photohub/node_modules/framer-motion/dist/es/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatePresence",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"],
    "AnimateSharedLayout",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimateSharedLayout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimateSharedLayout"],
    "AsyncMotionValueAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsyncMotionValueAnimation"],
    "DOMKeyframesResolver",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMKeyframesResolver"],
    "DeprecatedLayoutGroupContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$DeprecatedLayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeprecatedLayoutGroupContext"],
    "DragControls",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$use$2d$drag$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DragControls"],
    "FlatTree",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$utils$2f$flat$2d$tree$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlatTree"],
    "GroupAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupAnimation"],
    "GroupAnimationWithThen",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupAnimationWithThen"],
    "JSAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JSAnimation"],
    "KeyframeResolver",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyframeResolver"],
    "LayoutGroup",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutGroup"],
    "LayoutGroupContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$LayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutGroupContext"],
    "LazyMotion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LazyMotion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LazyMotion"],
    "MotionConfig",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$MotionConfig$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfig"],
    "MotionConfigContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfigContext"],
    "MotionContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionContext$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionContext"],
    "MotionGlobalConfig",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionGlobalConfig"],
    "MotionValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionValue"],
    "NativeAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAnimation"],
    "NativeAnimationExtended",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAnimationExtended"],
    "NativeAnimationWrapper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAnimationWrapper"],
    "PresenceContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$PresenceContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresenceContext"],
    "Reorder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$namespace$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "SubscriptionManager",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubscriptionManager"],
    "SwitchLayoutGroupContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$SwitchLayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchLayoutGroupContext"],
    "ViewTransitionBuilder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewTransitionBuilder"],
    "VisualElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$VisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisualElement"],
    "WillChangeMotionValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$will$2d$change$2f$WillChangeMotionValue$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WillChangeMotionValue"],
    "acceleratedValues",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["acceleratedValues"],
    "activeAnimations",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeAnimations"],
    "addAttrValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAttrValue"],
    "addPointerEvent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$add$2d$pointer$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPointerEvent"],
    "addPointerInfo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$event$2d$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPointerInfo"],
    "addScaleCorrector",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$styles$2f$scale$2d$correction$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addScaleCorrector"],
    "addStyleValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addStyleValue"],
    "addUniqueItem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addUniqueItem"],
    "alpha",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"],
    "analyseComplexValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyseComplexValue"],
    "animate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"],
    "animateMini",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animators$2f$waapi$2f$animate$2d$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateMini"],
    "animateValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateValue"],
    "animateView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateView"],
    "animateVisualElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateVisualElement"],
    "animationControls",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$animation$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animationControls"],
    "animationMapKey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animationMapKey"],
    "animations",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animations"],
    "anticipate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anticipate"],
    "applyGeneratorOptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyGeneratorOptions"],
    "applyPxDefaults",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyPxDefaults"],
    "attachSpring",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachSpring"],
    "attrEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attrEffect"],
    "backIn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backIn"],
    "backInOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backInOut"],
    "backOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backOut"],
    "buildTransform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$build$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildTransform"],
    "calcGeneratorDuration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcGeneratorDuration"],
    "calcLength",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcLength"],
    "cancelFrame",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"],
    "cancelMicrotask",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelMicrotask"],
    "cancelSync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelSync"],
    "circIn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circIn"],
    "circInOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circInOut"],
    "circOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circOut"],
    "clamp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"],
    "collectMotionValues",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectMotionValues"],
    "color",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["color"],
    "complex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["complex"],
    "convertOffsetToTimes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertOffsetToTimes"],
    "createBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"],
    "createGeneratorEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGeneratorEasing"],
    "createRenderBatcher",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRenderBatcher"],
    "createScopedAnimate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScopedAnimate"],
    "cubicBezier",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"],
    "cubicBezierAsString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezierAsString"],
    "defaultEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultEasing"],
    "defaultOffset",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultOffset"],
    "defaultTransformValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultTransformValue"],
    "defaultValueTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultValueTypes"],
    "degrees",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"],
    "delay",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$delay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["delay"],
    "dimensionValueTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dimensionValueTypes"],
    "disableInstantTransitions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$instant$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disableInstantTransitions"],
    "distance",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$distance$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distance"],
    "distance2D",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$distance$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distance2D"],
    "domAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$features$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["domAnimation"],
    "domMax",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$features$2d$max$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["domMax"],
    "domMin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$features$2d$min$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["domMin"],
    "easeIn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeIn"],
    "easeInOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"],
    "easeOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeOut"],
    "easingDefinitionToFunction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easingDefinitionToFunction"],
    "fillOffset",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fillOffset"],
    "fillWildcards",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fillWildcards"],
    "filterProps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$filter$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterProps"],
    "findDimensionValueType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findDimensionValueType"],
    "findValueType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findValueType"],
    "flushKeyframeResolvers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushKeyframeResolvers"],
    "frame",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"],
    "frameData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"],
    "frameSteps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameSteps"],
    "generateLinearEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateLinearEasing"],
    "getAnimatableNone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimatableNone"],
    "getAnimationMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimationMap"],
    "getComputedStyle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"],
    "getDefaultValueType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultValueType"],
    "getEasingForSegment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEasingForSegment"],
    "getMixer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMixer"],
    "getOriginIndex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOriginIndex"],
    "getValueAsType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValueAsType"],
    "getValueTransition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValueTransition"],
    "getVariableValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVariableValue"],
    "getViewAnimationLayerInfo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getViewAnimationLayerInfo"],
    "getViewAnimations",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getViewAnimations"],
    "hasWarned",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasWarned"],
    "hex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hex"],
    "hover",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hover"],
    "hsla",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hsla"],
    "hslaToRgba",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hslaToRgba"],
    "inView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$viewport$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inView"],
    "inertia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inertia"],
    "interpolate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"],
    "invariant",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"],
    "invisibleValues",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invisibleValues"],
    "isBezierDefinition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBezierDefinition"],
    "isBrowser",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$is$2d$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowser"],
    "isCSSVariableName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCSSVariableName"],
    "isCSSVariableToken",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCSSVariableToken"],
    "isDragActive",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragActive"],
    "isDragging",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"],
    "isEasingArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEasingArray"],
    "isGenerator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isGenerator"],
    "isHTMLElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"],
    "isMotionComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$is$2d$motion$2d$component$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionComponent"],
    "isMotionValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"],
    "isNodeOrChild",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeOrChild"],
    "isNumericalString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumericalString"],
    "isObject",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"],
    "isPrimaryPointer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPrimaryPointer"],
    "isSVGElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGElement"],
    "isSVGSVGElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGSVGElement"],
    "isValidMotionProp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$valid$2d$prop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidMotionProp"],
    "isWaapiSupportedEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWaapiSupportedEasing"],
    "isZeroValueString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isZeroValueString"],
    "keyframes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"],
    "m",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"],
    "makeAnimationInstant",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeAnimationInstant"],
    "makeUseVisualState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$use$2d$visual$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeUseVisualState"],
    "mapEasingToNativeEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapEasingToNativeEasing"],
    "mapValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapValue"],
    "maxGeneratorDuration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxGeneratorDuration"],
    "memo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"],
    "microtask",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["microtask"],
    "millisecondsToSeconds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"],
    "mirrorEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mirrorEasing"],
    "mix",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mix"],
    "mixArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixArray"],
    "mixColor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColor"],
    "mixComplex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixComplex"],
    "mixImmediate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixImmediate"],
    "mixLinearColor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixLinearColor"],
    "mixNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"],
    "mixObject",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixObject"],
    "mixVisibility",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixVisibility"],
    "motion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"],
    "motionValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"],
    "moveItem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moveItem"],
    "noop",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"],
    "number",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
    "numberValueTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberValueTypes"],
    "observeTimeline",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observeTimeline"],
    "optimizedAppearDataAttribute",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$data$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optimizedAppearDataAttribute"],
    "parseCSSVariable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseCSSVariable"],
    "parseValueFromTransform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseValueFromTransform"],
    "percent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percent"],
    "pipe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"],
    "positionalKeys",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["positionalKeys"],
    "press",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["press"],
    "progress",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progress"],
    "progressPercentage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressPercentage"],
    "propEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propEffect"],
    "px",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    "readTransformValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readTransformValue"],
    "recordStats",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordStats"],
    "removeItem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"],
    "resize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resize"],
    "resolveElements",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveElements"],
    "resolveMotionValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$utils$2f$resolve$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMotionValue"],
    "reverseEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseEasing"],
    "rgbUnit",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgbUnit"],
    "rgba",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgba"],
    "scale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"],
    "scroll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scroll"],
    "scrollInfo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$track$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollInfo"],
    "secondsToMilliseconds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"],
    "setDragLock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDragLock"],
    "setStyle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStyle"],
    "spring",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spring"],
    "springValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["springValue"],
    "stagger",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stagger"],
    "startOptimizedAppearAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$start$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOptimizedAppearAnimation"],
    "startWaapiAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startWaapiAnimation"],
    "statsBuffer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"],
    "steps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["steps"],
    "styleEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styleEffect"],
    "supportedWaapiEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportedWaapiEasing"],
    "supportsBrowserAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsBrowserAnimation"],
    "supportsFlags",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsFlags"],
    "supportsLinearEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsLinearEasing"],
    "supportsPartialKeyframes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsPartialKeyframes"],
    "supportsScrollTimeline",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsScrollTimeline"],
    "svgEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["svgEffect"],
    "sync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sync"],
    "testValueType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testValueType"],
    "time",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"],
    "transform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transform"],
    "transformPropOrder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPropOrder"],
    "transformProps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformProps"],
    "transformValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformValue"],
    "transformValueTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformValueTypes"],
    "unwrapMotionComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$unwrap$2d$motion$2d$component$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unwrapMotionComponent"],
    "useAnimate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimate"],
    "useAnimateMini",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animate$2d$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimateMini"],
    "useAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"],
    "useAnimationControls",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationControls"],
    "useAnimationFrame",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationFrame"],
    "useCycle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$cycle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCycle"],
    "useDeprecatedAnimatedState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animated$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimatedState"],
    "useDeprecatedInvertedScale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$inverted$2d$scale$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInvertedScale"],
    "useDomEvent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$use$2d$dom$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDomEvent"],
    "useDragControls",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$use$2d$drag$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragControls"],
    "useElementScroll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$scroll$2f$use$2d$element$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useElementScroll"],
    "useForceUpdate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$force$2d$update$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForceUpdate"],
    "useInView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
    "useInstantLayoutTransition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$use$2d$instant$2d$layout$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInstantLayoutTransition"],
    "useInstantTransition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$instant$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInstantTransition"],
    "useIsPresent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$use$2d$presence$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsPresent"],
    "useIsomorphicLayoutEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"],
    "useMotionTemplate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionTemplate"],
    "useMotionValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
    "useMotionValueEvent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"],
    "usePageInView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$page$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePageInView"],
    "usePresence",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$use$2d$presence$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePresence"],
    "usePresenceData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$use$2d$presence$2d$data$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePresenceData"],
    "useReducedMotion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
    "useReducedMotionConfig",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotionConfig"],
    "useResetProjection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$use$2d$reset$2d$projection$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResetProjection"],
    "useScroll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
    "useSpring",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
    "useTime",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTime"],
    "useTransform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
    "useUnmountEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$unmount$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUnmountEffect"],
    "useVelocity",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$velocity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVelocity"],
    "useViewportScroll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$scroll$2f$use$2d$viewport$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useViewportScroll"],
    "useWillChange",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$will$2d$change$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWillChange"],
    "velocityPerSecond",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["velocityPerSecond"],
    "vh",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vh"],
    "visualElementStore",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visualElementStore"],
    "vw",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vw"],
    "warnOnce",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warnOnce"],
    "warning",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warning"],
    "wrap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrap"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LazyMotion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$MotionConfig$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$add$2d$pointer$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/events/add-pointer-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$event$2d$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/events/event-info.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/motion/features/animations.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$use$2d$visual$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/projection/geometry/models.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$filter$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$is$2d$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/is-browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$force$2d$update$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-force-update.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$unmount$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$features$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/dom/features-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$features$2d$max$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/dom/features-max.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$features$2d$min$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/dom/features-min.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$scroll$2f$use$2d$element$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/value/scroll/use-element-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$scroll$2f$use$2d$viewport$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/value/scroll/use-viewport-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/value/use-motion-template.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/value/use-time.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$velocity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/value/use-velocity.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$will$2d$change$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/value/use-will-change/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$will$2d$change$2f$WillChangeMotionValue$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/value/use-will-change/WillChangeMotionValue.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$utils$2f$resolve$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion-config.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-utils/dist/es/global-config.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$animation$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/hooks/animation-controls.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/hooks/use-animate.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animate$2d$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/hooks/use-animate-style.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/interfaces/visual-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$use$2d$presence$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$use$2d$presence$2d$data$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence-data.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$use$2d$dom$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/events/use-dom-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$use$2d$drag$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/gestures/drag/use-drag-controls.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$is$2d$motion$2d$component$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/motion/utils/is-motion-component.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$unwrap$2d$motion$2d$component$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/motion/utils/unwrap-motion-component.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$valid$2d$prop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$styles$2f$scale$2d$correction$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$use$2d$instant$2d$layout$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/projection/use-instant-layout-transition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$use$2d$reset$2d$projection$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/projection/use-reset-projection.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$build$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/store.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$VisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/VisualElement.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-animation-frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$cycle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-cycle.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$instant$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-instant-transition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$page$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/use-page-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$data$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/optimized-appear/data-id.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$start$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/optimized-appear/start.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$LayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionContext$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/context/MotionContext/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$PresenceContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/context/PresenceContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$SwitchLayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$utils$2f$flat$2d$tree$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animated$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/hooks/use-animated-state.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimateSharedLayout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/components/AnimateSharedLayout.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$DeprecatedLayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/context/DeprecatedLayoutGroupContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$inverted$2d$scale$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/value/use-inverted-scale.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$delay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/delay.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$namespace$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/components/Reorder/namespace.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animators$2f$waapi$2f$animate$2d$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/animation/animators/waapi/animate-style.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/dom/scroll/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$track$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$viewport$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$distance$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/framer-motion/dist/es/utils/distance.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$photohub$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/photohub/node_modules/motion-dom/dist/es/index.mjs [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=420a0_a3b61ea0._.js.map