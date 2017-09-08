var Zone = require('../models/Zones')

module.exports = {
    
    find:function(params, callback){
        
        Zone.find(params, function(err, zones){
            if(err){
               callback(err, null)
                return
            }
            callback(null, zones)
        })
    },
    
    findById:function(id, callback){
        Zone.findById(id, function(err, zone){
            if(err){
                callback(err, null)
                return
            }
            callback(null, zone)
        })
        
    },
    
    create:function(params, callback){
        
        var zips = params['zipcodes']
        var newZips = []
        var zip = zips.split(',')
        zip.forEach(function(element){
            newZips.push(element.trim())
        })
        params['zipcodes'] = newZips
            
        Zone.create(params, function(err, zone){
            if(err){
                callback(err, null)
                return
            }
            callback(null, zone)
        })
    },
    
    update:function(id, params, callback){
        Zone.findByIdAndUpdate(id, params, {new:true}, function(err, zone){
            if(err){
                callback(err, null)
                return
            }
            callback(zone, null)
        })
        
    },
    
    delete:function(id, callback){
        
        Zone.findByIdAndRemove(id, function(err){
            if(err){
                callback(err, null)
                return
            }
            callback(null, null)
        })
    }
}