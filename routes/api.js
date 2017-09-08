var express = require('express')
var router = express.Router()
var controllers = require('../controllers')

router.get('/:resource', function(req, res, next){
        var controller = controllers[req.params.resource]
        
        controller.find(req.query, function(err, results){
            if(err){
                res.json({
                    confirmation:"Failure",
                    content:err
                })
                return
            }
    
            res.json({
                confirmation:"Success",
                content:results
            })
        })
    
    
})

router.post('/:resource', function(req, res, next){
    var controller = controllers[req.params.resource]
    
    controller.create(req.body, function(err, result){
        if(err){
            res.json({
                confirmation:"Failed to create resource",
                content:err
            })
            return
        }
        res.json({
            confirmation:"Success!",
            content:result
        })
    })
})

router.get('/:resource/:id', function(req, res, next){
    var controller = controllers[req.params.resource]
    
    controller.findById(req.params.id, function(err, result){
        if(err){
            res.json({
                confirmation:"Failed to find resource",
                content:err
            })
            return
        }
        res.json({
            confirmation:"Success!",
            content:result
        })
    })
})


module.exports = router