interface INgController {
    ctrlName: string;
    save: (params: {key: string, value: number}[]) => void;
}

class Controller implements INgController {
    
    constructor(private seed: number){
        
    }
    
    get ctrlName() {
        return 'Controller ' + this.seed;
    }
    
    save(params:{key: string, value: number}[]): void {
        var idx: number;
    }
}
//https://github.com/JeremyLikness/TypeScript2016Prez/blob/master/examples/003classes.ts