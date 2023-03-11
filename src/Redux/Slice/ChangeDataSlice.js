import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const AddNewData=createAsyncThunk(
    'AddNewData',
    async(Newdata)=>{
        const ConfigData={
            method:'POST',
            url:`https://bakery-api.onrender.com/Cart`,
            headers: {
                'Content-Type': 'application/json',
            },
            data:Newdata
        };
        const Newresponse= await axios(ConfigData)
        .then(function (Newresponse){
            console.log('done')
        })
            .catch(function(err){
                console.log("errrror" ,err)
           
        });
        return Newresponse.data
    }
)
export const DeleteData=createAsyncThunk(
    'DeleteData',
    
    async(data)=>{
        const response= await axios.delete(`https://bakery-api.onrender.com/Cart/${data.id}`)
        return response.data
    }

)
export const ChangeDataSlice=createSlice({
    name:'changeData',
    initialState:{
        data:[],
        status:null,
        
    },
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.addCase(AddNewData.fulfilled,(state, payload)=>{
            console.log('success')

        })
        builder.addCase(AddNewData.pending,(state)=>{
            console.log('loading')

        })
        builder.addCase(AddNewData.rejected,(state)=>{
            // console.log('failed')

        })



        builder.addCase(DeleteData.fulfilled,(state, payload)=>{
            console.log('success')

        })
        builder.addCase(DeleteData.pending,(state)=>{
            console.log('loading')

        })
        builder.addCase(DeleteData.rejected,(state)=>{
            console.log('failed')

        })


    },
})


export default ChangeDataSlice.reducer