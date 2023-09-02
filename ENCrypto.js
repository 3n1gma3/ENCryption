function ECNcrypt(key,message)
{
    var keyLength = key.length
    var messageLength = message.length
    if (keyLength > messageLength)
    {
        var diff = keyLength - messageLength
        var bufferKey = Buffer.from(key)
        var sliceKey = bufferKey.subarray(0, keyLength - diff)
        var keyNew = sliceKey.toString()
    }
    if (typeof keyNew === 'string')
    {
        var keyBytes = new TextEncoder().encode(keyNew)
        var msgBytes = new TextEncoder().encode(message)
        for (i = 0; i < msgBytes.length; i++)
        {
            msgBytes[i] = axis(keyBytes[i],msgBytes[i])
        }
        var msgByteBuffer = Buffer.from(msgBytes)
        return msgByteBuffer.toString('base64')
    }
    if (keyNew = "undefined")
    {
        var keyBytes = new TextEncoder().encode(key)
        var msgBytes = new TextEncoder().encode(message)
        for (i = 0; i < msgBytes.length; i++)
        {
            msgBytes[i] = axis(keyBytes[i],msgBytes[i])
        }
        var msgByteBuffer = Buffer.from(msgBytes)
        return msgByteBuffer.toString('base64')
    }
}
function axis(a,x)
{
    var z = a - 25 + 80 + x - 75 + a - 100
    if (z == 0)
    {
        return parseInt(0)
    }
    else
    {
        return z
    }
}
module.exports = { axis, ECNcrypt }
