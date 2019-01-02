function get_multiselect_dropdown()
{
	 var selectedValues = [];
        $.each($(".country option:selected"), function(){            
            selectedValues.push($(this).val());
        });
		return selectedValues;
}
function get_hyperlink()
{
		if(isUrlValid($("#txtUrl").val()))
					 return $("#txtUrl").val();
				 else 
				   alert("invalid");
				});
		}); 
	function isUrlValid(url)
	{
		return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(url);
	}
}
function get_singleselect_dropdown()
{
    $("select.country").change(function(){
        var selectedValue = $(this).children("option:selected").val();
    });
	return selectedValue;
}
function get_multiple_checkbox()
{
	        var selectedValues = [];
            $.each($("input[name='sport']:checked"), function(){            
                selectedValues.push($(this).val());
            });           
				return selectedValues;
}
function get_singleselect_checkbox()
{
	 var selectedValue = $("input[name='sport']:checked").val();
	 return selectedValue;
}
function get_singleselect_choice()
{
	var selectedValue = $("input[name='gender']:checked").val();
	return selectedValue;
}
function get_singleselect_radio()
{
	var selectedValue = $("input[name='gender']:checked").val();
	return selectedValue;
}
function get_multiple_radio()
{
	 var selectedValues=[];
			$.each($("input[name='gender']:checked"),function(){
				selectedValues.push($(this).val());
            
			});
			return selectedValues;
}
function get_single_text()
{
	
            var selectedValue=$("txtSinleLine").val();
				return selectedValue;
}

function get_multiline_text()
{
	var selectedValue=$("txtMultiLine").val();
		return selectedValue;
}

function Bind_into_singleLine(data)
{
	$("txtSinleLine").val(data.d.Single_Line_Field);
}
function Bind_into_MultiLine(data)
{
	$("txtMultiLine").val(data.d.Multi_Line_Field);
}
function Bind_into_dropdown(data)
{
	var items = data.d.results;  
     var inputElement = '<select id="drpdown"> <option  value="">Select</option>'; 
        for (var i = 0; i < items.length; i++)
		{	
			var itemId = items[i].Type_Of_File; 
            inputElement += '<option value="' + itemId + '"selected>' + itemId + '</option>';  
                
        }
		inputElement += '</select>';  
        $('#div_for_dropdown').append(inputElement);  
  
        $("#drpdown").each(function () {  
				$('option', this).each(function () {  
										if ($(this).text() == 'Select') 
											{  
															$(this).attr('selected', 'selected');  
											}  
                });  
        });  
               
        $('#drpdown').on('change', function () {  
              alert($(this).val());  
        });  
             
       
}
function Bind_into_table(data)
{	
	var response = response || []; 
	 response = response.concat(data.d.results);
                if (data.d.__next) {
                    url = data.d.__next;
                    getItems();
                }
	
	var tableContent = '<table id="showtable" style="width:100%" border="1 px"><thead><tr><td>Make</td>' + '<td>Model</td>' + '</tr></thead><tbody>';
  
     for (var i = 0; i < response.length; i++) {
         tableContent += '<tr>';
         tableContent += '<td>' + response[i].Title  + '</td>';
         tableContent += '<td>' + response[i].ID + '</td>';
        
         tableContent += '</tr>';
       }
   $('#div_for_table_rows').append(tableContent);
}
function Bind_into_choice(data)
{
	var items = data.d.results[0].Choices.results;   
     var inputElement = "" 
        for (var i = 0; i < items.length; i++)
		{	
			inputElement+='<label><input type="checkbox" value="'+data.d.results[0].Choices.results[i]+'" name="sport">"'+data.d.results[0].Choices.results[i]+'"</label></br>';
        }
		
   $('#div_for_choice').append(inputElement);
}