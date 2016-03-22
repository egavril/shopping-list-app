$(document).ready(function() {	

/* item input */

	$('#add-new').keydown(function(e){
	    if (e.which == 13){
	    addItem();
	    $(this).val(''); 
	    }
	});

 	function addItem() {
		event.preventDefault();
    	var inputNew = $('#add-new').val();
   		var newUnchecked = $('<li class="unchecked">'+ inputNew +'</li>');

   		$('#list-items').prepend(newUnchecked);

   		needAmount++;
   		updateCount();

   	};

/* manage items */

    $(document).on("click", ".checked", function (){
    	$(this).remove();
   		gotAmount--;
   		updateCount(); 
 	});

    $(document).on("click", ".unchecked", function() {
  		$(this).removeClass("unchecked").addClass("checked");
   
	   	    needAmount--;
	        gotAmount++;
	        updateCount();

/* jquery ui sorting */ 	        

	        $(this).slideUp('fast', function(){
	        $(this).slideDown('fast').appendTo('#list-items');
	        });
	   
    }); 

	$( "#list-items" ).sortable();
   	$( "#list-items" ).disableSelection();    


/* item counter */

  	var needAmount=4;
  	var gotAmount=1;
    
 	function updateCount(){
   		$('#need').text(needAmount);
   		$('#got').text(gotAmount);
    	$('#total').text(needAmount + gotAmount);
    
  	};
  
  	updateCount();


})