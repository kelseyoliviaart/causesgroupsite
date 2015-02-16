// $(function(){
//       $("#includedContent").load("header.html"); //does not work with file:// 
//     });
document.write('\
	\
			<div class="topbar">\
				<div class="container">\
        				<img src="images/asha_logo.png">\
     				<nav class="navbar navbar-inverse">\
 	      				<div class="navbar-header">\
          					<a class="navbar-brand" href="index.html">Home</a>\
							<a class="navbar-brand" href="gallery.html">Gallery</a>\
							<a class="navbar-brand" href="donation.html">Donate</a>\
							<a class="navbar-brand" href="about.html">About Us</a>\
							<a class="navbar-brand" href="mailto:contactus@asha.org">Contact Us</a>\
        				</div>\
        			</nav>\
			</div>\
        		</div>\
	');

$(document).ready(function(){
           $('li img').on('click',function(){
                var src = $(this).attr('src');
                var img = '<img src="' + src + '" class="img-responsive"/>';
                $('#myModal').modal();
                $('#myModal').on('shown.bs.modal', function(){
                    $('#myModal .modal-body').html(img);
                });
                $('#myModal').on('hidden.bs.modal', function(){
                    $('#myModal .modal-body').html('');
                });
           });  
        });