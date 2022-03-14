
  
    const IsNumber         =    document.querySelectorAll('.number');
    const Numbers          =    document.querySelector('.numbers');
    const Number1          =    document.querySelector('.number1');
    const Number2          =    document.querySelector('.number2');
    const Operation        =    document.querySelectorAll('.operation');
    const egal             =    document.querySelector('.aqual');
    const Supprimer        =    document.querySelector('.Supp');
    const SuppLastNumber   =    document.querySelector('.SuppLastNumber');
    const ClearAll         =    document.querySelector('.clear');
    const min              =    document.querySelector('.minus');
    const number           =    document.querySelectorAll('button');

    
    let Num1 ='';
    let Num2 ='';
    let Res= null;
    let LastOperation ='';
    let DotIsExist =false;

// pour les nombre des clavier 
function NumberClick(key)
{
    number.forEach(button =>
    {
         if(button.innerText === key)
         {
             button.click();
         }
    })
}

function ClickEqual()
{
     egal.click(); 
}


function ClickSupp()
{
      Supprimer.click();
}

// type with keyboard 
window.addEventListener('keydown',(e) => { 

    if(e.key==='0' || e.key==='1' || e.key==='2' || e.key==='3' || e.key==='4' || e.key==='5' || e.key==='6' || e.key==='7' || e.key==='8' ||e.key==='9' ||e.key =='.'||e.key =='-' ||e.key =='+'  ||e.key =='/')
    {
        NumberClick(e.key);
    }
    else if(e.key === '*')
    {
        NumberClick('X');
    }
    else if (e.key === 'Enter' || e.key ==='=')
    {
      ClickEqual();
    }
    else if(e.key === 'Backspace')
    {
        ClickSupp();
    }
    else if(e.key === 'Escape')
    {
        ClearAll.click();
    }
    
});



// quand l'utilisateur il click sur un nombre ou virgul
IsNumber.forEach(num =>
{
    num.addEventListener('click',(e) =>
    {
        if(e.target.innerText === '.' && !DotIsExist)  // check if the user clicked on dot 
         {
             DotIsExist=true;               // il signifier que l'utilisateur  est deja entrer virgul  . 
         } 
         else if (e.target.innerText === '.' && DotIsExist )   //  si virgul est deja existe 
         {
             return;                         // si  l'utilisateur il click la 2 fois sur virgul il n'affiche pas 
         }
         Num2 += e.target.innerText;    // stockage dans le variable soit nombre ou virgul 
         Number2.innerText = Num2;     // affichage  le contenu le variable dans number2
    })
})



// quand l'utilisateur il click sur les  OPERATIONS
Operation.forEach(operation => {
    operation.addEventListener("click",(e) => {
        if(!Num2) return;  // si l'utilisateur ne pas entrer une valeur 
        DotIsExist = false;  
        const OperationName=e.target.innerText;   // stockage d'operation dans le variable    OperationName

        if(Num1 && Num2 && LastOperation) // si les variables et deja rempli 
        {
            // alert(Num1);
            EvalOperation();              // faire les calcules 
        }
        else
        { 
        //   alert("1")
            Res= parseFloat(Num2);     
        }
      
        ClearVar( OperationName);          // cette fonction pour initialiser le nombre2 et l'afficher    dans le nombre2 
        LastOperation = OperationName;    
    })
})



// pour 
function ClearVar( Name)
{    
    Minus=false;
    Num1 += Num2 +' ' + Name +' '; 
    Number1.innerText = Num1;
    Number2.innerText = '';
    Num2 = '';
    Numbers.innerText=Res;
}



//  calcul
function EvalOperation()
{    
    Minus=false;
    switch(LastOperation)
    {
        case 'X':
            Res=parseFloat(Res) * parseFloat(Num2);
        break;

        case '+':
            Res=parseFloat(Res) + parseFloat(Num2);
        break;

        case '-':
            Res=parseFloat(Res) - parseFloat(Num2);
        break;

        case '/':
            {   if(parseFloat(Num2) === 0 )
                {
                    alert('impossible de diviser un nomrbre sur 0 !!');  
                }
                else
                  {
                       Res=parseFloat(Res) / parseFloat(Num2);
                       break;
                  } 
            }
       
        
        default:
        return;

    }
}


//  egal 
egal.addEventListener("click",(e) => 
{
    if(!Num1 || !Num2) return;
    DotIsExist = false;
    EvalOperation();
    ClearVar();
    Numbers.innerText=Res;
    Num1='';
    Number2.innerText='';
    Num2=Res;
})


//  C 
ClearAll.addEventListener("click",(e) =>
{   
    Minus=false;
    DotIsExist=false;
    // moin=false
    Num1='';
    Number1.innerText='0';
    Num2='';
    Number2.innerText='0';
    Res='';
    Numbers.innerText='0';
})


// CE
SuppLastNumber.addEventListener("click", e => 
{
    Num2='0';
    Number2.innerText='0';
})


// X
function delete_character()
{
    Num2 = Num2.slice(0,-1);
    Number2.innerText=Num2;
    
}


// negative number
var Minus= false;
min.addEventListener("click",( e ) =>
{
    if(Minus === false)
    {
        Num2 = Num2 *(-1);
        Number2.innerHTML=Num2; 
        Minus=true;
    }
    else
    {
        Num2 = Num2 *(-1);
        Number2.innerHTML=Num2; 
       
    }
})