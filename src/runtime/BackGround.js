/**
 * @description 游戏背景
 */
import {Sprite} from "../base/Sprite"
import {DataStore} from "../base/DataStore";
export class BackGround extends Sprite{
  constructor(){
    let image  = Sprite.getImage('background');
    let width = DataStore.getInstance().canvas.width;
    let height = DataStore.getInstance().canvas.height;
    super(image,0,0,image.width,image.height,0,0,width,height)
  }
}
