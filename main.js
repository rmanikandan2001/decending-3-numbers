var x= 0;
var y=-1;
var z= 4;
if (x>y && x>z)
{
        if (y>z)
        {
            console.log(x,y,z);
        }
        else
        {
            console.log(x,z,y);
        }
}
else if (y>x && y >z)
{
        if (x>z)
        {
             console.log(y,z,x );
        }
        else
        {
             console.log(x,z,y );
        }
}
else if (z>x && z>y)
{
        if (x>y)
        {
            console.log(z,x,y );
        }
        else
        {
            console.log(x,z,y);
        }
}        
