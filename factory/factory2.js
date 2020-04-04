// 安全模式：防止忘了有new关键字
function Factory2(type){
    if(this instanceof Factory2){
        return new this[type]()
    }else{
        return new Factory2(type);
    }
}

Factory2.prototype={
    teenager:function(){
        this.name='teenager'
        this.age=19
    },
    old:function(){
        this.name='old';
        this.age=50;
    }
}