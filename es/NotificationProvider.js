var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useRef } from "react";
import { View } from "react-native";
import NotificationContext from "./NotificationContext";
import NotificationsContainer from "./NotificationsContainer";
var NotificationProvider = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var dispatch = useRef(function () { });
    return (React.createElement(NotificationContext.Provider, { value: {
            dispatch: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return dispatch.current.apply(dispatch, args);
            },
        } },
        React.createElement(View, { style: { flex: 1 } }, children),
        React.createElement(NotificationsContainer, __assign({ onSetDispatch: function (f) { return dispatch.current = f; } }, props))));
};
export default NotificationProvider;
