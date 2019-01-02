var data="";
var ListName="Multi";
var url="";
function collect_INFO()
{
	data = {
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
	
}
