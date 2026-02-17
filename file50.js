//Race Condition (returns the first promise that settles (resolves or reject)).
//Promise.allSettled():waits for all promises, whether resolved or rejected.


function p1()               //promise1
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("P1 success")
        },5000)
    })
}

function p2()               //promise2
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         //   resolve("P2 success")
         reject("P2 failed")
        },2000)
    })
}

function p3()               //promise3
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("P3 success")
        },2000)
    })
}

// async function main()
// { try{ const result = await Promise.all([p1(), p2(), p3()]);
//     console.log(result)
// } catch(e)
// {console.log(e)}
// }
//     // const result = await Promise.all([p1(), p2(), p3()]);
//     // console.log(result)


// main()



// async function main()
// { try{ const result = await Promise.any([p1(), p2(), p3()]);   //p1 prints because of time
//     console.log(result)
// } catch(e)
// {console.log(e)}
// }
    

// main()



// async function main()
// { try{ const result = await Promise.any([p1(), p2(), p3()]);   //p3 prints because of time
//     console.log(result)
// } catch(e)
// {console.log(e)}
// }
// main()


async function main()
 { try//{ const result = await Promise.race([p1(), p2(), p3()]);   //race condition
     { const result = await Promise.allSettled([p1(), p2(), p3()]); //allSettled 
    console.log(result)
} catch(e)
{console.log(e)}
}
main()