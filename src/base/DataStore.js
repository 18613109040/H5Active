/**
 * @author hdl
 * @description 负责游戏所有资源管理
 */
export  class  DataStore{
  static getInstance(){
    if(!DataStore.instance){
      DataStore.instance = new DataStore();
    }
    return DataStore.instance;
  }
  constructor(){
    this.map = new Map();
  }
  /**
   * @param {String} key
   * @param {any} value
   * @returns 当前实例
   */
  put(key,value){
    if (typeof value === 'function') {
      value = new value();
    }
    this.map.set(key,value);
    return this
  }
  get(key){
    return this.map.get(key)
  }
  destroy(){
    for(let value of this.map.values()){
        value = null;
    }
  }
}
