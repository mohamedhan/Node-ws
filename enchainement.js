
// what's node js?
    // powerful runtime environment for executing javascript code / server side platform built on 
    // google chrome's
    //   javascript engine (V8 engine)

// ==========> Architecture Node : 
//             - javascript engine (every browser ) : js code---> js engine---->code machine
//                          microsoft edge: chakra  / firefox: spider monkey /  chrome :v8
//             -Ryan Dahl : execute js outside of browser
//                       took v8 engine( fastest js engine) and embedded it in c++ program called Node

//     Node js uses an even-driven , non-blocking I/O model that makes it lightweight and effcient ,
//      perfect for data-intensive real time apps tha run across distributed devices.


// Due to non -blocking( asunchronous)  highly-sacalable , data-intensive and real-time apps
// ==========>   single thread / multiple thread / non blocking


// Special about node :easy to get started  :
// 	great for prototyping 
// 	superfast and highly scalable 
// 	javascript everywhere
// 	cleaner and more consistent codebase
// 	large ecosystem of open-source libs

// Node JS Stats:
//    -Amazon, Netflix, eBay, Reddit, LinkedIn, Tumblr, and PayPal all use Node JS.
//    -43% of Node JS devs use it for enterprise applications.
//    -85% use it primarily for web app development.
//    -PayPal saw a 35% decrease in average response time on its page after deploying Node JS.
//    -Not only that – Node JS can increase applications’ performance by 50%.
//    -It also reduces development cost by 58%.
//    -No wonder it is the primary choice for startups.


// - app.js    
   1- console.log("")


    // 3 types de modules : 
    //     local module : 
    //     third party module : on les installe
    //     core module : import sans installer ( fs )

    // fonction add 

    // console.log(process.argv) : node app ( terminal ) / node app "hllo" 14 25 "node"



// - work.js 
    console.log(module)
    // 2-  Creating module :  function add
    // 3-  Loadin a module:  appel function add in app.js ===> (error add is not defined )
    // 4- module.exports add in work.js
    // 5- export new variable : 
            name="mohamed"
    // 6-export object  :
                          module.exports={
                                    add,
                                    name:name
                                }
                            ou      module.exports.add=add
                                    module.exports.name=name


    // Documentation node
// ==========================================  
//  __dirname / __filename / exports 
    //path
const path=require("path")

    console.log(__filename)
    console.log(path.parse(__filename))
    console.log(path.dirname(__filename))
    console.log(path.extname(__filename))
// ==========================================
const os=require("os")
// information about each cpu 
console.log(os.cpus())
//cpu architecture
console.log(os.arch())
//tatal memory in bytes
console.log(os.totalmem())
// free memory 
console.log(os.freemem())
// ==========================================
    //file system
const fs =require("fs")
// =========================

    //create a file
    fs.writeFile("exempla.txt","this is an exmeple",err=>{
        if(err){console.log(err)}  else{
            console.log("created with success")
            // ------
            fs.readFile("exempla.txt",(err,file)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log(file)
                }
            })
            
        } 
            
            
    }) ==> "utf8"
// =========================    
    //  rename file
    fs.rename("exemplee.txt","exemple.txt",err=>{
        err ?console.log(err) : console.log("renamed succesfuly") 
    })
// =========================
    //append file
    fs.appendFile("exemple.txt","new data added",err=>{
        err?console.log(err) : console.log("succesfully added") 
    })
// =========================
    //delete file 
    fs.unlink("exemple.txt",err=>{
        err? console.log(err): console.log("deleted success") 
    })
// =========================
    // create directory 
    fs.mkdir("work",err=>{
        if(err){
            console.log(err)
        }else{
            console.log("folder created")
            // -------delete folder
            fs.rmdir("work",err=>{
                if(err){
                    console.log(err)
                }else{
                    console.log("deleted suc")
                }
            })
            // -------create File
            fs.writeFile("./work/work.txt","workkkkkk",err=>{
                if(err){
                    console.log(err)
                }else{
                    console.log("cretetd  file in folder")
                }
            })
        }
    })
    // read directory
    fs.readdir("./",(err,files)=>{
        if(err) console.log(err)
        else console.log(files)
    })
    // Delete directory
    fs.rmdir("work",err=>{
        if(err){
            console.log("zee",err)
        }else{
            console.log("deleted folder success")
        }
    })
    ===error
    // before deleteing folder we delete file 
    fs.unlink("./work/work.txt",err=>{
        err?console.log(err):console.log("deleted file success")
    })

