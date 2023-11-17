var i = 0;

while (i<99)
{
    i++;
    console.log(`${100-i} bottles of beer on the wall, ${100-i} bottles of beer.`);
    console.log(`Take one down and pass it around, ${99-i} bottles of beer on the wall.\n`);
}

console.log("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.")