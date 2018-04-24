export class InfoMsg {
    INFO = 1;
    WARNING = 2;
    ERROR = 3;
    private MSG_TYPES = [1,2,3];        
    type;
    title;
    discription;
    okFunc;    
    constructor (type: number, title: String, discription: String, func: Function){
        if (this.MSG_TYPES.includes(type)) {
        this.type = type;
        this.title = title;
        this.discription = discription; 
        this.okFunc = func;       
        }
    }
}