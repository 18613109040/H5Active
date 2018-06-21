import {Sprite} from "../base/Sprite"
import {DataStore} from "../base/DataStore";
export class Prize extends Sprite{
  constructor(img,x=0,y=0){
    const image = Sprite.getImage(img);
    let width = DataStore.getInstance().canvas.width;
    let height = DataStore.getInstance().canvas.height;
    super(image,0,0,image.width,image.height,x,y,width/3,width/3)
  }
}