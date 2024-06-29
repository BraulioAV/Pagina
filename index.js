$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open").removeClass("close");
        setTimeout(function() {
            envelope.addClass("zoom");
        }, 2000); // Ajusta el tiempo de retraso según sea necesario
    }

    function close() {
        envelope.removeClass("open zoom").addClass("close");
    }
});
