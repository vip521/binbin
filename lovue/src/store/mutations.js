export default {
    historyFn(state,value){
        state.historyDataA.push(value)
        console.log(1,value)
        this.state.historyHide=true
    },
    dele(state){
        state.historyDataA=[];
        this.state.historyHide = false
    }
}