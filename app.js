// const addd=require("./work")

// // 1
// console.log("hello from ws node")

// console.log(addd.name)
// console.log(module)
// addd.add(2,3)

// const path=require("path")

// console.log(path.extname(__filename))

const fs =require("fs")

    //create a file
    fs.writeFile("exempla.txt","this is an exmeple",err=>{
        if(err){console.log(err)}  else{
            console.log("created with success")
            fs.readFile("exempla.txt","utf8",(err,file)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log(file)
                }
            })
        } 
            
            
    })
    //  rename file
    // fs.rename("exemplee.txt","exemple.txt",err=>{
    //     err ?console.log(err) : console.log("renamed succesfuly") 
    // })

    // append file
    // fs.appendFile("exemple.txt","new data added",err=>{
    //     err?console.log(err) : console.log("succesfully added") 
    // })

    //delete file 
    // fs.unlink("exemple.txt",err=>{
    //     err? console.log(err): console.log("deleted success") 
    // })

    // cretae directory 
    // fs.mkdir("work",err=>{
    //     if(err){
    //         console.log(err)
    //     }else{
    //         console.log("folder created")
    //         fs.writeFile("./work/work.txt","workkkkkk",err=>{
    //             if(err){
    //                 console.log(err)
    //             }else{
    //                 console.log("cretetd  file in folder")
    //             }
    //         })
    //     }
    // })
    // Delete folder
    const http=require("http")
    // fs.unlink("./work/work.txt",err=>{
    //     err?console.log(err):console.log("deleted file success")
    // })
    // fs.rmdir("work",err=>{
    //     if(err){
    //         console.log("zee",err)
    //     }else{
    //         console.log("deleted folder success")
    //     }
    // })

    const serve=http.createServer((req,res)=>{
        res.write("hello world")
        res.end()
    })
    serve.listen(3000,"127.0.0.1",()=>{
        console.log("server")
    })
