function DEcrypt(key,message)
{
    let decode = Buffer.from(message, 'base64')
    let keyBytes = new TextEncoder().encode(key)
    var list = []
    for (i = 0; i < decode.length; i++)
    {
        list.push(parseInt(decode[i].toString()))
    }
    if (key.length > list.length)
    {
        var diff = key.length - list.length
        var bufferKey = Buffer.from(key)
        var sliceKey = bufferKey.subarray(0, key.length - diff).toString()
    }
    if (typeof sliceKey === 'string')
    {
        var newKeyBytes = new TextEncoder().encode(sliceKey)
        for (i = 0; i < list.length; i++)
        {
            list[i] = axis(newKeyBytes[i],list[i])
        }
        return Buffer.from(list).toString()
    }
    else
    {
        for (i = 0; i < list.length; i++)
        {
            list[i] = axis(keyBytes[i],list[i])
        }
        return Buffer.from(list).toString()
    }
}
function axis(key, encoded)
{
    var newByte = formula(key, encoded)
    return newByte
}
function formula(y, a)
{
    var one = y - 25 + 80
    var two = -75 + y - 100
    var three = one + two
    var four = a - three
    return parseInt(four)
}
module.exports = { DEcrypt }