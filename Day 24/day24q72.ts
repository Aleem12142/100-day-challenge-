{
    let blockLet: string = "visible inside the block";
    const blockConst: string = "also only inside the blosk";
    console.log(blockLet);
    console.log(blockConst);
}
try{
    // Bellow line will cause compiling error, thats why commented
    // console.log(blockLet);
}catch(error){
    console.log("'blockLet' is not accesable outside the block.");
}
try{
    // Bellow line will cause compiling error, that's why commented
    // console.log(blockConst);
}catch(error){
    console.log("'blockConst' also not accesable outside the block.");
}