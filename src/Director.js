/**
 * @author hdl
 * @version 1.0
 * @description 导演类负责整个游戏的业务逻辑，资源管理
 */
import {DataStore} from "./base/DataStore";
import { Prize } from "./runtime/Prize";
import { Sprite } from "./base/Sprite";

export  class  Director{
  static  getInstance(){
    if(!Director.instance){
      Director.instance = new Director();
    }
    return Director.instance
  }
  constructor(){
    this.dataStore = DataStore.getInstance();
    this.moveSpeed = 0;
    this.moveWidth = 0;
    this.speed = 10; //移动速度
    this.prizeNumber = 1; //
    this.cycles = 4;
  }
  /**
   * @description 创建奖品 默认创建两个奖品
   */
  createPrizes(){
    for(let i=0;i<2;i++){
      let image = Sprite.getImage('prize_'+i)
      const width = this.dataStore.canvas.width
      const height = this.dataStore.canvas.height
      this.dataStore.get('prizes').push(new Prize('prize_'+i,(width*(i+1))/2-image.width/2,(height-image.height)/2))
    }
  }
  /**
   * @description 运行速度
   */
  upSpeed(){
    this.moveSpeed = this.moveSpeed+this.speed
    this.moveWidth = this.moveWidth+this.speed
  }

  run(){
      this.dataStore.get('background').draw();
      const width = this.dataStore.canvas.width
      const height = this.dataStore.canvas.height
      if(this.isStart){
        this.dataStore.get('runButton').draw();
        if(this.dataStore.get('prizes').length>=18 && this.dataStore.get('prizes').length<30){
          if(this.speed >= 20)
            this.speed--
        }else if(this.dataStore.get('prizes').length>=30 && this.dataStore.get('prizes').length<42){
          if(this.speed >= 1){
            this.speed--
          }else{
            console.log('抽奖结束');
            this.isStart = false
            window.cancelAnimationFrame(this.dataStore.get('timer'));
            this.dataStore.destroy();
            // this.isPendding = false
          }
        }
        this.upSpeed()
      }else{
        this.dataStore.get('startButton').draw();
        this.moveSpeed = this.moveSpeed+this.speed
        this.moveWidth = this.moveWidth+this.speed
      }
      if(this.moveWidth >= width/4){
        this.prizeNumber++
        if(this.prizeNumber>5){
          this.prizeNumber=0;
        }
        this.dataStore.get('prizes').push(new Prize('prize_'+this.prizeNumber))
        this.moveWidth = 0;
      }
      for(let i=0;i<this.dataStore.get('prizes').length;i++){
        let n = i>=6 ? i%6 : i
        let image = Sprite.getImage('prize_'+n)
        this.dataStore.get('prizes')[i] = (new Prize('prize_'+n,(width*(i+1))/1.8-image.width/2-this.moveSpeed,height/2-image.height/2))
      }
      this.dataStore.get('prizes').forEach(function (value) {
        value.draw();
      });
      let timer = window.requestAnimationFrame(() => this.run());
      this.dataStore.put('timer', timer);
  }
}
