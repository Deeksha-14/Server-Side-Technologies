function add(n1, n2)
{
    return n1+n2;
}

function sub(a,b)
{
    return a+b;
}

function mul(a,b)
{
    return a*b;
}

function div(a,b)
{
    if(a<b)
    {
        console.log("a can not be smaller than b")
    }else if(b=0)
    {
        console.log("b can not be zero")
    }else 
    {var c= a/b;
    return c;
    }
}
function sq(a)
{
    return a*a;
}

module.exports = {
    a: add,
    s: sub,
    m: mul,
    d: div,
    squ: sq,

}


// Create a user defined local module calc.js that exposes the following functions: add(a,b),
// subtract(a,b), multiply(a,b), divide(a,b), square(a), sum(a,b,c...)
// Create a client application that invokes each of these methods
