 exports.add = function(n1,n2){
    return n1+n2;
}
//private function
const perm = function(n, r)
{
    var a = factorial(n)/(factorial(n)-factorial(r))
    return a;
}
//pubic function
exports.fact = function(n)
{f=1;
    for(var i=1; i<=n; i++)
    {
        f=f*i
    }
    return f;
}
