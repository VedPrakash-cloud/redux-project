import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name:'search',
    initialState:{
        query:'',
        activeTab:'photos',
        results:[],
        loading:false,
        error:null,
        page:1,
        totalPage:0
    },
    reducers:{
        setQuery(state, action){
            state.query = action.payload
        },
        setPage(state, action){
            state.page = action.payload
        },
        setTotalPage(state, action){
            state.totalPage = action.payload
        },
        setActiveTab(state, action){
            state.activeTab = action.payload
        },
        setResult(state, action){
            state.results = action.payload
            state.loading = false
        },
        setLoading(state){
            state.loading = true
            state.error = null
        },
        setError(state, action){
            state.error = action.payload
            state.loading = false
        },
        clearResults(state){
            state.results=[]
        }

    }
});

export const {setQuery, setActiveTab, setPage, setTotalPage, setResult, setLoading, setError, clearResults} = searchSlice.actions;
export default searchSlice.reducer;