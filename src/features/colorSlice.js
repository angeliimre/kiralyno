import { createSlice } from "@reduxjs/toolkit";

const colorReducer=createSlice({
    name:'colour',
    initialState:{
        value:[],
        msg:""
    },
    reducers:{
        setArr: (state,action)=>{
            const sor=state.value.findIndex(function(pos){
                return pos.row==action.payload.row;
            })
            const oszlop=state.value.findIndex(function(pos){
                return pos.col==action.payload.col;
            })
            function atlo(r,c){
                let r1=r;
                let c1=c;
                let r2=r;
                let c2=c;
                let r3=r;
                let c3=c;
                let r4=r;
                let c4=c;
                while(r1>=0&&c1>=0||r2>=0&&c2<8||r3<8&&c3>=0||r4<8&&c4<8){
                    r1-=1;
                    c1-=1;
                    r2-=1;
                    c2+=1;
                    r3+=1;
                    c3-=1;
                    r4+=1;
                    c4+=1;
                    const index=state.value.findIndex(function(pos){
                        return (pos.row==r1&&pos.col==c1)||(pos.row==r2&&pos.col==c2)||(pos.row==r3&&pos.col==c3)||(pos.row==r4&&pos.col==c4);
                    });
                    if(index!=-1){
                        return false;
                    }
                }
                return true;
            }
            if(sor==-1&&oszlop==-1&&atlo(action.payload.row,action.payload.col)){
                state.value=[...state.value,action.payload];
                state.value=[...state.value];
                state.msg="";
            }else if(sor!=-1){
                state.msg="Ez a sor már foglalt";
            }else if(oszlop!=-1){
                state.msg="Ez az oszlop már foglalt";
            }else{
                state.msg="Ez az átló már foglalt";
            }

            if(sor!=-1&&oszlop!=-1){
                const index=state.value.findIndex(function(pos){
                    return pos.row==action.payload.row&&pos.col==action.payload.col;
                });
                state.value.splice(index,1);
                state.value=[...state.value];
            }

            if(state.value.length==8){
                state.msg="Gratulálok nyertél!";
            }
        }
    }
})

export const {setArr}=colorReducer.actions;
export default colorReducer.reducer;