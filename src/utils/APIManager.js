import axios from 'axios'

export default {
    
    get:(url,params,callback) => {
        axios.get(url).then(function(response){
            if(response.data.confirmation!='Success'){
                callback({message:'Resource not found, Axios get failed'}, null)
                return
            }
            callback(null, response.data.content)
        }).catch(function(error){
            callback(error, null)
        })
    },
    
    post:(url, params, callback)=> {
        axios.post(url, params).then(function(response){
            console.log(response.data.confirmation)
            if(response.data.confirmation!='Success'){
                callback({message:'Failed to create resource'}, null)
                return
            }
            callback(null, response.data.content)
        }).catch(function(error){
            callback(error, null)
        })
    },
    
    put:()=>{
        
    },
    
    delete:()=>{
        
}
    
}
