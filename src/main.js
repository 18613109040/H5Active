import {DataStore} from './base/DataStore'
import {ResourceLoader} from './base/ResourceLoader'
import {Director} from "./Director";
import {BackGround} from "./runtime/BackGround";
import { StartButton } from './player/StartButton';
import { RunButton } from './player/RunButton';
export class Main {
  constructor(id = "myCanvas") {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext('2d');
    this.dataStore = DataStore.getInstance();
    this.director = Director.getInstance();
    const loader = ResourceLoader.create();
    loader.onLoaded((map) => this.onResourceFirstLoaded(map))
  }

  onResourceFirstLoaded(map) {
    this.dataStore.canvas = this.canvas;
    this.dataStore.ctx = this.ctx;
    this.dataStore.res = map;
    this.init();
  }

  init() {
    this.director.isStart = false;
    this.dataStore
        .put('background',BackGround)
        .put('prizes',[])
        .put('startButton', StartButton)
        .put('runButton',RunButton)
    this.registerEvent();
    this.director.createPrizes()
    this.director.run();

  }

  registerEvent() {
    this.canvas.addEventListener('click', e => {
        //屏蔽掉JS的事件冒泡
        e.preventDefault();
        if (!this.director.isStart) {
            console.log('开始抽奖');
            this.dataStore.put('prizes',[])
            this.director.createPrizes()
            this.director.isStart = true;
            this.director.moveSpeed = 0;
            this.director.moveWidth = 0;
            this.director.speed = 40;
            this.director.prizeNumber = 0
        } else {

        }
    });
  }

}
