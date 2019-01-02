/*function DATA()
{
		
	var data = {
		__metadata: {'type': 'SP.Data.'+InternalListName+'ListItem'},
		Title: 'Some title',
		SpMultiline: 'Put here some multiline text. 
		You can add here some rich text also',
		SpChoice: 'Choice 3',
		SpNumber: 5,
		SpCurrency: 34,
		SpDateTime: new Date().toISOString(),
		SpCheckBox: true,
		SpUrl: {
			__metadata: { "type": "SP.FieldUrlValue" },
			Url:get_hyperlink(),
			Description:get_hyperlink()
		},
		SpPersonId: 3,
		SpLookupId: 2
	};
}*/
/*function collect_INFO()
{
	var data = {
		__metadata: {'type': 'SP.Data.'+ListName+'ListItem'},
		Title: get_single_text(),
		Multiline_Field: get_multiline_text(),
		Choice_Field: get_singleselect_choice(),
		Number_Field: get_number(),
		Currency_Field: get_currency(),
		DateTime_Field: new Date().toISOString(),
		Mul_CheckBox_Field:get_multiple_checkbox(),
		Url_Field: {
					__metadata: { "type": "SP.FieldUrlValue" },
					Url:get_hyperlink(),
					Description:get_hyperlink()
				},
		Picture_Field:{
						__metadata: { "type": "SP.FieldUrlValue" },
						Url: "http://test.com",
						Description: "Url Description"
					  },
		Person_FieldId: 3,
		Lookup_FieldId: 2
	};
	
}*/
function createNewItem(ListName,data) {
    debugger;
    	url= "/_api/Web/Lists/GetByTitle('"+ListName+"')/items";
        data = {
            __metadata: {'type': 'SP.Data.'+ListName+'ListItem'},
            Title:get_single_text()   
        };
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + url,
        type: "POST",
        headers: {
            "accept": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "content-Type": "application/json;odata=verbose"
        },
        data: JSON.stringify(data),
        success: function (data) {
            console.log(data);
			alert("Data uploaded successfully");
        },
        error: function (error) {
            alert(JSON.stringify(error));
        }
    });
}
function updateItem(ListName, oldItem,data) {
	url= "/_api/Web/Lists/GetByTitle('"+ListName+"')";
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + url,
        type: "POST",
        headers: {
            "accept": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "content-Type": "application/json;odata=verbose",
            "X-Http-Method": "MERGE",
            "If-Match":"*"
        },
        data: JSON.stringify(newItem),
        success: function (data) {
            console.log(data);
        },
        error: function (error) {
            alert(JSON.stringify(error));
        }
    });
}
function deleteItem(ListName, oldItem) {
	url= "/_api/Web/Lists/GetByTitle('"+ListName+"')";
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + url,
        type: "POST",
        headers: {
            "accept": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
             "X-Http-Method": "MERGE",
            "If-Match":"*"
        },
        success: function (data) {
           
        },
        error: function (error) {
            alert(JSON.stringify(error));
        }
    });
}
function RetrieveItems(ListName) { 
	url= "/_api/Web/Lists/GetByTitle('"+ListName+"')";
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + url,
        type: "GET",
        headers: {
            "accept": "application/json;odata=verbose",
        },
        success: function (data) {
            console.log(data.d.results);
        },
        error: function (error) {
            alert(JSON.stringify(error));
        }
	});
}
