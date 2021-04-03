function validarn(e){
    var teclado = (document.all)?e.keycode:e.which;
    if(teclado==8)return true;

    var patron= /[0-9\d .]/;
    var prueba= String.fromCharCode(teclado);
    return patron.test(prueba);
}
function CalcuProm(){
    var p1= document.formulario.parcial1.value;
    var p2= document.formulario.parcial2.value;
    var p3= document.formulario.parcial3.value;
    var result1= parseInt(p1);
    var result2= parseInt(p2);
    var result3= parseInt(p3);
    var calP= (result1+result3+result2)/3;
    promPar=calP*.55;
    
    
    var cal= document.examen.value;
    calR=parseInt(cal);
    promE=cal*.30;


    var trabajoC= document.trabajo.value;
    var t=parseInt(trabajoC);
    promT=t*.15;
    
    
    prom1=parseInt(promPar);
    Prom2=parseInt(PromE);
    prom3=parseInt(promT);
    var PromF=prom1+Prom2+prom3;
    document.cantiadi.value=PromF;


}
function examenfinal(){
    var cal= document.examen.value;
    calR=parseInt(cal);
    promE=cal*.30;
    return PromE ;  
}
function Trabajo(){
    var trabajoC= document.trabajo.value;
    var t=parseInt(trabajoC);
    promT=t*.15;
    return prompT;
}
function PromF()
{
    Trabajo()
    examenfinal()
    CalcuParciales()
    promPar=parseInt(promPar);
    PromE=parseInt(PromE);
    promT=parseInt(promT);
    var PromF=promPar+PromE+promT;
    document.cantiadi.value=PromF;
}
function borrarI()
{
    document.formulario.parciales.value="";
    document.formulario.cantidad.value="";
}