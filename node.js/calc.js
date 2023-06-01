 exports.addition = function(n1 , n2){
    return n1+n2;
}
//public function
exports.perm = function(n, r)
{
    var a = factorial(n)/(factorial(n)-factorial(r))
    return a;
}
//private function
const fact = function(n)
{f=1;
    for(var i=1; i<=n; i++)
    {
        f=f*i
    }
    return f;
}
