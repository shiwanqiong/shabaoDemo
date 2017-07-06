/**
 * Created by Administrator on 2017/5/3.
 */
export const getStore=name=>{
  if(!name){
    return false
  }
  return window.sessionStorage.getItem(name);
}
export const setStore=(name,content)=>{
  if(!name) return;
  if(typeof(content)!='string'){
    content=JSON.stringify(content);
  }
  window.sessionStorage.setItem(name,content);
}
