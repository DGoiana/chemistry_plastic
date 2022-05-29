$("#polimero").bind("change", function () {
    $('#myModal').modal('show')(this.value === 'pe'); 
}).change();