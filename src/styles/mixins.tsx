import { Dimensions, PixelRatio, TextStyle, ViewStyle } from 'react-native';
import { number } from 'prop-types';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const widthPercentageToDP = (widthPercent: string) => {

    // Convert string input to decimal number
    const elemWidth = parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel(DEVICE_WIDTH * elemWidth / 100);
};

const heightPercentageToDP = (heightPercent: string) => {

    // Convert string input to decimal number
    const elemHeight = parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel(DEVICE_HEIGHT * elemHeight / 100);
};

export {
    widthPercentageToDP,
    heightPercentageToDP
};

const guidelineBaseWidth = 375;

export const scaleSize = (size: number) => (DEVICE_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = (size: number) => size * PixelRatio.getFontScale();

function dimensions(top: number, right = top, bottom = top, left = right, property: string) {
    let styles = {
        [`${property}Top`]: top,
        [`${property}Right`]: right,
        [`${property}Bottom`]: bottom,
        [`${property}Left`]: left
    }
    return styles;
}

export function margin(top: number, right: number, bottom: number, left: number) {
    return dimensions(top, right, bottom, left, 'margin');
}

export function padding(top: number, right: number, bottom: number, left: number) {
    return dimensions(top, right, bottom, left, 'padding');
}

export function boxShadow(color: String, offset = { height: 2, width: 2 },
    radius = 8, opacity = 0.2) {
    return {
        shadowColor: color,
        shadowOffset: offset,
        shadowOpacity: opacity,
        shadowRadius: radius,
        elevation: radius,
    };
}