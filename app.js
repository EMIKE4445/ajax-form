const form = document.getElementById("form");
form.addEventListener('submit',submit_form);



function submit_form(event){
    event.preventDefault();

    //getting input feilds
    const product_name= document.getElementById('name').value;
    const product_quantity= document.getElementById('quantity').value;
    const product_price= document.getElementById('price').value;
    const table = document.getElementById("table");

    let request=new XMLHttpRequest();
    request.open('POST','store.php');
    request.setRequestHeader('content-type','application/x-www-form-urlencoded');
    request.onreadystatechange=function(){
        if(this.status==200 && this.readyState==4){
            let response=JSON.parse(this.response);
            
                if(response=='data updated'){ //do ddddddddddddd
                setTimeout(location.reload(),0500);
            }
        }        
            
        
    };
    request.send('name='+product_name+'&quantity='+product_quantity+'&price='+product_price);
    
}


window.addEventListener('load', get_items);

function get_items(){
   
    let request=new XMLHttpRequest();
    request.open('POST','store.php?read=items');
    request.onreadystatechange=function(){
        if(this.status==200 && this.readyState==4){
            if(this.response){
            let response=JSON.parse(this.response);
           // console.log(response);
            display_items(response);
                             
            }   
        }
    };
    request.send();
}

function display_items(items_array){

     for ( i in items_array){
     let row = '<tr> <td>'+items_array[i]['name']+'</td>  <td>'+items_array[i]['quantity']+'</td>  <td>'+items_array[i]['price']+'</td>  </tr>';
     let element= document.createElement('tr');
     element.innerHTML=row;
     table.appendChild(element);
     
    }

}
