import {Sprite} from "../base/Sprite";
import {BackGround} from "./BackGround";
export  class  SelectedBackGround extends BackGround{
  constructor(x,y) {
    let image = Sprite.getImage('bg2');
    super(image,x,y)
  }
}