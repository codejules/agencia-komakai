// JavaScript Document

(function() {
  "use strict";
  
  var state = document.getElementById("id_state");
  
  document.addEventListener('DOMContentLoaded', function(){
  
    document.getElementById('cart_custom').addEventListener('submit', estimateTotal);
  
    var v_btn_estimate = document.getElementById('btn_estimate');
  
    v_btn_estimate.disabled = true;
  
  
    state.addEventListener('change', function(){
  
      if(state.value === ''){
        v_btn_estimate.disabled = true;
        console.log("True");
      }
      else{
        v_btn_estimate.disabled = false;
        console.log("False");
      }
  
    });
  
  });
  
  
  
  function estimateTotal(event) {
    event.preventDefault();
    
    if( state.value === ''){
      alert('Please select the state you want to send your shipment');
      state.focus();
    }
  
    var paginas = parseInt(document.getElementById("paginas").value, 10 )|| 0;
    var idioma = parseInt(document.getElementById("idioma").value, 10 )|| 0;
    var supple = parseInt(document.getElementById("p_supple").value, 10 )|| 0;
    var seo = parseInt(document.getElementById("seo").value, 10 )|| 0;
    
    console.log(seo);
  
    var state_index = state.value;
  
    var shipping = document.querySelector('input[name=ship]:checked').value || '';
  
    var special_gift = document.getElementById("gift").checked;
    var special_mailing = document.getElementById("mailing").checked;
    var special_recipes = document.getElementById("recipes").checked;
  
    var t_message = document.getElementById("message").value;
    
    var shippingCostPer,
      totalShippingCost, 
      taxFactor = 1,
      totalItemPrice, 
      estimate;
    

    var t_quantity = paginas + idioma + supple + seo;
    totalItemPrice = (paginas * 100 ) + (idioma * 250) + (supple * 30) + (seo * 400);
  
    if (state.value === 'ES'){
      taxFactor = 1;
    }
    else if(state.value ==='NH'){
      taxFactor = 2;	
    }
  
    switch(shipping){
      case 'us':
        shippingCostPer = 16.665;
        break;
      default :
        shippingCostPer = 0;
        break;
    }
  
    totalShippingCost = shippingCostPer * t_quantity;
    
    estimate = ((totalItemPrice * taxFactor ) + totalShippingCost).toFixed(2) + "€";
    
    document.getElementById('total_estimate').value=estimate;
  
    var result_html = document.getElementById('results');
  
    result_html.innerHTML = 'Cantidad ' + t_quantity + '<br>';
//    result_html.innerHTML +='Total Shipping: $' + totalShippingCost.toFixed(2) + '<br>';
    result_html.innerHTML +='IVA incl: ' + '21%' + '<br>';

    //result_html.innerHTML +='(State:'  + state_index + ')';
    
  
  
    
  
  }
  
  })();
  
  
  
  
  