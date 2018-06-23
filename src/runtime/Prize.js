/**
 * @description 奖品类
 */
import {Sprite} from "../base/Sprite"
export class Prize extends Sprite{
  constructor(img,x=0,y=0,zx,zy){
    const image = Sprite.getImage(img);
    super(image,0,0,image.width,image.height,x,y,zx||image.width,zy||image.height)
  }
}
