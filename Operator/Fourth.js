/**
 * nasted loop
 * A loop within the loop is called as the nested loop.
 */


let marks= 800;
let ConfermedAddimision=false;

if(ConfermedAddimision ==true)
{
    if(marks >50 && marks <=60){
        console.log("Grade D");
      

    }
    else if(marks>60 && marks<=70)
    {
        console.log("Grade C");

    }
    else if(marks >70 && marks <=80)
    {
        console.log("Grade B");
    }
    else if(marks >80 && marks <=90)
    {
        console.log("Grade A")
    }
    else if(marks >90 && marks <=100)
    {
        console.log("Grade  A++")
    }
    else
    {
        console.log("Failed or Invalid Marks.....");
    }

}
else
{
    console.log("please give the Addimission........")
}

