$(document).ready(function () {
	// add numeric class
	$('#weight, #price, #inventory').addClass('number');
	
	InventoryOptions();
	FileOptions();
	MemberTiers();
	GroupOptions();
	
	$('#track_inventory').click(function () {
		InventoryOptions();
	});
	
	$('#download').click(function () {
		FileOptions();
	});
	
	$('#membership_tiers').click(function () {
		MemberTiers();
	});
	$('#group_move').click(function () {
		GroupOptions();
	});
	
	$('a#refresh_files').click(function () {
		var base_url = $('#base_url').html();
	
		var old_html = $(this).html();
		
		// display loading image
		$(this).html('<img src="' + base_url + '../branding/default/images/refreshing.gif" alt="refreshing..." />');
		
		$.getJSON(base_url + 'store/get_product_files', function(data) {
			var file_options = data;
  			
  			var file_options_options = '';
  			$.each(file_options, function (intIndex, objValue) {
				file_options_options = file_options_options + '<option value="' + objValue + '">' + objValue + '</option>';
			});
			
			$('#file_uploaded').html(file_options_options);
		});
		
		// clear loading iamge
		$(this).html(old_html);
		
		return false;
	});
	

});

function InventoryOptions () {
	if ($('#track_inventory:checked').length > 0) {
		$('#row_inventory').show();
		$('#row_inventory input').addClass('required');
		$('#row_inventory_allow_at_zero').show();
	}
	else {
		$('#row_inventory').hide();
		$('#row_inventory input').removeClass('required');
		$('#row_inventory_allow_at_zero').hide();
	}
}

function FileOptions() {
	if ($('#download:checked').length > 0) {
		$('li.file_options').show();
	}
	else {
		$('li.file_options').hide();
	}
}

function MemberTiers () {
	if ($('#membership_tiers:checked').length > 0) {
		$('li.membership_tiers').show();
	}
	else {
		$('li.membership_tiers').hide();
	}
}

function GroupOptions () {
	if ($('#group_move:checked').length > 0) {
		$('li.group_move_options').show();
	}
	else {
		$('li.group_move_options').hide();
	}
}