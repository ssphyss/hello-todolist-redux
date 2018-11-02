import * as constants from './constants';
import { /* fromJS, */ Map } from 'immutable';

// 把數據對象轉化成immutable對象
const defaultState = Map( {
    inputValue: '',
    list: [
        {id: "1" ,inputValue: "11", type: "no" },
        {id: "2" ,inputValue: "22", type: "ok" }
    ]	
})

// set() 對於數據的修改，是對原數據進行操作後的值賦值給一個新的數據，
// 並不會對原數據進行修改，因為Immutable是不可變的數據類型。
// set() ：設置第一層key、index的值
export default (state = defaultState, action) => {
    /**
     * TodoAdd
     * */
    // 12.輸入框變更偵測
    if (action.type === constants.ADD_CHANGE) {        
        return state.set('inputValue', action.value);
    }

    // 17.送出新增,定義一個新資料的格式送出新資料
    if (action.type === constants.ADD_SUBMIT) { 
        // console.log("送出後的新資料list的前一狀態", state.get('list'))
        const [...list] = state.get('list')
        list.unshift({
            id: `${Math.floor(Math.random( )*1000)}`,
            inputValue: state.get('inputValue'),
            type: 'no'
        })
        // state.inputValue = '';  // 不要這樣寫
        const inputValue = '' ;
        return state.set('list', list).set('inputValue', inputValue);
    }

    /**
     * TodoItem (value,index)
     * */
    // 26. 輸入框變更偵測, 告訴 reducer 改變list
    if (action.type === constants.ITEM_CHANGE) { 

        // console.log('-----(更新list)')
        // console.log(`value：${action.payload.value} , index：${action.payload.index}`)

        const index = action.payload.index;
        const val = action.payload.value;

        const [...list] = state.get('list');
        list.map((item) => {
            if(item.id === index){
                item.inputValue = val;
            }
            return item;
        }) 
        return state.set('list', list);
    }

    // 32.刪除
    if (action.type === constants.ITEM_DELETE) {        
        // console.log('action',action.payload.index)

        const index = action.payload.index;

        let [...list] = state.get('list');
        list = list.filter((item) => {
            if(item.id === index){
                return false
            }else {
                return true
            }
        })         
        return state.set('list', list);
    }

    // 37.變更勾選
    if (action.type === constants.CHECKBOX_CHANGE) {        
        // console.log('變更勾選',action.payload.index)
        
        const index = action.payload.index;

        let [...list] = state.get('list');
        
        list = list.map((item) => {
            if(item.id === index){
                let newType;
				if(item.type === "ok"){
					newType = "no";
					console.log(newType)
				}else {
					newType = "ok";
					console.log(newType)
				}
				item.type = newType
            }  
            return item;            
        }) 
        // setTimeout(() => (		
		// 	state.set('list', list)
		// ), 300);
        return state.set('list', list);
    }
    return state;
}

// 範例
// export default (state = defaultState, action) => {
//     if (action.type === constants.SEARCH_FOCUS) {

//         // 引入immutable
//         // immutable對象的set方法,會結合之前的immutable對象的值
//         // 和設置的值.返回一個全新的對象
//         return state.set('focused', true);
//     }
//     if (action.type === constants.SEARCH_BLUR) {

//         return state.set('focused', false);
//     }
//     return state;
// }

// 範例
// const defaultState = {
//     focused: 123
// }
// export default (state = defaultState, action) => {
//     if (action.type === constants.SEARCH_FOCUS) {
//         return {
//         	focused: true
//         }
//     }
//     if (action.type === constants.SEARCH_BLUR) {
//         return {
//         	focused: false
//         }
//     }
//     return state;
// }