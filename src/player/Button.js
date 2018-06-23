//开始按钮类
/**
 * @description 游戏按键
 */
import {Sprite} from "../base/Sprite.js";
import {DataStore} from "../base/DataStore.js";
export class Button extends Sprite {
    constructor(img) {
        const image = Sprite.getImage(img);
        super(
            image,
            0, 0,
            image.width, image.height,
            (DataStore.getInstance().canvas.width - image.width) / 2,
            (DataStore.getInstance().canvas.height - image.height) / 1.2,
            image.width, image.height
        );

    }
}
