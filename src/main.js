import {DataStore} from './base/DataStore'
import {ResourceLoader} from './base/ResourceLoader'
import {DefaultBackGround} from "./runtime/DefaultBackGround";
import {Director} from "./Director";
import {SelectedBackGround} from "./runtime/SelectedBackGround";
import {BackGround} from "./runtime/BackGround";
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
    this.director.isGameOver = false;
    let width = this.dataStore.canvas.width;
    this.dataStore
        .put('background',BackGround)
        .put('prize',[])
    this.registerEvent();
    this.director.run();

  }

  registerEvent() {
    this.canvas.addEventListener('touchstart', e => {
        //屏蔽掉JS的事件冒泡
        e.preventDefault();
        if (this.director.isGameOver) {
            console.log('游戏开始');
            this.init();
        } else {
            
        }
    });
  }

}