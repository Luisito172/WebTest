$(document).ready (function() {
    $(document).tooltip({tooltipClass:"estiloTool",track:true,trigger:'hover'});

  } );
function toggle() {
    var x = document.getElementById("trailer");
    if (x.className === 'hidden') {
        x.className = 'visible';
    } else {
        x.className = 'hidden';
    }
}
