import { Dimensions, Platform } from 'react-native';
var iPhoneHelper = /** @class */ (function () {
    function iPhoneHelper() {
    }
    iPhoneHelper.isIphoneX = function () {
        var dim = Dimensions.get('window');
        if (dim.height < dim.width)
            return false;
        return (
        // This has to be iOS
        Platform.OS === 'ios' &&
            // Check either, iPhone X or XR
            (iPhoneHelper.isIPhoneXSize(dim) ||
                iPhoneHelper.isIPhoneXsSize(dim) ||
                iPhoneHelper.isIPhone12Size(dim) ||
                iPhoneHelper.isIPhone12MaxSize(dim)));
    };
    iPhoneHelper.isIPhoneXSize = function (dim) {
        return dim.height == 812 || dim.width == 812;
    };
    iPhoneHelper.isIPhoneXsSize = function (dim) {
        return dim.height == 896 || dim.width == 896;
    };
    iPhoneHelper.isIPhone12Size = function (dim) {
        return dim.height === 896 || dim.width === 896;
    };
    iPhoneHelper.isIPhone12MaxSize = function (dim) {
        return dim.height === 926 || dim.width === 926;
    };
    iPhoneHelper.selectIPhone = function (options) {
        return iPhoneHelper.isIphoneX() ? options.forX : options.default;
    };
    return iPhoneHelper;
}());
export default iPhoneHelper;
