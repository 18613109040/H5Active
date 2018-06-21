import {BackGround} from "./BackGround";
import {Sprite} from "../base/Sprite";
export  class  DefaultBackGround extends  BackGround{
  constructor(x,y){
    let image = Sprite.getImage('bg');
    super(image,x,y)
  }
}