export class AttandanceList {

    constructor(){

     this.names = [];

    }

    add(name){
        if(this.names.includes(name))
        return false;
        else
        this.names.push(name);

    }

    place(name,index){
        this.index=get.names;
    }

    has(name){
        if(this.names=name)
            return this.index
        else
            return false;
    }

    getList(){
        return this.names;
    }

}